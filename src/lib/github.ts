class Github {
  private release: Record<string, unknown> | null = null;
  private readonly releaseFallbackUrl = 'https://github.com/antarasi/aloha-releases/releases/tag/v1.0.13';

  private readonly platformAsset: {
    windows: string;
    macos: string;
    linux: string;
  } = {
    windows: '.exe',
    macos: '.dmg',
    linux: '.deb',
  }

  constructor() {
    this.release = this.getStoredRelease();
  }

  async fetchAndStoreLatestRelease(): Promise<void> {
    try {
        const response = await fetch("https://api.github.com/repos/antarasi/aloha-releases/releases/latest");
        if (response.ok) {
            this.release = await response.json();
            localStorage.setItem('latestRelease', JSON.stringify(this.release));
        }
    } catch (error) {
      console.warn('Error fetching latest release', error);
    }
  }

  getStoredRelease(): Record<string, unknown> | null {
    const release = localStorage.getItem('latestRelease');
    return release ? JSON.parse(release) : null;
  }

  getLatestReleaseAssets() {
    return this.release?.assets as Record<string, string>[] | undefined;
  }

  getLatestReleaseAssetByPlatform(platform: keyof typeof this.platformAsset) {
    const include = this.platformAsset[platform];
    return this.getLatestReleaseAssets()?.find((asset) => asset?.name?.includes(include));
  }

  downloadLatestReleaseAssetByPlatform(platform: keyof typeof this.platformAsset, navigate?: (path: string) => void) {
    const asset = this.getLatestReleaseAssetByPlatform(platform);
    const url = asset?.browser_download_url || this.releaseFallbackUrl;
    
    // Mark that download was initiated
    sessionStorage.setItem('downloadInitiated', 'true');
    
    // Trigger download
    window.open(url, '_blank');
    
    // Navigate to thank you page if navigate function provided
    if (navigate) {
      navigate('/thank-you');
    }
  }
}

export default new Github();
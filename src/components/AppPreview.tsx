import { Card } from "@/components/ui/card";
import { MessageSquare, Search, Globe, Brain } from "lucide-react";
export const AppPreview = () => {
  return <section id="demo" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See Aloha in <span className="gradient-accent bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of a truly local AI assistant that can search the web, browse websites, and provide intelligent responses.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main app mockup */}
          <Card className="p-8 gradient-card shadow-strong border-0 animate-scale-in">
            <div className="aspect-video bg-background rounded-lg shadow-medium overflow-hidden">
              <div className="flex h-full">
                {/* Sidebar */}
                <div className="w-1/3 bg-muted/50 p-4 space-y-3">
                  <div className="text-sm font-semibold text-muted-foreground mb-4">Recent Chats</div>
                  {[{
                  icon: Search,
                  text: "Best coffee shops in SF",
                  messages: "6 messages"
                }, {
                  icon: Globe,
                  text: "Browser compatibility",
                  messages: "4 messages"
                }, {
                  icon: Brain,
                  text: "Explain quantum physics",
                  messages: "8 messages"
                }, {
                  icon: MessageSquare,
                  text: "Tool capabilities",
                  messages: "2 messages"
                }].map((chat, index) => <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors cursor-pointer">
                      <chat.icon className="w-4 h-4 text-primary" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{chat.text}</div>
                        <div className="text-xs text-muted-foreground">{chat.messages}</div>
                      </div>
                    </div>)}
                </div>

                {/* Main chat area */}
                <div className="flex-1 p-6 space-y-4">
                  <div className="text-center space-y-2 mb-8">
                    <div className="w-12 h-12 gradient-primary rounded-xl mx-auto flex items-center justify-center shadow-medium">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold">Aloha Desktop</h3>
                    <p className="text-sm text-muted-foreground">Your local AI assistant</p>
                  </div>

                  {/* Sample conversation */}
                  <div className="space-y-4">
                    <div className="flex justify-end">
                      <div className="gradient-primary text-white p-3 rounded-2xl rounded-tr-md max-w-xs shadow-soft">
                        <p className="text-sm">What's the best coffee shop in SF with views of the Golden Gate Bridge?</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-card p-4 rounded-2xl rounded-tl-md shadow-soft flex-1">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs text-primary">
                            <Search className="w-3 h-3" />
                            <span>Searching the web...</span>
                          </div>
                          <p className="text-sm">Based on my search, <strong>Round House Café</strong> in the Presidio offers the best Golden Gate Bridge views. It's located in an art deco building with unparalleled panoramic bay views.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Input area */}
                  <div className="absolute bottom-4 left-[33.333333%] right-4">
                    
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[{
            icon: Search,
            title: "Web Search",
            description: "Search the internet and get real-time results"
          }, {
            icon: Globe,
            title: "Website Browsing",
            description: "Browse and extract information from any website"
          }, {
            icon: Brain,
            title: "Smart Analysis",
            description: "Get intelligent insights and comprehensive answers"
          }].map((feature, index) => <Card key={index} className="p-6 gradient-card border-0 shadow-medium text-center animate-fade-in" style={{
            animationDelay: `${index * 0.1 + 0.5}s`
          }}>
                <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
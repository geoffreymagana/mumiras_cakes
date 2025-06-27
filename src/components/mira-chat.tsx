"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { BotMessageSquare, Send, Sparkles, Cake } from 'lucide-react';
import { askMira } from '@/ai/flows/mira-chat-flow';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

type Message = {
  role: 'user' | 'mira' | 'loading';
  content: string;
};

const MiraMarkdown = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (text) {
      let i = 0;
      setDisplayedText(''); // Reset before typing new text
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 15); // Typing speed in ms

      return () => clearInterval(typingInterval); // Cleanup
    }
  }, [text]);

  const toHtml = (markdown: string) => {
    let html = markdown
      // Handle bold: **text** -> <strong>text</strong>
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    const lines = html.split('\n');
    let processedHtml = '';
    let inList = false;

    for (const line of lines) {
      const trimmedLine = line.trim();
      // Handle lists: * item -> <li>item</li>
      if (trimmedLine.startsWith('* ')) {
        if (!inList) {
          processedHtml += '<ul class="list-disc pl-5 space-y-1">';
          inList = true;
        }
        processedHtml += `<li>${trimmedLine.substring(2)}</li>`;
      } else {
        if (inList) {
          processedHtml += '</ul>';
          inList = false;
        }
        // Wrap other lines in <p> tags for paragraph spacing
        if (trimmedLine) {
          processedHtml += `<p>${trimmedLine}</p>`;
        }
      }
    }

    if (inList) {
      processedHtml += '</ul>';
    }

    // Clean up empty paragraphs that might result from multiple newlines
    return processedHtml.replace(/<p>\s*<\/p>/g, '');
  };

  return (
    <div
      className="space-y-3"
      dangerouslySetInnerHTML={{ __html: toHtml(displayedText) }}
    />
  );
};


export function MiraChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const scrollAreaRoot = scrollAreaRef.current;
    if (!scrollAreaRoot) return;

    // The viewport is the scrollable element inside the ScrollArea component.
    const viewport = scrollAreaRoot.firstElementChild;
    if (!viewport) return;

    // This observer watches for content changes (new messages, typing animation)
    // and scrolls the viewport to the bottom automatically.
    const observer = new MutationObserver(() => {
      viewport.scrollTo({ top: viewport.scrollHeight, behavior: 'smooth' });
    });

    // We observe the root for any descendants changing.
    observer.observe(scrollAreaRoot, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading || !input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    const loadingMessage: Message = { role: 'loading', content: '...' };
    
    setMessages((prev) => [...prev, userMessage, loadingMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const miraResponse = await askMira(input);
      const aiMessage: Message = { role: 'mira', content: miraResponse };
      setMessages((prev) => [...prev.slice(0, -1), aiMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      const errorMessage: Message = { role: 'mira', content: "Oh dear, something went wrong. Please try again in a moment." };
      setMessages((prev) => [...prev.slice(0, -1), errorMessage]);
      toast({
        title: "Chat Error",
        description: "Could not connect to the AI assistant.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg z-50"
          >
            <BotMessageSquare className="h-8 w-8" />
            <span className="sr-only">Talk to Mira AI</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col h-full w-full sm:max-w-md p-0">
          <SheetHeader className="p-4 border-b">
            <SheetTitle className="flex items-center gap-2 font-headline">
              <Sparkles className="h-5 w-5 text-primary" />
              Chat with Mira
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Avatar className="h-8 w-8 bg-primary/20 text-primary">
                  <AvatarFallback><Cake className="h-5 w-5"/></AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">Hello! I'm Mira, your friendly guide to Mumira's Cakes. How can I help you today?</p>
                </div>
              </div>
              {messages.map((message, index) => (
                <div key={index} className={cn("flex gap-3", message.role === 'user' && "justify-end")}>
                  {message.role === 'mira' && (
                     <Avatar className="h-8 w-8 bg-primary/20 text-primary">
                        <AvatarFallback><Cake className="h-5 w-5"/></AvatarFallback>
                    </Avatar>
                  )}
                  {message.role === 'loading' ? (
                     <div className="flex items-center space-x-2">
                        <Avatar className="h-8 w-8 bg-primary/20 text-primary">
                           <AvatarFallback><Cake className="h-5 w-5"/></AvatarFallback>
                        </Avatar>
                       <div className="bg-muted rounded-lg p-3 max-w-[80%] flex items-center">
                          <span className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                          <span className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s] mx-1"></span>
                          <span className="h-2 w-2 bg-primary rounded-full animate-bounce"></span>
                       </div>
                     </div>
                  ) : (
                    <div
                      className={cn(
                        "rounded-lg p-3 max-w-[80%] text-sm", 
                        message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                      )}
                    >
                      {message.role === 'user' ? <p>{message.content}</p> : <MiraMarkdown text={message.content} />}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
          <SheetFooter className="p-4 border-t bg-background">
            <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about cakes, orders..."
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

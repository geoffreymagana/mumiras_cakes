"use client";

import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
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
  id: string;
  role: 'user' | 'mira' | 'loading';
  content: string;
};

const MiraMarkdown = ({ text }: { text: string }) => {
  const toHtml = (markdown: string) => {
    let html = markdown
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    const lines = html.split('\n');
    let processedHtml = '';
    let inList = false;

    for (const line of lines) {
      const trimmedLine = line.trim();
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
        if (trimmedLine) {
          processedHtml += `<p>${trimmedLine}</p>`;
        }
      }
    }

    if (inList) {
      processedHtml += '</ul>';
    }

    return processedHtml.replace(/<p>\s*<\/p>/g, '');
  };

  return (
    <div
      className="space-y-3"
      dangerouslySetInnerHTML={{ __html: toHtml(text) }}
    />
  );
};
const MemoizedMiraMarkdown = memo(MiraMarkdown);


export function MiraChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'mira-initial',
      role: 'mira',
      content: "Hello! I'm Mira, your friendly guide to Mumira's Cakes. How can I help you today?",
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = useCallback(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollTop = viewportRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    if (!viewportRef.current) return;

    const observer = new MutationObserver(scrollToBottom);
    observer.observe(viewportRef.current, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [isOpen, scrollToBottom]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading || !input.trim()) return;

    const userMessage: Message = { id: `user-${Date.now()}`, role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');

    setTimeout(() => {
        const loadingMessage: Message = { id: `loading-${Date.now()}`, role: 'loading', content: '...' };
        setMessages((prev) => [...prev, loadingMessage]);
        setIsLoading(true);
    }, 100);

    try {
      const miraResponse = await askMira(currentInput);
      const aiMessage: Message = { id: `mira-${Date.now()}`, role: 'mira', content: miraResponse };

      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < miraResponse.length) {
          setMessages(prev => {
            const lastMessage = prev[prev.length - 1];
            if (lastMessage && lastMessage.role === 'loading') {
               return [...prev.slice(0, -1), { ...aiMessage, content: miraResponse.slice(0, i + 1) }];
            } else if (lastMessage && lastMessage.id === aiMessage.id) {
               return prev.map(m => m.id === aiMessage.id ? { ...m, content: miraResponse.slice(0, i + 1) } : m);
            }
            return prev;
          });
          i++;
        } else {
          clearInterval(typingInterval);
          setIsLoading(false);
        }
      }, 15);

    } catch (error) {
      console.error('Error fetching AI response:', error);
      const errorMessage: Message = { id: `error-${Date.now()}`, role: 'mira', content: "Oh dear, something went wrong. Please try again in a moment." };
      setMessages((prev) => [...prev.slice(0, -1), errorMessage]);
      toast({
        title: "Chat Error",
        description: "Could not connect to the AI assistant.",
        variant: "destructive",
      })
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
          <SheetHeader className="p-4 border-b shrink-0">
            <SheetTitle className="flex items-center gap-2 font-headline">
              <Sparkles className="h-5 w-5 text-primary" />
              Talk to Mira
            </SheetTitle>
          </SheetHeader>
          
          <div className="flex-1 flex flex-col min-h-0">
            <ScrollArea className="flex-1" viewportRef={viewportRef}>
               <div className="px-4 py-4 space-y-4">
                  {messages.map((message) => (
                  <div key={message.id} className={cn("flex gap-3 w-full", message.role === 'user' && "justify-end")}>
                      {message.role !== 'user' && (
                      <Avatar className="h-8 w-8 bg-primary/20 text-primary shrink-0">
                          <AvatarFallback><Cake className="h-5 w-5"/></AvatarFallback>
                      </Avatar>
                      )}
                      
                      {message.role === 'loading' ? (
                      <div className="bg-muted rounded-lg p-3 max-w-[80%] flex items-center space-x-1">
                          <span className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                          <span className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                          <span className="h-2 w-2 bg-primary rounded-full animate-bounce"></span>
                      </div>
                      ) : (
                      <div
                          className={cn(
                          "rounded-lg p-3 max-w-[80%] text-sm", 
                          message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                          )}
                      >
                          <MemoizedMiraMarkdown text={message.content} />
                      </div>
                      )}
                  </div>
                  ))}
              </div>
            </ScrollArea>
          </div>
          
          <SheetFooter className="p-4 border-t bg-background shrink-0">
            <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about cakes, orders..."
                disabled={isLoading}
                className="flex-1"
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

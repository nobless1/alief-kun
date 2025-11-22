'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Bot } from 'lucide-react';
import { navigation } from '@/lib/data';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Bot className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">PersonaCraft</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
           <Button asChild className="hidden md:flex">
            <a href="#contact">Hubungi Saya</a>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Buka Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                <Bot className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">PersonaCraft</span>
              </Link>
              <div className="my-4 flex h-[calc(100vh-8rem)] flex-col space-y-3 pb-10 pl-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                   <Button asChild>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Hubungi Saya</a>
                  </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

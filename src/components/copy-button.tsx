'use client';

import { useState, useEffect } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export function CopyButton({ textToCopy, className }: { textToCopy: string; className?: string }) {
  const [hasCopied, setHasCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => {
        setHasCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  const copyToClipboard = () => {
    if (!textToCopy) return;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setHasCopied(true);
      toast({
        title: 'Disalin ke clipboard!',
        description: "Anda sekarang dapat menempelkan pernyataan pribadi.",
      });
    }).catch(err => {
      console.error('Gagal menyalin teks: ', err);
      toast({
        title: 'Gagal menyalin',
        description: 'Tidak dapat menyalin teks ke clipboard.',
        variant: 'destructive'
      });
    });
  };

  return (
    <Button size="icon" variant="ghost" onClick={copyToClipboard} disabled={!textToCopy} className={cn(className)}>
      <span className="sr-only">Salin</span>
      {hasCopied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
    </Button>
  );
}

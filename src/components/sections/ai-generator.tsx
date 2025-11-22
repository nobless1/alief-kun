'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { handleGenerateStatement } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Bot, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { CopyButton } from '../copy-button';

const initialState = {
  message: null,
  errors: null,
  personalStatement: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Bot className="mr-2 h-4 w-4" />}
      {pending ? 'Menghasilkan...' : 'Hasilkan Pernyataan'}
    </Button>
  );
}

export function AiGenerator() {
  const [state, formAction] = useFormState(handleGenerateStatement, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [generatedStatement, setGeneratedStatement] = useState<string | null>(null);

  useEffect(() => {
    if (state.message?.startsWith('Sukses')) {
      toast({
        title: 'Pernyataan Dihasilkan!',
        description: 'Pernyataan pribadi Anda telah berhasil dibuat.',
      });
      setGeneratedStatement(state.personalStatement);
      formRef.current?.reset();
    } else if (state.message) {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <section id="ai-generator" className="bg-secondary/50 border-b flex justify-center">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            Generator Pernyataan Pribadi AI
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Kesulitan dengan pernyataan pribadi Anda? Gunakan alat AI ini untuk menghasilkan draf yang disesuaikan dengan keahlian, pengalaman, dan target audiens Anda.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Card>
            <form action={formAction} ref={formRef}>
              <CardHeader>
                <CardTitle className="font-headline">Informasi Anda</CardTitle>
                <CardDescription>Berikan detail untuk mempersonalisasi pernyataan Anda.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="skills">Keahlian</Label>
                  <Textarea
                    id="skills"
                    name="skills"
                    placeholder="misalnya, React, Node.js, Manajemen Proyek, Desain UI/UX..."
                    rows={3}
                    required
                  />
                  {state.errors?.skills && <p className="text-sm text-destructive">{state.errors.skills[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Ringkasan Pengalaman</Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    placeholder="Jelaskan secara singkat riwayat kerja, proyek utama, dan pencapaian Anda."
                    rows={5}
                    required
                  />
                   {state.errors?.experience && <p className="text-sm text-destructive">{state.errors.experience[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="targetAudience">Target Audiens</Label>
                  <Textarea
                    id="targetAudience"
                    name="targetAudience"
                    placeholder="misalnya, Perekrut di startup teknologi, komite penerimaan sekolah pascasarjana..."
                    rows={2}
                    required
                  />
                  {state.errors?.targetAudience && <p className="text-sm text-destructive">{state.errors.targetAudience[0]}</p>}
                </div>
              </CardContent>
              <CardFooter>
                <SubmitButton />
              </CardFooter>
            </form>
          </Card>
          <Card className="min-h-[400px] flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="font-headline">Pernyataan yang Dihasilkan</CardTitle>
                <CardDescription>Pernyataan pribadi buatan AI Anda akan muncul di sini.</CardDescription>
              </div>
              <CopyButton textToCopy={generatedStatement || ''} />
            </CardHeader>
            <CardContent className="flex-1">
              <Textarea
                readOnly
                value={generatedStatement || ''}
                placeholder="Menunggu pembuatan..."
                className="w-full h-full resize-none text-base"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

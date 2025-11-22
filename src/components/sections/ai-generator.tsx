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
      {pending ? 'Generating...' : 'Generate Statement'}
    </Button>
  );
}

export function AiGenerator() {
  const [state, formAction] = useFormState(handleGenerateStatement, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [generatedStatement, setGeneratedStatement] = useState<string | null>(null);

  useEffect(() => {
    if (state.message?.startsWith('Success')) {
      toast({
        title: 'Statement Generated!',
        description: 'Your personal statement has been successfully created.',
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
            AI Personal Statement Generator
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Struggling with your personal statement? Use this AI tool to generate a draft tailored to your skills, experience, and target audience.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Card>
            <form action={formAction} ref={formRef}>
              <CardHeader>
                <CardTitle className="font-headline">Your Information</CardTitle>
                <CardDescription>Provide details to personalize your statement.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="skills">Skills</Label>
                  <Textarea
                    id="skills"
                    name="skills"
                    placeholder="e.g., React, Node.js, Project Management, UI/UX Design..."
                    rows={3}
                    required
                  />
                  {state.errors?.skills && <p className="text-sm text-destructive">{state.errors.skills[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience Summary</Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    placeholder="Briefly describe your work history, key projects, and accomplishments."
                    rows={5}
                    required
                  />
                   {state.errors?.experience && <p className="text-sm text-destructive">{state.errors.experience[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="targetAudience">Target Audience</Label>
                  <Textarea
                    id="targetAudience"
                    name="targetAudience"
                    placeholder="e.g., Recruiters at a tech startup, graduate school admissions committee..."
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
                <CardTitle className="font-headline">Generated Statement</CardTitle>
                <CardDescription>Your AI-crafted personal statement will appear here.</CardDescription>
              </div>
              <CopyButton textToCopy={generatedStatement || ''} />
            </CardHeader>
            <CardContent className="flex-1">
              <Textarea
                readOnly
                value={generatedStatement || ''}
                placeholder="Awaiting generation..."
                className="w-full h-full resize-none text-base"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

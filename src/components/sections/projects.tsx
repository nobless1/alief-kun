import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/data';
import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="border-b flex justify-center">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            Kreasi Unggulan
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Pilihan proyek terkait kopi saya. Masing-masing menunjukkan dedikasi saya pada keahlian dan hasrat saya untuk membagikannya dengan orang lain.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 justify-items-center">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col max-w-lg">
              <CardHeader>
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.image.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint={project.image.imageHint}
                  />
                </div>
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-start gap-4">
                <Button variant="outline" asChild>
                  <Link href={project.links.github} target="_blank">
                    <Github />
                    Pelajari Lebih Lanjut
                  </Link>
                </Button>
                <Button asChild>
                  <Link href={project.links.live} target="_blank">
                    <ExternalLink />
                    Lihat Proyek
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

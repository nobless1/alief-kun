import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { profile } from '@/lib/data';

export function Hero() {
  return (
    <section id="home" className="bg-secondary/50 border-b">
      <div className="container text-center">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="text-primary font-medium">{profile.title}</p>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            {profile.bio}
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={`mailto:${profile.email}`}>
                <profile.socialIcons.mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            {Object.entries(profile.social).map(([key, href]) => {
              const Icon = profile.socialIcons[key as keyof typeof profile.socialIcons];
              return (
                <Button key={key} variant="ghost" size="icon" asChild>
                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                    <span className="sr-only">{key}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

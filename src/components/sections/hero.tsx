import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { profile } from '@/lib/data';

export function Hero() {
  return (
    <section id="home" className="bg-secondary/50 border-b flex items-center justify-center">
      <div className="container flex flex-col items-center justify-center space-y-4 text-center">
        <div className="flex flex-col items-center space-y-6">
          {profile.image && (
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <Image
                src={profile.image.imageUrl}
                alt={profile.name}
                fill
                className="object-cover"
                data-ai-hint={profile.image.imageHint}
              />
            </div>
          )}
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Alief
          </h1>
          <p className="text-primary font-medium">{profile.title}</p>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            {profile.bio}
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <a href="#projects">Lihat Kreasi Saya</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={`mailto:${profile.email}`}>
                <profile.socialIcons.mail />
                <span>Hubungi Saya</span>
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
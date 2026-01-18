import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from './ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import type { profileData } from '@/app/data';

type HeroProps = {
  profile: typeof profileData;
};

export default function Hero({ profile }: HeroProps) {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 text-center md:order-1 md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
              {profile.name}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {profile.bio}
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 md:justify-start">
              <Button asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/ginfaodanny" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:example@email.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <Avatar className="h-48 w-48 border-4 border-primary/20 md:h-64 md:w-64">
              <AvatarImage
                src={profile.profilePicture.imageUrl}
                alt={profile.name}
                data-ai-hint={profile.profilePicture.imageHint}
              />
              <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
}

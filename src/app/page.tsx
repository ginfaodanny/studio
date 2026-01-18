'use client';

import React, { useState } from 'react';
import {
  profileData as initialProfileData,
  projectsData as initialProjectsData,
} from '@/app/data';
import { refineContent, type RefineContentOutput } from '@/ai/flows/profile-content-refinement';

import { useToast } from '@/hooks/use-toast';
import AiRefinementModal from '@/components/ai-refinement-modal';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const [profileData, setProfileData] = useState(initialProfileData);
  const [projectsData, setProjectsData] = useState(initialProjectsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refinedContent, setRefinedContent] = useState<RefineContentOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleRefineClick = async () => {
    setIsModalOpen(true);
    setIsLoading(true);
    setRefinedContent(null);
    try {
      const result = await refineContent({
        profileDescription: profileData.bio,
        projectDescriptions: projectsData.map((p) => p.description),
      });
      setRefinedContent(result);
    } catch (error) {
      console.error('AI refinement failed:', error);
      toast({
        variant: 'destructive',
        title: 'AI Refinement Failed',
        description: 'Could not generate suggestions. Please try again later.',
      });
      setIsModalOpen(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplyProfile = (newBio: string) => {
    setProfileData((prev) => ({ ...prev, bio: newBio }));
    toast({ title: 'Success', description: 'Profile bio has been updated.' });
  };

  const handleApplyProject = (index: number, newDescription: string) => {
    setProjectsData((prev) =>
      prev.map((p, i) =>
        i === index ? { ...p, description: newDescription } : p
      )
    );
    toast({
      title: 'Success',
      description: `Project "${projectsData[index].name}" description has been updated.`,
    });
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero profile={profileData} />
        <Projects projects={projectsData} />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleRefineClick}
          size="lg"
          className="rounded-full shadow-lg"
        >
          <Sparkles className="mr-2 h-5 w-5" />
          Refine with AI
        </Button>
      </div>
      <AiRefinementModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        isLoading={isLoading}
        originalContent={{ profile: profileData, projects: projectsData }}
        refinedContent={refinedContent}
        onApplyProfile={handleApplyProfile}
        onApplyProject={handleApplyProject}
      />
    </div>
  );
}

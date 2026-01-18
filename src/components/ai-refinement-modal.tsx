'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import type { RefineContentOutput } from '@/ai/flows/profile-content-refinement';

type AiRefinementModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isLoading: boolean;
  originalContent: {
    profile: { bio: string };
    projects: { name: string; description: string }[];
  };
  refinedContent: RefineContentOutput | null;
  onApplyProfile: (newBio: string) => void;
  onApplyProject: (index: number, newDescription: string) => void;
};

const LoadingState = () => (
  <div className="p-4 space-y-8">
    <div className="space-y-2">
      <Skeleton className="h-6 w-1/4" />
      <Skeleton className="h-24 w-full" />
    </div>
    <Separator />
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-5 w-1/3" />
        <Skeleton className="h-20 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-5 w-1/3" />
        <Skeleton className="h-20 w-full" />
      </div>
    </div>
  </div>
);

const RefinementDisplay = ({
  originalContent,
  refinedContent,
  onApplyProfile,
  onApplyProject,
}: Omit<AiRefinementModalProps, 'isOpen' | 'setIsOpen' | 'isLoading'>) => (
  <div className="p-1 sm:p-4">
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">Profile Bio</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">Original</h4>
            <div className="text-sm border p-4 rounded-md bg-muted/30 h-full">
              {originalContent.profile.bio}
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-sm font-medium text-primary mb-2">Suggestion</h4>
            <div className="text-sm border p-4 rounded-md border-primary/50 bg-primary/10 flex-grow">
              {refinedContent?.refinedProfileDescription}
            </div>
          </div>
        </div>
        <Button size="sm" className="mt-3" onClick={() => onApplyProfile(refinedContent!.refinedProfileDescription)}>Apply Suggestion</Button>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">Project Descriptions</h3>
        <div className="space-y-6">
          {refinedContent?.refinedProjectDescriptions.map((desc, index) => (
            <div key={originalContent.projects[index].name}>
              <h4 className="font-semibold mb-3">{originalContent.projects[index].name}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                    <h5 className="text-sm font-medium text-muted-foreground mb-2">Original</h5>
                    <div className="text-sm border p-4 rounded-md bg-muted/30 h-full">
                      {originalContent.projects[index].description}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-sm font-medium text-primary mb-2">Suggestion</h5>
                    <div className="text-sm border p-4 rounded-md border-primary/50 bg-primary/10 flex-grow">
                      {desc}
                    </div>
                  </div>
              </div>
              <Button size="sm" className="mt-3" onClick={() => onApplyProject(index, desc)}>Apply Suggestion</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function AiRefinementModal(props: AiRefinementModalProps) {
  const { isOpen, setIsOpen, isLoading, refinedContent } = props;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl max-h-[90dvh] flex flex-col">
        <DialogHeader>
          <DialogTitle>AI Content Refinement</DialogTitle>
          <DialogDescription>
            Here are AI-powered suggestions to enhance your profile.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
            {isLoading ? (
                <LoadingState />
            ) : refinedContent ? (
                <RefinementDisplay {...props} />
            ) : (
                <div className="p-4 text-center text-muted-foreground">
                An error occurred. Please try again.
                </div>
            )}
            </ScrollArea>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

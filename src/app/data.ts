import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    return { 
      id: 'fallback', 
      imageUrl: 'https://placehold.co/600x400', 
      imageHint: 'placeholder', 
      description: 'Fallback image' 
    };
  }
  return image;
};

export const profileData = {
  name: '',
  bio: '',
  profilePicture: getImage(''),
};

export const skillsData: { name: string, proficiency: number, fill: string }[] = [];

export const projectsData: { id: string, name: string, description: string, githubUrl: string, image: ImagePlaceholder }[] = [];

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
  name: 'Danny Ginfao',
  bio: "Développeur web passionné avec une expertise en création d'applications web modernes et performantes. J'aime transformer des idées complexes en solutions simples et élégantes.",
  profilePicture: getImage('profilePicture'),
};

export const skillsData = [
  { name: 'React', proficiency: 90, fill: "var(--color-react)" },
  { name: 'Node.js', proficiency: 85, fill: "var(--color-nodejs)" },
  { name: 'TypeScript', proficiency: 95, fill: "var(--color-typescript)" },
  { name: 'Next.js', proficiency: 80, fill: "var(--color-nextjs)" },
  { name: 'GraphQL', proficiency: 75, fill: "var(--color-graphql)" },
  { name: 'Tailwind CSS', proficiency: 90, fill: "var(--color-tailwind)" },
];

export const projectsData = [
  {
    id: 'project1',
    name: 'Portfolio V1',
    description: "Mon premier portfolio personnel, créé pour présenter mes compétences et projets. Développé avec HTML, CSS et JavaScript vanilla. Une exploration fondamentale du développement web front-end.",
    githubUrl: 'https://github.com/ginfaodanny/Profile.git',
    image: getImage('project1'),
  },
  {
    id: 'project2',
    name: 'E-commerce Platform',
    description: "Une plateforme e-commerce complète avec gestion des produits, panier d'achat et authentification des utilisateurs. Construite avec le stack MERN (MongoDB, Express, React, Node.js).",
    githubUrl: 'https://github.com/ginfaodanny/Profile.git',
    image: getImage('project2'),
  },
  {
    id: 'project3',
    name: 'Blog CMS',
    description: "Un système de gestion de contenu pour un blog, permettant la création, l'édition et la suppression d'articles. Utilise Next.js pour le rendu côté serveur et une base de données PostgreSQL.",
    githubUrl: 'https://github.com/ginfaodanny/Profile.git',
    image: getImage('project3'),
  },
];

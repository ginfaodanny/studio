import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
          Construisons votre page
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600">
          J'ai réinitialisé le projet. Fournissez-moi votre contenu HTML et je vous aiderai à le construire ici.
        </p>
      </div>
    </main>
  );
}

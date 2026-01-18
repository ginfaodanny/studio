import {
  Phone,
  Smartphone,
  MessageSquare,
  Mail,
  MapPin,
  FileDown,
  ChevronRight,
} from 'lucide-react';

const contactLinks = [
  {
    icon: <Phone size={16} />,
    label: 'Natcom',
    value: '+509 4170-4583',
    href: 'tel:+50941704583',
  },
  {
    icon: <Smartphone size={16} />,
    label: 'Digicel',
    value: '+509 4453-9500',
    href: 'tel:+50944539500',
  },
  {
    icon: <MessageSquare size={16} />,
    label: 'WhatsApp',
    value: '+509 3337-7934',
    href: 'https://wa.me/50933377934',
  },
  {
    icon: <Mail size={16} />,
    label: 'Envoyer un email',
    value: 'gincoder-ms@outlook.fr',
    href: 'mailto:gincoder-ms@outlook.fr',
  },
  {
    icon: <MapPin size={16} />,
    label: 'Localisation',
    value: 'Marchand-Dessalines, Rue Dupuy',
    href: 'https://www.google.com/maps/search/?api=1&query=Marchand-Dessalines%2C%20Rue%20Dupuy%2C%20Haiti',
  },
  {
    icon: <FileDown size={16} />,
    label: 'Télécharger le CV (PDF)',
    value: 'Version imprimable',
    href: '/CV_Georges_GinFao_Daniel.pdf',
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background p-3 sm:p-4">
      <div className="w-full max-w-sm rounded-2xl bg-card shadow-2xl shadow-primary/10">
        <header className="rounded-t-2xl bg-primary p-4 text-primary-foreground sm:p-5">
          <h1 className="text-xl font-extrabold tracking-tight sm:text-2xl">
            Georges Gin-Fao Daniel
          </h1>
          <p className="mt-1 text-sm font-medium text-primary-foreground/90">
            Technicien Informatique – Support & Réseaux
          </p>
        </header>

        <section
          aria-label="Coordonnées"
          className="p-3 sm:p-4"
        >
          <h2 className="px-2 pb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Coordonnées professionnelles
          </h2>

          <div className="grid gap-2">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') || link.href.startsWith('/') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between rounded-lg border bg-primary/10 p-2.5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/20 hover:shadow-md"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/20 text-primary">
                    {link.icon}
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <strong className="truncate text-sm font-semibold text-foreground">
                      {link.label}
                    </strong>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-muted-foreground" />
              </a>
            ))}
          </div>

          <footer className="mt-5 pt-2 text-center">
             <div className="inline-block rounded-full border bg-secondary/70 px-3 py-1 text-xs text-muted-foreground">Dernière mise à jour : 2026</div>
          </footer>
        </section>
      </div>
    </main>
  );
}

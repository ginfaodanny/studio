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
    icon: <Phone size={20} />,
    label: 'Natcom',
    value: '+509 4170-4583',
    href: 'tel:+50941704583',
  },
  {
    icon: <Smartphone size={20} />,
    label: 'Digicel',
    value: '+509 4453-9500',
    href: 'tel:+50944539500',
  },
  {
    icon: <MessageSquare size={20} />,
    label: 'WhatsApp',
    value: '+509 3337-7934',
    href: 'https://wa.me/50933377934',
  },
  {
    icon: <Mail size={20} />,
    label: 'Envoyer un email',
    value: 'gincoder-ms@outlook.fr',
    href: 'mailto:gincoder-ms@outlook.fr',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Localisation',
    value: 'Marchand-Dessalines, Rue Dupuy',
    href: 'https://www.google.com/maps/search/?api=1&query=Marchand-Dessalines%2C%20Rue%20Dupuy%2C%20Haiti',
  },
  {
    icon: <FileDown size={20} />,
    label: 'Télécharger le CV (PDF)',
    value: 'Version imprimable',
    href: './CV_Georges_GinFao_Daniel.pdf',
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-lg">
        <header className="rounded-t-xl bg-primary p-6 text-primary-foreground shadow-2xl shadow-primary/20">
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Georges Gin-Fao Daniel
          </h1>
          <p className="mt-1 text-sm font-medium text-primary-foreground/90 sm:text-base">
            Technicien Informatique – Support & Réseaux
          </p>
        </header>

        <section
          aria-label="Coordonnées"
          className="rounded-b-xl border-x border-b bg-card p-4 text-card-foreground shadow-lg sm:p-6"
        >
          <h2 className="mb-4 px-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Coordonnées professionnelles
          </h2>

          <div className="grid gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') || link.href.startsWith('./') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between rounded-lg border bg-transparent p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent hover:shadow-md"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    {link.icon}
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <strong className="truncate text-sm font-semibold text-foreground sm:text-base">
                      {link.label}
                    </strong>
                    <span className="truncate text-xs text-muted-foreground sm:text-sm">
                      {link.value}
                    </span>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground/60 transition-transform group-hover:translate-x-1 group-hover:text-muted-foreground" />
              </a>
            ))}
          </div>

          <footer className="mt-5 text-center">
             <div className="inline-block rounded-full border bg-secondary/70 px-3 py-1 text-xs text-muted-foreground">Dernière mise à jour : 2026</div>
          </footer>
        </section>
      </div>
    </main>
  );
}

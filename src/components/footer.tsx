import { Logo } from "./icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 py-8 sm:px-6 md:flex-row md:justify-between lg:px-8">
        <div className="flex items-center gap-2">
          <Logo className="h-6 w-6 text-muted-foreground" />
          <span className="font-semibold text-muted-foreground">Profile Canvas</span>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} Danny Ginfao. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

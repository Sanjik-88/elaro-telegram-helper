
import { Sparkles } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

interface HeaderProps {
  navLinks: NavLink[];
}

const Header = ({ navLinks }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary-purple text-white backdrop-blur supports-[backdrop-filter]:bg-primary-purple/90">
      <div className="container flex h-14 items-center justify-between">
        <a href="#" className="mr-6 flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-accent-green" />
          <span className="font-bold">Flexberry Elaro</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-accent-green/80"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button can be added here */}
        </div>
      </div>
    </header>
  );
};

export default Header;

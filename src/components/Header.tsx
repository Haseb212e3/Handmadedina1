import { useState } from 'react';
import { Menu, X } from 'lucide-react';
const languages = [{
  code: 'en',
  flag: '🇬🇧',
  name: 'English'
}, {
  code: 'de',
  flag: '🇩🇪',
  name: 'Deutsch'
}, {
  code: 'al',
  flag: '🇦🇱',
  name: 'Shqip'
}];
const Header = () => {
  const [currentLang, setCurrentLang] = useState('al');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = {
    al: [{
      name: 'Kreu',
      href: '/'
    }, {
      name: 'Rreth nesh',
      href: '/about'
    }, {
      name: 'Kontakt',
      href: '/contact'
    }],
    en: [{
      name: 'Home',
      href: '/'
    }, {
      name: 'About Us',
      href: '/about'
    }, {
      name: 'Contact',
      href: '/contact'
    }],
    de: [{
      name: 'Startseite',
      href: '/'
    }, {
      name: 'Über uns',
      href: '/about'
    }, {
      name: 'Kontakt',
      href: '/contact'
    }]
  };
  return <header className="relative z-50 w-full px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Language Flags - Left Side */}
        <div className="flex items-center gap-3">
          {languages.map(lang => <button key={lang.code} onClick={() => setCurrentLang(lang.code)} className={`text-2xl transition-all duration-300 hover:scale-110 ${currentLang === lang.code ? 'opacity-100 scale-110' : 'opacity-70'}`} aria-label={`Switch to ${lang.name}`}>
              {lang.flag}
            </button>)}
        </div>

        {/* Logo - Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-2xl font-bold tracking-wider text-center text-slate-300 md:text-lg">
            HANDMADE <span className="text-accent">♡</span> DINA
          </h1>
        </div>

        {/* Navigation - Right Side (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation[currentLang as keyof typeof navigation].map(item => <a key={item.name} href={item.href} className="text-foreground hover:text-accent transition-colors duration-300 font-medium">
              {item.name}
            </a>)}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground hover:text-accent transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden absolute top-full left-0 w-full bg-card/90 backdrop-blur-sm border-t border-border">
          <nav className="flex flex-col py-4">
            {navigation[currentLang as keyof typeof navigation].map(item => <a key={item.name} href={item.href} className="px-6 py-3 text-foreground hover:text-accent hover:bg-muted/50 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>)}
          </nav>
        </div>}
    </header>;
};
export default Header;
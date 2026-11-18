import { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { buildWhatsAppUrl, FIRM_INFO } from '../data/firmContent';

interface HeaderProps {
  currentPath: string;
  onNavigateSection: (sectionId: string) => void;
  onNavigatePath: (path: string) => void;
}

const NAV_ITEMS = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'atuacao', label: 'Atuação' },
  { id: 'artigos', label: 'Artigos' },
  { id: 'contato', label: 'Contato' },
] as const;

export function Header({ currentPath, onNavigateSection, onNavigatePath }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const directWhatsAppUrl = buildWhatsAppUrl(
    'Olá, gostaria de entrar em contato com a Soloneto Saldanha Advocacia para agendar uma orientação jurídica.',
  );

  const handleLinkClick = (sectionId: string) => {
    setMobileOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || mobileOpen || currentPath !== '/'
          ? 'border-b border-[#C6A15B]/30 bg-[#14243D]/95 backdrop-blur-md'
          : 'border-b border-white/10 bg-[#14243D]/85 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:h-20 lg:gap-8 lg:px-10">
        {/* Zona 1: Marca institucional em Cinzel em linha única */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setMobileOpen(false);
            if (currentPath !== '/') {
              onNavigatePath('/');
            } else {
              onNavigateSection('inicio');
            }
          }}
          className="font-serif text-sm font-medium tracking-[0.04em] text-white whitespace-nowrap shrink-0 transition-colors hover:text-[#C6A15B] sm:text-base lg:text-lg xl:text-xl"
        >
          {FIRM_INFO.name}
        </a>

        {/* Zona 2: Links de navegação em Montserrat */}
        <nav aria-label="Navegação principal" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleLinkClick(item.id)}
              className="group relative py-1.5 font-sans text-[13px] font-medium tracking-wide text-slate-200 whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-white xl:text-sm cursor-pointer"
            >
              <span>{item.label}</span>
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#C6A15B] transition-transform duration-200 group-hover:scale-x-100" />
            </button>
          ))}
        </nav>

        {/* Zona 3: Ação principal (WhatsApp oficial) + menu mobile */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 border border-[#C6A15B]/80 bg-[#C6A15B] px-4 py-2 font-sans text-xs font-semibold tracking-wide text-[#14243D] whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#D4B577] sm:inline-flex lg:px-5 lg:py-2.5"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-slate-100 transition-colors hover:border-[#C6A15B]/60 hover:text-[#C6A15B] lg:hidden cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu móvel refinado */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="border-t border-[#C6A15B]/25 bg-[#14243D] px-5 py-6 sm:px-6 lg:hidden"
        >
          <nav aria-label="Menu móvel" className="flex flex-col divide-y divide-white/10">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleLinkClick(item.id)}
                className="flex min-h-[46px] items-center justify-between py-3 text-left font-sans text-sm font-medium tracking-wide text-slate-100 transition-colors hover:text-[#C6A15B] cursor-pointer"
              >
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-5 border-t border-white/10 pt-5">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[48px] w-full items-center justify-center gap-2 bg-[#C6A15B] px-5 py-3 font-sans text-sm font-semibold text-[#14243D] transition-colors hover:bg-[#D4B577]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Falar pelo WhatsApp ({FIRM_INFO.whatsappDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import { FIRM_INFO, PracticeAreaId } from '../data/firmContent';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onSelectAreaAndScroll: (areaId: PracticeAreaId) => void;
  onNavigatePath: (path: string) => void;
}

export function Footer({
  onNavigateSection,
  onSelectAreaAndScroll,
  onNavigatePath,
}: FooterProps) {
  return (
    <footer className="border-t border-[#C6A15B]/35 bg-[#0D1829] font-sans text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="font-serif text-xl font-medium tracking-[0.04em] text-white">
              {FIRM_INFO.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              Advocacia em Direito Trabalhista, Civil e Previdenciário · {FIRM_INFO.locationBase}.
            </p>
            <p className="mt-2 text-xs text-slate-400">{FIRM_INFO.oabPlaceholder}</p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#C6A15B] uppercase">
              Menu
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { id: 'inicio', label: 'Início' },
                { id: 'sobre', label: 'Sobre' },
                { id: 'atuacao', label: 'Atuação' },
                { id: 'artigos', label: 'Artigos' },
                { id: 'contato', label: 'Contato' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigateSection(item.id)}
                    className="transition-colors hover:text-white cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#C6A15B] uppercase">
              Áreas
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectAreaAndScroll('trabalhista')}
                  className="transition-colors hover:text-white cursor-pointer"
                >
                  Trabalhista
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectAreaAndScroll('civil')}
                  className="transition-colors hover:text-white cursor-pointer"
                >
                  Civil
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectAreaAndScroll('previdenciario')}
                  className="transition-colors hover:text-white cursor-pointer"
                >
                  Previdenciário
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#C6A15B] uppercase">
              Contato
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li className="tabular-nums">{FIRM_INFO.whatsappDisplay}</li>
              <li className="break-all text-slate-400">{FIRM_INFO.emailPlaceholder}</li>
              <li className="text-xs text-slate-400">Atendimento Digital Nacional</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>
            © {FIRM_INFO.copyrightYear} {FIRM_INFO.name}. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="/privacidade"
              onClick={(e) => {
                e.preventDefault();
                onNavigatePath('/privacidade');
              }}
              className="transition-colors hover:text-white"
            >
              Política de Privacidade (LGPD)
            </a>
            <a
              href="/aviso-legal"
              onClick={(e) => {
                e.preventDefault();
                onNavigatePath('/aviso-legal');
              }}
              className="transition-colors hover:text-white"
            >
              Aviso Legal (OAB)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

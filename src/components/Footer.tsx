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
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Coluna institucional */}
          <div className="lg:col-span-4">
            <p className="font-serif text-xl font-medium tracking-[0.04em] text-white sm:text-2xl">
              {FIRM_INFO.name}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-[1.7] text-slate-400">
              Atuação jurídica pautada pelo rigor técnico, clareza na comunicação e respeito
              integral às normas éticas da advocacia.
            </p>
            <p className="mt-4 text-xs text-slate-400">{FIRM_INFO.oabPlaceholder}</p>
          </div>

          {/* Navegação */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#C6A15B] uppercase">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { id: 'inicio', label: 'Início' },
                { id: 'sobre', label: 'Sobre' },
                { id: 'atuacao', label: 'Atuação' },
                { id: 'artigos', label: 'Artigos' },
                { id: 'faq', label: 'Dúvidas Frequentes' },
                { id: 'contato', label: 'Contato' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigateSection(item.id)}
                    className="py-0.5 transition-colors hover:text-white cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Áreas de Atuação */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#C6A15B] uppercase">
              Áreas de Atuação
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectAreaAndScroll('trabalhista')}
                  className="py-0.5 transition-colors hover:text-white cursor-pointer"
                >
                  Direito Trabalhista
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectAreaAndScroll('civil')}
                  className="py-0.5 transition-colors hover:text-white cursor-pointer"
                >
                  Direito Civil
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectAreaAndScroll('previdenciario')}
                  className="py-0.5 transition-colors hover:text-white cursor-pointer"
                >
                  Direito Previdenciário
                </button>
              </li>
            </ul>
          </div>

          {/* Informações de Contato */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#C6A15B] uppercase">
              Contato
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li className="tabular-nums">WhatsApp: {FIRM_INFO.whatsappDisplay}</li>
              <li className="break-all">{FIRM_INFO.emailPlaceholder}</li>
              <li>{FIRM_INFO.locationBase}</li>
              <li className="text-xs text-slate-400">Atendimento Digital em Todo o Brasil</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-400 sm:flex-row sm:items-center lg:mt-14">
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
              className="py-1 transition-colors hover:text-white"
            >
              Política de Privacidade (LGPD)
            </a>
            <a
              href="/aviso-legal"
              onClick={(e) => {
                e.preventDefault();
                onNavigatePath('/aviso-legal');
              }}
              className="py-1 transition-colors hover:text-white"
            >
              Aviso Legal e Ética OAB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

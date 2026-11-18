import { ArrowRight, Briefcase, Scale, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { PRACTICE_AREAS, PracticeAreaId } from '../data/firmContent';

interface PracticeAreasSectionProps {
  selectedArea: PracticeAreaId;
  onSelectArea: (area: PracticeAreaId) => void;
  onConsultArea: (area: PracticeAreaId) => void;
}

const AREA_ICONS: Record<PracticeAreaId, typeof Briefcase> = {
  trabalhista: Briefcase,
  civil: Scale,
  previdenciario: ShieldCheck,
};

export function PracticeAreasSection({
  selectedArea,
  onSelectArea,
  onConsultArea,
}: PracticeAreasSectionProps) {
  const activeArea =
    PRACTICE_AREAS.find((area) => area.id === selectedArea) ?? PRACTICE_AREAS[0];

  return (
    <section
      id="atuacao"
      className="relative bg-gradient-to-b from-[#491D30] via-[#491D30] to-[#341321] py-16 text-white sm:py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C6A15B]/50 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-6 border-b border-white/15 pb-8 lg:flex-row lg:items-end lg:pb-10"
        >
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-semibold tracking-[0.18em] text-[#C6A15B] uppercase">
              Áreas de Atuação
            </p>
            <h2 className="heading-section mt-3 text-white">
              Atuação Estruturada em Três Frentes Jurídicas Essenciais
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm leading-[1.7] text-slate-200">
            Selecione abaixo uma das áreas para visualizar os temas frequentemente examinados em
            consultoria e atuação contenciosa, observada a análise individual de cada demanda.
          </p>
        </motion.div>

        {/* Seletor igualitário das 3 áreas */}
        <div
          role="tablist"
          aria-label="Áreas de atuação jurídica"
          className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-10"
        >
          {PRACTICE_AREAS.map((area) => {
            const Icon = AREA_ICONS[area.id];
            const isSelected = area.id === activeArea.id;

            return (
              <button
                key={area.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={`panel-${area.id}`}
                id={`tab-${area.id}`}
                onClick={() => onSelectArea(area.id)}
                className={`group flex min-h-[160px] flex-col justify-between border p-5 text-left transition-colors duration-200 sm:p-6 cursor-pointer ${
                  isSelected
                    ? 'border-[#C6A15B] bg-[#341321] text-white'
                    : 'border-white/15 bg-white/[0.03] text-slate-200 hover:border-[#C6A15B]/50 hover:bg-white/[0.06]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <Icon
                      className={`h-5 w-5 transition-colors ${
                        isSelected ? 'text-[#C6A15B]' : 'text-slate-300 group-hover:text-[#C6A15B]'
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`font-sans text-xs font-semibold tracking-wider uppercase ${
                        isSelected ? 'text-[#C6A15B]' : 'text-slate-400'
                      }`}
                    >
                      {isSelected ? 'Selecionada' : 'Ver temas'}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-xl font-medium tracking-[0.03em] text-white uppercase sm:text-[1.35rem]">
                    {area.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-slate-300">
                    {area.subtitle}
                  </p>
                </div>

                <div
                  className={`mt-5 h-px w-full transition-colors ${
                    isSelected ? 'bg-[#C6A15B]' : 'bg-white/10 group-hover:bg-[#C6A15B]/40'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Painel detalhado da área selecionada */}
        <div
          role="tabpanel"
          id={`panel-${activeArea.id}`}
          aria-labelledby={`tab-${activeArea.id}`}
          className="mt-8 border border-white/15 bg-[#2A0E1B]/80 p-5 sm:p-8 lg:p-10"
        >
          <div className="flex flex-col justify-between gap-6 border-b border-white/15 pb-7 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h3 className="font-serif text-2xl font-medium tracking-[0.04em] text-white uppercase sm:text-[1.75rem]">
                {activeArea.title}
              </h3>
              <p className="mt-3 font-sans text-[15px] leading-[1.7] text-slate-200 sm:text-base">
                {activeArea.summary}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onConsultArea(activeArea.id)}
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 bg-[#C6A15B] px-6 py-3 font-sans text-sm font-semibold text-[#14243D] transition-colors duration-200 hover:bg-[#D4B577] sm:w-auto cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>{activeArea.ctaLabel}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-7 md:grid-cols-2 lg:grid-cols-3">
            {activeArea.topics.map((topic) => (
              <article
                key={topic.index}
                className="flex flex-col justify-between border-t border-white/15 pt-5"
              >
                <div>
                  <span className="tabular-nums font-sans text-xs font-semibold tracking-widest text-[#C6A15B]">
                    {topic.index}.
                  </span>
                  <h4 className="mt-2 font-serif text-lg font-medium tracking-[0.02em] text-white">
                    {topic.title}
                  </h4>
                  <p className="mt-2.5 font-sans text-sm leading-[1.7] text-slate-300">
                    {topic.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-9 border-t border-white/10 pt-5 font-sans text-xs leading-relaxed text-slate-300">
            Nota informativa: {activeArea.scopeNote}
          </p>
        </div>
      </div>
    </section>
  );
}

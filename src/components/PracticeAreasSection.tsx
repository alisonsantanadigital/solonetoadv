import { ArrowRight, Briefcase, Check, Scale, ShieldCheck } from 'lucide-react';
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
  return (
    <section
      id="atuacao"
      className="relative bg-gradient-to-b from-[#491D30] via-[#491D30] to-[#341321] py-14 text-white sm:py-18 lg:py-22"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C6A15B]/50 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-4 border-b border-white/15 pb-7 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-semibold tracking-[0.18em] text-[#C6A15B] uppercase">
              O Que Fazemos
            </p>
            <h2 className="heading-section mt-2.5 text-white">Áreas de Atuação</h2>
          </div>
          <p className="max-w-md font-sans text-sm leading-relaxed text-slate-200">
            Atuação direta e equilibrada em três áreas centrais, sempre mediante análise prévia dos
            documentos de cada caso.
          </p>
        </motion.div>

        {/* 3 cartões iguais lado a lado com tópicos diretos */}
        <div className="mt-9 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PRACTICE_AREAS.map((area) => {
            const Icon = AREA_ICONS[area.id];
            const isHighlighted = selectedArea === area.id;

            return (
              <article
                key={area.id}
                onMouseEnter={() => onSelectArea(area.id)}
                className={`flex flex-col justify-between border p-6 transition-colors duration-200 sm:p-7 ${
                  isHighlighted
                    ? 'border-[#C6A15B] bg-[#341321]'
                    : 'border-white/15 bg-[#2A0E1B]/70 hover:border-[#C6A15B]/60'
                }`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-[#C6A15B]" aria-hidden="true" />
                    <h3 className="font-serif text-xl font-medium tracking-[0.03em] text-white uppercase">
                      {area.title}
                    </h3>
                  </div>

                  <p className="mt-4 font-sans text-sm leading-[1.65] text-slate-200">
                    {area.summary}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-white/15 pt-5 font-sans text-sm text-slate-200">
                    {area.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2.5">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#C6A15B]"
                          aria-hidden="true"
                        />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 pt-2">
                  <button
                    type="button"
                    onClick={() => onConsultArea(area.id)}
                    className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 bg-[#C6A15B] px-5 py-3 font-sans text-xs font-semibold tracking-wider text-[#14243D] uppercase transition-colors duration-200 hover:bg-[#D4B577] cursor-pointer"
                  >
                    <span>{area.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 font-sans text-xs text-slate-300">
          * Temas apresentados em caráter informativo e sujeitos à avaliação técnica individualizada.
        </p>
      </div>
    </section>
  );
}

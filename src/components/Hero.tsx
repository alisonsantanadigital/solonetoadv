import { useState } from 'react';
import { ArrowRight, Scale } from 'lucide-react';
import { motion } from 'motion/react';
import { FIRM_INFO } from '../data/firmContent';

interface HeroProps {
  onConsultClick: () => void;
  onExplorePracticeClick: () => void;
}

export function Hero({ onConsultClick, onExplorePracticeClick }: HeroProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-[#111F35] via-[#14243D] to-[#14243D] pt-20 text-white lg:pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_45%,rgba(73,29,48,0.42),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-8 sm:px-6 lg:px-10 lg:pb-14 lg:pt-12">
        <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-12 lg:gap-10">
          {/* Bloco 1: Posicionamento estratégico */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:col-span-5 lg:self-end"
          >
            <p className="font-sans text-xs font-semibold tracking-[0.16em] text-[#C6A15B] uppercase">
              Direito Trabalhista <span aria-hidden="true">·</span> Civil{' '}
              <span aria-hidden="true">·</span> Previdenciário
            </p>

            <h1 className="heading-hero mt-3.5 text-white">
              Advocacia Estratégica com Rigor Técnico e Clareza.
            </h1>
          </motion.div>

          {/* Bloco 2: Fotografia executiva 16:9 preservada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:col-span-7 lg:row-span-2"
          >
            {!imageError ? (
              <div className="relative mx-auto w-full overflow-hidden">
                <div className="relative aspect-[1376/768] w-full">
                  <img
                    src={FIRM_INFO.lawyerPhoto}
                    alt={FIRM_INFO.lawyerPhotoAlt}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="h-full w-full object-contain"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#14243D] to-transparent sm:w-16"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#14243D] to-transparent sm:w-16"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#14243D]/85 to-transparent sm:h-12"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#14243D] via-[#14243D]/40 to-transparent sm:h-14"
                  />
                </div>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-[#C6A15B]/30 pt-3">
                  <p className="font-serif text-base font-medium tracking-[0.04em] text-white sm:text-lg">
                    {FIRM_INFO.lawyerName}
                  </p>
                  <p className="font-sans text-xs tracking-wide text-slate-300">
                    {FIRM_INFO.locationBase} <span aria-hidden="true">·</span> Atendimento Nacional
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex aspect-[16/9] w-full flex-col items-center justify-center border border-[#C6A15B]/25 bg-[#1C3152]/40 p-8 text-center">
                <Scale className="h-10 w-10 text-[#C6A15B]" aria-hidden="true" />
                <p className="mt-4 font-serif text-2xl font-medium text-white">
                  {FIRM_INFO.name}
                </p>
              </div>
            )}
          </motion.div>

          {/* Bloco 3: Proposta de valor em 1 frase e CTAs diretos */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="order-3 lg:col-span-5 lg:self-start"
          >
            <p className="max-w-md font-sans text-[15px] leading-[1.65] text-slate-200 sm:text-base">
              Orientação direta e defesa técnica dos seus direitos, com atendimento presencial em
              São Paulo e digital em todo o Brasil.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onConsultClick}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 bg-[#C6A15B] px-6 py-3 font-sans text-sm font-semibold tracking-wide text-[#14243D] transition-colors duration-200 hover:bg-[#D4B577] sm:w-auto cursor-pointer whitespace-nowrap"
              >
                <span>Falar com o Advogado</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onExplorePracticeClick}
                className="inline-flex min-h-[48px] w-full items-center justify-center border border-white/30 bg-transparent px-6 py-3 font-sans text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:border-[#C6A15B] hover:text-[#C6A15B] sm:w-auto cursor-pointer whitespace-nowrap"
              >
                Áreas de Atuação
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-[#C6A15B]/40 to-transparent"
      />
    </section>
  );
}

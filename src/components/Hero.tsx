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
      {/* Profundidade atmosférica sutil em Marsala e Navy */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_45%,rgba(73,29,48,0.42),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-6 lg:px-10 lg:pb-14 lg:pt-14">
        {/* Composição principal: no mobile ordena Título -> Fotografia -> Texto/CTAs; no desktop exibe lado a lado */}
        <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-12 lg:gap-10">
          {/* Bloco 1: Kicker + Título principal em Cinzel Title Case */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:col-span-5 lg:self-end"
          >
            <p className="font-sans text-xs font-medium tracking-[0.16em] text-[#C6A15B] uppercase">
              {FIRM_INFO.locationBase} <span aria-hidden="true">·</span> Atendimento Digital Nacional
            </p>

            <h1 className="heading-hero mt-4 text-white">
              Advocacia Pautada pelo Rigor Técnico, Clareza e Compromisso Ético.
            </h1>
          </motion.div>

          {/* Bloco 2: Nova fotografia executiva 16:9 (1376x768) na proporção natural */}
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:col-span-7 lg:row-span-2"
          >
            {!imageError ? (
              <div className="relative mx-auto w-full overflow-hidden">
                {/* Proporção natural exata da imagem enviada (1376x768) sem cortes ou filtros escuros */}
                <div className="relative aspect-[1376/768] w-full">
                  <img
                    src={FIRM_INFO.lawyerPhoto}
                    alt={FIRM_INFO.lawyerPhotoAlt}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="h-full w-full object-contain"
                  />

                  {/* Fusão gradual apenas nas extremidades para integrar ao fundo Navy sem encobrir o advogado */}
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

                {/* Assinatura editorial discreta abaixo do retrato, sem sobrepor a fotografia */}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-[#C6A15B]/30 pt-3">
                  <p className="font-serif text-base font-medium tracking-[0.04em] text-white sm:text-lg">
                    {FIRM_INFO.lawyerName}
                  </p>
                  <p className="font-sans text-xs tracking-wide text-slate-300">
                    {FIRM_INFO.name} <span aria-hidden="true">·</span> {FIRM_INFO.locationBase}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex aspect-[16/9] w-full flex-col items-center justify-center border border-[#C6A15B]/25 bg-[#1C3152]/40 p-8 text-center">
                <Scale className="h-10 w-10 text-[#C6A15B]" aria-hidden="true" />
                <p className="mt-4 font-serif text-2xl font-medium text-white">
                  {FIRM_INFO.name}
                </p>
                <p className="mt-2 font-sans text-sm text-slate-300">{FIRM_INFO.locationBase}</p>
              </div>
            )}
          </motion.div>

          {/* Bloco 3: Texto de apoio e botões de ação (abaixo da foto no mobile; abaixo do título no desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="order-3 lg:col-span-5 lg:self-start"
          >
            <p className="max-w-xl font-sans text-[15px] leading-[1.7] text-slate-200 sm:text-base">
              Atuação dedicada em{' '}
              <strong className="font-semibold text-white">
                Direito Trabalhista, Direito Civil e Direito Previdenciário
              </strong>
              , com análise individualizada de cada caso e comunicação transparente em todas as
              etapas.
            </p>

            <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onConsultClick}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 bg-[#C6A15B] px-6 py-3.5 font-sans text-sm font-semibold tracking-wide text-[#14243D] transition-colors duration-200 hover:bg-[#D4B577] sm:w-auto cursor-pointer whitespace-nowrap"
              >
                <span>Fale com o Advogado</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onExplorePracticeClick}
                className="inline-flex min-h-[48px] w-full items-center justify-center border border-white/30 bg-transparent px-6 py-3.5 font-sans text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:border-[#C6A15B] hover:text-[#C6A15B] sm:w-auto cursor-pointer whitespace-nowrap"
              >
                Conheça Nossa Atuação
              </button>
            </div>
          </motion.div>
        </div>

        {/* Faixa inferior contínua de síntese institucional */}
        <div className="mt-10 grid grid-cols-1 gap-5 border-t border-white/15 pt-6 font-sans text-xs text-slate-300 sm:grid-cols-3 sm:gap-8 lg:mt-14 lg:pt-8">
          <div>
            <p className="font-semibold tracking-wider text-[#C6A15B] uppercase">
              Áreas de Atuação
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-200">
              Direito Trabalhista, Civil e Previdenciário
            </p>
          </div>
          <div>
            <p className="font-semibold tracking-wider text-[#C6A15B] uppercase">Atendimento</p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-200">
              São Paulo – SP e atendimento digital em todo o Brasil
            </p>
          </div>
          <div>
            <p className="font-semibold tracking-wider text-[#C6A15B] uppercase">Canal Direto</p>
            <p className="mt-1.5 tabular-nums text-sm leading-relaxed text-slate-200">
              WhatsApp {FIRM_INFO.whatsappDisplay}
            </p>
          </div>
        </div>
      </div>

      {/* Transição suave para a próxima faixa clara editorial */}
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-[#C6A15B]/40 to-transparent"
      />
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { DIFFERENTIALS, SERVICE_STEPS } from '../data/firmContent';

interface ServicesAndDifferentialsProps {
  onConsultClick: () => void;
}

export function ServicesAndDifferentials({ onConsultClick }: ServicesAndDifferentialsProps) {
  return (
    <section className="relative bg-gradient-to-b from-[#1A1A32] via-[#14243D] to-[#14243D] py-14 text-white sm:py-18 lg:py-22">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C6A15B]/45 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-6 border-b border-white/15 pb-7 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-semibold tracking-[0.18em] text-[#C6A15B] uppercase">
              Como Atuamos
            </p>
            <h2 className="heading-section mt-2.5 text-white">
              Do Primeiro Contato à Solução Jurídica em Três Etapas
            </h2>
          </div>

          <button
            type="button"
            onClick={onConsultClick}
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 border border-[#C6A15B]/70 px-5 py-2.5 font-sans text-xs font-semibold tracking-wider text-[#C6A15B] uppercase transition-colors hover:bg-[#C6A15B] hover:text-[#14243D] sm:w-auto cursor-pointer whitespace-nowrap"
          >
            <span>Agendar Orientação</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </motion.div>

        {/* 3 etapas objetivas de como faz */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {SERVICE_STEPS.map((step) => (
            <div key={step.index} className="border-t border-[#C6A15B]/55 pt-5">
              <span className="tabular-nums font-serif text-2xl font-medium text-[#C6A15B]">
                {step.index}
              </span>
              <h3 className="mt-3 font-serif text-lg font-medium tracking-[0.02em] text-white">
                {step.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-[1.7] text-slate-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* 3 pilares de compromisso integrados no mesmo bloco */}
        <div className="mt-10 grid grid-cols-1 gap-6 border-t border-white/15 pt-8 md:grid-cols-3">
          {DIFFERENTIALS.map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-base font-medium tracking-[0.03em] text-[#C6A15B] uppercase">
                {item.title}
              </h3>
              <p className="mt-1.5 font-sans text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

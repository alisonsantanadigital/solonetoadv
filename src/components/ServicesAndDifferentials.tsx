import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { DIFFERENTIALS, SERVICE_STEPS } from '../data/firmContent';

interface ServicesAndDifferentialsProps {
  onConsultClick: () => void;
}

export function ServicesAndDifferentials({ onConsultClick }: ServicesAndDifferentialsProps) {
  return (
    <>
      {/* Seção E: Serviços Jurídicos / Como Atuamos (Transição Marsala -> Deep Navy) */}
      <section className="relative bg-gradient-to-b from-[#1A1A32] via-[#14243D] to-[#14243D] py-16 text-white sm:py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C6A15B]/45 to-transparent"
        />

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="font-sans text-xs font-semibold tracking-[0.18em] text-[#C6A15B] uppercase">
              Serviços e Metodologia
            </p>
            <h2 className="heading-section mt-3 text-white">
              Como Conduzimos o Atendimento Jurídico do Primeiro Contato ao Acompanhamento
            </h2>
            <p className="mt-4 font-sans text-[15px] leading-[1.7] text-slate-300 sm:text-base">
              Estruturamos nossa rotina de atendimento para que você saiba exatamente quais são os
              próximos passos, quais documentos importam e quais caminhos jurídicos se aplicam ao
              seu caso.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {SERVICE_STEPS.map((step, index) => (
              <motion.div
                key={step.index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col border-t border-[#C6A15B]/55 pt-6"
              >
                <span className="tabular-nums font-serif text-2xl font-medium text-[#C6A15B] sm:text-3xl">
                  {step.index}
                </span>
                <h3 className="mt-3.5 font-serif text-lg font-medium tracking-[0.02em] text-white sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-[1.7] text-slate-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção F: Diferenciais Profissionais (Faixa clara editorial) */}
      <section className="border-b border-[#14243D]/10 bg-white py-16 text-[#14243D] sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <p className="font-sans text-xs font-semibold tracking-[0.18em] text-[#491D30] uppercase">
                Diferenciais Profissionais
              </p>
              <h2 className="heading-section mt-3 text-[#14243D]">
                Critério Técnico e Respeito Absoluto à Ética da Advocacia
              </h2>
              <p className="mt-5 font-sans text-[15px] leading-[1.7] text-slate-600 sm:text-base">
                Mais do que protocolar petições ou responder consultas pontuais, buscamos oferecer
                segurança informacional para que cada cliente compreenda seus direitos e deveres sem
                ruídos.
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={onConsultClick}
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 border border-[#14243D] bg-[#14243D] px-6 py-3 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1C3152] sm:w-auto cursor-pointer whitespace-nowrap"
                >
                  <span>Solicitar Orientação</span>
                  <ArrowRight className="h-4 w-4 text-[#C6A15B]" aria-hidden="true" />
                </button>
              </div>
            </motion.div>

            <div className="divide-y divide-[#14243D]/12 border-t border-b border-[#14243D]/12 lg:col-span-7">
              {DIFFERENTIALS.map((item) => (
                <div
                  key={item.index}
                  className="grid grid-cols-1 gap-2.5 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                >
                  <span className="tabular-nums font-sans text-xs font-semibold tracking-widest text-[#491D30] sm:col-span-1">
                    {item.index}.
                  </span>
                  <h3 className="font-serif text-lg font-medium tracking-[0.02em] text-[#14243D] sm:col-span-4">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm leading-[1.7] text-slate-600 sm:col-span-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

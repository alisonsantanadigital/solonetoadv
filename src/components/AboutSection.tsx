import { motion } from 'motion/react';
import { FIRM_INFO } from '../data/firmContent';

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="border-b border-[#14243D]/10 bg-gradient-to-b from-[#F8F6F2] to-[#F3F0EA] py-14 text-[#14243D] sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="font-sans text-xs font-semibold tracking-[0.18em] text-[#491D30] uppercase">
              Sobre o Escritório
            </p>
            <h2 className="heading-section mt-3 text-[#14243D]">{FIRM_INFO.name}</h2>
            <div className="mt-4 h-px w-14 bg-[#C6A15B]" aria-hidden="true" />

            <dl className="mt-7 divide-y divide-[#14243D]/10 border-t border-b border-[#14243D]/10 font-sans text-sm">
              <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-semibold text-[#14243D]">Titular</dt>
                <dd className="mt-0.5 font-serif text-base font-medium text-[#14243D] sm:col-span-2 sm:mt-0">
                  {FIRM_INFO.lawyerName}
                </dd>
              </div>
              <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-semibold text-[#14243D]">Registro</dt>
                <dd className="mt-0.5 text-slate-700 sm:col-span-2 sm:mt-0">
                  {FIRM_INFO.oabPlaceholder}
                </dd>
              </div>
              <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-semibold text-[#14243D]">Atuação</dt>
                <dd className="mt-0.5 text-slate-700 sm:col-span-2 sm:mt-0">
                  {FIRM_INFO.locationBase} e atendimento digital nacional
                </dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center space-y-5 font-sans text-[15px] leading-[1.75] text-slate-700 sm:text-base lg:col-span-7"
          >
            <p className="text-base font-medium leading-relaxed text-[#14243D] sm:text-lg">
              A <strong>{FIRM_INFO.name}</strong> oferece orientação jurídica próxima e objetiva
              para quem precisa resolver questões trabalhistas, cíveis ou previdenciárias com
              segurança.
            </p>

            <p>
              Antes de indicar qualquer caminho administrativo ou judicial, analisamos os
              documentos disponíveis e explicamos prazos, riscos e alternativas em linguagem clara
              — sempre com sigilo, independência técnica e respeito ao Código de Ética da OAB.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

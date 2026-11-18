import { motion } from 'motion/react';
import { FIRM_INFO } from '../data/firmContent';

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="border-b border-[#14243D]/10 bg-gradient-to-b from-[#F8F6F2] to-[#F3F0EA] py-16 text-[#14243D] sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Coluna lateral editorial + quadro de informações institucionais */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="font-sans text-xs font-semibold tracking-[0.18em] text-[#491D30] uppercase">
              Sobre o Advogado
            </p>
            <h2 className="heading-section mt-3 text-[#14243D]">
              {FIRM_INFO.name}
            </h2>

            <div className="mt-5 h-px w-16 bg-[#C6A15B]" aria-hidden="true" />

            <blockquote className="mt-7 border-y border-[#14243D]/15 py-6 font-serif text-lg leading-relaxed tracking-[0.01em] text-[#491D30] sm:text-xl">
              “A advocacia exige escuta atenta, leitura técnica precisa dos fatos e transparência
              absoluta para orientar decisões seguras.”
            </blockquote>

            {/* Ficha institucional clara com marcadores editáveis */}
            <dl className="mt-7 divide-y divide-[#14243D]/10 border-b border-[#14243D]/10 font-sans text-sm">
              <div className="py-3.5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-semibold text-[#14243D]">Titular</dt>
                <dd className="mt-1 font-serif text-base font-medium text-[#14243D] sm:col-span-2 sm:mt-0">
                  {FIRM_INFO.lawyerName}
                </dd>
              </div>
              <div className="py-3.5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-semibold text-[#14243D]">Registro OAB</dt>
                <dd className="mt-1 text-slate-700 sm:col-span-2 sm:mt-0">
                  {FIRM_INFO.oabPlaceholder}
                </dd>
              </div>
              <div className="py-3.5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-semibold text-[#14243D]">Base física</dt>
                <dd className="mt-1 text-slate-700 sm:col-span-2 sm:mt-0">
                  {FIRM_INFO.locationBase} (atendimento presencial sob agendamento)
                </dd>
              </div>
              <div className="py-3.5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-semibold text-[#14243D]">Abrangência</dt>
                <dd className="mt-1 text-slate-700 sm:col-span-2 sm:mt-0">
                  Atendimento digital em todo o território nacional
                </dd>
              </div>
              <div className="py-3.5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-semibold text-[#14243D]">Formação</dt>
                <dd className="mt-1 text-slate-600 sm:col-span-2 sm:mt-0">
                  {FIRM_INFO.educationPlaceholder}
                </dd>
              </div>
            </dl>
          </motion.div>

          {/* Coluna principal de filosofia jurídica e valores em Montserrat */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center space-y-6 font-sans text-[15px] leading-[1.75] text-slate-700 sm:text-base lg:col-span-7"
          >
            <p className="text-base font-medium leading-relaxed text-[#14243D] sm:text-lg">
              A <strong className="font-semibold">{FIRM_INFO.name}</strong> nasce do compromisso de
              oferecer uma advocacia próxima, responsável e tecnicamente fundamentada para clientes
              que precisam de respostas claras diante de questões trabalhistas, cíveis e
              previdenciárias.
            </p>

            <p>
              A condução de cada caso parte da compreensão cuidadosa da realidade de quem nos
              procura. Antes de propor qualquer medida administrativa ou judicial, dedicamos tempo
              à leitura minuciosa de contratos, registros e documentos, avaliando riscos, prazos
              legais e caminhos disponíveis com seriedade.
            </p>

            <p>
              Rejeitamos soluções padronizadas ou promessas infundadas. Nossa filosofia jurídica
              valoriza a prevenção de litígios quando possível, a firmeza técnica quando a defesa
              dos direitos exige atuação contenciosa e o respeito integral aos princípios éticos da
              advocacia brasileira.
            </p>

            <div className="grid grid-cols-1 gap-6 border-t border-[#14243D]/15 pt-8 sm:grid-cols-2">
              <div>
                <h3 className="font-serif text-lg font-medium tracking-[0.03em] text-[#14243D] uppercase">
                  Compromisso com o Cliente
                </h3>
                <p className="mt-2.5 text-sm leading-[1.7] text-slate-600">
                  Comunicação direta e linguagem acessível, garantindo que cada etapa do processo
                  ou da consultoria seja compreendida com clareza.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg font-medium tracking-[0.03em] text-[#14243D] uppercase">
                  Valores Profissionais
                </h3>
                <p className="mt-2.5 text-sm leading-[1.7] text-slate-600">
                  Sigilo profissional, independência técnica, lealdade processual e atendimento
                  humanizado tanto em São Paulo quanto no ambiente digital.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

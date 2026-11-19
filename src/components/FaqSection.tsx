import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { FAQ_ITEMS } from '../data/firmContent';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="bg-white py-14 text-[#14243D] sm:py-18 lg:py-22">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <p className="font-sans text-xs font-semibold tracking-[0.18em] text-[#491D30] uppercase">
              Dúvidas Frequentes
            </p>
            <h2 className="heading-section mt-2.5 text-[#14243D]">Perguntas Iniciais</h2>
            <p className="mt-3 font-sans text-sm leading-[1.7] text-slate-600">
              Respostas diretas sobre como funciona o atendimento e o que preparar antes do
              contato.
            </p>
          </motion.div>

          <div className="divide-y divide-[#14243D]/15 border-t border-b border-[#14243D]/15 lg:col-span-8">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              const panelId = `${item.id}-panel`;
              const buttonId = `${item.id}-button`;

              return (
                <div key={item.id}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleItem(item.id)}
                      className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-[#491D30] sm:gap-6 cursor-pointer"
                    >
                      <span className="font-serif text-base font-medium leading-snug tracking-[0.015em] text-[#14243D] sm:text-lg">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#C6A15B] transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pr-4 font-sans text-sm leading-[1.7] text-slate-600 sm:pr-8">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

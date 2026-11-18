import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { LEGAL_ARTICLES, LegalArticle, PracticeAreaId } from '../data/firmContent';

interface LegalInsightsSectionProps {
  onOpenArticle: (slug: string) => void;
}

type FilterOption = 'todos' | PracticeAreaId;

const FILTER_OPTIONS: { id: FilterOption; label: string }[] = [
  { id: 'todos', label: 'Todos os temas' },
  { id: 'trabalhista', label: 'Direito Trabalhista' },
  { id: 'civil', label: 'Direito Civil' },
  { id: 'previdenciario', label: 'Direito Previdenciário' },
];

export function LegalInsightsSection({ onOpenArticle }: LegalInsightsSectionProps) {
  const [filter, setFilter] = useState<FilterOption>('todos');

  const filteredArticles: LegalArticle[] =
    filter === 'todos'
      ? LEGAL_ARTICLES
      : LEGAL_ARTICLES.filter((article) => article.areaId === filter);

  return (
    <section
      id="artigos"
      className="border-b border-[#14243D]/10 bg-gradient-to-b from-[#F8F6F2] to-[#F3F0EA] py-16 text-[#14243D] sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-6 border-b border-[#14243D]/12 pb-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-semibold tracking-[0.18em] text-[#491D30] uppercase">
              Artigos e Informativos Jurídicos
            </p>
            <h2 className="heading-section mt-3 text-[#14243D]">
              Publicações de Caráter Informativo para Esclarecimento de Direitos
            </h2>
          </div>

          <p className="max-w-sm font-sans text-xs leading-relaxed text-slate-600">
            Textos editoriais de referência demonstrativa — podem ser ampliados ou atualizados
            periodicamente pelo escritório.
          </p>
        </motion.div>

        {/* Controles interativos de filtro em Montserrat */}
        <div
          className="mt-8 flex flex-wrap items-center gap-2.5"
          role="group"
          aria-label="Filtrar artigos por área"
        >
          {FILTER_OPTIONS.map((option) => {
            const active = filter === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setFilter(option.id)}
                className={`min-h-[42px] border px-4 py-2 font-sans text-xs font-semibold tracking-wide transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  active
                    ? 'border-[#14243D] bg-[#14243D] text-white'
                    : 'border-[#14243D]/20 bg-white text-[#14243D] hover:border-[#491D30] hover:text-[#491D30]'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        {/* Grade editorial de artigos */}
        <div className="mt-9 grid grid-cols-1 gap-7 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col justify-between border border-[#14243D]/12 bg-white p-6 transition-colors duration-200 hover:border-[#C6A15B] sm:p-7"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 font-sans text-xs text-slate-500">
                  <span className="font-semibold text-[#491D30]">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={article.publishedIso}>{article.publishedAt}</time>
                  <span aria-hidden="true">·</span>
                  <span>{article.readingTime}</span>
                </div>

                <h3 className="mt-4 font-serif text-xl font-medium leading-snug tracking-[0.015em] text-[#14243D] transition-colors group-hover:text-[#491D30]">
                  <a
                    href={`/artigos/${article.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenArticle(article.slug);
                    }}
                    className="focus-visible:outline-none"
                  >
                    {article.title}
                  </a>
                </h3>

                <p className="mt-3 font-sans text-sm leading-[1.7] text-slate-600">
                  {article.summary}
                </p>
              </div>

              <div className="mt-7 border-t border-[#14243D]/10 pt-5">
                <a
                  href={`/artigos/${article.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenArticle(article.slug);
                  }}
                  className="inline-flex min-h-[36px] items-center gap-2 font-sans text-xs font-semibold tracking-wide text-[#14243D] uppercase transition-colors hover:text-[#491D30]"
                >
                  <span>Ler artigo completo</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 text-[#C6A15B] transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

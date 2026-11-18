import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { LEGAL_ARTICLES, LegalArticle, PracticeAreaId } from '../data/firmContent';

interface ArticleDetailViewProps {
  slug: string;
  onBackHome: () => void;
  onOpenArticle: (slug: string) => void;
  onConsultArea: (area: PracticeAreaId) => void;
}

export function ArticleDetailView({
  slug,
  onBackHome,
  onOpenArticle,
  onConsultArea,
}: ArticleDetailViewProps) {
  const [progress, setProgress] = useState(0);
  const article: LegalArticle | undefined = LEGAL_ARTICLES.find((item) => item.slug === slug);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight <= 0) {
        setProgress(0);
        return;
      }
      const scrolled = Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100));
      setProgress(scrolled);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);

  if (!article) {
    return (
      <main className="min-h-[70vh] bg-[#F8F6F2] pt-32 pb-24 text-[#14243D]">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <p className="font-sans text-xs font-semibold tracking-[0.18em] text-[#491D30] uppercase">
            Publicação não encontrada
          </p>
          <h1 className="heading-hero mt-3 text-[#14243D]">
            O Artigo Solicitado Não Está Disponível Neste Endereço.
          </h1>
          <p className="mt-4 font-sans text-base text-slate-600">
            Retorne à página inicial para consultar os informativos jurídicos publicados.
          </p>
          <button
            type="button"
            onClick={onBackHome}
            className="mt-8 inline-flex min-h-[46px] items-center gap-2 bg-[#14243D] px-6 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-[#1C3152] cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 text-[#C6A15B]" aria-hidden="true" />
            <span>Voltar para a página inicial</span>
          </button>
        </div>
      </main>
    );
  }

  const relatedArticles = LEGAL_ARTICLES.filter((item) => item.slug !== article.slug);

  return (
    <main className="bg-[#F8F6F2] pt-16 text-[#14243D] lg:pt-20">
      {/* Barra sutil de progresso de leitura */}
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-16 z-40 h-0.5 bg-[#14243D]/10 lg:top-20"
      >
        <div
          className="h-full bg-[#C6A15B] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Cabeçalho do artigo em Navy */}
      <div className="bg-gradient-to-b from-[#111F35] to-[#14243D] py-14 text-white sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex min-h-[36px] items-center gap-2 font-sans text-xs font-semibold tracking-wider text-[#C6A15B] uppercase transition-colors hover:text-[#D4B577] cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Voltar aos artigos</span>
          </button>

          <div className="mt-7 flex flex-wrap items-center gap-2 font-sans text-xs text-slate-300">
            <span className="font-semibold text-[#C6A15B]">{article.category}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.publishedIso}>{article.publishedAt}</time>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </div>

          <h1 className="heading-hero mt-4 text-white">{article.title}</h1>

          <p className="mt-5 max-w-2xl font-sans text-[15px] leading-[1.7] text-slate-200 sm:text-base">
            {article.summary}
          </p>
        </div>
      </div>

      {/* Corpo editorial com medida de leitura 65-75ch */}
      <article className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="max-w-prose space-y-10 font-sans text-[15px] leading-[1.8] text-slate-800 sm:text-base">
          <blockquote className="border-y border-[#14243D]/15 py-6 font-serif text-lg leading-relaxed tracking-[0.015em] text-[#491D30] sm:text-xl">
            “{article.pullQuote}”
          </blockquote>

          {article.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="font-serif text-xl font-medium tracking-[0.03em] text-[#14243D] uppercase sm:text-2xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </section>
          ))}

          <section className="border border-[#14243D]/15 bg-white p-6 sm:p-8">
            <h2 className="font-serif text-lg font-medium tracking-[0.03em] text-[#14243D] uppercase sm:text-xl">
              Documentos Úteis para Análise Inicial
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
              {article.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#491D30]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <aside className="border-t border-[#14243D]/15 pt-6 text-xs leading-relaxed text-slate-600">
            <strong>Aviso informativo:</strong> Este conteúdo possui caráter meramente educativo e
            exemplificativo, não constituindo parecer jurídico definitivo nem promessa de resultado.
            Cada situação concreta exige exame individualizado dos documentos e da legislação
            aplicável.
          </aside>

          {/* CTA contextual */}
          <div className="bg-gradient-to-b from-[#491D30] to-[#341321] p-6 text-white sm:p-9">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#C6A15B] uppercase">
              Orientação Jurídica
            </p>
            <h3 className="mt-2 font-serif text-xl font-medium tracking-[0.02em] text-white sm:text-2xl">
              Precisa esclarecer dúvidas sobre {article.category}?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-200">
              Estruture sua mensagem pelo formulário de atendimento e encaminhe diretamente ao
              WhatsApp do escritório.
            </p>
            <button
              type="button"
              onClick={() => onConsultArea(article.areaId)}
              className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 bg-[#C6A15B] px-6 py-3 text-sm font-semibold text-[#14243D] transition-colors hover:bg-[#D4B577] sm:w-auto cursor-pointer"
            >
              <span>Falar sobre {article.category}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Outras publicações */}
        <div className="mt-16 border-t border-[#14243D]/15 pt-12">
          <h2 className="font-serif text-xl font-medium tracking-[0.04em] text-[#14243D] uppercase sm:text-2xl">
            Outras Publicações Informativas
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {relatedArticles.map((related) => (
              <a
                key={related.slug}
                href={`/artigos/${related.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onOpenArticle(related.slug);
                }}
                className="group border border-[#14243D]/12 bg-white p-6 transition-colors hover:border-[#C6A15B]"
              >
                <p className="font-sans text-xs font-semibold text-[#491D30]">{related.category}</p>
                <h3 className="mt-2 font-serif text-lg font-medium leading-snug text-[#14243D] group-hover:text-[#491D30]">
                  {related.title}
                </h3>
                <p className="mt-2 font-sans text-xs text-slate-500">
                  {related.publishedAt} · {related.readingTime}
                </p>
              </a>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}

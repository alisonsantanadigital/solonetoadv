import { ArrowLeft } from 'lucide-react';
import {
  FIRM_INFO,
  LEGAL_NOTICE_SECTIONS,
  PRIVACY_POLICY_SECTIONS,
} from '../data/firmContent';

interface LegalPageViewProps {
  mode: 'privacy' | 'legal';
  onBackHome: () => void;
  onContactClick: () => void;
}

export function LegalPageView({ mode, onBackHome, onContactClick }: LegalPageViewProps) {
  const isPrivacy = mode === 'privacy';
  const title = isPrivacy
    ? 'Política de Privacidade e Proteção de Dados (LGPD)'
    : 'Aviso Legal e Conformidade Ética (OAB)';
  const subtitle = isPrivacy
    ? 'Diretrizes de transparência sobre o tratamento de dados pessoais no site institucional da Soloneto Saldanha Advocacia.'
    : 'Informações sobre o caráter informativo dos conteúdos publicados e regras éticas aplicáveis à advocacia.';
  const sections = isPrivacy ? PRIVACY_POLICY_SECTIONS : LEGAL_NOTICE_SECTIONS;

  return (
    <main className="bg-[#F8F6F2] pt-16 text-[#14243D] lg:pt-20">
      <div className="bg-gradient-to-b from-[#111F35] to-[#14243D] py-14 text-white sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex min-h-[36px] items-center gap-2 font-sans text-xs font-semibold tracking-wider text-[#C6A15B] uppercase transition-colors hover:text-[#D4B577] cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Voltar para a página inicial</span>
          </button>

          <h1 className="heading-hero mt-6 text-white">{title}</h1>
          <p className="mt-4 max-w-2xl font-sans text-[15px] leading-[1.7] text-slate-200 sm:text-base">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="max-w-prose space-y-10 font-sans text-[15px] leading-[1.8] text-slate-800 sm:text-base">
          {sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="font-serif text-xl font-medium tracking-[0.03em] text-[#14243D] uppercase sm:text-2xl">
                {section.title}
              </h2>
              {section.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </section>
          ))}

          <div className="border-t border-[#14243D]/15 pt-8">
            <p className="text-sm text-slate-600">
              Responsável institucional: <strong>{FIRM_INFO.name}</strong> ·{' '}
              {FIRM_INFO.oabPlaceholder}
            </p>
            <button
              type="button"
              onClick={onContactClick}
              className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center bg-[#14243D] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1C3152] sm:w-auto cursor-pointer"
            >
              Ir para canais de contato
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

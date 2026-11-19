import { FormEvent, useEffect, useState } from 'react';
import {
  Check,
  Copy,
  ExternalLink,
  Instagram,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  RotateCcw,
} from 'lucide-react';
import { buildWhatsAppUrl, FIRM_INFO, PracticeAreaId } from '../data/firmContent';

interface ContactSectionProps {
  preselectedArea: PracticeAreaId;
  onOpenPrivacy: () => void;
}

type ContactAreaValue =
  | 'Direito Trabalhista'
  | 'Direito Civil'
  | 'Direito Previdenciário'
  | 'Outro assunto jurídico';

const AREA_MAP: Record<PracticeAreaId, ContactAreaValue> = {
  trabalhista: 'Direito Trabalhista',
  civil: 'Direito Civil',
  previdenciario: 'Direito Previdenciário',
};

interface FormErrors {
  name?: string;
  summary?: string;
  lgpd?: string;
}

export function ContactSection({ preselectedArea, onOpenPrivacy }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [area, setArea] = useState<ContactAreaValue>(AREA_MAP[preselectedArea]);
  const [summary, setSummary] = useState('');
  const [lgpdAccepted, setLgpdAccepted] = useState(false);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isPreparing, setIsPreparing] = useState(false);
  const [preparedMessage, setPreparedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState<string | null>(null);

  useEffect(() => {
    setArea(AREA_MAP[preselectedArea]);
  }, [preselectedArea]);

  const directWhatsAppUrl = buildWhatsAppUrl(
    'Olá, gostaria de agendar uma orientação jurídica com a Soloneto Saldanha Advocacia.',
  );

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (name.trim().length < 3) {
      nextErrors.name = 'Informe seu nome (mínimo de 3 caracteres).';
    }
    if (summary.trim().length < 10) {
      nextErrors.summary = 'Descreva brevemente sua dúvida (mínimo de 10 caracteres).';
    }
    if (!lgpdAccepted) {
      nextErrors.lgpd = 'Confirme a ciência da Política de Privacidade para continuar.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCopyError(null);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setPreparedMessage(null);
      return;
    }

    setErrors({});
    setIsPreparing(true);

    const formatted = [
      `Olá, Dr. ${FIRM_INFO.lawyerName}. Gostaria de solicitar orientação jurídica.`,
      '',
      `Nome: ${name.trim()}`,
      `Área: ${area}`,
      `Resumo: ${summary.trim()}`,
    ].join('\n');

    window.setTimeout(() => {
      setPreparedMessage(formatted);
      setIsPreparing(false);
    }, 240);
  };

  const handleCopyMessage = async () => {
    if (!preparedMessage) return;
    setCopyError(null);
    try {
      await navigator.clipboard.writeText(preparedMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyError('Não foi possível copiar. Utilize o botão de abertura no WhatsApp.');
    }
  };

  return (
    <section
      id="contato"
      className="relative bg-gradient-to-b from-[#14243D] via-[#14243D] to-[#0D1829] py-14 text-white sm:py-18 lg:py-22"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C6A15B]/40 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Coluna esquerda: Canais diretos */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="font-sans text-xs font-semibold tracking-[0.18em] text-[#C6A15B] uppercase">
                Contato
              </p>
              <h2 className="heading-section mt-2.5 text-white">Fale com o Advogado</h2>
              <p className="mt-3 font-sans text-sm leading-[1.7] text-slate-300 sm:text-base">
                Atendimento direto pelo WhatsApp oficial ou preencha os 3 campos ao lado para
                enviar sua dúvida estruturada.
              </p>

              <div className="mt-7">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 bg-[#C6A15B] px-6 py-3.5 font-sans text-sm font-semibold text-[#14243D] transition-colors duration-200 hover:bg-[#D4B577] sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>WhatsApp ({FIRM_INFO.whatsappDisplay})</span>
                </a>
              </div>

              <dl className="mt-8 space-y-4 border-t border-white/15 pt-6 font-sans text-sm">
                <div className="flex items-center gap-3.5">
                  <Phone className="h-4 w-4 shrink-0 text-[#C6A15B]" aria-hidden="true" />
                  <dd className="tabular-nums font-medium text-white">
                    {FIRM_INFO.whatsappDisplay}
                  </dd>
                </div>

                <div className="flex items-center gap-3.5">
                  <Instagram className="h-4 w-4 shrink-0 text-[#C6A15B]" aria-hidden="true" />
                  <dd>
                    <a
                      href={FIRM_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-slate-200 transition-colors hover:text-[#C6A15B]"
                    >
                      {FIRM_INFO.instagramHandle}
                    </a>
                  </dd>
                </div>

                <div className="flex items-center gap-3.5">
                  <Mail className="h-4 w-4 shrink-0 text-[#C6A15B]" aria-hidden="true" />
                  <dd className="break-all text-slate-200">{FIRM_INFO.emailPlaceholder}</dd>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C6A15B]" aria-hidden="true" />
                  <dd className="text-slate-200">
                    {FIRM_INFO.locationAddressPlaceholder} · {FIRM_INFO.coverage}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Coluna direita: Formulário compacto de 3 campos */}
          <div className="bg-white p-5 text-[#14243D] sm:p-8 lg:col-span-7">
            <h3 className="font-serif text-lg font-medium tracking-[0.03em] text-[#14243D] uppercase sm:text-xl">
              Enviar Mensagem Rápida pelo WhatsApp
            </h3>

            {!preparedMessage ? (
              <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4 font-sans">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold tracking-wide text-[#14243D] uppercase"
                    >
                      Nome <span className="text-[#491D30]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome completo"
                      aria-invalid={Boolean(errors.name)}
                      className="mt-1.5 block min-h-[44px] w-full border border-[#14243D]/25 bg-[#F8F6F2]/60 px-3.5 py-2 text-sm text-[#14243D] placeholder:text-slate-400 focus:border-[#14243D] focus:bg-white focus:outline-none"
                    />
                    {errors.name && (
                      <p role="alert" className="mt-1 text-xs font-medium text-[#491D30]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-area"
                      className="block text-xs font-semibold tracking-wide text-[#14243D] uppercase"
                    >
                      Área jurídica
                    </label>
                    <select
                      id="contact-area"
                      name="area"
                      value={area}
                      onChange={(e) => setArea(e.target.value as ContactAreaValue)}
                      className="mt-1.5 block min-h-[44px] w-full border border-[#14243D]/25 bg-[#F8F6F2]/60 px-3.5 py-2 text-sm text-[#14243D] focus:border-[#14243D] focus:bg-white focus:outline-none"
                    >
                      <option value="Direito Trabalhista">Direito Trabalhista</option>
                      <option value="Direito Civil">Direito Civil</option>
                      <option value="Direito Previdenciário">Direito Previdenciário</option>
                      <option value="Outro assunto jurídico">Outro assunto jurídico</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-summary"
                    className="block text-xs font-semibold tracking-wide text-[#14243D] uppercase"
                  >
                    Resumo da dúvida <span className="text-[#491D30]">*</span>
                  </label>
                  <textarea
                    id="contact-summary"
                    name="summary"
                    rows={3}
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="Explique brevemente o seu caso..."
                    aria-invalid={Boolean(errors.summary)}
                    className="mt-1.5 block w-full border border-[#14243D]/25 bg-[#F8F6F2]/60 px-3.5 py-2 text-sm leading-relaxed text-[#14243D] placeholder:text-slate-400 focus:border-[#14243D] focus:bg-white focus:outline-none"
                  />
                  {errors.summary && (
                    <p role="alert" className="mt-1 text-xs font-medium text-[#491D30]">
                      {errors.summary}
                    </p>
                  )}
                </div>

                <div>
                  <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-slate-600">
                    <input
                      type="checkbox"
                      checked={lgpdAccepted}
                      onChange={(e) => setLgpdAccepted(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-[#14243D]"
                    />
                    <span>
                      Concordo com a{' '}
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="font-semibold text-[#14243D] underline underline-offset-2 hover:text-[#491D30] cursor-pointer"
                      >
                        Política de Privacidade (LGPD)
                      </button>{' '}
                      para iniciar este contato via WhatsApp.
                    </span>
                  </label>
                  {errors.lgpd && (
                    <p role="alert" className="mt-1 text-xs font-medium text-[#491D30]">
                      {errors.lgpd}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isPreparing}
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 bg-[#14243D] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1C3152] disabled:opacity-70 cursor-pointer"
                >
                  {isPreparing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-[#C6A15B]" aria-hidden="true" />
                      <span>Preparando mensagem...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="h-4 w-4 text-[#C6A15B]" aria-hidden="true" />
                      <span>Preparar mensagem no WhatsApp</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="mt-5 space-y-4 font-sans" role="status" aria-live="polite">
                <pre className="max-h-48 overflow-y-auto whitespace-pre-wrap border border-[#14243D]/15 bg-[#F8F6F2] p-4 font-sans text-xs leading-relaxed text-[#14243D]">
                  {preparedMessage}
                </pre>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={buildWhatsAppUrl(preparedMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 bg-[#491D30] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5C263D]"
                  >
                    <span>Abrir no WhatsApp</span>
                    <ExternalLink className="h-4 w-4 text-[#C6A15B]" aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex min-h-[46px] items-center justify-center gap-2 border border-[#14243D]/25 bg-white px-5 py-3 text-sm font-semibold text-[#14243D] transition-colors hover:border-[#14243D] cursor-pointer whitespace-nowrap"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-[#491D30]" aria-hidden="true" />
                        <span>Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" aria-hidden="true" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>

                {copyError && (
                  <p role="alert" className="text-xs font-medium text-[#491D30]">
                    {copyError}
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setPreparedMessage(null);
                    setCopied(false);
                    setCopyError(null);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 transition-colors hover:text-[#14243D] cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Editar mensagem</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

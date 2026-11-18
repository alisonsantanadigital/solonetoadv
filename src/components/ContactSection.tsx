import { FormEvent, useEffect, useState } from 'react';
import {
  Check,
  Copy,
  ExternalLink,
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
  phone?: string;
  email?: string;
  summary?: string;
  lgpd?: string;
}

function formatBrazilPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ContactSection({ preselectedArea, onOpenPrivacy }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState<ContactAreaValue>(AREA_MAP[preselectedArea]);
  const [modality, setModality] = useState('Atendimento Digital (Todo o Brasil)');
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
    'Olá, gostaria de entrar em contato com a Soloneto Saldanha Advocacia.',
  );

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    const trimmedName = name.trim();
    const phoneDigits = phone.replace(/\D/g, '');
    const trimmedEmail = email.trim();
    const trimmedSummary = summary.trim();

    if (trimmedName.length < 3) {
      nextErrors.name = 'Informe seu nome completo (mínimo de 3 caracteres).';
    }
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      nextErrors.phone = 'Informe um número de telefone ou WhatsApp válido com DDD.';
    }
    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = 'O endereço de e-mail informado não parece válido.';
    }
    if (trimmedSummary.length < 15) {
      nextErrors.summary =
        'Descreva brevemente sua dúvida ou situação (mínimo de 15 caracteres).';
    }
    if (!lgpdAccepted) {
      nextErrors.lgpd =
        'É necessário confirmar a ciência da Política de Privacidade para estruturar o contato.';
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

    const lines = [
      `Olá, Dr. ${FIRM_INFO.lawyerName}. Gostaria de solicitar orientação jurídica.`,
      '',
      `Nome: ${name.trim()}`,
      `Telefone/WhatsApp: ${phone.trim()}`,
      email.trim() ? `E-mail: ${email.trim()}` : null,
      `Área de interesse: ${area}`,
      `Modalidade preferida: ${modality}`,
      '',
      'Resumo inicial:',
      summary.trim(),
    ].filter((line): line is string => line !== null);

    const formatted = lines.join('\n');

    window.setTimeout(() => {
      setPreparedMessage(formatted);
      setIsPreparing(false);
    }, 280);
  };

  const handleCopyMessage = async () => {
    if (!preparedMessage) return;
    setCopyError(null);
    try {
      await navigator.clipboard.writeText(preparedMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyError(
        'Não foi possível copiar automaticamente. Utilize o botão de abertura no WhatsApp acima.',
      );
    }
  };

  const handleResetPrepared = () => {
    setPreparedMessage(null);
    setCopied(false);
    setCopyError(null);
  };

  return (
    <section
      id="contato"
      className="relative bg-gradient-to-b from-[#14243D] via-[#14243D] to-[#0D1829] py-16 text-white sm:py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C6A15B]/40 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Coluna esquerda: Canais oficiais de contato */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="font-sans text-xs font-semibold tracking-[0.18em] text-[#C6A15B] uppercase">
                Contato Institucional
              </p>
              <h2 className="heading-section mt-3 text-white">
                Inicie Seu Atendimento Jurídico com Segurança e Objetividade
              </h2>
              <p className="mt-4 font-sans text-[15px] leading-[1.7] text-slate-300 sm:text-base">
                Entre em contato diretamente pelo WhatsApp oficial ou utilize o formulário ao lado
                para organizar os dados da sua consulta antes de enviar sua mensagem.
              </p>

              <div className="mt-8">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 bg-[#C6A15B] px-6 py-3.5 font-sans text-sm font-semibold text-[#14243D] transition-colors duration-200 hover:bg-[#D4B577] sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Conversar pelo WhatsApp ({FIRM_INFO.whatsappDisplay})</span>
                </a>
              </div>

              <dl className="mt-10 space-y-6 border-t border-white/15 pt-8 font-sans text-sm">
                <div className="flex items-start gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#C6A15B]" aria-hidden="true" />
                  <div>
                    <dt className="font-medium text-slate-300">WhatsApp e Telefone Oficial</dt>
                    <dd className="mt-1 tabular-nums text-base font-semibold text-white">
                      <a
                        href={`tel:+${FIRM_INFO.whatsappDigits}`}
                        className="transition-colors hover:text-[#C6A15B]"
                      >
                        {FIRM_INFO.whatsappDisplay}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#C6A15B]" aria-hidden="true" />
                  <div className="min-w-0">
                    <dt className="font-medium text-slate-300">E-mail institucional (modelo)</dt>
                    <dd className="mt-1 break-all text-white">{FIRM_INFO.emailPlaceholder}</dd>
                    <p className="mt-0.5 text-xs text-slate-400">{FIRM_INFO.emailNote}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#C6A15B]" aria-hidden="true" />
                  <div>
                    <dt className="font-medium text-slate-300">Base de Atendimento</dt>
                    <dd className="mt-1 text-white">{FIRM_INFO.locationAddressPlaceholder}</dd>
                    <p className="mt-0.5 text-xs text-slate-400">{FIRM_INFO.coverage}</p>
                  </div>
                </div>
              </dl>
            </div>

            <p className="mt-10 border-t border-white/10 pt-5 font-sans text-xs leading-relaxed text-slate-400">
              Horário de referência: {FIRM_INFO.hoursPlaceholder}. O envio de mensagem inicial não
              caracteriza contratação automática nem cria vínculo de mandato antes da análise prévia.
            </p>
          </div>

          {/* Coluna direita: Construtor Validado de Mensagem para WhatsApp */}
          <div className="bg-white p-5 text-[#14243D] sm:p-8 lg:col-span-7 lg:p-10">
            <div className="border-b border-[#14243D]/10 pb-5">
              <h3 className="font-serif text-xl font-medium tracking-[0.03em] text-[#14243D] uppercase sm:text-2xl">
                Preparar Atendimento via WhatsApp
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-slate-600">
                Preencha os campos abaixo para validar suas informações e gerar a mensagem
                estruturada diretamente para o WhatsApp oficial do escritório.
              </p>
            </div>

            {!preparedMessage ? (
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5 font-sans">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold tracking-wide text-[#14243D] uppercase"
                    >
                      Nome completo <span className="text-[#491D30]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex.: Maria Oliveira"
                      aria-invalid={Boolean(errors.name)}
                      className="mt-2 block min-h-[46px] w-full border border-[#14243D]/25 bg-[#F8F6F2]/60 px-3.5 py-2.5 text-sm text-[#14243D] placeholder:text-slate-400 focus:border-[#14243D] focus:bg-white focus:outline-none"
                    />
                    {errors.name && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-[#491D30]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold tracking-wide text-[#14243D] uppercase"
                    >
                      Telefone / WhatsApp <span className="text-[#491D30]">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(formatBrazilPhone(e.target.value))}
                      placeholder="(11) 99999-9999"
                      aria-invalid={Boolean(errors.phone)}
                      className="mt-2 block min-h-[46px] w-full tabular-nums border border-[#14243D]/25 bg-[#F8F6F2]/60 px-3.5 py-2.5 text-sm text-[#14243D] placeholder:text-slate-400 focus:border-[#14243D] focus:bg-white focus:outline-none"
                    />
                    {errors.phone && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-[#491D30]">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold tracking-wide text-[#14243D] uppercase"
                    >
                      E-mail (opcional)
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nome@exemplo.com.br"
                      aria-invalid={Boolean(errors.email)}
                      className="mt-2 block min-h-[46px] w-full border border-[#14243D]/25 bg-[#F8F6F2]/60 px-3.5 py-2.5 text-sm text-[#14243D] placeholder:text-slate-400 focus:border-[#14243D] focus:bg-white focus:outline-none"
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-[#491D30]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-area"
                      className="block text-xs font-semibold tracking-wide text-[#14243D] uppercase"
                    >
                      Área de interesse
                    </label>
                    <select
                      id="contact-area"
                      name="area"
                      value={area}
                      onChange={(e) => setArea(e.target.value as ContactAreaValue)}
                      className="mt-2 block min-h-[46px] w-full border border-[#14243D]/25 bg-[#F8F6F2]/60 px-3.5 py-2.5 text-sm text-[#14243D] focus:border-[#14243D] focus:bg-white focus:outline-none"
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
                    htmlFor="contact-modality"
                    className="block text-xs font-semibold tracking-wide text-[#14243D] uppercase"
                  >
                    Preferência de atendimento
                  </label>
                  <select
                    id="contact-modality"
                    name="modality"
                    value={modality}
                    onChange={(e) => setModality(e.target.value)}
                    className="mt-2 block min-h-[46px] w-full border border-[#14243D]/25 bg-[#F8F6F2]/60 px-3.5 py-2.5 text-sm text-[#14243D] focus:border-[#14243D] focus:bg-white focus:outline-none"
                  >
                    <option value="Atendimento Digital (Todo o Brasil)">
                      Atendimento Digital (Todo o Brasil)
                    </option>
                    <option value="Atendimento Presencial em São Paulo (sob agendamento)">
                      Atendimento Presencial em São Paulo (sob agendamento)
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-summary"
                    className="block text-xs font-semibold tracking-wide text-[#14243D] uppercase"
                  >
                    Breve relato da dúvida <span className="text-[#491D30]">*</span>
                  </label>
                  <textarea
                    id="contact-summary"
                    name="summary"
                    rows={4}
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="Descreva de forma resumida o contexto da questão trabalhista, cível ou previdenciária..."
                    aria-invalid={Boolean(errors.summary)}
                    className="mt-2 block w-full border border-[#14243D]/25 bg-[#F8F6F2]/60 px-3.5 py-2.5 text-sm leading-relaxed text-[#14243D] placeholder:text-slate-400 focus:border-[#14243D] focus:bg-white focus:outline-none"
                  />
                  {errors.summary && (
                    <p role="alert" className="mt-1.5 text-xs font-medium text-[#491D30]">
                      {errors.summary}
                    </p>
                  )}
                </div>

                <div>
                  <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-slate-600">
                    <input
                      type="checkbox"
                      checked={lgpdAccepted}
                      onChange={(e) => setLgpdAccepted(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-[#14243D]"
                    />
                    <span>
                      Li e compreendi a{' '}
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="font-semibold text-[#14243D] underline underline-offset-2 hover:text-[#491D30] cursor-pointer"
                      >
                        Política de Privacidade (LGPD)
                      </button>{' '}
                      e autorizo o preparo desta mensagem para contato via WhatsApp oficial do
                      escritório.
                    </span>
                  </label>
                  {errors.lgpd && (
                    <p role="alert" className="mt-1.5 text-xs font-medium text-[#491D30]">
                      {errors.lgpd}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isPreparing}
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 bg-[#14243D] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1C3152] disabled:opacity-70 cursor-pointer"
                  >
                    {isPreparing ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-[#C6A15B]" aria-hidden="true" />
                        <span>Preparando mensagem para WhatsApp...</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="h-4 w-4 text-[#C6A15B]" aria-hidden="true" />
                        <span>Preparar mensagem no WhatsApp</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-6 space-y-6 font-sans" role="status" aria-live="polite">
                <div className="border border-[#14243D]/15 bg-[#F8F6F2] p-5">
                  <p className="text-xs font-semibold tracking-wider text-[#491D30] uppercase">
                    Mensagem estruturada com sucesso
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Revise o texto abaixo e clique em &ldquo;Abrir no WhatsApp&rdquo; para
                    encaminhar diretamente para {FIRM_INFO.whatsappDisplay}.
                  </p>

                  <pre className="mt-4 max-h-56 overflow-y-auto whitespace-pre-wrap border border-[#14243D]/10 bg-white p-4 font-sans text-xs leading-relaxed text-[#14243D]">
                    {preparedMessage}
                  </pre>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={buildWhatsAppUrl(preparedMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 bg-[#491D30] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#5C263D]"
                  >
                    <span>Abrir no WhatsApp</span>
                    <ExternalLink className="h-4 w-4 text-[#C6A15B]" aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 border border-[#14243D]/25 bg-white px-5 py-3.5 text-sm font-semibold text-[#14243D] transition-colors hover:border-[#14243D] cursor-pointer whitespace-nowrap"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-[#491D30]" aria-hidden="true" />
                        <span>Texto copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" aria-hidden="true" />
                        <span>Copiar texto</span>
                      </>
                    )}
                  </button>
                </div>

                {copyError && (
                  <p role="alert" className="text-xs font-medium text-[#491D30]">
                    {copyError}
                  </p>
                )}

                <div className="border-t border-[#14243D]/10 pt-4">
                  <button
                    type="button"
                    onClick={handleResetPrepared}
                    className="inline-flex min-h-[36px] items-center gap-2 text-xs font-semibold text-slate-600 transition-colors hover:text-[#14243D] cursor-pointer"
                  >
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Editar informações preenchidas</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

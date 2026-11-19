export type PracticeAreaId = 'trabalhista' | 'civil' | 'previdenciario';

export interface PracticeArea {
  id: PracticeAreaId;
  title: string;
  summary: string;
  topics: string[];
  ctaLabel: string;
}

export interface LegalArticle {
  slug: string;
  title: string;
  category: 'Direito Trabalhista' | 'Direito Civil' | 'Direito Previdenciário';
  areaId: PracticeAreaId;
  publishedAt: string;
  publishedIso: string;
  readingTime: string;
  summary: string;
  seoDescription: string;
  pullQuote: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  checklist: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceStep {
  index: string;
  title: string;
  description: string;
}

export interface DifferentialItem {
  title: string;
  description: string;
}

export const FIRM_INFO = {
  name: 'Soloneto Saldanha Advocacia',
  shortName: 'Soloneto Saldanha',
  lawyerName: 'Soloneto Saldanha',
  lawyerPhoto: '/assets/aistudio/Gemini_Generated_Image_fodvumfodvumfodv_72662867.jpg',
  lawyerPhotoAlt:
    'Retrato profissional do advogado Soloneto Saldanha em escritório de advocacia',
  whatsappDisplay: '+55 11 96933-5179',
  whatsappDigits: '5511969335179',
  phoneDisplay: '(11) 96933-5179',
  emailPlaceholder: 'contato@solonetosaldanha.adv.br',
  emailNote: 'E-mail editável conforme domínio oficial.',
  oabPlaceholder: 'OAB/SP — Registro a confirmar',
  educationPlaceholder: 'Formação e especializações a inserir pelo titular',
  locationBase: 'São Paulo – SP',
  locationAddressPlaceholder: 'São Paulo – SP (Endereço completo a definir)',
  coverage: 'Presencial sob agendamento em São Paulo e digital em todo o Brasil',
  hoursPlaceholder: 'Segunda a sexta, 09h às 18h (Brasília)',
  copyrightYear: 2026,
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${FIRM_INFO.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'trabalhista',
    title: 'Direito Trabalhista',
    summary:
      'Orientação e defesa técnica em relações de emprego, verbas rescisórias e cumprimento de direitos previstos na CLT.',
    topics: [
      'Reconhecimento de vínculo empregatício',
      'Rescisão contratual, FGTS e verbas devidas',
      'Horas extras, jornada e adicionais legais',
      'Acidentes de trabalho e disputas contratuais',
    ],
    ctaLabel: 'Consultar Trabalhista',
  },
  {
    id: 'civil',
    title: 'Direito Civil',
    summary:
      'Assessoria preventiva e judicial em contratos, responsabilidade civil, obrigações e proteção patrimonial.',
    topics: [
      'Elaboração e revisão de contratos particulares',
      'Indenizações e responsabilidade civil',
      'Cobranças, inadimplemento e acordos',
      'Questões imobiliárias e de consumo',
    ],
    ctaLabel: 'Consultar Civil',
  },
  {
    id: 'previdenciario',
    title: 'Direito Previdenciário',
    summary:
      'Planejamento contributivo e acompanhamento técnico de requerimentos e revisões de benefícios junto ao INSS.',
    topics: [
      'Planejamento previdenciário e análise do CNIS',
      'Aposentadorias e regras de transição',
      'Auxílios por incapacidade e pensão por morte',
      'Revisão de benefícios e recursos no INSS',
    ],
    ctaLabel: 'Consultar Previdenciário',
  },
];

export const SERVICE_STEPS: ServiceStep[] = [
  {
    index: '01',
    title: 'Escuta e Triagem Inicial',
    description:
      'Você relata sua dúvida pelo WhatsApp ou formulário e identificamos rapidamente a área jurídica e a urgência do caso.',
  },
  {
    index: '02',
    title: 'Análise Documental e Técnica',
    description:
      'Indicamos os documentos necessários e avaliamos prazos, riscos e caminhos legais com base exclusiva nos fatos e na lei.',
  },
  {
    index: '03',
    title: 'Condução Clara e Direta',
    description:
      'Definida a estratégia, conduzimos a atuação extrajudicial ou judicial com atualização contínua e linguagem acessível.',
  },
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    title: 'Atendimento direto',
    description: 'Cada demanda é examinada de forma individualizada, sem respostas padronizadas.',
  },
  {
    title: 'Comunicação objetiva',
    description: 'Explicamos termos técnicos, etapas e possibilidades reais com transparência.',
  },
  {
    title: 'Ética e sigilo (OAB)',
    description: 'Atuação pautada pela confidencialidade e sem promessas irreais de resultado.',
  },
];

export const LEGAL_ARTICLES: LegalArticle[] = [
  {
    slug: 'rescisao-trabalhista-e-verbas-prazos-documentos',
    title: 'Rescisão trabalhista: documentos essenciais e prazos para conferência',
    category: 'Direito Trabalhista',
    areaId: 'trabalhista',
    publishedAt: '10 de novembro de 2026',
    publishedIso: '2026-11-10',
    readingTime: '5 min de leitura',
    summary:
      'Saiba quais registros reunir no desligamento e como conferir TRCT, aviso prévio e depósitos do FGTS.',
    seoDescription:
      'Guia informativo sobre rescisão trabalhista, prazos legais de quitação e documentos recomendados para conferência técnica.',
    pullQuote:
      'A organização documental logo após o desligamento permite uma leitura objetiva do contrato e evita que prazos legais passem despercebidos.',
    sections: [
      {
        heading: 'A importância da conferência documental no desligamento',
        paragraphs: [
          'O encerramento de um contrato de trabalho envolve obrigações formais e financeiras cuja exatidão depende da modalidade de desligamento — dispensa sem justa causa, pedido de demissão ou acordo.',
          'Recomenda-se guardar cópias legíveis do Termo de Rescisão (TRCT), aviso prévio, últimos contracheques e extrato analítico do FGTS antes de assinar documentos que gerem dúvidas.',
        ],
      },
      {
        heading: 'Prazos legais e verificação de parcelas',
        paragraphs: [
          'A legislação prevê o prazo de até 10 dias corridos após o término do contrato para pagamento das verbas rescisórias. Divergências em saldo de salário, férias, 13º ou horas extras exigem exame técnico individualizado.',
        ],
      },
    ],
    checklist: [
      'Carteira de Trabalho física ou extrato da Carteira Digital.',
      'Termo de Rescisão (TRCT) e comprovante de pagamento.',
      'Aviso prévio e extrato completo de depósitos do FGTS.',
      'Holerites e espelhos de ponto recentes.',
    ],
  },
  {
    slug: 'revisao-contratual-e-responsabilidade-civil-orientacoes',
    title: 'Contratos particulares e responsabilidade civil: cuidados preventivos',
    category: 'Direito Civil',
    areaId: 'civil',
    publishedAt: '02 de novembro de 2026',
    publishedIso: '2026-11-02',
    readingTime: '4 min de leitura',
    summary:
      'Por que a leitura técnica de cláusulas de multa, rescisão e garantias reduz conflitos em negociações civis.',
    seoDescription:
      'Orientações informativas sobre análise preventiva de contratos civis, cláusulas de responsabilidade e resolução equilibrada de conflitos.',
    pullQuote:
      'Um contrato bem redigido oferece previsibilidade e segurança jurídica caso surjam divergências entre as partes.',
    sections: [
      {
        heading: 'Clareza nas obrigações e equilíbrio contratual',
        paragraphs: [
          'Grande parte das disputas cíveis decorre de contratos genéricos assinados sem exame prévio de prazos, reajustes, multas e hipóteses de rescisão.',
          'A revisão preventiva verifica se o documento reflete fielmente o combinado, prevenindo encargos desproporcionais.',
        ],
      },
      {
        heading: 'Registros diante de descumprimento',
        paragraphs: [
          'Em caso de inadimplemento, preservar contratos, comprovantes bancários e notificações por escrito permite avaliar soluções extrajudiciais ou medidas reparatórias cabíveis.',
        ],
      },
    ],
    checklist: [
      'Via integral do contrato assinado e eventuais aditivos.',
      'Comprovantes de pagamentos, recibos ou notas fiscais.',
      'Registros de conversas e notificações formais trocadas.',
    ],
  },
  {
    slug: 'planejamento-previdenciario-e-documentacao-inss',
    title: 'Planejamento previdenciário e CNIS: como organizar seu histórico no INSS',
    category: 'Direito Previdenciário',
    areaId: 'previdenciario',
    publishedAt: '24 de outubro de 2026',
    publishedIso: '2026-10-24',
    readingTime: '6 min de leitura',
    summary:
      'Entenda o papel do CNIS na contagem do tempo de contribuição e como corrigir pendências antes do pedido.',
    seoDescription:
      'Entenda como funciona a conferência do CNIS e a organização documental no planejamento previdenciário junto ao INSS.',
    pullQuote:
      'Revisar o histórico contributivo com antecedência evita atrasos administrativos e lacunas documentais no pedido.',
    sections: [
      {
        heading: 'O papel do CNIS nos requerimentos do INSS',
        paragraphs: [
          'O Cadastro Nacional de Informações Sociais (CNIS) concentra vínculos e contribuições usados para calcular benefícios. É comum haver períodos sem data de saída ou salários divergentes.',
          'Identificar essas pendências antes de protocolar o pedido evita atrasos e indeferimentos evitáveis.',
        ],
      },
      {
        heading: 'Documentos que comprovam períodos de trabalho',
        paragraphs: [
          'Carteiras de trabalho antigas, carnês de contribuição e o Perfil Profissiográfico Previdenciário (PPP) auxiliam na retificação cadastral e na análise técnica do melhor enquadramento legal.',
        ],
      },
    ],
    checklist: [
      'Extrato atualizado do CNIS (Meu INSS).',
      'Carteiras de Trabalho físicas e digitais.',
      'Carnês de recolhimento (GPS) e PPP, quando aplicável.',
      'Cartas de concessão ou decisões anteriores do INSS.',
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-quando-procurar',
    question: 'Quando procurar orientação jurídica?',
    answer:
      'Tanto preventivamente — antes de assinar contratos, acordos rescisórios ou pedir benefícios no INSS — quanto diante de conflitos já existentes, notificações ou dúvidas sobre prazos.',
  },
  {
    id: 'faq-documentos',
    question: 'Quais documentos separar para o primeiro contato?',
    answer:
      'Documentos básicos relacionados à dúvida: carteira de trabalho e TRCT (Trabalhista), contratos e comprovantes (Civil) ou extrato do CNIS e cartas do INSS (Previdenciário). Se faltar algum arquivo, orientamos como obtê-lo.',
  },
  {
    id: 'faq-contato',
    question: 'Como funciona o atendimento presencial e digital?',
    answer:
      'Você pode iniciar pelo WhatsApp (+55 11 96933-5179) ou pelo formulário abaixo. Atendemos presencialmente em São Paulo – SP sob agendamento e digitalmente em todo o Brasil.',
  },
  {
    id: 'faq-consulta',
    question: 'A análise inicial garante resultado no processo?',
    answer:
      'Não. Seguindo o Código de Ética da OAB, toda orientação baseia-se exclusivamente nos documentos e na legislação vigente, com transparência sobre riscos e sem promessa de resultado.',
  },
];

export const PRIVACY_POLICY_SECTIONS = [
  {
    title: '1. Compromisso com a Proteção de Dados (LGPD)',
    content: [
      'A Soloneto Saldanha Advocacia observa integralmente a Lei nº 13.709/2018 (LGPD) e o sigilo profissional da advocacia.',
      'Este site tem caráter exclusivamente institucional e não mantém cadastros permanentes ou áreas restritas.',
    ],
  },
  {
    title: '2. Dados do formulário de contato',
    content: [
      'Os dados informados (nome, área jurídica e breve relato) são usados apenas no seu dispositivo para montar a mensagem encaminhada por você ao WhatsApp oficial (+55 11 96933-5179).',
    ],
  },
  {
    title: '3. Direitos do titular',
    content: [
      'Solicitações de acesso, correção ou eliminação de dados após eventual atendimento podem ser feitas pelos canais oficiais do escritório.',
    ],
  },
];

export const LEGAL_NOTICE_SECTIONS = [
  {
    title: '1. Caráter informativo e ética profissional (OAB)',
    content: [
      'Todo o conteúdo publicado neste site tem finalidade exclusivamente informativa, em conformidade com a Lei nº 8.906/1994 e o Provimento CFOAB nº 205/2021, não substituindo consulta jurídica individualizada.',
    ],
  },
  {
    title: '2. Ausência de vínculo automático',
    content: [
      'O envio de mensagem inicial não estabelece automaticamente relação cliente-advogado nem procuração, que dependem de análise prévia e contratação formal.',
    ],
  },
];

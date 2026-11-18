export type PracticeAreaId = 'trabalhista' | 'civil' | 'previdenciario';

export interface PracticeTopic {
  index: string;
  title: string;
  description: string;
}

export interface PracticeArea {
  id: PracticeAreaId;
  title: string;
  subtitle: string;
  summary: string;
  scopeNote: string;
  ctaLabel: string;
  topics: PracticeTopic[];
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
  index: string;
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
  emailNote: 'Endereço de e-mail institucional editável conforme domínio oficial do escritório.',
  oabPlaceholder: 'OAB/SP — Registro profissional a confirmar',
  educationPlaceholder: 'Formação acadêmica e especializações a inserir pelo titular',
  locationBase: 'São Paulo – SP',
  locationAddressPlaceholder: 'São Paulo – SP (Endereço completo do escritório a definir)',
  coverage: 'Atendimento presencial sob agendamento em São Paulo e atendimento digital em todo o Brasil',
  hoursPlaceholder: 'Segunda a sexta-feira, das 09h00 às 18h00 (horário de Brasília)',
  copyrightYear: 2026,
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${FIRM_INFO.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'trabalhista',
    title: 'Direito Trabalhista',
    subtitle: 'Relações de trabalho, verbas contratuais e proteção jurídica',
    summary:
      'Orientação técnica e atuação consultiva ou contenciosa voltada à análise equilibrada de vínculos empregatícios, deveres contratuais e direitos previstos na legislação trabalhista.',
    scopeNote:
      'Os temas abaixo possuem caráter informativo e sua condução depende de confirmação documental e análise jurídica individualizada.',
    ctaLabel: 'Consultar sobre Direito Trabalhista',
    topics: [
      {
        index: '01',
        title: 'Reconhecimento de vínculo empregatício',
        description:
          'Avaliação técnica da presença dos requisitos legais da relação de emprego — pessoalidade, habitualidade, subordinação e onerosidade — com exame detalhado de provas e registros.',
      },
      {
        index: '02',
        title: 'Rescisão contratual e verbas rescisórias',
        description:
          'Conferência de cálculos, prazos legais de pagamento, aviso prévio, saldo de salário, férias proporcionais, 13º salário, FGTS e modalidades de desligamento.',
      },
      {
        index: '03',
        title: 'Horas extras e adicionais legais',
        description:
          'Análise de controle de jornada, banco de horas, trabalho noturno, intervalos suprimidos e eventuais adicionais previstos em lei ou norma coletiva.',
      },
      {
        index: '04',
        title: 'Acidentes de trabalho e saúde ocupacional',
        description:
          'Orientação jurídica diante de ocorrências ocupacionais, emissão de comunicação oficial, estabilidade provisória e apuração de responsabilidades aplicáveis.',
      },
      {
        index: '05',
        title: 'Disputas em contratos de trabalho',
        description:
          'Revisão de cláusulas contratuais, alterações de função ou remuneração, descontos indevidos e divergências surgidas durante ou após o pacto laboral.',
      },
      {
        index: '06',
        title: 'Direitos do empregado e obrigações do empregador',
        description:
          'Esclarecimento técnico sobre deveres recíprocos na relação de trabalho, prevenindo passivos e orientando a tomada de decisão fundamentada.',
      },
    ],
  },
  {
    id: 'civil',
    title: 'Direito Civil',
    subtitle: 'Contratos, obrigações, responsabilidade civil e patrimônio',
    summary:
      'Assessoria jurídica dedicada à prevenção e resolução de conflitos patrimoniais e obrigacionais, com foco na segurança contratual e na tutela responsável de interesses privados.',
    scopeNote:
      'Atuação consultiva e judicial sujeita à análise prévia dos documentos e das circunstâncias específicas de cada demanda civil.',
    ctaLabel: 'Consultar sobre Direito Civil',
    topics: [
      {
        index: '01',
        title: 'Elaboração e revisão de contratos',
        description:
          'Exame minucioso de cláusulas, garantias, penalidades e riscos jurídicos em instrumentos particulares, prestação de serviços e negócios civis.',
      },
      {
        index: '02',
        title: 'Responsabilidade civil e reparação de danos',
        description:
          'Análise técnica de situações envolvendo descumprimento de deveres legais ou contratuais e apuração de eventuais danos materiais ou morais.',
      },
      {
        index: '03',
        title: 'Obrigações e cobranças contratuais',
        description:
          'Orientação sobre inadimplemento, notificações extrajudiciais, renegociação estruturada e medidas judiciais cabíveis para cumprimento de obrigações.',
      },
      {
        index: '04',
        title: 'Relações de consumo e serviços',
        description:
          'Avaliação de falhas na prestação de serviços, cobranças contestadas, cláusulas abusivas e equilíbrio contratual à luz do ordenamento vigente.',
      },
      {
        index: '05',
        title: 'Posse, propriedade e questões imobiliárias',
        description:
          'Suporte jurídico em locações, contratos de compra e venda, distrato e regularização documental de interesses patrimoniais.',
      },
      {
        index: '06',
        title: 'Mediação e solução extrajudicial',
        description:
          'Condução técnica de tratativas e acordos formalizados com segurança jurídica, buscando reduzir litígios prolongados sempre que pertinente.',
      },
    ],
  },
  {
    id: 'previdenciario',
    title: 'Direito Previdenciário',
    subtitle: 'Benefícios do INSS, planejamento e revisões previdenciárias',
    summary:
      'Acompanhamento técnico para organização de histórico contributivo, requerimentos administrativos e avaliação de benefícios previstos no Regime Geral de Previdência Social.',
    scopeNote:
      'A concessão ou revisão de benefícios observa estritamente os requisitos legais vigentes e a documentação previdenciária comprovada.',
    ctaLabel: 'Consultar sobre Direito Previdenciário',
    topics: [
      {
        index: '01',
        title: 'Planejamento previdenciário',
        description:
          'Levantamento do Cadastro Nacional de Informações Sociais (CNIS), análise de vínculos pendentes e simulação técnica das regras aplicáveis ao caso.',
      },
      {
        index: '02',
        title: 'Aposentadorias e regras de transição',
        description:
          'Estudo individualizado sobre aposentadoria por idade, tempo de contribuição, modalidades especiais e enquadramento nas regras vigentes.',
      },
      {
        index: '03',
        title: 'Benefícios por incapacidade',
        description:
          'Orientação documental para requerimentos e recursos relacionados ao auxílio por incapacidade temporária ou aposentadoria por incapacidade permanente.',
      },
      {
        index: '04',
        title: 'Pensão por morte e dependentes',
        description:
          'Esclarecimento sobre comprovação da qualidade de segurado, dependência econômica e prazos legais para requerimento administrativo ou judicial.',
      },
      {
        index: '05',
        title: 'Acerto de vínculos e tempo rural ou especial',
        description:
          'Conferência de guias, Perfil Profissiográfico Previdenciário (PPP) e documentos complementares necessários à retificação de dados cadastrais.',
      },
      {
        index: '06',
        title: 'Revisão de benefícios e recursos administrativos',
        description:
          'Análise técnica de cartas de concessão e indeferimentos para verificar a pertinência de pedidos de revisão ou recursos nas instâncias competentes.',
      },
    ],
  },
];

export const SERVICE_STEPS: ServiceStep[] = [
  {
    index: '01',
    title: 'Escuta inicial objetiva',
    description:
      'Compreendemos o contexto da sua demanda por meio de atendimento direto via WhatsApp ou consulta agendada, identificando a área jurídica envolvida e a urgência do tema.',
  },
  {
    index: '02',
    title: 'Orientação documental',
    description:
      'Indicamos com clareza quais contratos, comprovantes, extratos ou registros oficiais são relevantes para embasar uma avaliação técnica segura.',
  },
  {
    index: '03',
    title: 'Análise jurídica fundamentada',
    description:
      'Examinamos os fatos à luz da legislação e da jurisprudência aplicável, apresentando os cenários possíveis, riscos e caminhos disponíveis sem promessas irreais.',
  },
  {
    index: '04',
    title: 'Condução transparente',
    description:
      'Definida a estratégia em comum acordo, cada etapa administrativa ou judicial é acompanhada com comunicação clara e acesso contínuo às atualizações.',
  },
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    index: '01',
    title: 'Atendimento individualizado',
    description:
      'Cada situação recebe leitura própria, respeitando as particularidades da relação jurídica, dos documentos apresentados e dos objetivos do cliente.',
  },
  {
    index: '02',
    title: 'Rigor técnico na análise',
    description:
      'Decisões jurídicas exigem método. Avaliamos prazos prescricionais, requisitos probatórios e fundamentos normativos antes de recomendar qualquer medida.',
  },
  {
    index: '03',
    title: 'Comunicação clara e acessível',
    description:
      'Traduzimos termos técnicos para uma linguagem compreensível, para que o cliente entenda cada passo e decida com consciência e tranquilidade.',
  },
  {
    index: '04',
    title: 'Ética profissional e sigilo',
    description:
      'Atuação pautada pelos deveres do Estatuto da Advocacia e pelo Código de Ética da OAB, com estrita confidencialidade sobre todas as informações compartilhadas.',
  },
  {
    index: '05',
    title: 'Alcance em São Paulo e em todo o Brasil',
    description:
      'Estrutura preparada para atendimento presencial sob agendamento na capital paulista e atuação digital ágil em processos eletrônicos em âmbito nacional.',
  },
];

export const LEGAL_ARTICLES: LegalArticle[] = [
  {
    slug: 'rescisao-trabalhista-e-verbas-prazos-documentos',
    title: 'Rescisão do contrato de trabalho: documentos essenciais e prazos legais para conferência',
    category: 'Direito Trabalhista',
    areaId: 'trabalhista',
    publishedAt: '10 de novembro de 2026',
    publishedIso: '2026-11-10',
    readingTime: '5 min de leitura',
    summary:
      'Entenda quais registros devem ser reunidos no encerramento do vínculo empregatício e como ocorre a verificação técnica do Termo de Rescisão e dos depósitos de FGTS.',
    seoDescription:
      'Guia informativo sobre rescisão trabalhista, prazos legais de quitação e documentos recomendados para conferência técnica.',
    pullQuote:
      'A organização documental logo após o desligamento permite uma leitura objetiva do contrato e evita que prazos legais passem despercebidos.',
    sections: [
      {
        heading: 'A importância da conferência documental no desligamento',
        paragraphs: [
          'O encerramento de um contrato de trabalho envolve uma série de obrigações formais e financeiras cuja exatidão depende da modalidade de desligamento — seja dispensa sem justa causa, pedido de demissão, rescisão por acordo ou término de contrato por prazo determinado.',
          'Antes de tomar qualquer decisão ou assinar documentos que suscitem dúvidas, recomenda-se guardar cópias legíveis do Termo de Rescisão do Contrato de Trabalho (TRCT), do aviso prévio, dos últimos contracheques e do extrato analítico da conta vinculada do FGTS.',
        ],
      },
      {
        heading: 'Prazos legais e verificação de parcelas',
        paragraphs: [
          'A legislação trabalhista estabelece o prazo de até 10 dias corridos, contados do término do contrato, para a entrega dos documentos rescisórios e o pagamento das verbas devidas. Eventuais inconsistências em saldo de salário, férias vencidas ou proporcionais, décimo terceiro salário e horas extras merecem exame cuidadoso.',
          'Cada contrato possui particularidades — como convenções coletivas aplicáveis, adicionais específicos ou ajustes de jornada — que tornam indispensável a análise técnica individualizada por profissional habilitado.',
        ],
      },
    ],
    checklist: [
      'Cópia da Carteira de Trabalho física ou extrato da Carteira Digital.',
      'Termo de Rescisão do Contrato de Trabalho (TRCT) e comprovante de pagamento.',
      'Comprovante do aviso prévio (trabalhado ou indenizado).',
      'Extrato completo de depósitos do FGTS e eventuais guias do seguro-desemprego.',
      'Holerites e espelhos de ponto dos meses recentes da contratação.',
    ],
  },
  {
    slug: 'revisao-contratual-e-responsabilidade-civil-orientacoes',
    title: 'Contratos particulares e responsabilidade civil: cuidados preventivos antes de assumir obrigações',
    category: 'Direito Civil',
    areaId: 'civil',
    publishedAt: '02 de novembro de 2026',
    publishedIso: '2026-11-02',
    readingTime: '4 min de leitura',
    summary:
      'Saiba por que a leitura técnica de cláusulas de multa, rescisão e garantias reduz conflitos futuros em negociações civis e contratos de prestação de serviços.',
    seoDescription:
      'Orientações informativas sobre análise preventiva de contratos civis, cláusulas de responsabilidade e resolução equilibrada de conflitos.',
    pullQuote:
      'Um contrato bem redigido não existe apenas para o momento do acordo, mas para oferecer previsibilidade quando surgem divergências.',
    sections: [
      {
        heading: 'Clareza nas obrigações e equilíbrio contratual',
        paragraphs: [
          'Grande parte das disputas judiciais na esfera cível tem origem em instrumentos redigidos de forma genérica ou assinados sem o exame prévio das consequências jurídicas de suas cláusulas. Prazos de entrega, critérios de reajuste, hipóteses de rescisão antecipada e foro competente exigem atenção redobrada.',
          'A revisão técnica preventiva busca verificar se o texto contratual reflete fielmente o que foi negociado entre as partes, evitando encargos desproporcionais ou ambiguidades interpretativas.',
        ],
      },
      {
        heading: 'Registros e notificações diante de descumprimento',
        paragraphs: [
          'Quando uma das partes deixa de cumprir obrigação assumida, a preservação de provas — como comunicações formalizadas por escrito, comprovantes bancários e notificações extrajudiciais — é determinante para uma análise jurídica consistente sobre eventuais medidas reparatórias.',
          'Nem toda controvérsia precisa evoluir imediatamente para o contencioso; muitas demandas encontram solução adequada por meio de notificação técnica e negociação documentada.',
        ],
      },
    ],
    checklist: [
      'Via integral do contrato assinado e eventuais termos aditivos.',
      'Comprovantes de pagamentos, notas fiscais ou recibos vinculados ao negócio.',
      'Registros de conversas e e-mails que demonstrem tratativas ou cobranças.',
      'Notificações enviadas ou recebidas relacionadas ao cumprimento do acordo.',
    ],
  },
  {
    slug: 'planejamento-previdenciario-e-documentacao-inss',
    title: 'Planejamento previdenciário e análise do CNIS: como preparar o histórico para o INSS',
    category: 'Direito Previdenciário',
    areaId: 'previdenciario',
    publishedAt: '24 de outubro de 2026',
    publishedIso: '2026-10-24',
    readingTime: '6 min de leitura',
    summary:
      'Compreenda o papel do Cadastro Nacional de Informações Sociais na contagem de tempo de contribuição e por que inconsistências cadastrais devem ser tratadas com antecedência.',
    seoDescription:
      'Entenda como funciona a conferência do CNIS e a organização documental no planejamento previdenciário junto ao INSS.',
    pullQuote:
      'Revisar o histórico contributivo antes do requerimento evita atrasos administrativos e permite identificar lacunas documentais com tranquilidade.',
    sections: [
      {
        heading: 'O papel central do CNIS nos requerimentos previdenciários',
        paragraphs: [
          'O Cadastro Nacional de Informações Sociais (CNIS) reúne os vínculos empregatícios, remunerações e contribuições individuais utilizadas pelo INSS para apurar tempo de contribuição e calcular benefícios. Entretanto, é frequente encontrar períodos sem data de saída registrada, salários divergentes ou indicadores de pendência.',
          'Identificar essas inconsistências apenas no momento do pedido de aposentadoria ou benefício pode atrasar a análise administrativa ou gerar indeferimentos passíveis de prevenção.',
        ],
      },
      {
        heading: 'Documentos que auxiliam na comprovação de períodos',
        paragraphs: [
          'Quando há divergência cadastral, documentos contemporâneos aos fatos — como carteiras de trabalho antigas, carnês de contribuição, fichas de registro de empregados e Perfil Profissiográfico Previdenciário (PPP) no caso de atividades sob agentes nocivos — permitem instruir o acerto de vínculos.',
          'Cada segurado possui um histórico singular; por isso, o planejamento previdenciário consiste em examinar os documentos disponíveis e comparar as regras aplicáveis de forma estritamente técnica.',
        ],
      },
    ],
    checklist: [
      'Extrato atualizado do CNIS obtido pelo portal ou aplicativo Meu INSS.',
      'Todas as Carteiras de Trabalho (físicas e digitais).',
      'Carnês de recolhimento (GPS) e comprovantes de contribuição individual, se houver.',
      'Perfil Profissiográfico Previdenciário (PPP) e laudos técnicos, quando aplicável.',
      'Cartas de concessão ou decisões anteriores emitidas pelo INSS.',
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-quando-procurar',
    question: 'Quando é recomendável procurar orientação jurídica?',
    answer:
      'A consulta jurídica é recomendada tanto de forma preventiva — antes de assinar contratos relevantes, formalizar acordos rescisórios ou protocolar requerimentos administrativos — quanto diante de conflitos já instalados, notificações ou dúvidas sobre prazos legais. A análise antecipada ajuda a evitar prejuízos decorrentes de decisões sem respaldo técnico.',
  },
  {
    id: 'faq-documentos',
    question: 'Quais documentos devo reunir antes do primeiro atendimento?',
    answer:
      'Os documentos variam conforme a área. Em demandas trabalhistas, são úteis a Carteira de Trabalho, contrato, holerites, extrato do FGTS e termo de rescisão. Na esfera cível, contratos, comprovantes de pagamento e registros de comunicação. Na área previdenciária, o extrato do CNIS, documentos pessoais, carnês e eventuais decisões do INSS. Caso ainda não possua todos os arquivos, nossa equipe orientará como obtê-los.',
  },
  {
    id: 'faq-contato',
    question: 'Como posso entrar em contato com o advogado Soloneto Saldanha?',
    answer:
      'O contato direto pode ser iniciado pelo WhatsApp oficial (+55 11 96933-5179) ou pelo formulário nesta página, que estrutura sua mensagem para atendimento rápido. O escritório possui base em São Paulo – SP, com atendimento presencial mediante agendamento prévio e atendimento digital para clientes em todo o Brasil.',
  },
  {
    id: 'faq-consulta',
    question: 'Como funciona a avaliação inicial e quais são os limites éticos da consulta?',
    answer:
      'No contato inicial realizamos uma triagem objetiva do relato e dos documentos disponíveis para identificar a natureza jurídica da questão e definir se é necessário agendar consulta técnica aprofundada. Em observância ao Código de Ética da OAB, toda orientação é baseada exclusivamente no exame dos fatos e da legislação vigente, sem promessas de resultado processual.',
  },
];

export const PRIVACY_POLICY_SECTIONS = [
  {
    title: '1. Compromisso com a Proteção de Dados (LGPD)',
    content: [
      'A Soloneto Saldanha Advocacia trata os dados pessoais eventualmente fornecidos pelos visitantes e consulentes em estrita observância à Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018) e ao sigilo profissional inerente ao exercício da advocacia.',
      'Este site possui finalidade exclusivamente informativa e institucional, não mantendo áreas de cadastro permanente, autenticação de usuários ou coleta automatizada invasiva de dados sensíveis.',
    ],
  },
  {
    title: '2. Dados informados no formulário de contato',
    content: [
      'As informações preenchidas no construtor de mensagem de contato (nome, telefone/WhatsApp, e-mail opcional, área de interesse e resumo inicial) são utilizadas unicamente no dispositivo do usuário para estruturar a mensagem que o próprio visitante opta por encaminhar ao WhatsApp oficial do escritório (+55 11 96933-5179).',
      'Não realizamos venda, compartilhamento comercial ou cessão de dados pessoais a terceiros para fins publicitários.',
    ],
  },
  {
    title: '3. Direitos do titular e canal de comunicação',
    content: [
      'Nos termos da LGPD, o titular dos dados tem direito à confirmação de tratamento, acesso, correção e eliminação de informações pessoais mantidas após eventual atendimento jurídico iniciado por WhatsApp ou e-mail.',
      'Para solicitações relacionadas à privacidade e proteção de dados, entre em contato pelo canal oficial do escritório informado na seção de Contato.',
    ],
  },
];

export const LEGAL_NOTICE_SECTIONS = [
  {
    title: '1. Caráter exclusivamente informativo e conformidade com a OAB',
    content: [
      'Todo o conteúdo publicado neste site — incluindo descrições de áreas de atuação, textos explicativos, perguntas frequentes e artigos jurídicos — tem finalidade meramente informativa e institucional, em conformidade com o Estatuto da Advocacia (Lei nº 8.906/1994), o Código de Ética e Disciplina e o Provimento CFOAB nº 205/2021.',
      'Nenhuma publicação substitui a consulta jurídica individualizada ou configura promessa de resultado favorável em demandas administrativas ou judiciais.',
    ],
  },
  {
    title: '2. Ausência de vínculo automático de mandato',
    content: [
      'O simples envio de mensagem inicial via WhatsApp ou leitura dos conteúdos deste portal não estabelece automaticamente relação cliente-advogado nem constitui procuração, a qual depende de análise prévia de viabilidade, ausência de conflito de interesses e formalização contratual.',
    ],
  },
  {
    title: '3. Propriedade intelectual e dados editáveis',
    content: [
      'Os textos institucionais, estrutura visual e conteúdos originais pertencem à Soloneto Saldanha Advocacia. Informações sinalizadas como marcadores de registro profissional (OAB/SP), endereço físico completo ou e-mail institucional aguardam confirmação definitiva do titular.',
    ],
  },
];

import { useCallback, useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { ArticleDetailView } from './components/ArticleDetailView';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LegalInsightsSection } from './components/LegalInsightsSection';
import { LegalPageView } from './components/LegalPageView';
import { PracticeAreasSection } from './components/PracticeAreasSection';
import { ServicesAndDifferentials } from './components/ServicesAndDifferentials';
import { FIRM_INFO, LEGAL_ARTICLES, PracticeAreaId } from './data/firmContent';
import { applyRouteSeo } from './utils/seo';

function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() =>
    normalizePath(window.location.pathname),
  );
  const [selectedArea, setSelectedArea] = useState<PracticeAreaId>('trabalhista');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sincronização dinâmica de SEO, OpenGraph, Canonical e Schema.org por rota
  useEffect(() => {
    if (currentPath.startsWith('/artigos/')) {
      const slug = currentPath.replace('/artigos/', '');
      const article = LEGAL_ARTICLES.find((item) => item.slug === slug);
      if (article) {
        applyRouteSeo({
          title: `${article.title} | ${FIRM_INFO.name}`,
          description: article.seoDescription,
          path: currentPath,
          type: 'article',
          article,
        });
        return;
      }
    }

    if (currentPath === '/privacidade') {
      applyRouteSeo({
        title: `Política de Privacidade (LGPD) | ${FIRM_INFO.name}`,
        description:
          'Política de Privacidade e diretrizes de proteção de dados pessoais conforme a LGPD para o site da Soloneto Saldanha Advocacia.',
        path: '/privacidade',
      });
      return;
    }

    if (currentPath === '/aviso-legal') {
      applyRouteSeo({
        title: `Aviso Legal e Ética OAB | ${FIRM_INFO.name}`,
        description:
          'Aviso legal e esclarecimentos sobre o caráter exclusivamente informativo dos conteúdos da Soloneto Saldanha Advocacia.',
        path: '/aviso-legal',
      });
      return;
    }

    applyRouteSeo({
      title: `${FIRM_INFO.name} | Direito Trabalhista, Civil e Previdenciário`,
      description:
        'Soloneto Saldanha Advocacia em São Paulo com atendimento digital em todo o Brasil. Orientação jurídica ética e técnica em Direito Trabalhista, Civil e Previdenciário.',
      path: '/',
    });
  }, [currentPath]);

  const navigatePath = useCallback((path: string) => {
    const normalized = normalizePath(path);
    if (window.location.pathname !== normalized) {
      window.history.pushState({}, '', normalized);
    }
    setCurrentPath(normalized);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const performScroll = () => {
        if (sectionId === 'inicio') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        const target = document.getElementById(sectionId);
        if (target) {
          const offsetTop = target.getBoundingClientRect().top + window.scrollY - 72;
          window.scrollTo({ top: Math.max(0, offsetTop), behavior: 'smooth' });
        }
      };

      if (currentPath !== '/') {
        window.history.pushState({}, '', '/');
        setCurrentPath('/');
        window.setTimeout(performScroll, 80);
      } else {
        performScroll();
      }
    },
    [currentPath],
  );

  const handleConsultArea = useCallback(
    (area: PracticeAreaId) => {
      setSelectedArea(area);
      scrollToSection('contato');
    },
    [scrollToSection],
  );

  const handleSelectAreaAndScroll = useCallback(
    (area: PracticeAreaId) => {
      setSelectedArea(area);
      scrollToSection('atuacao');
    },
    [scrollToSection],
  );

  const isArticleRoute = currentPath.startsWith('/artigos/');
  const articleSlug = isArticleRoute ? currentPath.replace('/artigos/', '') : '';

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-[#14243D] text-[#14243D]">
        <Header
          currentPath={currentPath}
          onNavigateSection={scrollToSection}
          onNavigatePath={navigatePath}
        />

        {isArticleRoute ? (
          <ArticleDetailView
            slug={articleSlug}
            onBackHome={() => scrollToSection('artigos')}
            onOpenArticle={(slug) => navigatePath(`/artigos/${slug}`)}
            onConsultArea={handleConsultArea}
          />
        ) : currentPath === '/privacidade' ? (
          <LegalPageView
            mode="privacy"
            onBackHome={() => navigatePath('/')}
            onContactClick={() => scrollToSection('contato')}
          />
        ) : currentPath === '/aviso-legal' ? (
          <LegalPageView
            mode="legal"
            onBackHome={() => navigatePath('/')}
            onContactClick={() => scrollToSection('contato')}
          />
        ) : (
          <main className="flex-1">
            <Hero
              onConsultClick={() => scrollToSection('contato')}
              onExplorePracticeClick={() => scrollToSection('atuacao')}
            />
            <AboutSection />
            <PracticeAreasSection
              selectedArea={selectedArea}
              onSelectArea={setSelectedArea}
              onConsultArea={handleConsultArea}
            />
            <ServicesAndDifferentials onConsultClick={() => scrollToSection('contato')} />
            <LegalInsightsSection onOpenArticle={(slug) => navigatePath(`/artigos/${slug}`)} />
            <FaqSection />
            <ContactSection
              preselectedArea={selectedArea}
              onOpenPrivacy={() => navigatePath('/privacidade')}
            />
          </main>
        )}

        <Footer
          onNavigateSection={scrollToSection}
          onSelectAreaAndScroll={handleSelectAreaAndScroll}
          onNavigatePath={navigatePath}
        />
      </div>
    </MotionConfig>
  );
}

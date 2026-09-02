import React, { useState, useEffect } from 'react';
import { ChevronRight, Home, Folder, Terminal, Cpu } from 'lucide-react';

export default function BreadcrumbBar() {
  const [activeSection, setActiveSection] = useState<'hero' | 'cases' | 'terminal' | 'skills'>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'cases', 'terminal', 'skills'] as const;
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionLabels = {
    hero: { label: 'Executive Overview', icon: Home },
    cases: { label: 'Case Dossiers (Boli, Coinroutes, TNC)', icon: Folder },
    terminal: { label: 'Interactive Command Shell', icon: Terminal },
    skills: { label: 'Competency Radar', icon: Cpu },
  };

  const current = sectionLabels[activeSection];
  const CurrentIcon = current.icon;

  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-2 relative z-20 font-mono text-xs"
    >
      <ol
        className="flex items-center gap-2 p-2 px-3 rounded-lg bg-[var(--semantic-surface-tag)] border border-[var(--semantic-border)] text-[var(--semantic-fg-subtle)]"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="flex items-center gap-1.5"
        >
          <a
            href="#hero"
            itemProp="item"
            className="hover:text-[var(--semantic-primary)] transition-colors flex items-center gap-1 text-[var(--semantic-fg)] font-bold"
          >
            <Home className="w-3.5 h-3.5 text-[var(--semantic-primary)]" />
            <span itemProp="name">Dossier Root</span>
          </a>
          <meta itemProp="position" content="1" />
        </li>

        <ChevronRight className="w-3.5 h-3.5 text-[var(--semantic-fg-subtle)]" />

        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="flex items-center gap-1.5 text-[var(--semantic-primary)] font-extrabold"
        >
          <a
            href={`#${activeSection}`}
            itemProp="item"
            className="flex items-center gap-1 text-[var(--semantic-primary)]"
          >
            <CurrentIcon className="w-3.5 h-3.5" />
            <span itemProp="name">{current.label}</span>
          </a>
          <meta itemProp="position" content="2" />
        </li>
      </ol>
    </nav>
  );
}

import React, { useState } from 'react';
import { Code2, Copy, Check, FileCode2 } from 'lucide-react';
import { CODE_SNIPPETS } from '../data/resumeData';

export default function ArchitectureInspector() {
  const [selectedSnippetId, setSelectedSnippetId] = useState<string>(CODE_SNIPPETS[0].id);
  const [copied, setCopied] = useState<boolean>(false);

  const activeSnippet = CODE_SNIPPETS.find((s) => s.id === selectedSnippetId) || CODE_SNIPPETS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code-inspector" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 font-sans">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--semantic-accent-bg)] border-2 border-[var(--semantic-accent)] text-[var(--semantic-accent)] text-xs font-mono mb-3 font-bold">
          <Code2 className="w-3.5 h-3.5" />
          <span>PRODUCTION CODE REPOSITORY • ARCHITECTURE PATTERNS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--semantic-fg)] tracking-tight">
          Frontend <span className="ds-gradient-text">Architecture Inspector</span>
        </h2>
        <p className="text-[var(--semantic-fg-muted)] text-sm sm:text-base mt-3 font-medium">
          Inspect production-tested React hooks, state reducers, and real-time streaming architectures built by Ajith Antony.
        </p>
      </div>

      {/* Code Inspector Card */}
      <div className="editorial-panel-bold p-6 sm:p-8 bg-[var(--semantic-surface-card)]">
        
        {/* Snippet Selection Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[var(--semantic-border-bold)] pb-6 mb-6">
          
          <div className="flex flex-wrap items-center gap-2">
            {CODE_SNIPPETS.map((snippet) => (
              <button
                key={snippet.id}
                onClick={() => setSelectedSnippetId(snippet.id)}
                className={`px-4 py-2 rounded-md text-xs font-mono font-bold transition-all flex items-center gap-2 border-2 ${
                  snippet.id === activeSnippet.id
                    ? 'bg-[var(--semantic-primary)] text-white border-black shadow-[3px_3px_0px_#000]'
                    : 'bg-[var(--semantic-surface)] text-[var(--semantic-fg-muted)] border-[var(--semantic-border-bold)] hover:border-[var(--semantic-primary)]'
                }`}
              >
                <FileCode2 className="w-3.5 h-3.5" />
                <span>{snippet.title}</span>
              </button>
            ))}
          </div>

          <button
            onClick={handleCopy}
            className="px-4 py-2 rounded-md bg-[var(--semantic-surface)] border-2 border-[var(--semantic-border-bold)] text-[var(--semantic-fg)] text-xs font-mono font-bold hover:border-[var(--semantic-primary)] flex items-center gap-2 shrink-0"
          >
            {copied ? <Check className="w-4 h-4 text-[var(--semantic-primary)]" /> : <Copy className="w-4 h-4 text-[var(--semantic-fg-subtle)]" />}
            <span>{copied ? 'Copied!' : 'Copy Code'}</span>
          </button>

        </div>

        {/* Snippet Header & Description */}
        <div className="mb-6 font-mono">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded bg-[var(--semantic-primary-bg)] text-[var(--semantic-primary)] border border-[var(--semantic-primary)]">
              {activeSnippet.category}
            </span>
            <span className="text-[10px] text-[var(--semantic-fg-subtle)] uppercase font-bold">Language: {activeSnippet.language}</span>
          </div>
          <h3 className="text-xl font-bold text-[var(--semantic-fg)]">{activeSnippet.title}</h3>
          <p className="text-xs text-[var(--semantic-fg-muted)] mt-1 font-sans font-medium">{activeSnippet.description}</p>
        </div>

        {/* Code View Box (Explicit Dark Workbench Container with Bright White Code Text) */}
        <div className="ds-dark-workbench p-5 sm:p-6 rounded-xl border-2 border-slate-700 overflow-x-auto font-mono text-xs text-white leading-relaxed max-h-[500px]">
          <pre>
            <code className="text-white font-bold">{activeSnippet.code}</code>
          </pre>
        </div>

      </div>

    </section>
  );
}

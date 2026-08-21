export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  metrics: string[];
  highlights: string[];
  techStack: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  domain: string;
  impactScore: string;
  summary: string;
  deliverables: string[];
  tech: string[];
  color: string;
}

export interface CodeSnippet {
  id: string;
  title: string;
  category: string;
  description: string;
  language: string;
  code: string;
}

export const PERSONAL_INFO = {
  name: 'Ajith Pallissery Antony',
  title: 'Senior Frontend Engineer',
  location: 'Dubai, UAE',
  experienceYears: '6+',
  email: 'ajithpallisseryantony@gmail.com',
  phone: '+971 589817188',
  linkedin: 'https://linkedin.com/in/ajithpallisseryantony/',
  summary:
    'Senior Frontend Engineer with 6+ years of experience architecting and scaling high-performance, real-time web applications across proptech, trading, fintech, Web3, and enterprise platforms. Specialized in React, Next.js, TypeScript, and WebSockets with deep expertise in low-latency UIs and Core Web Vitals optimization.',
  education: {
    degree: 'B.Tech in Computer Science & Engineering',
    university: 'APJ Abdul Kalam Technological University, Kerala, India',
    period: '2016 – 2020',
  },
  philosophies: [
    { title: 'Performance-First Architecture', desc: 'Optimized for low latency, sub-second loads, and high-frequency real-time WebSocket data.' },
    { title: 'Pragmatic Engineering', desc: 'Clean, maintainable TypeScript & Redux Toolkit over excessive over-engineering.' },
    { title: 'Production Stability', desc: 'Robust state management, rigorous type safety, and seamless third-party gateway integrations.' },
    { title: 'Ownership & Leadership', desc: 'End-to-end product delivery from initial architecture to peak-traffic market launch.' },
  ],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'boli',
    company: 'boli.ae',
    role: 'Senior Frontend Engineer',
    period: 'Dec 2025 – Present',
    location: 'Dubai, UAE',
    tagline: 'Fast-growing PropTech Ecosystem Launch & Core Web Platform',
    badge: 'PropTech Core',
    badgeColor: 'emerald',
    metrics: ['100% On-Time Market Launch', 'Sub-second Core Web Vitals', 'Automated Shufti KYC'],
    highlights: [
      'Spearheaded end-to-end frontend development and successful market launch of the core web platform for a fast-growing proptech ecosystem.',
      'Integrated Shufti KYC pipelines for automated real-time user identity verification, ensuring strict regulatory compliance and secure user onboarding.',
      'Implemented multiple secure payment gateways to facilitate high-value, frictionless digital transactions for Power of Attorney (POA) and automated property valuations.',
      'Diagnosed and resolved deeply embedded legacy SEO architecture and performance bottlenecks, substantially elevating organic search discoverability and boosting Core Web Vitals metrics.',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'WebSockets', 'Shufti KYC', 'Payment Gateways', 'Core Web Vitals', 'Tailwind CSS'],
  },
  {
    id: 'coinroutes',
    company: 'Coinroutes',
    role: 'Senior Frontend Engineer',
    period: 'Sept 2024 – Dec 2025',
    location: 'Dubai, UAE',
    tagline: 'Institutional High-Frequency Real-Time Crypto Trading Platform',
    badge: 'Institutional Trading',
    badgeColor: 'cyan',
    metrics: ['Sub-12ms Latency', '100% TypeScript Conversion', 'Redux Toolkit Modernization'],
    highlights: [
      'Architected and delivered high-performance, real-time trading interfaces using React, TypeScript, and WebSockets for institutional users.',
      'Built and optimized live order books and market data views handling high-frequency updates with minimal UI latency.',
      'Migrated REST-based polling to WebSocket streaming, significantly improving responsiveness and reducing backend load during peak usage.',
      'Led frontend modernization by migrating Redux Saga to Redux Toolkit, reducing boilerplate and converting entire JS codebase to TypeScript.',
      'Optimized trading charts by migrating from TradingView Advanced Charts to Lightweight Charts, improving load times while maintaining full feature parity.',
      'Designed synchronized candle + volume chart updates by coordinating API fetch cycles, eliminating inconsistent chart behavior.',
      'Implemented Ag-Grid server-side tables with dynamic layouts using flexlayout-react for advanced trading dashboards.',
    ],
    techStack: ['React', 'TypeScript', 'WebSockets', 'Redux Toolkit', 'Lightweight Charts', 'Ag-Grid', 'FlexLayout', 'Real-time Streaming'],
  },
  {
    id: 'tnc',
    company: 'TNC IT Solutions',
    role: 'Senior Frontend Engineer',
    period: 'May 2023 – Sept 2024',
    location: 'Dubai, UAE',
    tagline: 'NFT Marketplace Serving 150,000+ Active Users & DEX Platform',
    badge: 'Web3 & DEX',
    badgeColor: 'purple',
    metrics: ['150,000+ Active Users', 'Multi-chain Scanner Optimization', 'Socket.IO Engine'],
    highlights: [
      'Designed and launched a production NFT marketplace serving 150,000+ active users, including wallet integrations and secure transaction flows.',
      'Built real-time trading and marketplace features using React and Socket.IO.',
      'Developed scalable admin dashboards and analytics portals for blockchain platforms.',
      'Improved UI/UX and performance for multi-chain blockchain scanners, reducing transaction lookup times.',
      'Built a decentralized exchange (DEX) frontend enabling real-time trading interactions.',
    ],
    techStack: ['React', 'Socket.IO', 'Wallet Integrations', 'Web3', 'DEX', 'NFT Marketplace', 'Blockchain Scanners'],
  },
  {
    id: 'coolshop',
    company: 'CoolShop SRL',
    role: 'Senior Full Stack Developer',
    period: 'Aug 2022 – Apr 2023',
    location: 'Dubai, UAE',
    tagline: 'Marketing Microsites & Salesforce Data Pipelines',
    badge: 'Full Stack Enterprise',
    badgeColor: 'amber',
    metrics: ['Salesforce CloudPages Hub', 'Automated SQL Pipelines', 'Reusable UI Library'],
    highlights: [
      'Built marketing microsites and dashboards using React and Salesforce CloudPages.',
      'Developed REST APIs and data import pipelines integrating Salesforce and SQL databases.',
      'Created reusable UI components to accelerate development across multiple projects.',
    ],
    techStack: ['React', 'Salesforce CloudPages', 'REST APIs', 'SQL', 'Node.js', 'UI Component Library'],
  },
  {
    id: 'freelance',
    company: 'Freelance / Contract',
    role: 'Full Stack Developer / Development Manager',
    period: 'Dec 2021 – Aug 2022',
    location: 'Remote',
    tagline: 'Real Estate, FinTech & Travel Booking Platforms',
    badge: 'Contract Delivery',
    badgeColor: 'teal',
    metrics: ['AI Document Extraction', 'Multi-Payment Integration', 'Property Dashboards'],
    highlights: [
      'Built real estate, fintech, and travel booking platforms using React, TypeScript, and Node.js.',
      'Delivered property management dashboards, booking workflows, and admin portals.',
      'Integrated third-party services including payment gateways, email services, and AI-based document extraction.',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'AI Doc Extraction', 'Stripe', 'Booking Portals'],
  },
  {
    id: 'factweavers',
    company: 'Factweavers Technologies',
    role: 'Software Engineer',
    period: 'Sept 2020 – Nov 2021',
    location: 'India',
    tagline: 'Enterprise Dashboards & Legacy Codebase Modernization',
    badge: 'Enterprise Software',
    badgeColor: 'rose',
    metrics: ['Data Visualization Suite', 'Payment Gateways', 'Developer Mentorship'],
    highlights: [
      'Developed production web applications, dashboards, and data visualization tools.',
      'Integrated payment gateways, built APIs, and modernized legacy frontend codebases.',
      'Mentored junior developers and contributed to architectural improvements.',
    ],
    techStack: ['React', 'JavaScript', 'REST APIs', 'Data Visualization', 'Legacy Migration'],
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'boli-proptech',
    title: 'boli.ae — Core PropTech Digital Platform',
    client: 'boli.ae',
    domain: 'PropTech & Real Estate Tech',
    impactScore: '99.4/100 Core Web Vitals',
    summary:
      'Spearheaded end-to-end frontend architecture for Dubai’s fast-growing property technology ecosystem, delivering real-time identity verification and property transaction features.',
    deliverables: [
      'Shufti KYC Real-Time Automated Verification Pipeline',
      'Frictionless Power of Attorney (POA) Digital Payment Flows',
      'Automated Property Valuation Dashboard',
      'Legacy SEO Architecture Diagnosis & Deep Optimization',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'WebSockets', 'Shufti KYC', 'Tailwind CSS'],
    color: 'from-emerald-500 via-teal-400 to-cyan-500',
  },
  {
    id: 'coinroutes-trading',
    title: 'Coinroutes Institutional Crypto Trading Terminal',
    client: 'Coinroutes',
    domain: 'High-Frequency FinTech & Crypto',
    impactScore: 'Sub-12ms Order Book Updates',
    summary:
      'Architected institutional live trading UI with real-time WebSocket orderbooks, converting REST polling to streaming and migrating legacy charts to Lightweight Charts.',
    deliverables: [
      'Real-Time WebSocket High-Frequency Live Orderbook Visualizer',
      'Lightweight Charts & Synchronized Volume Oscillators',
      'Ag-Grid Server-Side Table Virtualization with FlexLayout',
      'Full JS-to-TypeScript & Redux Saga-to-Toolkit Modernization',
    ],
    tech: ['React', 'TypeScript', 'WebSockets', 'Redux Toolkit', 'Lightweight Charts', 'Ag-Grid'],
    color: 'from-cyan-500 via-sky-400 to-blue-600',
  },
  {
    id: 'tnc-nft-dex',
    title: 'TNC 150K+ User NFT Marketplace & DEX Engine',
    client: 'TNC IT Solutions',
    domain: 'Web3, DEX & Blockchain',
    impactScore: '150,000+ Active Wallets',
    summary:
      'Designed and deployed high-performance Web3 trading experience, decentralised exchange (DEX) UI, and multi-chain scanner interface for active crypto users.',
    deliverables: [
      '150,000+ User Active Web3 NFT Marketplace',
      'Socket.IO Real-Time Trading Engine & Wallet Connectors',
      'Multi-Chain Blockchain Scanner Performance Tuning',
      'Decentralized Exchange (DEX) Order Execution UI',
    ],
    tech: ['React', 'Socket.IO', 'Web3 Wallets', 'DEX Protocol', 'Smart Contracts'],
    color: 'from-purple-500 via-violet-400 to-indigo-600',
  },
  {
    id: 'coolshop-salesforce',
    title: 'CoolShop Salesforce CloudPages Enterprise Portal',
    client: 'CoolShop SRL',
    domain: 'Enterprise Cloud & Data Hub',
    impactScore: 'Multi-SQL Automated Import',
    summary:
      'Developed enterprise marketing microsites, analytics dashboards, and SQL data integration pipelines connecting Salesforce CloudPages with web interfaces.',
    deliverables: [
      'Salesforce CloudPages Dynamic Microsite Engine',
      'High-Throughput REST APIs & SQL Data Pipelines',
      'Standardized Reusable Design System & UI Components',
    ],
    tech: ['React', 'Salesforce CloudPages', 'REST APIs', 'SQL', 'Node.js'],
    color: 'from-amber-500 via-orange-400 to-red-500',
  },
];

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    id: 'websocket-stream',
    title: 'High-Frequency Orderbook WebSocket Hook',
    category: 'Real-Time Systems',
    description: 'Custom React hook created for Coinroutes to process high-frequency WebSocket ticks with RAF batching to prevent UI jank.',
    language: 'typescript',
    code: `import { useEffect, useRef, useState, useCallback } from 'react';

interface DepthLevel {
  price: number;
  size: number;
  total: number;
}

interface OrderBookState {
  bids: DepthLevel[];
  asks: DepthLevel[];
  lastUpdateId: number;
  latencyMs: number;
}

export function useOrderBookStream(symbol: string) {
  const [book, setBook] = useState<OrderBookState>({ bids: [], asks: [], lastUpdateId: 0, latencyMs: 0 });
  const pendingDeltaRef = useRef<{ bids: DepthLevel[]; asks: DepthLevel[] } | null>(null);
  const rafIdRef = useRef<number | null>(null);

  const flushUpdates = useCallback(() => {
    if (pendingDeltaRef.current) {
      setBook((prev) => ({
        ...prev,
        bids: pendingDeltaRef.current!.bids,
        asks: pendingDeltaRef.current!.asks,
        lastUpdateId: prev.lastUpdateId + 1,
      }));
      pendingDeltaRef.current = null;
    }
    rafIdRef.current = requestAnimationFrame(flushUpdates);
  }, []);

  useEffect(() => {
    rafIdRef.current = requestAnimationFrame(flushUpdates);
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [flushUpdates]);

  return book;
}`,
  },
  {
    id: 'shufti-kyc-pipeline',
    title: 'Shufti KYC Real-Time Verification Flow',
    category: 'PropTech & Compliance',
    description: 'Production identity verification pipeline integration developed for boli.ae POA transactions.',
    language: 'typescript',
    code: `import { useState, useCallback } from 'react';

export type KycStatus = 'idle' | 'initializing' | 'document_uploaded' | 'biometric_verifying' | 'verified' | 'failed';

export function useShuftiVerificationFlow(userEmail: string) {
  const [status, setStatus] = useState<KycStatus>('idle');
  const [verificationToken, setVerificationToken] = useState<string | null>(null);

  const initiateKyc = useCallback(async () => {
    setStatus('initializing');
    // Call backend endpoint to generate secure Shufti signed payload
    const res = await fetch('/api/kyc/initiate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: userEmail, reference: \`POA_\${Date.now()}\` }),
    });
    const data = await res.json();
    setVerificationToken(data.token);
    setStatus('document_uploaded');
  }, [userEmail]);

  return { status, verificationToken, initiateKyc };
}`,
  },
  {
    id: 'redux-toolkit-refactor',
    title: 'Redux Saga to Redux Toolkit Modernization',
    category: 'State Architecture',
    description: 'Simplified state management architecture reducing boilerplate code by 65% in institutional trading UI.',
    language: 'typescript',
    code: `import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export const fetchMarketDepth = createAsyncThunk(
  'market/fetchDepth',
  async (pair: string) => {
    const response = await fetch(\`/api/v1/depth?pair=\${pair}\`);
    return (await response.json()) as { bids: [number, number][]; asks: [number, number][] };
  }
);

const marketSlice = createSlice({
  name: 'market',
  initialState: { pair: 'BTC-USD', depth: null, status: 'idle' },
  reducers: {
    setPair(state, action: PayloadAction<string>) {
      state.pair = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMarketDepth.fulfilled, (state, action) => {
      state.depth = action.payload;
      state.status = 'success';
    });
  },
});

export const { setPair } = marketSlice.actions;
export default marketSlice.reducer;`,
  },
];

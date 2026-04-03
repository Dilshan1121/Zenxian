/* ============================================================
   ZENXIAN — services-data.js
   Single source of truth for all service categories, items,
   mega-menu content, and individual service page content.
   ============================================================ */

const ZENXIAN_SERVICES = {
  categories: [

    {
      id: 'services',
      title: 'Services',
      icon: '◈',
      services: [
        {
          slug: 'custom-web-applications',
          title: 'Custom Web Applications',
          desc: 'Full-stack platforms built to scale',
          icon: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
          tagline: 'Precision-engineered web platforms built for your exact business logic.',
          description: 'We design and develop high-performance web applications from the ground up — no templates, no shortcuts. Every architecture decision is made to serve your specific workflows, user roles, and scalability requirements. From internal enterprise tools to customer-facing SaaS platforms, we build for scale and longevity.',
          features: [
            'Full-stack custom architecture (React, Next.js, Node, or your stack of choice)',
            'Role-based access control and multi-tenant support',
            'CI/CD pipeline setup and cloud deployment',
            'Performance optimization and Core Web Vitals compliance',
            'Ongoing technical support and iteration cycles'
          ],
          image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&fit=crop'
        },
        {
          slug: 'ai-consultation',
          title: 'AI Consultation',
          desc: 'Strategic AI adoption for your business',
          icon: '<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6v6l4 2"/>',
          tagline: 'Navigate the AI landscape with expert guidance tailored to your business.',
          description: 'We help businesses cut through the hype and identify where AI creates genuine value. Our AI consultation covers use-case discovery, technology selection, build-vs-buy analysis, and hands-on implementation roadmaps — so you adopt AI strategically, not reactively.',
          features: [
            'AI readiness assessment and use-case prioritisation',
            'Model selection (GPT-4, Claude, Gemini, open-source)',
            'Data strategy and preparation guidance',
            'Proof-of-concept development and validation',
            'Governance, risk, and compliance frameworks'
          ],
          image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&fit=crop'
        },
        {
          slug: 'seo-optimization',
          title: 'SEO Optimization',
          desc: 'Technical SEO engineered for visibility',
          icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>',
          tagline: 'Engineer your way to the top — technical SEO built for lasting organic growth.',
          description: 'We treat SEO as an engineering discipline. Our approach combines deep technical audits, structured data implementation, Core Web Vitals optimisation, and content architecture to build sustainable organic visibility. No black-hat shortcuts — just rigorous, measurable improvements.',
          features: [
            'Full technical SEO audit and remediation roadmap',
            'Core Web Vitals and performance optimisation',
            'Structured data and schema markup implementation',
            'Crawl budget management and indexation strategy',
            'Ongoing keyword and competitive landscape analysis'
          ],
          image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80&fit=crop'
        },
        {
          slug: 'ecommerce-platforms',
          title: 'E-Commerce Platforms',
          desc: 'High-conversion custom commerce builds',
          icon: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',
          tagline: 'High-conversion commerce platforms engineered for enterprise scale.',
          description: 'Beyond off-the-shelf solutions, we build custom e-commerce platforms that handle complex product catalogs, multi-currency pricing, B2B buyer flows, and high-volume transaction processing. Whether you need a headless commerce architecture or a fully custom storefront, we engineer for performance and conversion.',
          features: [
            'Headless commerce architecture (custom or composable)',
            'Complex product configurators and pricing engines',
            'B2B buyer portals with custom approval workflows',
            'Payment gateway integration and PCI compliance',
            'Inventory sync with warehouse and ERP systems'
          ],
          image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80&fit=crop'
        }
      ]
    },

    {
      id: 'products',
      title: 'Products',
      icon: '◇',
      services: [
        {
          slug: 'bixbloom',
          title: 'Bixbloom',
          desc: 'All-in-one business growth platform',
          icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
          tagline: 'Bixbloom — the all-in-one platform engineered to accelerate business growth.',
          description: 'Bixbloom is our flagship business growth platform, combining CRM, analytics, and automation into a single cohesive system. Built for growing businesses that have outgrown patchwork tool stacks, Bixbloom centralises your customer data, pipeline, and operations under one roof.',
          features: [
            'Unified CRM with pipeline and deal tracking',
            'Business analytics dashboard with real-time KPIs',
            'Automated outreach and follow-up sequences',
            'Team collaboration and task management',
            'Integrations with 50+ third-party tools'
          ],
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&fit=crop'
        },
        {
          slug: 'social-ai',
          title: 'Social AI',
          desc: 'AI-powered social media management',
          icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
          tagline: 'Social AI — intelligent content creation and scheduling at scale.',
          description: 'Social AI automates the end-to-end social media workflow — from AI-generated content drafts and brand-voice tuning to multi-platform scheduling and performance analytics. Stop spending hours on social and let the system handle the routine while you focus on strategy.',
          features: [
            'AI content generation with custom brand voice',
            'Multi-platform scheduling (Instagram, LinkedIn, X, TikTok)',
            'Hashtag and trend analysis',
            'Engagement analytics and competitor benchmarking',
            'Approval workflows for team and client review'
          ],
          image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80&fit=crop'
        },
        {
          slug: 'credit-card',
          title: 'Credit Card',
          desc: 'Smart corporate card & spend management',
          icon: '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>',
          tagline: 'Corporate cards with built-in spend intelligence and policy enforcement.',
          description: 'Our Credit Card product gives businesses real-time visibility and control over company spending. Issue virtual or physical cards, set granular spend limits, enforce category policies, and reconcile expenses automatically — all from a single management dashboard.',
          features: [
            'Virtual and physical card issuance in minutes',
            'Granular per-card spend limits and category controls',
            'Real-time transaction notifications and alerts',
            'Automated expense reconciliation and receipt matching',
            'Accounting integrations (Xero, QuickBooks, NetSuite)'
          ],
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80&fit=crop'
        }
      ]
    }

  ]
};

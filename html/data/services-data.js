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
          image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&fit=crop',
          intro: 'We build custom web applications designed specifically for your business — not generic templates. From simple websites to complex platforms, our solutions are crafted to deliver performance, flexibility, and long-term growth.',
          overviewHeading: 'Why Choose Custom Development?',
          shortText: 'We provide end-to-end web application development — from planning and design to deployment and ongoing support.',
          benefits: [
            { title: 'Tailored to Your Business Needs', desc: 'Every application is built around your unique requirements and workflows.' },
            { title: 'Scalable & Future-Ready', desc: 'Easily expand your system as your business grows.' },
            { title: 'User-Friendly Experience', desc: 'Clean, intuitive interfaces that enhance user engagement.' },
            { title: 'High Performance & Reliability', desc: 'Fast, secure, and optimized for smooth operation.' }
          ],
          featureCards: [
            { icon: '◈', title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces built for your users' },
            { icon: '⬡', title: 'Frontend Development', desc: 'Responsive, fast-loading web experiences' },
            { icon: '⬢', title: 'Backend Systems', desc: 'Robust server-side logic and databases' },
            { icon: '◈', title: 'API Integrations', desc: 'Connect with third-party tools seamlessly' },
            { icon: '⬡', title: 'Security & Performance', desc: 'Enterprise-grade protection and speed' },
            { icon: '⬢', title: 'Maintenance & Support', desc: 'Ongoing care to keep your system running' }
          ],
          modernFeatures: [
            { title: 'Mobile-Responsive Design', desc: 'Seamless experience across all devices' },
            { title: 'SEO-Friendly Structure', desc: 'Built to improve visibility on search engines' },
            { title: 'Fast Loading Performance', desc: 'Optimized for speed and user experience' },
            { title: 'Secure Architecture', desc: 'Protection for your data and users' },
            { title: 'Scalable System Design', desc: 'Ready to grow as your business expands' },
            { title: 'Analytics & Tracking Integration', desc: 'Monitor performance and user behavior' }
          ],
          closingLine: 'We combine strategy, design, and technology to deliver web solutions that not only look great — but also perform, scale, and deliver real results.'
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
          image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&fit=crop',
          intro: 'We help businesses understand, adopt, and implement AI solutions that improve efficiency, automate processes, and unlock new opportunities.',
          overviewHeading: 'What Makes Us Different',
          shortText: 'From identifying the right use cases to implementing intelligent systems, we guide you through every step of your AI journey.',
          benefits: [
            { title: 'Business-Focused Approach', desc: 'We focus on practical AI solutions that deliver real results — not just trends.' },
            { title: 'Clear & Guided Process', desc: 'We simplify complex AI concepts and guide you step-by-step.' },
            { title: 'Tailored Solutions', desc: 'Every AI solution is designed based on your specific business needs.' },
            { title: 'Future-Ready Thinking', desc: 'We help you stay ahead by adopting scalable and modern AI technologies.' }
          ],
          featureCards: [
            { icon: '◈', title: 'AI Strategy & Planning', desc: 'Identifying where AI can create real value in your business' },
            { icon: '⬡', title: 'Process Automation', desc: 'Automating repetitive tasks to save time and reduce costs' },
            { icon: '⬢', title: 'Data Analysis & Insights', desc: 'Turning your data into actionable business intelligence' },
            { icon: '◈', title: 'Custom AI Solutions', desc: 'Developing AI-powered systems tailored to your needs' },
            { icon: '⬡', title: 'System Integration', desc: 'Seamlessly connecting AI into your current workflows' },
            { icon: '⬢', title: 'Ongoing AI Support', desc: 'Continuous guidance as your AI capabilities evolve' }
          ],
          modernFeatures: [
            { title: 'AI-Powered Automation Tools', desc: 'End-to-end workflow automation driven by intelligent models' },
            { title: 'Smart Recommendation Systems', desc: 'Personalised suggestions that improve decisions and conversions' },
            { title: 'Predictive Analytics Solutions', desc: 'Forecast trends and outcomes with data-driven precision' },
            { title: 'Chatbots & Virtual Assistants', desc: 'Intelligent agents that handle queries and tasks 24/7' },
            { title: 'Data-Driven Decision Support', desc: 'Dashboards and insights that guide every business decision' },
            { title: 'Scalable AI Infrastructure', desc: 'Cloud-native architecture built to grow with your ambitions' }
          ],
          closingLine: 'We make AI simple, practical, and impactful — helping your business work smarter, faster, and more efficiently.'
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
          image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80&fit=crop',
          heroHeading: 'Be Found Where Your Customers Are Searching!',
          intro: 'SEO helps your business rank higher, attract the right audience, and achieve consistent long-term growth.',
          overviewHeading: 'What You Get',
          shortText: 'From keyword research to performance reporting, our SEO services are built to improve your visibility, drive traffic, and generate real results.',
          benefits: [
            { title: 'Higher Search Engine Rankings', desc: 'Outrank competitors with data-driven SEO strategies.' },
            { title: 'Increased Website Traffic', desc: 'Attract more qualified visitors to your website.' },
            { title: 'Better Lead Generation', desc: 'Convert organic traffic into real business opportunities.' },
            { title: 'Stronger Online Presence', desc: 'Build authority and trust across search engines.' },
            { title: 'Sustainable Long-Term Growth', desc: 'Results that compound over time, not quick-fix gains.' }
          ],
          featureCards: [
            { icon: '◈', title: 'Keyword Research & Strategy', desc: 'Identifying the most relevant and high-impact search terms' },
            { icon: '⬡', title: 'On-Page Optimization', desc: 'Enhancing website content, structure, and user experience' },
            { icon: '⬢', title: 'Technical SEO', desc: 'Improving site speed, mobile responsiveness, and indexing' },
            { icon: '◈', title: 'Content Optimization', desc: 'Creating and refining content for better engagement and ranking' },
            { icon: '⬡', title: 'Performance Monitoring & Reporting', desc: 'Tracking results and continuously optimizing strategies' }
          ],
          modernFeatures: [
            { title: 'On-Page SEO', desc: 'Optimizing your website content and structure to align with search engine requirements' },
            { title: 'Technical SEO', desc: 'Enhancing performance, speed, and backend structure for better indexing' },
            { title: 'Local & Off-Page SEO', desc: 'Strengthening your online presence through local search optimization and external signals' }
          ],
          process: ['Audit', 'Optimize', 'Improve', 'Grow'],
          closingLine: 'We help your business get discovered, stay competitive, and grow consistently through smart and effective SEO strategies.'
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
          image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80&fit=crop',
          heroHeading: 'Build, Launch, and Scale Your Online Store',
          intro: 'We create powerful e-commerce platforms that help you sell smarter, manage operations efficiently, and grow your business online.',
          overviewHeading: 'What You Get',
          shortText: 'From small online shops to large-scale marketplaces, we develop tailored e-commerce solutions designed to deliver seamless shopping experiences and maximize conversions.',
          benefits: [
            { title: 'Increased Online Sales', desc: 'Drive more revenue with conversion-optimized storefronts.' },
            { title: 'Better Customer Experience', desc: 'Smooth, intuitive shopping journeys that keep customers coming back.' },
            { title: 'Efficient Business Management', desc: 'Streamlined operations for products, orders, and inventory.' },
            { title: 'Stronger Brand Presence Online', desc: 'A professional platform that builds trust and credibility.' },
            { title: 'Long-Term Business Growth', desc: 'Scalable foundations that grow as your business expands.' }
          ],
          featureCards: [
            { icon: '◈', title: 'Custom Store Development', desc: 'Fully tailored e-commerce websites based on your business needs' },
            { icon: '⬡', title: 'Product & Inventory Management', desc: 'Easy-to-manage systems for products, stock, and orders' },
            { icon: '⬢', title: 'Secure Payment Integration', desc: 'Multiple payment options with safe and reliable transactions' },
            { icon: '◈', title: 'UX & Checkout Optimization', desc: 'Smooth and intuitive buying journey to increase conversions' },
            { icon: '⬡', title: 'Admin Dashboard & Analytics', desc: 'Monitor sales, customers, and performance in one place' }
          ],
          modernFeatures: [
            { title: 'Mobile-Responsive Design', desc: 'Optimized for all devices to reach more customers' },
            { title: 'Fast & Optimized Performance', desc: 'Speed-tuned for better experience and search rankings' },
            { title: 'SEO-Friendly Structure', desc: 'Built to improve your visibility on search engines' },
            { title: 'Secure Checkout Systems', desc: 'Safe and reliable transactions your customers can trust' },
            { title: 'Delivery & Payment Integration', desc: 'Seamless connection with leading delivery and payment services' }
          ],
          closingLine: 'We build e-commerce platforms that not only look great — but also drive sales, improve operations, and help your business grow continuously!'
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
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&fit=crop',
          heroHeading: 'Bixbloom POS Systems',
          intro: 'Bixbloom is a powerful all-in-one POS solution built to streamline operations, optimize performance, and provide complete business control — all within a single, intuitive platform.',
          overviewHeading: 'One Platform for Every Business',
          shortText: 'From restaurants to fitness centers, Bixbloom delivers tailored POS solutions that simplify operations and drive growth.',
          benefits: [
            { title: 'Complete Business Control', desc: 'Manage every aspect of your operations from a single platform.' },
            { title: 'Faster & Smarter Operations', desc: 'Reduce manual work and serve customers more efficiently.' },
            { title: 'Real-Time Insights', desc: 'Live reports and analytics to guide better business decisions.' },
            { title: 'Easy to Use', desc: 'Intuitive interfaces designed for staff at all levels.' }
          ],
          featureCards: [
            { icon: '◈', title: 'Restaurant POS (RPOS)', desc: 'Complete order and kitchen management for modern restaurants' },
            { icon: '⬡', title: 'Gym Management System', desc: 'Membership, billing, and attendance tracking for fitness centers' },
            { icon: '⬢', title: 'Inventory Control', desc: 'Real-time stock tracking and ingredient management' },
            { icon: '◈', title: 'Payment Processing', desc: 'Secure and flexible payment and billing systems' },
            { icon: '⬡', title: 'Reports & Analytics', desc: 'Actionable insights into sales, revenue, and performance' },
            { icon: '⬢', title: 'User-Friendly Interface', desc: 'Intuitive dashboards designed for staff and management' }
          ],
          modernFeatures: [
            { title: 'QR-Based Ordering', desc: 'Customers order directly from their mobile devices' },
            { title: 'Kitchen Display System', desc: 'Streamlined order flow between front-end and kitchen' },
            { title: 'Membership Management', desc: 'Registrations, plans, and renewals in one place' },
            { title: 'Attendance Tracking', desc: 'Monitor member check-ins and activity' },
            { title: 'Financial Reporting', desc: 'Revenue tracking and performance insights' },
            { title: 'Multi-Platform Access', desc: 'Manage everything from any device, anywhere' }
          ],
          subProducts: [
            {
              title: 'Restaurant POS System (RPOS)',
              headline: 'Streamline Your Restaurant Operations with Smart Technology',
              desc: 'Our Restaurant POS system is designed to handle every aspect of your restaurant operations — from order management to reporting — all within a single, user-friendly platform.',
              features: [
                { title: 'Smart Order Management', desc: 'Handle dine-in, takeaway, and online orders efficiently' },
                { title: 'QR-Based Customer Ordering', desc: 'Customers can scan and order directly from their mobile devices' },
                { title: 'Kitchen Management System (KDS)', desc: 'Streamline order flow between front-end and kitchen' },
                { title: 'Inventory Control', desc: 'Track stock levels and manage ingredients easily' },
                { title: 'Sales & Financial Reports', desc: 'Monitor revenue, performance, and daily operations' },
                { title: 'User-Friendly Interface', desc: 'Simple and intuitive system for staff and management' }
              ],
              benefits: ['Faster service and reduced waiting time', 'Improved order accuracy', 'Better operational control', 'Enhanced customer experience'],
              closingLine: 'A complete restaurant management solution designed to improve efficiency, accuracy, and customer satisfaction.'
            },
            {
              title: 'Gym POS System',
              headline: 'Manage Your Fitness Business with Ease',
              desc: 'Our Gym POS system is built to help fitness centers manage members, track payments, and streamline daily operations — all from one powerful platform.',
              features: [
                { title: 'Membership Management', desc: 'Manage member registrations, plans, and renewals' },
                { title: 'Payment & Billing System', desc: 'Track payments, subscriptions, and invoices with ease' },
                { title: 'Attendance Tracking', desc: 'Monitor member check-ins and activity' },
                { title: 'Reports & Analytics', desc: 'Gain insights into revenue and member performance' },
                { title: 'User-Friendly Dashboard', desc: 'Easy-to-use interface for smooth daily operations' }
              ],
              benefits: ['Simplified operations and reduced manual work', 'Better member management', 'Accurate financial tracking', 'Improved business efficiency'],
              closingLine: 'A smart and reliable solution to manage your fitness business effectively and support long-term growth.'
            }
          ],
          closingLine: 'Bixbloom gives you the tools, clarity, and control to run your business smarter — all from one powerful platform.'
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
          image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80&fit=crop',
          intro: 'Social AI automates your entire social media workflow — from AI-generated content drafts and brand-voice tuning to multi-platform scheduling and performance analytics, all in one place.',
          overviewHeading: 'Automate Your Social Presence at Scale',
          shortText: 'Stop spending hours on social content. Let Social AI handle the routine while you focus on strategy.',
          benefits: [
            { title: 'AI Content Generation', desc: 'On-brand posts drafted in seconds, ready for review or auto-publish.' },
            { title: 'Brand Voice Consistency', desc: 'Train the AI on your tone so every post sounds like you.' },
            { title: 'Multi-Platform Reach', desc: 'Publish to Instagram, LinkedIn, X, and TikTok from one dashboard.' },
            { title: 'Performance Analytics', desc: 'Track engagement, reach, and competitor performance in real time.' }
          ],
          featureCards: [
            { icon: '◈', title: 'Content Generation', desc: 'AI-drafted posts tailored to your brand and audience' },
            { icon: '⬡', title: 'Brand Voice Tuning', desc: 'Custom AI training on your tone, style, and messaging' },
            { icon: '⬢', title: 'Multi-Platform Scheduling', desc: 'Unified calendar across Instagram, LinkedIn, X, and TikTok' },
            { icon: '◈', title: 'Hashtag Analysis', desc: 'Trending hashtag suggestions and reach forecasting' },
            { icon: '⬡', title: 'Engagement Analytics', desc: 'Deep-dive metrics on every post and platform' },
            { icon: '⬢', title: 'Approval Workflows', desc: 'Team and client review flows before anything goes live' }
          ],
          modernFeatures: [
            { title: 'GPT-Powered Drafts', desc: 'AI content that adapts to platform formats and character limits' },
            { title: 'Visual Content Suggestions', desc: 'Image and video recommendations matched to your copy' },
            { title: 'Competitor Benchmarking', desc: 'Track how your content performs vs. industry competitors' },
            { title: 'Best-Time Scheduling', desc: 'AI-recommended posting times for maximum engagement' },
            { title: 'Sentiment Analysis', desc: 'Monitor brand sentiment and respond to trends early' },
            { title: 'Team Collaboration', desc: 'Comment, edit, and approve content in a shared workspace' }
          ],
          closingLine: 'Social AI turns your content strategy into a scalable, always-on growth engine — without the manual grind.'
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
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80&fit=crop',
          intro: 'Our Credit Card product gives businesses real-time visibility and full control over company spending — with instant card issuance, granular spend limits, and automated reconciliation built in.',
          overviewHeading: 'Take Full Control of Company Spending',
          shortText: 'Issue cards, set policies, and reconcile expenses automatically — all from one smart dashboard.',
          benefits: [
            { title: 'Real-Time Visibility', desc: 'See every transaction as it happens, across all cards and teams.' },
            { title: 'Instant Card Issuance', desc: 'Virtual or physical cards issued in minutes, not days.' },
            { title: 'Policy Enforcement', desc: 'Category rules and spend limits enforced automatically at the point of sale.' },
            { title: 'Automated Reconciliation', desc: 'Receipts matched and expenses categorised without manual entry.' }
          ],
          featureCards: [
            { icon: '◈', title: 'Virtual Card Issuance', desc: 'Instant virtual cards for any team member or vendor' },
            { icon: '⬡', title: 'Spend Limit Controls', desc: 'Per-card limits by amount, category, or merchant type' },
            { icon: '⬢', title: 'Transaction Alerts', desc: 'Real-time notifications for every charge and decline' },
            { icon: '◈', title: 'Expense Reconciliation', desc: 'Automated matching of receipts to transactions' },
            { icon: '⬡', title: 'Receipt Matching', desc: 'Smart OCR to extract and file receipt data instantly' },
            { icon: '⬢', title: 'Accounting Integrations', desc: 'Sync with Xero, QuickBooks, and NetSuite seamlessly' }
          ],
          modernFeatures: [
            { title: 'Instant Card Issuance', desc: 'Issue cards in minutes from the management dashboard' },
            { title: 'Per-Card Spend Limits', desc: 'Granular control down to individual card and category level' },
            { title: 'Category Controls', desc: 'Block or allow specific merchant categories by policy' },
            { title: 'Real-Time Notifications', desc: 'Instant alerts for transactions, declines, and policy breaches' },
            { title: 'Accounting Sync', desc: 'Automatic export to Xero, QuickBooks, and NetSuite' },
            { title: 'Fraud Detection', desc: 'AI-powered anomaly detection on all transactions' }
          ],
          closingLine: 'Give every team member a card and every finance leader the real-time control and visibility they need.'
        }
      ]
    }

  ]
};

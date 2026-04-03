/* ============================================================
   ZENXIAN — case-studies-data.js
   Single source of truth for all case study content.
   ============================================================ */

const ZENXIAN_CASES = [
  {
    slug: 'automating-financial-workflows',
    tag: 'FINTECH ARCHITECTURE',
    dotColor: '#32C8D9',
    gradient: 'cyan',
    title: 'Automating Financial Workflows',
    metricValue: '40%',
    metricLabel: 'EFFICIENCY SURGE',
    desc: 'Rebuilt a legacy batch-processing pipeline into a real-time event-driven architecture, eliminating overnight jobs and enabling same-day settlement.',
    highlights: [
      'Kafka-based event streaming replacing nightly ETL',
      'Rule engine automating 92% of compliance checks',
      '40% reduction in operational overhead',
      'Zero-downtime migration with dual-write strategy'
    ],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80&fit=crop',
    liveLink: '#'
  },
  {
    slug: 'next-gen-threat-detection',
    tag: 'CYBERSECURITY',
    dotColor: '#1F8DA6',
    gradient: 'steel',
    title: 'Next-Gen Threat Detection',
    metricValue: '99.9%',
    metricLabel: 'UPTIME VERIFIED',
    desc: 'Designed a multi-layer anomaly detection system that processes network telemetry at wire speed, cutting mean-time-to-detect from hours to seconds.',
    highlights: [
      'Streaming ML inference at &lt;5 ms per event',
      'SIEM integration with zero rearchitecting',
      '99.9% verified uptime across 18 months',
      'Automated playbooks for 80% of alert categories'
    ],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80&fit=crop',
    liveLink: '#'
  },
  {
    slug: 'supply-chain-optimization',
    tag: 'INDUSTRIAL IOT',
    dotColor: '#32C8D9',
    gradient: 'dim',
    title: 'Supply Chain Optimization',
    metricValue: '6.5M',
    metricLabel: 'DAILY EVENTS',
    desc: 'Deployed an IoT data fabric across 14 manufacturing sites, giving ops teams real-time visibility into inventory, equipment health, and logistics.',
    highlights: [
      'Edge-to-cloud pipeline handling 6.5M events/day',
      'Digital twin for predictive maintenance',
      '23% reduction in unplanned downtime',
      'Single dashboard replacing 9 legacy tools'
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1400&q=80&fit=crop',
    liveLink: '#'
  },
  {
    slug: 'global-edge-computing',
    tag: 'CLOUD NATIVE',
    dotColor: '#1F8DA6',
    gradient: 'steel',
    title: 'Global Edge Computing',
    metricValue: '15ms',
    metricLabel: 'LATENCY REDUCTION',
    desc: 'Re-architected a monolithic API to a globally distributed edge runtime, slashing p99 latency and enabling sub-20 ms responses from 40+ PoPs.',
    highlights: [
      'Cloudflare Workers + Durable Objects architecture',
      '40+ global PoPs with smart routing',
      '15 ms p99 latency (down from 320 ms)',
      'Auto-scaling with zero cold-start penalty'
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80&fit=crop',
    liveLink: '#'
  },
  {
    slug: 'neural-risk-assessment',
    tag: 'APPLIED AI',
    dotColor: '#32C8D9',
    gradient: 'cyan',
    title: 'Neural Risk Assessment',
    metricValue: '2.4x',
    metricLabel: 'PRECISION GAIN',
    desc: 'Trained and deployed a transformer-based risk scoring model on proprietary financial data, replacing a rules engine with a continuously learning system.',
    highlights: [
      'Fine-tuned LLM on 4 years of proprietary signals',
      '2.4x precision improvement over rules engine',
      'Real-time scoring at 10k decisions/minute',
      'Explainability layer meeting regulatory requirements'
    ],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&fit=crop',
    screenshot: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1400&q=80&fit=crop',
    liveLink: '#'
  }
];

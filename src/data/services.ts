export interface Service {
  name: string;
  slug: string;
  step: number;
  icon: string;
  oneLiner: { en: string; uk: string };
  timeline: { en: string; uk: string };
  whatIsInside: { en: string; uk: string };
  youGet: { en: string; uk: string };
}

export const services: Service[] = [
  {
    name: 'Buyer Sprint',
    slug: 'buyer-sprint',
    step: 1,
    icon: 'messages-square',
    oneLiner: { en: 'Talking to your buyers until a pattern shows up.', uk: 'Розмови з покупцями, поки не зʼявиться патерн.' },
    timeline: { en: 'from 4 weeks', uk: 'від 4 тижнів' },
    whatIsInside: { en: 'Customer interviews, buyer personas, segment analysis, language mapping', uk: 'Інтервʼю з клієнтами, портрети покупців, аналіз сегментів, карта мови' },
    youGet: { en: 'You know exactly who buys, why, and what almost stopped them.', uk: 'Ти точно знаєш хто купує, чому, і що майже зупинило їх.' },
  },
  {
    name: 'Brand-Market Fit',
    slug: 'brand-market-fit',
    step: 2,
    icon: 'target',
    oneLiner: { en: 'Making the market understand what you are.', uk: 'Зробити так, щоб ринок зрозумів хто ти.' },
    timeline: { en: 'from 3 weeks', uk: 'від 3 тижнів' },
    whatIsInside: { en: 'Positioning strategy, messaging framework, brand rules, competitor analysis', uk: 'Стратегія позиціонування, меседжинг, правила бренду, аналіз конкурентів' },
    youGet: { en: 'Your team can explain what you do and why it matters in one sentence.', uk: 'Твоя команда може пояснити що ви робите і чому це важливо в одному реченні.' },
  },
  {
    name: 'Pipeline Audit',
    slug: 'pipeline-audit',
    step: 3,
    icon: 'handshake',
    oneLiner: { en: 'Finding where the deals quietly die.', uk: 'Знайти де угоди тихо помирають.' },
    timeline: { en: 'from 2 weeks', uk: 'від 2 тижнів' },
    whatIsInside: { en: 'Funnel analysis, lost deal interviews, call recordings review, conversion mapping', uk: 'Аналіз воронки, інтервʼю з втраченими угодами, перегляд записів дзвінків, карта конверсій' },
    youGet: { en: 'You see where people drop and how much each leak is costing you.', uk: 'Ти бачиш де люди відвалюються і скільки кожна дірка тобі коштує.' },
  },
  {
    name: 'Grow Through Your Customers',
    slug: 'grow-through-customers',
    step: 4,
    icon: 'heart-handshake',
    oneLiner: { en: 'Giving people a reason not to leave.', uk: 'Дати людям причину не йти.' },
    timeline: { en: 'from 4 weeks', uk: 'від 4 тижнів' },
    whatIsInside: { en: 'Churn interviews, retention strategy, early warning system, referral program', uk: 'Інтервʼю з тими хто пішов, стратегія утримання, система раннього попередження, реферальна програма' },
    youGet: { en: 'Customers stay longer and spend more, because they feel heard.', uk: 'Клієнти залишаються довше і платять більше, бо відчувають що їх чують.' },
  },
  {
    name: 'Revenue Unlock',
    slug: 'revenue-unlock',
    step: 5,
    icon: 'trending-up',
    oneLiner: { en: 'Picking up money that is already lying there.', uk: 'Підібрати гроші, які вже лежать на столі.' },
    timeline: { en: 'from 2 weeks', uk: 'від 2 тижнів' },
    whatIsInside: { en: 'Revenue analysis, pricing review, packaging, upsell design, experiment plan', uk: 'Аналіз доходів, перегляд ціноутворення, пакування, дизайн апселу, план експериментів' },
    youGet: { en: 'You find the revenue that was sitting in your business the whole time.', uk: 'Ти знаходиш дохід, який весь час був у твоєму бізнесі.' },
  },
  {
    name: 'Launch Sprint',
    slug: 'launch-sprint',
    step: 6,
    icon: 'rocket',
    oneLiner: { en: 'Taking something new to market, or an existing product to a new audience.', uk: 'Вивести щось нове на ринок, або існуючий продукт для нової аудиторії.' },
    timeline: { en: 'from 2 months', uk: 'від 2 місяців' },
    whatIsInside: { en: 'Customer interviews, positioning, channel economics, launch plan, messaging, go-to-market strategy', uk: 'Інтервʼю з клієнтами, позиціонування, економіка каналів, план запуску, меседжинг, go-to-market стратегія' },
    youGet: { en: 'A launch plan built on real conversations, not assumptions.', uk: 'План запуску, побудований на реальних розмовах, а не на припущеннях.' },
  },
];

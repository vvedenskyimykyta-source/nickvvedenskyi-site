export interface Service {
  name: string;
  slug: string;
  step: number;
  subtitle: { en: string; uk: string };
  oneLiner: { en: string; uk: string };
  timeline: { en: string; uk: string };
  whatIsInside: { en: string[]; uk: string[] };
  youGet: { en: string; uk: string };
  metrics: { en: string[]; uk: string[] };
  tag?: { en: string; uk: string };
}

export const services: Service[] = [
  {
    name: 'Buyer Sprint',
    slug: 'buyer-sprint',
    step: 1,
    subtitle: { en: 'Who buys and why', uk: 'Хто купує і чому' },
    tag: { en: 'Where I usually start', uk: 'Звідси зазвичай починаю' },
    oneLiner: { en: 'Talking to your buyers until a pattern shows up.', uk: 'Розмови з покупцями, поки не зʼявиться патерн.' },
    timeline: { en: '4 weeks', uk: '4 тижні' },
    whatIsInside: {
      en: ['Customer interviews', 'Buyer personas', 'Segment analysis', 'Language mapping', 'Product recommendations'],
      uk: ['Інтервʼю з клієнтами', 'Портрети покупців', 'Аналіз сегментів', 'Карта мови', 'Рекомендації по продукту'],
    },
    youGet: { en: 'You know exactly who buys, why, and what almost stopped them.', uk: 'Ти точно знаєш хто купує, чому, і що майже зупинило їх.' },
    metrics: {
      en: ['ICP clarity', 'Buyer language', 'Segment fit'],
      uk: ['Чіткість ICP', 'Мова покупця', 'Відповідність сегменту'],
    },
  },
  {
    name: 'Brand-Market Fit',
    slug: 'brand-market-fit',
    step: 2,
    subtitle: { en: 'Why they pick you', uk: 'Чому обирають тебе' },
    oneLiner: { en: 'Making the market understand what you are.', uk: 'Зробити так, щоб ринок зрозумів хто ти.' },
    timeline: { en: '3 weeks', uk: '3 тижні' },
    whatIsInside: {
      en: ['Positioning strategy', 'Messaging framework', 'Brand rules', 'Competitor analysis', 'Client insight', 'Messaging validation', 'Alignment session'],
      uk: ['Стратегія позиціонування', 'Меседжинг фреймворк', 'Правила бренду', 'Аналіз конкурентів', 'Інсайти клієнтів', 'Валідація меседжингу', 'Сесія алайнменту'],
    },
    youGet: { en: 'Your team can explain what you do and why it matters in one sentence.', uk: 'Твоя команда може пояснити що ви робите і чому це важливо в одному реченні.' },
    metrics: {
      en: ['Positioning clarity', 'Message-market match', 'Competitive differentiation'],
      uk: ['Чіткість позиціонування', 'Відповідність меседжингу ринку', 'Конкурентна диференціація'],
    },
  },
  {
    name: 'Pipeline Audit',
    slug: 'pipeline-audit',
    step: 3,
    subtitle: { en: 'How they find you and buy', uk: 'Як знаходять і купують' },
    oneLiner: { en: 'Finding where the deals quietly die.', uk: 'Знайти де угоди тихо помирають.' },
    timeline: { en: '2 weeks', uk: '2 тижні' },
    whatIsInside: {
      en: ['Funnel analysis', 'Lost deal interviews', 'Call recordings review', 'Buyer journey audit', 'Sales-product mismatch check', 'Channel fit', 'Monetization'],
      uk: ['Аналіз воронки', 'Інтервʼю з втраченими угодами', 'Перегляд записів дзвінків', 'Аудит шляху покупця', 'Перевірка невідповідності продажів та продукту', 'Відповідність каналів', 'Монетизація'],
    },
    youGet: { en: 'You see where people drop and how to fix it.', uk: 'Ти бачиш де люди відвалюються і як це виправити.' },
    metrics: {
      en: ['Conversion rate', 'CAC / ARPPU / Drop-off', 'Lead quality'],
      uk: ['Конверсія', 'CAC / ARPPU / Відтік', 'Якість лідів'],
    },
  },
  {
    name: 'Grow Through Your Customers',
    slug: 'grow-through-customers',
    step: 4,
    subtitle: { en: 'Why they stay', uk: 'Чому залишаються' },
    oneLiner: { en: 'Giving people a reason not to leave.', uk: 'Дати людям причину не йти.' },
    timeline: { en: '4 weeks', uk: '4 тижні' },
    whatIsInside: {
      en: ['Churn interviews', 'Retention strategy', 'Early warning system', 'Referral program'],
      uk: ['Інтервʼю з тими хто пішов', 'Стратегія утримання', 'Система раннього попередження', 'Реферальна програма'],
    },
    youGet: { en: 'Customers stay longer and spend more, because they feel heard.', uk: 'Клієнти залишаються довше і платять більше, бо відчувають що їх чують.' },
    metrics: {
      en: ['Churn rate', 'Retention', 'NPS', 'Expansion revenue'],
      uk: ['Churn rate', 'Retention', 'NPS', 'Expansion revenue'],
    },
  },
  {
    name: 'Revenue Unlock',
    slug: 'revenue-unlock',
    step: 5,
    subtitle: { en: 'How they pay more', uk: 'Як платять більше' },
    oneLiner: { en: 'Picking up money that is already lying there.', uk: 'Підібрати гроші, які вже лежать на столі.' },
    timeline: { en: '2 weeks', uk: '2 тижні' },
    whatIsInside: {
      en: ['Revenue analysis', 'Pricing review', 'Packaging', 'Upsell design', 'Experiment plan', 'Margin analysis', 'Growth opportunities'],
      uk: ['Аналіз доходів', 'Перегляд ціноутворення', 'Пакування', 'Дизайн апселу', 'План експериментів', 'Аналіз маржі', 'Можливості росту'],
    },
    youGet: { en: 'You find the revenue that was sitting in your business the whole time.', uk: 'Ти знаходиш дохід, який весь час був у твоєму бізнесі.' },
    metrics: {
      en: ['ARPU', 'LTV', 'LTV/CAC', 'Break-even'],
      uk: ['ARPU', 'LTV', 'LTV/CAC', 'Точка беззбитковості'],
    },
  },
  {
    name: 'Launch Sprint',
    slug: 'launch-sprint',
    step: 6,
    subtitle: { en: 'The whole path at once', uk: 'Весь шлях одразу' },
    oneLiner: { en: 'Taking something new to market, or an existing product to a new audience.', uk: 'Вивести щось нове на ринок, або існуючий продукт для нової аудиторії.' },
    timeline: { en: '2 months', uk: '2 місяці' },
    whatIsInside: {
      en: ['Customer interviews', 'Positioning', 'Channel economics', 'Launch plan', 'Messaging', 'Go-to-market strategy'],
      uk: ['Інтервʼю з клієнтами', 'Позиціонування', 'Економіка каналів', 'План запуску', 'Меседжинг', 'Go-to-market стратегія'],
    },
    youGet: { en: 'A full GTM strategy and execution plan built on real conversations, not assumptions.', uk: 'Повна GTM стратегія та план виконання побудований на реальних розмовах, а не на припущеннях.' },
    metrics: {
      en: ['Time to first revenue', 'CAC', 'Channel ROI', 'Pipeline velocity'],
      uk: ['Час до першого доходу', 'CAC', 'ROI каналів', 'Швидкість pipeline'],
    },
  },
];

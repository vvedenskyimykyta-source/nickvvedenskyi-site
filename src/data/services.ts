export interface Service {
  name: string;
  slug: string;
  step: number | 'launch' | 'ops';
  icon: string;
  core: boolean;
  oneLiner: { en: string; uk: string };
  description: { en: string; uk: string };
  deliverables: { en: string; uk: string };
  priceFrom: number;
  duration: { en: string; uk: string };
  note?: { en: string; uk: string };
  tag?: { en: string; uk: string };
}

export const services: Service[] = [
  {
    name: 'Buyer Sprint',
    slug: 'buyer-sprint',
    step: 1,
    icon: 'messages-square',
    core: true,
    tag: { en: 'where I usually start', uk: 'звідси зазвичай починаю' },
    oneLiner: { en: 'Talking to your customers until the pattern shows up.', uk: 'Розмовляю з твоїми клієнтами, поки не проявиться патерн.' },
    description: {
      en: 'I interview 10 to 12 of your customers, or people who should be your customers, and come back with who actually buys, why they buy and the exact words they use to describe the problem.',
      uk: 'Я інтерв’юю 10-12 твоїх клієнтів, або людей, які мали б бути твоїми клієнтами, і повертаюся з тим, хто реально купує, чому вони купують і якими саме словами описують проблему.',
    },
    deliverables: {
      en: 'ICP cards, a buyer language map, your top 3 segments and where the product falls short for each, clear next steps.',
      uk: 'ICP карти, карта мови покупця, топ-3 сегменти і де продукт недотягує для кожного, чіткі наступні кроки.',
    },
    priceFrom: 1500,
    duration: { en: '4 weeks', uk: '4 тижні' },
  },
  {
    name: 'Brand-Market Fit',
    slug: 'brand-market-fit',
    step: 2,
    icon: 'target',
    core: true,
    tag: { en: 'where I usually start', uk: 'звідси зазвичай починаю' },
    oneLiner: { en: 'Making the market get what makes you different.', uk: 'Зробити так, щоб ринок зрозумів, чим ти відрізняєшся.' },
    description: {
      en: 'Product-market fit means the product works. Brand-market fit means people understand why they should pick you over the other guys, and in my experience those are two very different problems.',
      uk: 'Product-market fit означає, що продукт працює. Brand-market fit означає, що люди розуміють, чому варто обрати тебе, а не інших, і з мого досвіду це дві дуже різні проблеми.',
    },
    deliverables: {
      en: 'positioning, a messaging matrix, an elevator pitch you can actually say out loud, brand guidelines lite.',
      uk: 'позиціювання, матриця повідомлень, elevator pitch, який реально можна сказати вголос, brand guidelines lite.',
    },
    priceFrom: 1500,
    duration: { en: '3 weeks', uk: '3 тижні' },
    note: { en: '€1,000 when added to a Buyer Sprint', uk: '€1,000 при додаванні до Buyer Sprint' },
  },
  {
    name: 'Pipeline Audit',
    slug: 'pipeline-audit',
    step: 3,
    icon: 'handshake',
    core: false,
    oneLiner: { en: 'Finding where deals leak on the way in.', uk: 'Знаходжу, де витікають угоди на вході.' },
    description: {
      en: 'I go through your funnel and your sales process, listen to call recordings, talk to people who did not buy and show you where the deals leak and why.',
      uk: 'Я проходжу через твою воронку та процес продажів, слухаю записи дзвінків, розмовляю з людьми, які не купили, і показую, де витікають угоди і чому.',
    },
    deliverables: {
      en: 'a funnel and sales audit, lost deal analysis, a prioritized list of fixes.',
      uk: 'аудит воронки та продажів, аналіз втрачених угод, пріоритезований список виправлень.',
    },
    priceFrom: 2000,
    duration: { en: '2 weeks', uk: '2 тижні' },
  },
  {
    name: 'Grow Through Your Customers',
    slug: 'grow-through-customers',
    step: 4,
    icon: 'heart-handshake',
    core: true,
    tag: { en: 'where I usually start', uk: 'звідси зазвичай починаю' },
    oneLiner: { en: 'Finding out why people leave and giving them reasons not to.', uk: 'З’ясовую, чому люди йдуть, і даю їм причини залишитися.' },
    description: {
      en: 'We find out why people leave, and then build what makes them stay: feedback loops, early warning signs, better communication with customers and referral mechanics that do not feel awkward.',
      uk: 'Ми з’ясовуємо, чому люди йдуть, а потім будуємо те, що змушує їх залишитися: петлі зворотного зв’язку, ранні попереджувальні сигнали, кращу комунікацію з клієнтами та реферальні механіки, які не виглядають незграбно.',
    },
    deliverables: {
      en: 'churn interviews, a retention playbook, customer health signals, an expansion map.',
      uk: 'інтерв’ю про churn, retention playbook, сигнали здоров’я клієнтів, карта розширення.',
    },
    priceFrom: 3000,
    duration: { en: '4 weeks', uk: '4 тижні' },
  },
  {
    name: 'Revenue Unlock',
    slug: 'revenue-unlock',
    step: 5,
    icon: 'trending-up',
    core: false,
    oneLiner: { en: 'Picking up the money already lying on the table.', uk: 'Збираю гроші, які вже лежать на столі.' },
    description: {
      en: 'Pricing, packaging, upsells, annual plans and all the other places where the money is already in the business and nobody is picking it up.',
      uk: 'Ціноутворення, пакети, upsells, річні плани та всі інші місця, де гроші вже є в бізнесі, і ніхто їх не збирає.',
    },
    deliverables: {
      en: 'a revenue structure review, pricing and packaging recommendations, quick wins, a test plan.',
      uk: 'огляд структури revenue, рекомендації щодо ціноутворення та пакетів, швидкі перемоги, план тестів.',
    },
    priceFrom: 2000,
    duration: { en: '2 weeks', uk: '2 тижні' },
  },
  {
    name: 'Launch Sprint',
    slug: 'launch-sprint',
    step: 'launch',
    icon: 'rocket',
    core: false,
    oneLiner: { en: 'Taking a new product or a new segment to market.', uk: 'Виводжу новий продукт або новий сегмент на ринок.' },
    description: {
      en: 'Taking a new product or a new segment to market? We go through all five steps together, from research and interviews to launch, with channel math that makes sense before you spend a single euro on ads.',
      uk: 'Виводиш новий продукт або новий сегмент на ринок? Ми проходимо всі п’ять кроків разом, від дослідження та інтерв’ю до запуску, з математикою каналів, яка має сенс ще до того, як ти витратиш хоча б один євро на рекламу.',
    },
    deliverables: {
      en: 'GTM strategy, ICP and messaging, a channel plan with CAC math per channel, a launch and experiments map.',
      uk: 'GTM стратегія, ICP та меседжинг, план каналів з CAC математикою по кожному каналу, карта запуску та експериментів.',
    },
    priceFrom: 7000,
    duration: { en: '2 months', uk: '2 місяці' },
  },
  {
    name: 'Ops Audit',
    slug: 'ops-audit',
    step: 'ops',
    icon: 'settings',
    core: false,
    oneLiner: { en: 'Who owns what, how tasks actually move, which meetings deserve to die.', uk: 'Хто за що відповідає, як реально рухаються задачі, які зустрічі заслуговують на смерть.' },
    description: {
      en: 'Who owns what, how tasks actually move, which meetings deserve to die. The boring stuff that decides whether anything above actually happens.',
      uk: 'Хто за що відповідає, як реально рухаються задачі, які зустрічі заслуговують на смерть. Нудна частина, яка вирішує, чи реально відбудеться щось із вищесказаного.',
    },
    deliverables: {
      en: 'an ops audit, an ownership map, a plan for meetings and documentation.',
      uk: 'аудит операцій, карта відповідальності, план зустрічей та документації.',
    },
    priceFrom: 1500,
    duration: { en: '2 weeks', uk: '2 тижні' },
  },
];

export const steps = services.filter(s => typeof s.step === 'number').sort((a, b) => (a.step as number) - (b.step as number));
export const launchSprint = services.find(s => s.step === 'launch')!;
export const opsAudit = services.find(s => s.step === 'ops')!;

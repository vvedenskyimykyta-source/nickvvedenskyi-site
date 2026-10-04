export interface Problem {
  label: { en: string; uk: string };
  quote: { en: string; uk: string };
  cta: { en: string; uk: string };
}

export const problems: Problem[] = [
  {
    label: { en: 'Discovery', uk: 'Дослідження' },
    quote: {
      en: 'The founder can describe the ideal customer in detail. Then you look at who actually pays, and it is somebody else entirely.',
      uk: 'Фаундер описує ідеального клієнта в деталях. Потім дивишся хто насправді платить, і це зовсім інша людина.',
    },
    cta: { en: 'Buyer Sprint', uk: 'Buyer Sprint' },
  },
  {
    label: { en: 'Positioning', uk: 'Позиціонування' },
    quote: {
      en: 'The messaging makes complete sense to everyone who built the product. It makes no sense at all to anyone who did not.',
      uk: 'Меседжинг ідеально зрозумілий всім, хто створив продукт. І зовсім незрозумілий всім, хто ні.',
    },
    cta: { en: 'Brand-Market Fit', uk: 'Brand-Market Fit' },
  },
  {
    label: { en: 'GTM', uk: 'GTM' },
    quote: {
      en: 'The product is ready, or close enough, and every person in the room has a different plan for the launch.',
      uk: 'Продукт готовий, або майже готовий, і кожна людина в кімнаті має свій план запуску.',
    },
    cta: { en: 'Launch Sprint', uk: 'Launch Sprint' },
  },
  {
    label: { en: 'Sales', uk: 'Продажі' },
    quote: {
      en: 'The demo goes beautifully, everyone nods, and then the thread dies. Nobody follows up to find out why.',
      uk: 'Демо проходить чудово, всі кивають, а потім тред вмирає. Ніхто не передзвонює щоб дізнатись чому.',
    },
    cta: { en: 'Pipeline Audit', uk: 'Pipeline Audit' },
  },
  {
    label: { en: 'Retention', uk: 'Ретеншн' },
    quote: {
      en: 'People cancel and the only record of it is a dropdown with four options, one of which is Other.',
      uk: 'Люди скасовують підписку, і єдиний запис про це це дропдаун з чотирма варіантами, один з яких "Інше".',
    },
    cta: { en: 'Grow Through Your Customers', uk: 'Зростання через клієнтів' },
  },
];

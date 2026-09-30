export interface Problem {
  quote: { en: string; uk: string };
  tags: string[];
}

export const problems: Problem[] = [
  {
    quote: {
      en: 'The founder can describe the ideal customer in detail. Then you look at who actually pays, and it is somebody else entirely.',
      uk: 'Фаундер описує ідеального клієнта в деталях. Потім дивишся хто насправді платить, і це зовсім інша людина.',
    },
    tags: ['Discovery'],
  },
  {
    quote: {
      en: 'The messaging makes complete sense to everyone who built the product. It makes no sense at all to anyone who did not.',
      uk: 'Меседжинг ідеально зрозумілий всім, хто створив продукт. І зовсім незрозумілий всім, хто ні.',
    },
    tags: ['Positioning'],
  },
  {
    quote: {
      en: 'The product is ready, or close enough, and every person in the room has a different plan for the launch.',
      uk: 'Продукт готовий, або майже готовий, і кожна людина в кімнаті має свій план запуску.',
    },
    tags: ['GTM'],
  },
  {
    quote: {
      en: 'The demo goes beautifully, everyone nods, and then the thread dies. Nobody follows up to find out why.',
      uk: 'Демо проходить чудово, всі кивають, а потім тред вмирає. Ніхто не передзвонює щоб дізнатись чому.',
    },
    tags: ['Sales'],
  },
  {
    quote: {
      en: 'People cancel and the only record of it is a dropdown with four options, one of which is Other.',
      uk: 'Люди скасовують підписку, і єдиний запис про це це дропдаун з чотирма варіантами, один з яких “Інше”.',
    },
    tags: ['Retention'],
  },
];

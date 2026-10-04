export interface Testimonial {
  name?: { en: string; uk: string };
  role: { en: string; uk: string };
  quote: { en: string; uk: string };
  translated?: boolean;
  isPersonal?: boolean;
  avatarBg?: string;
}

export const testimonials: Testimonial[] = [
  {
    role: { en: 'Co-Founder and CMO', uk: 'Співзасновник та CMO' },
    avatarBg: '#B1F171',
    quote: {
      en: "Nikita is a highly responsible manager who always advocates for his clients' interests. He's also very pleasant to work with and collaborates well with colleagues. Regarding his core responsibilities, he's extremely diligent and dependable.\n\nIt was a pleasure working with Nikita, and I can confidently recommend him as an excellent specialist and mentor for any team.",
      uk: "Микита це менеджер з великою відповідальністю, який завжди захищає інтереси своїх клієнтів. З ним дуже приємно працювати, і він чудово взаємодіє з колегами. Стосовно основних обов'язків, він надзвичайно старанний і надійний.\n\nПрацювати з Микитою було задоволенням, і я з упевненістю рекомендую його як чудового спеціаліста і ментора для будь-якої команди.",
    },
  },
  {
    role: { en: 'Project Manager', uk: 'Проєктний менеджер' },
    avatarBg: '#CCE9FF',
    quote: {
      en: "We worked on the same team for 1.5 years, and in addition to his role as a project manager, Mykyta was also a mentor to us. He was always attentive to his colleagues, supported their learning, and contributed to the team's professional development.\n\nMykyta has strong leadership qualities and communicates effectively both within the team and with clients. His ability to understand people and take an individualized approach to each person makes him not only an excellent manager but also a source of inspiration for the team.\n\nIn addition, Mykyta demonstrates deep knowledge in digital marketing, which allows him not only to oversee processes but also to provide valuable strategic insights.",
      uk: "Ми працювали в одній команді 1.5 роки, і окрім ролі проєктного менеджера, Микита також був нашим ментором. Він завжди був уважним до колег, підтримував їхнє навчання та сприяв професійному розвитку команди.\n\nМикита має сильні лідерські якості та ефективно комунікує як всередині команди, так і з клієнтами. Його здатність розуміти людей та індивідуальний підхід до кожного роблять його не лише чудовим менеджером, але й джерелом натхнення для команди.\n\nКрім того, Микита демонструє глибокі знання в digital маркетингу, що дозволяє йому не лише координувати проєкти, але й стратегічно впливати на їхній успіх.",
    },
  },
  {
    role: { en: 'COO', uk: 'COO' },
    avatarBg: '#F6B955',
    quote: {
      en: "I would like to leave my favorable recommendation about Mykyta as an excellent specialist and colleague.\n\nDuring the entire time of his work, Mykyta showed excellent organizational qualities, the ability to find an approach to clients and excellent analytical skills. Working on a project as a PM, Mykyta knows how to deeply dive into a business niche, correctly build processes in a team to obtain an excellent result, customize processes in such a way as to make cooperation as comfortable as possible.\n\nIn addition, Nikita has deep knowledge of digital marketing tools and the ability to use them to achieve project goals. Among the strengths, it is worth highlighting leadership, the ability to take responsibility, and the ability to quickly work with a large volume of tasks.\n\nWorking in a team with Mykyta is about professionalism, creative thinking, support, honesty, dedication and hard work!",
      uk: "Хочу залишити свою позитивну рекомендацію про Микиту як чудового спеціаліста та колегу.\n\nЗа весь час роботи Микита показав відмінні організаторські якості, вміння знаходити підхід до клієнтів та чудові аналітичні здібності. Працюючи над проєктом як PM, Микита вміє глибоко занурюватися в бізнес-нішу, правильно будувати процеси в команді для отримання відмінного результату, налаштовувати процеси так, щоб робити співпрацю максимально комфортною.\n\nКрім того, Микита має глибокі знання інструментів digital маркетингу та вміння використовувати їх для досягнення цілей проєкту. Серед сильних сторін варто виділити лідерство, вміння брати відповідальність та здатність швидко працювати з великим обсягом задач.\n\nПрацювати в команді з Микитою означає професіоналізм, креативне мислення, підтримку, чесність, відданість та наполегливу працю!",
    },
  },
  {
    role: { en: 'HR People Partner', uk: 'HR People Partner' },
    avatarBg: '#99D4FF',
    translated: true,
    quote: {
      en: "Mykyta worked as a Mentor Project Manager. Over almost 4 years, Mykyta proved himself a high-level professional, able to manage projects effectively, keep the team working well together and reach the goals that were set.\n\nMykyta showed leadership skills, found an individual approach to every team member and every client, and helped the team grow professionally. Thanks to his mentoring, the PM team significantly improved its skills.\n\nMykyta manages projects successfully, is very proactive and brings in new ideas. He takes an active part in developing the company and creating a supportive working environment for specialists. Mykyta has strong analytical skills, strategic thinking and the ability to work with people of different experience levels. His professionalism, initiative and responsibility make him a strong specialist in any team.\n\nI am sure Mykyta will become a valuable specialist for any company and will contribute to its growth.",
      uk: "Микита працював як Ментор Проєктний Менеджер. За майже 4 роки Микита зарекомендував себе як професіонал високого рівня, здатний ефективно керувати проєктами, підтримувати злагоджену роботу команди та досягати поставлених цілей.\n\nМикита проявив лідерські якості, знаходив індивідуальний підхід до кожного члена команди та кожного клієнта, допомагав команді рости професійно. Завдяки його менторству команда PM значно покращила свої навички.\n\nМикита успішно керує проєктами, дуже проактивний та привносить нові ідеї. Він бере активну участь у розвитку компанії та створенні сприятливого робочого середовища для спеціалістів. Микита має сильні аналітичні здібності, стратегічне мислення та вміння працювати з людьми різного рівня досвіду. Його професіоналізм, ініціативність та відповідальність роблять його сильним спеціалістом у будь-якій команді.\n\nЯ впевнена, що Микита стане цінним спеціалістом для будь-якої компанії та зробить внесок у її зростання.",
    },
  },
  {
    role: { en: 'Senior SEO Specialist', uk: 'Senior SEO спеціаліст' },
    avatarBg: '#B1F171',
    quote: {
      en: "I had the opportunity to work with Mykyta on a shared project when I was an SEO specialist, and he was the project manager. Even after I moved into the role of SEO Team Lead, we continued to collaborate, and I became even more convinced of his professionalism.\n\nHe has complete control over every project he manages. His attention to detail, analytical approach, and ability to effectively coordinate teams make working with him both smooth and productive. Beyond his exceptional project management skills, he also has deep expertise in various areas of marketing, allowing him to not only oversee processes but also provide valuable strategic insights.\n\nIf you're looking for a professional, highly organized, and dedicated manager who doesn't just do the job but takes it to the highest level, Mykyta is exactly that kind of specialist.",
      uk: "Мені пощастило працювати з Микитою над спільним проєктом, коли я була SEO спеціалістом, а він був проєктним менеджером. Навіть після того, як я перейшла на роль SEO Team Lead, ми продовжували співпрацювати, і я ще більше переконалася в його професіоналізмі.\n\nВін повністю контролює кожен проєкт, яким керує. Його увага до деталей, аналітичний підхід та здатність ефективно координувати команди роблять роботу з ним плавною та продуктивною. Окрім виняткових навичок управління проєктами, він також має глибоку експертизу в різних сферах маркетингу, що дозволяє йому не лише наглядати за процесами, але й давати цінні стратегічні поради.\n\nЯкщо ти шукаєш професіонала, високоорганізованого та відданого менеджера, який не просто виконує роботу, а піднімає її на найвищий рівень, Микита саме такий спеціаліст.",
    },
  },
  {
    role: { en: 'SEO Specialist', uk: 'SEO спеціаліст' },
    avatarBg: '#CCE9FF',
    translated: true,
    quote: {
      en: "I had the honor of working with Mykyta, and it was a truly professional experience. Mykyta is a PM who stands out for really great organizational skills, strategic thinking and the ability to find solutions even in the most difficult situations.\n\nOne of his strongest sides is the ability to communicate effectively with everyone involved. He always keeps the project under control and makes sure tasks are delivered on time without losing quality.\n\nI am confident that with Mykyta any project will succeed. I recommend him as a great PM who will make a real contribution to your company's growth.",
      uk: "Мені випала честь працювати з Микитою, і це був справді професійний досвід. Микита це PM, який вирізняється чудовими організаторськими здібностями, стратегічним мисленням та вмінням знаходити рішення навіть у найскладніших ситуаціях.\n\nОдна з його найсильніших сторін це вміння ефективно комунікувати з усіма залученими сторонами. Він завжди тримає проєкт під контролем і слідкує за тим, щоб завдання виконувались вчасно без втрати якості.\n\nЯ впевнена, що з Микитою будь-який проєкт буде успішним. Рекомендую його як чудового PM, який зробить реальний внесок у зростання вашої компанії.",
    },
  },
  {
    name: { en: 'Sarah Mitchell', uk: 'Sarah Mitchell' },
    role: { en: 'Founder, B2C SaaS', uk: 'Засновниця, B2C SaaS' },
    avatarBg: '#F6B955',
    isPersonal: true,
    quote: {
      en: 'We hired Nick to figure out why people were signing up and then disappearing after the first week. He talked to forty of our churned users in two weeks, came back and told us things about our own product that none of us wanted to hear. Then he helped us fix it. Three months later our day-30 retention was up by a third. What I did not expect was how much the team\'s thinking changed. We stopped guessing what users wanted and started actually asking.',
      uk: 'Ми найняли Ніка щоб зрозуміти чому люди реєструються і зникають після першого тижня. Він поговорив з сорока нашими втраченими користувачами за два тижні, повернувся і сказав нам речі про наш власний продукт які ніхто з нас не хотів чути. Потім допоміг це виправити. Через три місяці наш retention на 30-й день виріс на третину. Чого я не очікувала це наскільки змінилось мислення команди. Ми перестали вгадувати що хочуть користувачі і почали реально питати.',
    },
  },
  {
    name: { en: 'Daniel Krause', uk: 'Daniel Krause' },
    role: { en: 'Head of Growth, AI startup', uk: 'Head of Growth, AI стартап' },
    avatarBg: '#99D4FF',
    isPersonal: true,
    quote: {
      en: 'Nick is the only outside person I have worked with who actually talks to customers instead of just asking for the data export. He sat in on our sales calls, ran his own interviews, and then rewrote our positioning in a way that finally made sense to people outside the building. The pricing change alone paid for his entire engagement in the first month.',
      uk: 'Нік це єдина зовнішня людина з якою я працював, яка насправді розмовляє з клієнтами а не просто просить вивантаження даних. Він сидів на наших дзвінках з продажів, проводив власні інтервʼю, а потім переписав наше позиціонування так що воно нарешті мало сенс для людей за межами офісу. Зміна ціноутворення сама по собі окупила весь його проєкт за перший місяць.',
    },
  },
  {
    name: { en: 'Oksana Melnyk', uk: 'Оксана Мельник' },
    role: { en: 'CEO, services company', uk: 'CEO, сервісна компанія' },
    avatarBg: '#B1F171',
    isPersonal: true,
    quote: {
      en: 'We had a profitable business and no idea how to grow it. Every agency we talked to wanted to run ads or rebuild the website. Nick came in and did something none of us had thought to do: he went back to our existing clients and asked them why they were paying us. Turns out the thing they valued most was not even on our website. He rebuilt our offer around that, we raised prices, and revenue went up 40% without a single new acquisition channel.',
      uk: 'У нас був прибутковий бізнес і жодного уявлення як його рости. Кожне агентство з яким ми говорили хотіло запускати рекламу або переробляти сайт. Нік прийшов і зробив те про що ніхто з нас не подумав: він повернувся до наших існуючих клієнтів і запитав чому вони нам платять. Виявилось що те що вони цінують найбільше навіть не було на нашому сайті. Він перебудував нашу пропозицію навколо цього, ми підвищили ціни, і дохід виріс на 40% без жодного нового каналу залучення.',
    },
  },
];

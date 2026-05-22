export type CitySlug = "almaty" | "astana";
export type SiteLanguage = "ru" | "en" | "kz";

export const supportedLanguages: SiteLanguage[] = ["ru", "en", "kz"];
export const defaultLanguage: SiteLanguage = "ru";

export interface LocalizedText {
  ru: string;
  en: string;
  kz: string;
}

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  if (!publicBasePath) {
    return path;
  }

  return `${publicBasePath}${path}`;
}

const DIGRAPH_MAP: Array<[string, string]> = [
  ["SH", "Ш"],
  ["Sh", "Ш"],
  ["sh", "ш"],
  ["CH", "Ч"],
  ["Ch", "Ч"],
  ["ch", "ч"],
  ["ZH", "Ж"],
  ["Zh", "Ж"],
  ["zh", "ж"],
  ["YA", "Я"],
  ["Ya", "Я"],
  ["ya", "я"],
  ["YU", "Ю"],
  ["Yu", "Ю"],
  ["yu", "ю"],
  ["YO", "Ё"],
  ["Yo", "Ё"],
  ["yo", "ё"],
  ["TS", "Ц"],
  ["Ts", "Ц"],
  ["ts", "ц"],
];

const CHAR_MAP: Record<string, string> = {
  A: "А",
  a: "а",
  B: "Б",
  b: "б",
  C: "С",
  c: "с",
  D: "Д",
  d: "д",
  E: "Е",
  e: "е",
  F: "Ф",
  f: "ф",
  G: "Г",
  g: "г",
  H: "Х",
  h: "х",
  I: "И",
  i: "и",
  J: "Ж",
  j: "ж",
  K: "К",
  k: "к",
  L: "Л",
  l: "л",
  M: "М",
  m: "м",
  N: "Н",
  n: "н",
  O: "О",
  o: "о",
  P: "П",
  p: "п",
  Q: "Қ",
  q: "қ",
  R: "Р",
  r: "р",
  S: "С",
  s: "с",
  T: "Т",
  t: "т",
  U: "У",
  u: "у",
  V: "В",
  v: "в",
  W: "В",
  w: "в",
  X: "Кс",
  x: "кс",
  Y: "Ы",
  y: "ы",
  Z: "З",
  z: "з",
  Á: "Ә",
  á: "ә",
  Ä: "Ә",
  ä: "ә",
  Ó: "Ө",
  ó: "ө",
  Ö: "Ө",
  ö: "ө",
  Ú: "Ү",
  ú: "ү",
  Ü: "Ү",
  ü: "ү",
  Ý: "У",
  ý: "у",
  Í: "І",
  í: "і",
  ı: "і",
  Ń: "Ң",
  ń: "ң",
  Ǵ: "Ғ",
  ǵ: "ғ",
};

function toKazakhCyrillic(input: string) {
  let output = input;

  for (const [from, to] of DIGRAPH_MAP) {
    output = output.split(from).join(to);
  }

  return [...output].map((char) => CHAR_MAP[char] ?? char).join("");
}

export function localized(ru: string, en: string, kz: string = ru): LocalizedText {
  return { ru, en, kz };
}

export function getLocalizedText(value: LocalizedText, language: SiteLanguage) {
  const selected = value[language] ?? value.ru;

  if (language === "kz") {
    return toKazakhCyrillic(selected);
  }

  return selected;
}

export const languageLabels: Record<SiteLanguage, string> = {
  ru: "RU",
  en: "EN",
  kz: "KZ",
};

export type AmenityKey =
  | "wifi"
  | "workspace"
  | "locker"
  | "shower"
  | "air"
  | "kitchen"
  | "laundry"
  | "coffee"
  | "lounge"
  | "security"
  | "transfer"
  | "selfCheckIn";

export interface CityCardData {
  slug: CitySlug;
  name: LocalizedText;
  subtitle: LocalizedText;
  image: string;
  href: string;
}

export interface RoomData {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  image: string;
  size: LocalizedText;
  bedType: LocalizedText;
  amenities: AmenityKey[];
  ctaHref: string;
}

export interface CityContent {
  slug: CitySlug;
  name: LocalizedText;
  tagline: LocalizedText;
  heroImage: string;
  neighborhood: LocalizedText;
  about: LocalizedText;
  stats: LocalizedText[];
  featuredRoomIds: string[];
  gallery: Array<{
    src: string;
    alt: LocalizedText;
  }>;
  amenities: AmenityKey[];
  contact: {
    address: LocalizedText;
    whatsappLabel: string;
    whatsappLink: string;
    phone: string;
    email: string;
    instagram: string;
    tiktok: string;
  };
  mapHint: LocalizedText;
  bookingHint: LocalizedText;
}

export interface NavigationItem {
  label: LocalizedText;
  href: string;
}

export interface HomeAdvantage {
  title: LocalizedText;
  description: LocalizedText;
  icon: "urban" | "design" | "calm" | "speed";
}

export interface HomeMoodCard {
  title: LocalizedText;
  description: LocalizedText;
  metric: LocalizedText;
  icon: "focus" | "social" | "recharge";
}

const almatyCityscape = withBasePath("/cities/almaty-cityscape.jpg");
const almatyPanfilov = withBasePath("/cities/almaty-downtown-park.jpg");
const almatyKoktobe = withBasePath("/cities/almaty-koktobe.jpg");
const almatyAkimat = withBasePath("/cities/almaty-akimat.jpg");
const astanaEsil = withBasePath("/cities/astana-embankment.jpg");
const astanaChubary = withBasePath("/cities/astana-riverside-v2.jpg");
const astanaIshimBeach = withBasePath("/cities/astana-ishim-beach.jpg");
const astanaTripOne = withBasePath("/cities/astana-trip-01.jpg");
const astanaTripTwo = withBasePath("/cities/astana-trip-02.jpg");

export const uiCopy = {
  metadata: {
    title: localized(
      "Hi Hotel | Уютная городская гостиница в Алматы и Астане",
      "Hi Hotel | Cozy City Stay in Almaty and Astana",
      "Hi Hotel | Алматы мен Астанадагы жайлы конак уй",
    ),
    description: localized(
      "Hi Hotel — спокойная городская гостиница с форматом ближе к квартире: аккуратные номера, базовые удобства и удобные локации.",
      "Hi Hotel is a simple and cozy city stay with apartment-style comfort, clean rooms, and practical essentials.",
      "Hi Hotel — пәтер форматына жакын жайлы конак уй: таза болмелер, кажеттi ыцгайлыктар жане колайлы локациялар.",
    ),
  },
  header: {
    city: localized("Город", "City", "Qala"),
    book: localized("Бронь", "Book", "Bron"),
    menuLabel: localized("Переключить меню", "Toggle menu", "Menyu aystyru"),
  },
  mobileBar: {
    book: localized("Бронь", "Book", "Bron"),
    whatsapp: localized("WhatsApp", "WhatsApp", "WhatsApp"),
  },
  footer: {
    subtitle: localized(
      "Обычная городская гостиница для коротких и средних поездок.",
      "A simple city stay for short and medium trips.",
      "Qysqa jane orta saparlar ushin qaraпайым qala qonaq uyi.",
    ),
    description: localized(
      "Без лишнего пафоса: чисто, спокойно и удобно для жизни в городе.",
      "No extra luxury — just clean, calm, and practical for city living.",
      "Artiq pafos joq: taza, tynysh jane qalada turuga yngaılı.",
    ),
    navigation: localized("Навигация", "Navigation", "Navigaciya"),
    citiesAndSocial: localized("Города и соцсети", "Cities & Social", "Qalalar jane aleumettik jeliler"),
    rights: localized("Все права защищены.", "All rights reserved.", "Barlyq quqyq qorǵalǵan."),
    frontendOnly: localized(
      "Только frontend. Бронирование и backend-интеграции пока в виде placeholders.",
      "Frontend only. Booking and backend integrations are placeholders for now.",
      "Tek frontend. Bron jane backend integraciyalary qazir placeholder turinde.",
    ),
  },
  home: {
    heroTitle: localized(
      "Уютная городская гостиница в Алматы и Астане",
      "Cozy City Stay in Almaty and Astana",
      "Алматы мен Астанадагы жайлы конак уй",
    ),
    heroDescription: localized(
      "Формат ближе к квартире: спокойные номера, аккуратные общие зоны и всё нужное для комфортного проживания в городе.",
      "Apartment-style format: calm rooms, neat shared spaces, and all the basics for comfortable city living.",
      "Pater formatyna jaqyn: tynysh bolmeler, taza ortaq aimaqtar jane qalada turuga kazhet barlygy.",
    ),
    heroPrimaryCta: localized("Выбрать Алматы", "Choose Almaty", "Almatyny tandau"),
    heroSecondaryCta: localized("Смотреть номера", "Explore Rooms", "Bolmelerdi koru"),
    cityEyebrow: localized("Выберите город", "Choose your city", "Qalany tandanyz"),
    cityTitle: localized(
      "Две реальные локации: Алматы и Астана",
      "Two real locations: Almaty and Astana",
      "Eki naqty lokaciya: Almaty jane Astana",
    ),
    cityDescription: localized(
      "На фото — реальные городские кадры. Выберите филиал, который ближе по маршруту и атмосфере.",
      "Real city photos are used here. Choose the branch that fits your route and mood.",
      "Munda naqty qala suretteri qoldanylgan. Ozinizge yngaily filialdy tandanyz.",
    ),
    aboutEyebrow: localized("О нас", "About us", "Biz turaly"),
    aboutTitle: localized(
      "Спокойный формат без люкса и лишнего дизайна",
      "Simple format without luxury noise",
      "Luks emes, tynysh jane qaraпайым format",
    ),
    aboutDescription: localized(
      "Hi Hotel — это аккуратная городская гостиница. Мы делаем упор на чистоту, удобное расположение и понятный сервис.",
      "Hi Hotel is a neat city stay focused on cleanliness, location, and clear service.",
      "Hi Hotel — taza, ornalasu yngaılıgy jane tusinikti qyzmetke bagyttalgan qalalyq qonaq uyi.",
    ),
    galleryCta: localized("Галерея", "View Gallery", "Galereia"),
    contactsCta: localized("Контакты", "Contacts", "Kontaktter"),
    moodEyebrow: localized("Формат проживания", "Stay format", "Turu formati"),
    moodTitle: localized(
      "Подходит для поездок по делам и отдыха",
      "Good for work trips and short breaks",
      "Jumys saparyna da, demalysqa da saikes",
    ),
    moodDescription: localized(
      "Можно спокойно работать, отдыхать после дороги и быстро решать бытовые вопросы.",
      "You can work quietly, rest after travel, and handle daily needs with ease.",
      "Jumysty tynysh istep, joldan keyin demalyp, kun delik turmys maselesin onai shesuge bolady.",
    ),
  },
  cityTemplate: {
    startBooking: localized("Открыть бронь", "Start booking", "Brondy ashu"),
    exploreRooms: localized("Смотреть номера", "Explore rooms", "Bolmelerdi koru"),
    aboutEyebrow: localized("О локации", "About location", "Lokaciya turaly"),
    aboutTitleAlmaty: localized(
      "Обычная городская гостиница в удобном районе Алматы.",
      "A simple city stay in a convenient Almaty district.",
      "Almatydagy yngaılı audanda ornalasqan qaraпайым qalalyq qonaq uy.",
    ),
    aboutTitleAstana: localized(
      "Спокойная гостиница в современной части Астаны.",
      "A calm stay in the modern part of Astana.",
      "Astananyn zamanaýi boligindegi tynysh qonaq uy.",
    ),
    roomsEyebrow: localized("Номера", "Rooms", "Bolmeler"),
    roomsTitle: localized(
      "Простые и удобные варианты размещения",
      "Simple and practical room options",
      "Qaraпайым jane qolaily bolme nuskalary",
    ),
    roomsDescription: localized(
      "Без сложной концепции: чисто, удобно, с базовыми удобствами для проживания.",
      "No complicated concept: clean, practical, and equipped with essentials.",
      "Qiyin konsepsiyasiz: taza, qolaily jane turuga kazhet negizgi qyzmetter bar.",
    ),
    galleryEyebrow: localized("Галерея", "Gallery", "Galereia"),
    galleryDescription: localized(
      "Реальные фото города и спокойные интерьерные кадры.",
      "Real city photos and calm interior scenes.",
      "Qalanyn naqty suretteri jane tynysh interier kadrlar.",
    ),
    amenitiesEyebrow: localized("Удобства", "Amenities", "Qyzmetter"),
    amenitiesTitle: localized(
      "Только то, что действительно нужно",
      "Only what is really needed",
      "Shynymen kazhet narseler gana",
    ),
    amenitiesDescription: localized(
      "Стандартный набор для комфортного проживания без лишнего.",
      "Standard comfort essentials without extra noise.",
      "Artyq narse siz, turuga kazhet standart jiyn.",
    ),
    contactsEyebrow: localized("Контакты", "Contacts", "Kontaktter"),
    contactsTitleAlmaty: localized(
      "Контакты в Алматы",
      "Contacts in Almaty",
      "Almatydagy kontaktter",
    ),
    contactsTitleAstana: localized(
      "Контакты в Астане",
      "Contacts in Astana",
      "Astanadagy kontaktter",
    ),
    contactsDescription: localized(
      "Для быстрых вопросов по заселению удобнее всего писать в WhatsApp.",
      "For quick check-in questions, WhatsApp is the fastest channel.",
      "Qonystanu turaly tez suraqtar ushin WhatsApp en yngaily arna.",
    ),
    address: localized("Адрес:", "Address:", "Mekenjai:"),
    phone: localized("Телефон:", "Phone:", "Telefon:"),
    email: localized("Email:", "Email:", "Email:"),
    instagram: localized("Instagram", "Instagram", "Instagram"),
    tiktok: localized("TikTok", "TikTok", "TikTok"),
    mapPlaceholder: localized("Плейсхолдер карты", "Map placeholder", "Karta placeholder"),
    futureMap: localized("Здесь будет карта", "Map embed soon", "Munda karta bolady"),
    whatsapp: localized("WhatsApp", "WhatsApp", "WhatsApp"),
  },
  booking: {
    sectionEyebrow: localized("Бронирование", "Booking", "Bron"),
    titleSuffix: localized("UI-плейсхолдер бронирования", "Booking UI placeholder", "Bron UI placeholder"),
    checkIn: localized("Заезд", "Check-in", "Kiru"),
    checkOut: localized("Выезд", "Check-out", "Shygu"),
    guests: localized("Гости", "Guests", "Qonaqtar"),
    roomType: localized("Тип номера", "Room type", "Bolme turi"),
    guestsOptions: [
      localized("1 гость", "1 guest", "1 qonaq"),
      localized("2 гостя", "2 guests", "2 qonaq"),
      localized("3 гостя", "3 guests", "3 qonaq"),
      localized("4 гостя", "4 guests", "4 qonaq"),
    ],
    bnovoButton: localized("Открыть Bnovo (скоро)", "Open Bnovo (soon)", "Bnovo ashu (jaqynda)"),
    frontendNote: localized(
      "Это только frontend-форма. Реальная логика бронирования подключается позже.",
      "This is a frontend form only. Live booking logic will be connected later.",
      "Bul tek frontend forma. Naqty bron logikasy keyin qosylady.",
    ),
  },
  roomsPage: {
    heroEyebrow: localized("Номера", "Rooms", "Bolmeler"),
    heroTitle: localized(
      "Номера в спокойном квартирном формате",
      "Rooms in a calm apartment-style format",
      "Tynysh pater formatyndagy bolmeler",
    ),
    heroDescription: localized(
      "Показываем реальные варианты размещения без пафоса и лишней декоративности.",
      "Real room options without luxury styling or unnecessary decoration.",
      "Luks aksentiz, naqty bolme nuskalaryn korsetemiz.",
    ),
    showcaseEyebrow: localized("Шоукейс", "Showcase", "Korsetu"),
    showcaseTitle: localized("Варианты номеров", "Room options", "Bolme varianttary"),
    showcaseDescription: localized(
      "Практичные категории для одного человека, пары или небольшой семьи.",
      "Practical categories for solo guests, couples, and small families.",
      "Jeke qonaq, jup nemese kishi otbasy ushin qolaily kategoriyalar.",
    ),
    bookingTitle: localized(
      "Бронь пока в демо-режиме",
      "Booking is currently in demo mode",
      "Bron qazir demo rezhiminde",
    ),
    bookingDescription: localized(
      "Кнопки и формы готовы для будущего подключения Bnovo.",
      "Buttons and forms are ready for future Bnovo integration.",
      "Batyrmalar men formalar Bnovo qosu ushin dayyn.",
    ),
    almatyCta: localized("Бронь Алматы", "Book Almaty", "Almaty bron"),
    astanaCta: localized("Бронь Астана", "Book Astana", "Astana bron"),
  },
  galleryPage: {
    heroEyebrow: localized("Галерея", "Gallery", "Galereia"),
    heroTitle: localized(
      "Город и интерьеры без постановки",
      "City and interior photos without staging",
      "Qala jane interier suretteri — bary naqty",
    ),
    sectionEyebrow: localized("Визуальная история", "Visual story", "Vizual tarih"),
    sectionTitle: localized("Реальные кадры Алматы и Астаны", "Real Almaty and Astana shots", "Almaty men Astananin naqty suretteri"),
    sectionDescription: localized(
      "Городские виды и спокойные бытовые интерьеры в одном стиле.",
      "City scenes and calm everyday interiors in one visual tone.",
      "Qala korinisteri men tynysh turmys interierleri bir stilde berildi.",
    ),
  },
  contactsPage: {
    sectionEyebrow: localized("Контакты", "Contacts", "Kontaktter"),
    sectionTitle: localized(
      "Связь по двум городам",
      "Contacts for both cities",
      "Eki qala boyynsha kontakt",
    ),
    sectionDescription: localized(
      "Отдельные контакты для Алматы и Астаны. По быстрым вопросам — WhatsApp.",
      "Separate contacts for Almaty and Astana. For quick questions — WhatsApp.",
      "Almaty men Astana ushin bolek kontakt. Tez suraqtar ushin — WhatsApp.",
    ),
    mapPlaceholder: localized("Плейсхолдер карты", "Map placeholder", "Karta placeholder"),
    generalInquiryTitle: localized("Общие вопросы", "General inquiry", "Jalpy suraqtar"),
    generalInquiryDescription: localized(
      "Для групповых заездов и партнерств: hello@hihotel.kz. Сейчас это frontend-демо, поэтому формы работают как UI-плейсхолдеры.",
      "For group stays and partnerships: hello@hihotel.kz. This is a frontend demo, so forms currently work as UI placeholders.",
      "Toptyq qonystanu jane seriktestik ushin: hello@hihotel.kz. Qazir bul frontend-demo, formalar UI placeholder retinde isteydi.",
    ),
    slugAlmaty: localized("Алматы", "Almaty", "Almaty"),
    slugAstana: localized("Астана", "Astana", "Astana"),
    whatsapp: localized("WhatsApp", "WhatsApp", "WhatsApp"),
    instagram: localized("Instagram", "Instagram", "Instagram"),
    tiktok: localized("TikTok", "TikTok", "TikTok"),
  },
  roomCard: {
    roomSize: localized("Площадь:", "Room size:", "Olsheni:"),
    bedType: localized("Кровать:", "Bed type:", "Tosek turi:"),
    cta: localized("Бронь", "Book", "Bron"),
  },
};

export const primaryNavigation: NavigationItem[] = [
  { label: localized("Главная", "Home", "Basty bet"), href: "/" },
  { label: localized("Номера", "Rooms", "Bolmeler"), href: "/rooms" },
  { label: localized("Галерея", "Gallery", "Galereia"), href: "/gallery" },
  { label: localized("Контакты", "Contacts", "Kontaktter"), href: "/contacts" },
];

export const cityCards: CityCardData[] = [
  {
    slug: "almaty",
    name: localized("Алматы", "Almaty", "Almaty"),
    subtitle: localized(
      "Реальные городские кадры, зеленые улицы и удобный центр.",
      "Real city scenes, green streets, and a practical central location.",
      "Naqty qala suretteri, jasyl kosheler jane qolaily ortalyq.",
    ),
    image: almatyCityscape,
    href: "/almaty",
  },
  {
    slug: "astana",
    name: localized("Астана", "Astana", "Astana"),
    subtitle: localized(
      "Современный район, прямые маршруты и спокойная городская атмосфера.",
      "Modern district, direct routes, and a calm city atmosphere.",
      "Zamanaýi audan, tikei bagyttar jane tynysh qala atmosferasy.",
    ),
    image: astanaEsil,
    href: "/astana",
  },
];

export const homeAdvantages: HomeAdvantage[] = [
  {
    title: localized("Удобное расположение", "Good location", "Qolaily ornalasu"),
    description: localized(
      "Рядом транспорт, магазины и кафе. Легко добраться в любую часть города.",
      "Near transport, shops, and cafes. Easy to reach any part of the city.",
      "Transport, dukender jane damhanalar jaqyn. Qalanyn kez kelgen boligine baru onai.",
    ),
    icon: "urban",
  },
  {
    title: localized("Чистые интерьеры", "Clean interiors", "Taza interier"),
    description: localized(
      "Спокойная палитра, аккуратные материалы и понятная планировка.",
      "Calm palette, neat materials, and clear room layout.",
      "Tynysh tus, taza materialdar jane tusinikti jospar.",
    ),
    icon: "design",
  },
  {
    title: localized("Тихая атмосфера", "Calm atmosphere", "Tynysh atmosfera"),
    description: localized(
      "Подходит тем, кто ценит спокойный отдых после дороги или работы.",
      "Great for guests who need quiet rest after travel or work.",
      "Jol nemese jumystan keyin tynyghu qajet qonaqtargha saikes.",
    ),
    icon: "calm",
  },
  {
    title: localized("Базовый комфорт", "Practical comfort", "Negizgi komfort"),
    description: localized(
      "Wi-Fi, удобное заселение и стандартные удобства для жизни в городе.",
      "Wi-Fi, easy check-in, and standard essentials for city stay.",
      "Wi-Fi, qolaily qonystanu jane qalada turuga kazhet standart qyzmetter.",
    ),
    icon: "speed",
  },
];

export const homeMoodCards: HomeMoodCard[] = [
  {
    title: localized("Для работы", "For work", "Jumys ushin"),
    description: localized(
      "Рабочий стол, нормальный интернет и спокойные часы в течение дня.",
      "Desk space, stable internet, and calm daytime hours.",
      "Jumys usteli, turaqty internet jane kundizgi tynysh waqyt.",
    ),
    metric: localized("стабильный Wi-Fi", "stable Wi-Fi", "turaqty Wi-Fi"),
    icon: "focus",
  },
  {
    title: localized("Для коротких поездок", "For short trips", "Qysqa sapar ushin"),
    description: localized(
      "Быстрое заселение, понятная логистика и удобный городской ритм.",
      "Quick check-in, clear logistics, and convenient city rhythm.",
      "Tez qonystanu, tusinikti logistika jane qolaily qala ritmi.",
    ),
    metric: localized("24/7 заезд", "24/7 check-in", "24/7 kiru"),
    icon: "social",
  },
  {
    title: localized("Для отдыха", "For rest", "Demalys ushin"),
    description: localized(
      "Тихие номера и мягкий свет, чтобы спокойно восстановиться.",
      "Quiet rooms and soft light to recover comfortably.",
      "Tynysh bolmeler men jumsaq jaryq — jaiyly demalys ushin.",
    ),
    metric: localized("тихо после 23:00", "quiet after 23:00", "23:00-den keyin tynysh"),
    icon: "recharge",
  },
];

export const amenityLabels: Record<AmenityKey, LocalizedText> = {
  wifi: localized("Скоростной Wi-Fi", "High-speed Wi-Fi", "Jyl'dam Wi-Fi"),
  workspace: localized("Рабочее место", "Workspace", "Jumys orny"),
  locker: localized("Личный шкафчик", "Secure locker", "Jeke loker"),
  shower: localized("Душ", "Shower", "Dus"),
  air: localized("Климат-контроль", "Climate control", "Klima baqylau"),
  kitchen: localized("Общая кухня", "Shared kitchen", "Ortaq ashana"),
  laundry: localized("Прачечная зона", "Laundry corner", "Kiru juu aimagy"),
  coffee: localized("Кофе-зона", "Coffee point", "Kofe aimagy"),
  lounge: localized("Общая гостиная", "Lounge zone", "Ortaq demalys aimagy"),
  security: localized("Безопасный доступ", "Smart access", "Qauipsiz kiru"),
  transfer: localized("Трансфер", "Transfer", "Transfer"),
  selfCheckIn: localized("Самостоятельный заезд 24/7", "24/7 self check-in", "24/7 ozdik kiru"),
};

export const rooms: RoomData[] = [
  {
    id: "urban-capsule",
    name: localized("Стандарт Single", "Standard Single", "Standart Single"),
    description: localized(
      "Небольшой аккуратный номер для одного гостя. Подходит для коротких поездок.",
      "A compact and clean room for one guest. Good for short stays.",
      "Bir qonaqqa arnalgan shagyn taza bolme. Qysqa sapargha saikes.",
    ),
    image:
      "https://images.unsplash.com/photo-1519710884006-9ee1a83a5f8d?auto=format&fit=crop&w=1600&q=80",
    size: localized("12 м2", "12 m2", "12 m2"),
    bedType: localized("Односпальная", "Single bed", "Bir oryndyq"),
    amenities: ["wifi", "locker", "shower", "air"],
    ctaHref: "/almaty#booking",
  },
  {
    id: "studio-double",
    name: localized("Стандарт Double", "Standard Double", "Standart Double"),
    description: localized(
      "Простой двухместный номер с комфортным местом для отдыха.",
      "Simple double room with comfortable rest space.",
      "Demalysqa qolaily, qarapaiym eki oryndyq bolme.",
    ),
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    size: localized("17 м2", "17 m2", "17 m2"),
    bedType: localized("Двуспальная", "Double bed", "Eki oryndyq"),
    amenities: ["wifi", "workspace", "coffee", "air"],
    ctaHref: "/almaty#booking",
  },
  {
    id: "loft-twin",
    name: localized("Twin номер", "Twin Room", "Twin bolme"),
    description: localized(
      "Удобный вариант для друзей или коллег, которые едут вместе.",
      "A practical option for friends or colleagues traveling together.",
      "Birge saparlaytyn dostar men ariptester ushin qolaily nusqa.",
    ),
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1600&q=80",
    size: localized("20 м2", "20 m2", "20 m2"),
    bedType: localized("Две отдельные кровати", "Twin beds", "Eki bolek tosek"),
    amenities: ["wifi", "workspace", "lounge", "selfCheckIn"],
    ctaHref: "/astana#booking",
  },
  {
    id: "family-corner",
    name: localized("Семейный номер", "Family Room", "Otbasy bolmesi"),
    description: localized(
      "Спокойный семейный формат с дополнительным местом хранения.",
      "Calm family format with extra storage space.",
      "Qosymsha saqtau orny bar tynysh otbasy formaty.",
    ),
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80",
    size: localized("24 м2", "24 m2", "24 m2"),
    bedType: localized("Двуспальная + диван", "Double + sofa", "Eki oryndyq + divan"),
    amenities: ["wifi", "kitchen", "laundry", "security"],
    ctaHref: "/astana#booking",
  },
];

export const cityPages: Record<CitySlug, CityContent> = {
  almaty: {
    slug: "almaty",
    name: localized("Hi Hotel Алматы", "Hi Hotel Almaty", "Hi Hotel Almaty"),
    tagline: localized(
      "Спокойная городская гостиница рядом с центром Алматы.",
      "A calm city stay close to central Almaty.",
      "Almaty ortalygyna jaqyn tynysh qalalyq qonaq uy.",
    ),
    heroImage: almatyPanfilov,
    neighborhood: localized(
      "Рядом пешие улицы, кафе, магазины и удобные городские маршруты.",
      "Close to walkable streets, cafes, shops, and convenient routes.",
      "Jayaý kosheler, damhanalar, dukender jane qolaily bagyttar jaqyn.",
    ),
    about: localized(
      "Филиал в Алматы рассчитан на тех, кому нужна простая и аккуратная гостиница в городе. Без лишней концепции — только базовый комфорт, чистота и удобное расположение.",
      "Our Almaty branch is for guests who need a clean and simple city stay. No extra concept — just practical comfort, cleanliness, and good location.",
      "Almaty filialy qarapaiym jane taza qala qonaq uin qajet etetin qonaqtargha arnalgan. Artyq konsepsiyasiz — negizgi komfort, tazalyq jane qolaily ornalasu.",
    ),
    stats: [
      localized("10 минут до центра", "10 min to city center", "Ortalyqqa 10 minut"),
      localized("Заезд 24/7", "24/7 check-in", "24/7 kiru"),
      localized("Тихий режим после 23:00", "Quiet mode after 23:00", "23:00-den keyin tynysh rejim"),
    ],
    featuredRoomIds: ["urban-capsule", "studio-double", "loft-twin"],
    gallery: [
      {
        src: almatyCityscape,
        alt: localized("Панорама Алматы", "Almaty cityscape", "Almaty panoramasy"),
      },
      {
        src: almatyPanfilov,
        alt: localized("Панфилов көшесі, Алматы", "Panfilov Street, Almaty", "Panfilov koshesi, Almaty"),
      },
      {
        src: almatyKoktobe,
        alt: localized("Улица в Алматы", "Street in Almaty", "Almatydagy koshe"),
      },
      {
        src: almatyAkimat,
        alt: localized("Центральный район Алматы", "Almaly district, Almaty", "Almatydagy Almaly audany"),
      },
      {
        src: almatyCityscape,
        alt: localized("Городской вечер в Алматы", "Evening scene in Almaty", "Almatydagy keshki korinis"),
      },
      {
        src: almatyPanfilov,
        alt: localized("Архитектура Алматы", "Almaty architecture", "Almaty arkhitekturasy"),
      },
    ],
    amenities: [
      "wifi",
      "workspace",
      "coffee",
      "lounge",
      "kitchen",
      "laundry",
      "security",
      "selfCheckIn",
    ],
    contact: {
      address: localized(
        "пр. Абылай Хана 119, Алматы, Казахстан",
        "119 Abylai Khan Avenue, Almaty, Kazakhstan",
        "Abylai Han dangyly 119, Almaty, Kazakhstan",
      ),
      whatsappLabel: "+7 777 000 11 22",
      whatsappLink: "https://wa.me/77770001122",
      phone: "+7 727 355 40 40",
      email: "almaty@hihotel.kz",
      instagram: "https://instagram.com/hihotel.almaty",
      tiktok: "https://tiktok.com/@hihotel.almaty",
    },
    mapHint: localized(
      "Плейсхолдер карты: филиал Алматы в центральной части города.",
      "Map placeholder: Almaty branch in the central part of the city.",
      "Karta placeholder: Almaty filialy qalanyn ortalyq boliginde.",
    ),
    bookingHint: localized(
      "Форма бронирования показана как UI-плейсхолдер. Реальное подключение Bnovo будет позже.",
      "Booking form is shown as a UI placeholder. Real Bnovo integration will be added later.",
      "Bron formasy UI placeholder turinde. Naqty Bnovo qosu keyin bolady.",
    ),
  },
  astana: {
    slug: "astana",
    name: localized("Hi Hotel Астана", "Hi Hotel Astana", "Hi Hotel Astana"),
    tagline: localized(
      "Обычная гостиница в современной части Астаны.",
      "A regular city stay in the modern part of Astana.",
      "Astananyn zamanaýi boligindegi qarapaiym qonaq uy.",
    ),
    heroImage: astanaChubary,
    neighborhood: localized(
      "Недалеко от деловых и прогулочных зон, с удобной транспортной связью.",
      "Near business and walking zones with convenient transport access.",
      "Biznes jane seruen aimaqtaryna jaqyn, transport qatynasy qolaily.",
    ),
    about: localized(
      "Филиал в Астане подойдет для рабочих поездок и спокойных городских выходных. Мы держим простой стандарт: чистота, тишина и понятные условия проживания.",
      "The Astana branch is good for work trips and calm city weekends. Our standard is simple: cleanliness, quiet atmosphere, and clear stay conditions.",
      "Astana filialy jumys saparyna jane tynysh demalysqa saikes. Bizdin standart qarapaiym: tazalyq, tynysh atmosfera jane tusinikti turu sharttary.",
    ),
    stats: [
      localized("12 минут до делового центра", "12 min to business center", "Biznes ortalyqqa 12 minut"),
      localized("Заезд 24/7", "24/7 check-in", "24/7 kiru"),
      localized("Трансфер по запросу", "Transfer on request", "Suranis boiynsha transfer"),
    ],
    featuredRoomIds: ["studio-double", "loft-twin", "family-corner"],
    gallery: [
      {
        src: astanaEsil,
        alt: localized("Вид на район Есиль, Астана", "Esil district, Astana", "Astana, Esil audany"),
      },
      {
        src: astanaChubary,
        alt: localized("Городской район Астаны", "Astana city district", "Astanadagy qala audany"),
      },
      {
        src: astanaIshimBeach,
        alt: localized("Современная застройка Астаны", "Modern buildings in Astana", "Astananyn zamanaýi qurylystary"),
      },
      {
        src: astanaTripOne,
        alt: localized("Улица в Астане", "Street in Astana", "Astanadagy koshe"),
      },
      {
        src: astanaTripTwo,
        alt: localized("Ботанический сад, Астана", "Botanical garden, Astana", "Botanika bagy, Astana"),
      },
      {
        src: astanaEsil,
        alt: localized("Набережная в Астане", "Riverside in Astana", "Astanadagy jagalau"),
      },
    ],
    amenities: [
      "wifi",
      "workspace",
      "lounge",
      "security",
      "transfer",
      "selfCheckIn",
      "coffee",
      "air",
    ],
    contact: {
      address: localized(
        "пр. Мәңгілік Ел 17, Астана, Казахстан",
        "17 Mangilik El Avenue, Astana, Kazakhstan",
        "Mangilik El dangyly 17, Astana, Kazakhstan",
      ),
      whatsappLabel: "+7 777 000 22 33",
      whatsappLink: "https://wa.me/77770002233",
      phone: "+7 717 255 40 40",
      email: "astana@hihotel.kz",
      instagram: "https://instagram.com/hihotel.astana",
      tiktok: "https://tiktok.com/@hihotel.astana",
    },
    mapHint: localized(
      "Плейсхолдер карты: филиал Астана в современном городском районе.",
      "Map placeholder: Astana branch in a modern city district.",
      "Karta placeholder: Astana filialy zamanaýi qala audanynda.",
    ),
    bookingHint: localized(
      "Секция бронирования пока работает как UI-плейсхолдер для будущей интеграции.",
      "Booking section currently works as a UI placeholder for future integration.",
      "Bron bolimi qazir bolashaq integraciya ushin UI placeholder retinde jwmys isteydi.",
    ),
  },
};

export const galleryImages = [
  {
    src: almatyCityscape,
    alt: localized("Панорама Алматы", "Almaty cityscape", "Almaty panoramasy"),
    width: 1300,
    height: 900,
  },
  {
    src: astanaEsil,
    alt: localized("Современный район Астаны", "Modern Astana district", "Astananyn zamanaýi audany"),
    width: 1300,
    height: 900,
  },
  {
    src: almatyKoktobe,
    alt: localized("Улица Алматы", "Street in Almaty", "Almatydagy koshe"),
    width: 1300,
    height: 1650,
  },
  {
    src: astanaIshimBeach,
    alt: localized("Ботанический сад в Астане", "Botanical garden in Astana", "Astanadagy botanika bagy"),
    width: 1300,
    height: 1000,
  },
  {
    src: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1300&q=80",
    alt: localized("Интерьер в квартирном стиле", "Apartment-style interior", "Pater stilindegi interier"),
    width: 1300,
    height: 980,
  },
  {
    src: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1300&q=80",
    alt: localized("Спокойная спальня", "Calm bedroom", "Tynysh zhatyn bolme"),
    width: 1300,
    height: 1550,
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1300&q=80",
    alt: localized("Кухня в жилом формате", "Residential kitchen", "Turgyndyk ashana"),
    width: 1300,
    height: 1000,
  },
  {
    src: almatyAkimat,
    alt: localized("Архитектура Алматы", "Almaty architecture", "Almaty arkhitekturasy"),
    width: 1300,
    height: 900,
  },
  {
    src: astanaTripOne,
    alt: localized("Набережная Астаны", "Astana riverside", "Astananyn jagalauy"),
    width: 1300,
    height: 900,
  },
  {
    src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1300&q=80",
    alt: localized("Уютный номер в обычном формате", "Cozy regular room", "Qarapaiym jylu bolme"),
    width: 1300,
    height: 980,
  },
];

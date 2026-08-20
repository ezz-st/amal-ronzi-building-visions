import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";

type Dict = Record<string, { ar: string; en: string }>;

export const t_: Dict = {
  brand: { ar: "أمل رونزي", en: "Amal Ronzy" },
  brandSub: {
    ar: "للمقاولات والاستشارات الهندسية",
    en: "Contracting & Engineering Consultancy",
  },
  navHome: { ar: "الرئيسية", en: "Home" },
  navAbout: { ar: "من نحن", en: "About" },
  navServices: { ar: "خدماتنا", en: "Services" },
  navWorks: { ar: "أعمالنا", en: "Our Work" },
  navWhy: { ar: "لماذا أمل رونزي", en: "Why Us" },
  navTestimonials: { ar: "آراء العملاء", en: "Testimonials" },
  navQuote: { ar: "اطلب عرض سعر", en: "Get a Quote" },
  navContact: { ar: "تواصل معنا", en: "Contact" },

  heroTitle: { ar: "نبني رؤيتك… ونحوّلها إلى واقع", en: "We build your vision… and turn it into reality" },
  heroDesc: {
    ar: "مقاولات عامة | تشطيبات | استشارات هندسية | تصميم وتنفيذ",
    en: "General contracting | Finishing | Engineering consultancy | Design & execution",
  },
  ctaQuote: { ar: "اطلب عرض سعر الآن", en: "Request a quote now" },
  ctaWorks: { ar: "شاهد أعمالنا", en: "View our work" },

  aboutTitle: { ar: "نبذة عن الشركة", en: "About the company" },
  aboutP1: {
    ar: "أمل رونزي للمقاولات والاستشارات الهندسية شركة متخصصة في تنفيذ وإدارة المشاريع الإنشائية وأعمال التشطيبات، بأسلوب هندسي دقيق يقوم على الاحترافية وجودة التنفيذ.",
    en: "Amal Ronzy for Contracting & Engineering Consultancy specializes in executing and managing construction projects and finishing works, with a precise engineering approach built on professionalism and quality.",
  },
  aboutP2: {
    ar: "نرافق المشروع من مرحلة التصميم وحتى التسليم، مع متابعة هندسية مستمرة والتزام كامل بالمواعيد وبمعايير الجودة في كل تفصيلة.",
    en: "We accompany each project from design to handover, with continuous engineering supervision, full commitment to schedules and quality standards in every detail.",
  },
  aboutPoint1: { ar: "احترافية ودقة", en: "Professionalism & precision" },
  aboutPoint2: { ar: "جودة تنفيذ", en: "Execution quality" },
  aboutPoint3: { ar: "التزام بالمواعيد", en: "On-time delivery" },
  aboutPoint4: { ar: "من التصميم حتى التسليم", en: "From design to handover" },

  servicesTitle: { ar: "خدماتنا", en: "Our services" },
  servicesLead: {
    ar: "حلول متكاملة تغطي مراحل المشروع كافة",
    en: "Integrated solutions covering every project stage",
  },

  worksTitle: { ar: "أعمالنا", en: "Our work" },
  worksLead: { ar: "نماذج من مشاريعنا المنفذة", en: "A selection of our executed projects" },
  worksAll: { ar: "كل المشاريع", en: "All projects" },
  viewProject: { ar: "عرض المشروع", en: "View project" },
  before: { ar: "قبل", en: "Before" },
  after: { ar: "بعد", en: "After" },
  projectType: { ar: "نوع المشروع", en: "Project type" },
  projectServices: { ar: "الخدمات المنفذة", en: "Services delivered" },
  projectDetails: { ar: "التفاصيل المتاحة", en: "Available details" },
  similarQuote: { ar: "اطلب عرض سعر لمشروع مشابه", en: "Request a quote for a similar project" },
  backToWorks: { ar: "العودة إلى أعمالنا", en: "Back to our work" },
  noImage: { ar: "لا توجد صورة متاحة لهذا القسم", en: "No image available for this section" },

  whyTitle: { ar: "لماذا أمل رونزي؟", en: "Why Amal Ronzy?" },
  why1: { ar: "جودة في التنفيذ", en: "Quality execution" },
  why2: { ar: "التزام بالمواعيد", en: "On-time commitment" },
  why3: { ar: "متابعة هندسية", en: "Engineering supervision" },
  why4: { ar: "خامات مختارة", en: "Selected materials" },
  why5: { ar: "أسعار وعروض مناسبة", en: "Fair pricing & offers" },
  why6: { ar: "تنفيذ من التصميم حتى التسليم", en: "Design-to-handover delivery" },

  testTitle: { ar: "آراء العملاء", en: "Client testimonials" },
  testPlaceholder: {
    ar: "سيتم عرض آراء عملائنا الحقيقية هنا فور توفرها.",
    en: "Real client testimonials will appear here once available.",
  },

  quoteTitle: { ar: "ابدأ مشروعك معنا", en: "Start your project with us" },
  quoteLead: {
    ar: "أرسل لنا تفاصيل مشروعك وسيتواصل معك فريقنا لمناقشة احتياجاتك وتقديم العرض المناسب.",
    en: "Send us your project details and our team will contact you to discuss your needs and provide a suitable offer.",
  },
  fName: { ar: "الاسم", en: "Name" },
  fPhone: { ar: "رقم الهاتف", en: "Phone number" },
  fType: { ar: "نوع المشروع", en: "Project type" },
  fArea: { ar: "المنطقة", en: "Area" },
  fMessage: { ar: "رسالة قصيرة", en: "Short message" },
  fFiles: { ar: "رفع صور أو مخططات إن وجدت", en: "Upload photos or plans (optional)" },
  fSubmit: { ar: "اطلب عرض سعر", en: "Request a quote" },
  fSent: {
    ar: "سيتم فتح واتساب لإرسال طلبك مباشرة إلى فريقنا.",
    en: "WhatsApp will open to send your request directly to our team.",
  },

  contactTitle: { ar: "تواصل معنا", en: "Contact us" },
  contactLead: { ar: "نحن على تواصل دائم معك", en: "We are always available" },
  callNow: { ar: "اتصال مباشر", en: "Call directly" },
  whatsapp: { ar: "واتساب", en: "WhatsApp" },
  social: { ar: "وسائل التواصل الاجتماعي", en: "Social media" },
  socialSoon: { ar: "سيتم إضافة الروابط الرسمية لاحقًا", en: "Official links will be added later" },
  location: { ar: "موقع الشركة", en: "Company location" },
  locationSoon: { ar: "سيتم إضافة العنوان لاحقًا", en: "Address will be added later" },
  rights: { ar: "جميع الحقوق محفوظة", en: "All rights reserved" },
};

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "ar",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");

  useEffect(() => {
    const saved = localStorage.getItem("ar-lang");
    if (saved === "en" || saved === "ar") setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("ar-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

export function useT() {
  const { lang } = useLang();
  return (key: keyof typeof t_ | string) => {
    const entry = t_[key as string];
    return entry ? entry[lang] : (key as string);
  };
}

export function pick(lang: Lang, ar: string, en: string) {
  return lang === "ar" ? ar : en;
}

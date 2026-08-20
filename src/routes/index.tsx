import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  PaintRoller,
  Ruler,
  ClipboardCheck,
  Plug,
  LayoutPanelTop,
  Hammer,
  ShieldCheck,
  Clock,
  Compass,
  Gem,
  Tag,
  Workflow,
  Phone,
  MessageCircle,
  MapPin,
  Share2,
  ArrowLeft,
} from "lucide-react";
import { Page, SectionTitle } from "@/components/Layout";
import { QuoteForm } from "@/components/QuoteForm";
import { useLang, useT } from "@/lib/i18n";
import { logoUrl, phones, projects, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "أمل رونزي للمقاولات والاستشارات الهندسية | مقاولات عامة وتشطيبات" },
      {
        name: "description",
        content:
          "شركة أمل رونزي للمقاولات والاستشارات الهندسية: مقاولات عامة، تشطيبات شقق وفلل، تصميم وتنفيذ، إشراف هندسي. اطلب عرض سعر الآن.",
      },
      { property: "og:title", content: "أمل رونزي للمقاولات والاستشارات الهندسية" },
      {
        property: "og:description",
        content: "مقاولات عامة | تشطيبات | استشارات هندسية | تصميم وتنفيذ — نبني رؤيتك ونحوّلها إلى واقع.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  { icon: Building2, ar: "المقاولات العامة", en: "General contracting", dAr: "تنفيذ وإدارة مشاريع المقاولات بمختلف أنواعها.", dEn: "Executing and managing contracting projects of all types." },
  { icon: PaintRoller, ar: "التشطيبات الداخلية والخارجية", en: "Interior & exterior finishing", dAr: "تنفيذ التشطيبات بجودة عالية واهتمام بالتفاصيل.", dEn: "High-quality finishing with attention to detail." },
  { icon: Ruler, ar: "التصميمات الهندسية", en: "Engineering design", dAr: "تقديم حلول وتصميمات هندسية مناسبة للمشروع.", dEn: "Engineering solutions and designs suited to the project." },
  { icon: ClipboardCheck, ar: "الإشراف الهندسي", en: "Engineering supervision", dAr: "متابعة مراحل التنفيذ والتأكد من جودة الأعمال.", dEn: "Following execution stages and verifying work quality." },
  { icon: Plug, ar: "أعمال الكهرباء والسباكة", en: "Electrical & plumbing", dAr: "تنفيذ الأعمال الكهربائية وأعمال السباكة ضمن المشروع.", dEn: "Electrical and plumbing works within the project." },
  { icon: LayoutPanelTop, ar: "الواجهات والديكورات", en: "Facades & decoration", dAr: "تنفيذ الواجهات والديكورات بأسلوب عصري واحترافي.", dEn: "Modern, professional facades and decoration." },
  { icon: Hammer, ar: "الترميم والتطوير", en: "Renovation & development", dAr: "تطوير وتجديد المساحات والمباني القائمة.", dEn: "Renovating and upgrading existing spaces and buildings." },
];

const whyItems = [
  { icon: ShieldCheck, key: "why1" },
  { icon: Clock, key: "why2" },
  { icon: Compass, key: "why3" },
  { icon: Gem, key: "why4" },
  { icon: Tag, key: "why5" },
  { icon: Workflow, key: "why6" },
];

function Index() {
  const t = useT();
  const { lang } = useLang();
  const ar = lang === "ar";

  return (
    <Page>
      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="grid-lines absolute inset-0 opacity-60" />
        <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_60%)]" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-4 py-28 text-center sm:px-6">
          <img
            src={logoUrl}
            alt={ar ? "شعار أمل رونزي للمقاولات والاستشارات الهندسية" : "Amal Ronzy logo"}
            className="reveal mb-8 h-32 w-32 rounded-full object-cover shadow-[var(--shadow-gold)] sm:h-40 sm:w-40"
          />
          <p className="reveal text-sm font-semibold tracking-[0.3em] text-primary">{t("brandSub")}</p>
          <h1 className="reveal mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-5xl md:text-6xl">
            <span className="text-gold-gradient">{t("brand")}</span>
            <span className="mt-3 block text-foreground">{t("heroTitle")}</span>
          </h1>
          <p className="reveal mt-6 max-w-2xl text-sm text-muted-foreground sm:text-base">{t("heroDesc")}</p>
          <div className="reveal mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Link to="/" hash="quote" className="btn-gold w-full rounded-md px-8 py-4 text-sm font-bold sm:w-auto">
              {t("ctaQuote")}
            </Link>
            <Link to="/" hash="works" className="btn-outline-gold w-full rounded-md px-8 py-4 text-sm font-bold sm:w-auto">
              {t("ctaWorks")}
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 border-t border-border py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionTitle overline={ar ? "من نحن" : "ABOUT"} title={t("aboutTitle")} />
          <p className="text-center text-base leading-loose text-muted-foreground">{t("aboutP1")}</p>
          <p className="mt-4 text-center text-base leading-loose text-muted-foreground">{t("aboutP2")}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["aboutPoint1", "aboutPoint2", "aboutPoint3", "aboutPoint4"].map((k) => (
              <div key={k} className="surface-card rounded-lg p-5 text-center text-sm font-semibold">
                {t(k)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 border-t border-border bg-card/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle overline={ar ? "خدماتنا" : "SERVICES"} title={t("servicesLead")} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.en} className="surface-card rounded-xl p-6">
                <s.icon className="h-8 w-8 text-primary" strokeWidth={1.4} />
                <h3 className="mt-5 text-lg font-bold">{ar ? s.ar : s.en}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ar ? s.dAr : s.dEn}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="scroll-mt-24 border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle overline={ar ? "أعمالنا" : "OUR WORK"} title={t("worksLead")} />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <Link
                key={p.slug}
                to="/works/$slug"
                params={{ slug: p.slug }}
                className="surface-card group block overflow-hidden rounded-xl"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-secondary">
                  {p.cover ? (
                    <img
                      src={p.cover}
                      alt={ar ? p.nameAr : p.nameEn}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
                      {t("noImage")}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold tracking-widest text-primary">{ar ? p.typeAr : p.typeEn}</p>
                  <h3 className="mt-2 text-lg font-bold">{ar ? p.nameAr : p.nameEn}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{ar ? p.shortAr : p.shortEn}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {t("viewProject")} <ArrowLeft className="h-4 w-4 ltr:rotate-180" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/works" className="btn-outline-gold inline-flex rounded-md px-8 py-3.5 text-sm font-bold">
              {t("worksAll")}
            </Link>
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="scroll-mt-24 border-t border-border bg-card/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle overline={ar ? "مميزاتنا" : "WHY US"} title={t("whyTitle")} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((w) => (
              <div key={w.key} className="surface-card flex items-center gap-4 rounded-xl p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-primary/40">
                  <w.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </span>
                <p className="min-w-0 text-base font-semibold">{t(w.key)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="scroll-mt-24 border-t border-border py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionTitle overline={ar ? "آراء العملاء" : "TESTIMONIALS"} title={t("testTitle")} />
          <div className="grid gap-5 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex min-h-40 items-center justify-center rounded-xl border border-dashed border-border p-6 text-center text-xs text-muted-foreground"
              >
                {t("testPlaceholder")}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="scroll-mt-24 border-t border-border bg-card/30 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionTitle overline={ar ? "عرض سعر" : "QUOTE"} title={t("quoteTitle")} />
          <p className="mb-8 text-center text-sm text-muted-foreground">{t("quoteLead")}</p>
          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle overline={ar ? "تواصل معنا" : "CONTACT"} title={t("contactLead")} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="surface-card rounded-xl p-6">
              <Phone className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 text-sm font-bold">{t("callNow")}</h3>
              {phones.map((p) => (
                <a key={p} href={`tel:${p}`} dir="ltr" className="mt-2 block text-sm text-muted-foreground hover:text-primary">
                  {p}
                </a>
              ))}
            </div>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="surface-card rounded-xl p-6">
              <MessageCircle className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 text-sm font-bold">{t("whatsapp")}</h3>
              <span dir="ltr" className="mt-2 block text-sm text-muted-foreground">01023460554</span>
            </a>
            <div className="surface-card rounded-xl p-6">
              <Share2 className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 text-sm font-bold">{t("social")}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{t("socialSoon")}</p>
            </div>
            <div className="surface-card rounded-xl p-6">
              <MapPin className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 text-sm font-bold">{t("location")}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{t("locationSoon")}</p>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}

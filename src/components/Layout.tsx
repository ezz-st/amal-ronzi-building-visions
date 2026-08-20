import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Phone, MessageCircle, Globe } from "lucide-react";
import { useLang, useT } from "@/lib/i18n";
import { logoUrl, phones, whatsappLink } from "@/lib/site";

const navItems = [
  { key: "navHome", hash: "#home" },
  { key: "navAbout", hash: "#about" },
  { key: "navServices", hash: "#services" },
  { key: "navWorks", hash: "#works" },
  { key: "navWhy", hash: "#why" },
  { key: "navTestimonials", hash: "#testimonials" },
  { key: "navQuote", hash: "#quote" },
  { key: "navContact", hash: "#contact" },
];

function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
      aria-label="Switch language"
    >
      <Globe className="h-3.5 w-3.5" />
      {lang === "ar" ? "EN" : "ع"}
    </button>
  );
}

export function Header() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/92 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <Link to="/" hash="home" className="flex min-w-0 items-center gap-3">
          <img src={logoUrl} alt={t("brand")} className="h-11 w-11 shrink-0 rounded-full object-cover" />
          <span className="min-w-0">
            <span className="block truncate text-base font-bold text-gold-gradient">{t("brand")}</span>
            <span className="block truncate text-[11px] text-muted-foreground">{t("brandSub")}</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to="/"
                hash={item.hash.slice(1)}
                className="rounded-md px-2.5 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
          <LangSwitch />
          <Link
            to="/"
            hash="quote"
            className="btn-gold hidden rounded-md px-4 py-2 text-sm font-bold sm:inline-flex"
          >
            {t("navQuote")}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border p-2 text-foreground xl:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/98 backdrop-blur xl:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to="/"
                hash={item.hash.slice(1)}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/90 transition-colors hover:bg-secondary hover:text-primary"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt={t("brand")} className="h-14 w-14 shrink-0 rounded-full object-cover" />
            <div className="min-w-0">
              <p className="text-lg font-bold text-gold-gradient">{t("brand")}</p>
              <p className="text-xs text-muted-foreground">{t("brandSub")}</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">{t("callNow")}</p>
            {phones.map((p) => (
              <a
                key={p}
                href={`tel:${p}`}
                dir="ltr"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" /> {p}
              </a>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">{t("whatsapp")}</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" /> 01023460554
            </a>
            <p className="text-xs text-muted-foreground">{t("socialSoon")}</p>
          </div>
        </div>
        <div className="hairline mt-10 h-px" />
        <p className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {t("brand")} — {t("rights")}
        </p>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  const t = useT();
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label={t("whatsapp")}
      className="btn-gold fixed bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full ltr:right-5 rtl:left-5"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export function SectionTitle({ overline, title }: { overline?: string; title: string }) {
  return (
    <div className="mb-10 text-center">
      {overline && <p className="mb-2 text-xs font-semibold tracking-[0.25em] text-primary">{overline}</p>}
      <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">{title}</h2>
      <div className="hairline mx-auto mt-4 h-px w-28" />
    </div>
  );
}

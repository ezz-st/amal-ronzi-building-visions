import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Page, SectionTitle } from "@/components/Layout";
import { useLang, useT } from "@/lib/i18n";
import { projects } from "@/lib/site";

export const Route = createFileRoute("/works/")({
  head: () => ({
    meta: [
      { title: "أعمالنا | مشاريع مقاولات وتشطيبات — أمل رونزي" },
      {
        name: "description",
        content:
          "معرض مشاريع أمل رونزي: تشطيبات شقق وفلل، واجهات، مبانٍ سكنية، وحمامات سباحة مع صور قبل وبعد.",
      },
      { property: "og:title", content: "أعمالنا — أمل رونزي للمقاولات" },
      { property: "og:description", content: "نماذج من مشاريع المقاولات والتشطيبات المنفذة." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/works" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/works" }],
  }),
  component: WorksPage,
});

function WorksPage() {
  const t = useT();
  const { lang } = useLang();
  const ar = lang === "ar";

  return (
    <Page>
      <section className="border-b border-border pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle overline={ar ? "أعمالنا" : "OUR WORK"} title={t("worksLead")} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <h2 className="mt-2 text-lg font-bold">{ar ? p.nameAr : p.nameEn}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{ar ? p.shortAr : p.shortEn}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {t("viewProject")} <ArrowLeft className="h-4 w-4 ltr:rotate-180" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}

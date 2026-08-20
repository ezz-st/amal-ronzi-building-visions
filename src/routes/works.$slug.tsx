import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Page } from "@/components/Layout";
import { QuoteForm } from "@/components/QuoteForm";
import { useLang, useT } from "@/lib/i18n";
import { getProject } from "@/lib/site";

export const Route = createFileRoute("/works/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "المشروع غير متاح" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.project;
    const title = `${p.nameAr} | ${p.typeAr} — أمل رونزي للمقاولات`;
    const description = p.descAr.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/works/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/works/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: p.nameAr,
            description: p.descAr,
            about: p.typeAr,
            creator: { "@type": "Organization", name: "أمل رونزي للمقاولات والاستشارات الهندسية" },
          }),
        },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const t = useT();
  const { lang } = useLang();
  const ar = lang === "ar";

  return (
    <Page>
      <article className="pt-28">
        <header className="mx-auto max-w-5xl px-4 pb-10 sm:px-6">
          <Link to="/works" className="inline-flex items-center gap-2 text-sm text-primary">
            <ArrowLeft className="h-4 w-4 ltr:rotate-180" /> {t("backToWorks")}
          </Link>
          <p className="mt-6 text-xs font-semibold tracking-[0.25em] text-primary">{ar ? p.typeAr : p.typeEn}</p>
          <h1 className="mt-3 text-3xl font-black sm:text-4xl">{ar ? p.nameAr : p.nameEn}</h1>
          <div className="hairline mt-6 h-px w-32" />
        </header>

        <section className="mx-auto max-w-5xl space-y-6 px-4 sm:px-6">
          {p.images.length > 0 ? (
            p.images.map((img) => (
              <figure key={img.url} className="overflow-hidden rounded-xl border border-border bg-card">
                <img
                  src={img.url}
                  alt={ar ? `${p.nameAr} — ${img.captionAr}` : `${p.nameEn} — ${img.captionEn}`}
                  loading="lazy"
                  className="h-auto w-full object-contain"
                />
                <figcaption className="border-t border-border px-4 py-3 text-xs text-muted-foreground">
                  {ar ? img.captionAr : img.captionEn}
                </figcaption>
              </figure>
            ))
          ) : (
            <div className="flex min-h-56 items-center justify-center rounded-xl border border-dashed border-border text-xs text-muted-foreground">
              {t("noImage")}
            </div>
          )}
        </section>

        <section className="mx-auto mt-12 max-w-5xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-xl font-bold">{ar ? "وصف المشروع" : "Project description"}</h2>
              <p className="mt-4 leading-loose text-muted-foreground">{ar ? p.descAr : p.descEn}</p>
            </div>
            <aside className="surface-card rounded-xl p-6">
              <h2 className="text-sm font-bold">{t("projectDetails")}</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-xs text-muted-foreground">{t("projectType")}</dt>
                  <dd className="font-semibold">{ar ? p.typeAr : p.typeEn}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">{t("projectServices")}</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {(ar ? p.servicesAr : p.servicesEn).map((s) => (
                      <span key={s} className="rounded-full border border-primary/35 px-3 py-1 text-xs text-primary">
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="mt-16 border-t border-border bg-card/30 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="text-center text-2xl font-bold">{t("similarQuote")}</h2>
            <div className="mt-8 rounded-2xl border border-border bg-background p-6 sm:p-8">
              <QuoteForm presetType={ar ? p.typeAr : p.typeEn} />
            </div>
          </div>
        </section>
      </article>
    </Page>
  );
}

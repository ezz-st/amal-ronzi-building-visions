import { useState } from "react";
import { useLang, useT } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";

export function QuoteForm({ presetType }: { presetType?: string }) {
  const t = useT();
  const { lang } = useLang();
  const [files, setFiles] = useState<string[]>([]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = [
      `${t("fName")}: ${fd.get("name") ?? ""}`,
      `${t("fPhone")}: ${fd.get("phone") ?? ""}`,
      `${t("fType")}: ${fd.get("type") ?? ""}`,
      `${t("fArea")}: ${fd.get("area") ?? ""}`,
      `${t("fMessage")}: ${fd.get("message") ?? ""}`,
    ];
    if (files.length) {
      lines.push(
        lang === "ar"
          ? `مرفقات سيتم إرسالها: ${files.join("، ")}`
          : `Attachments to send: ${files.join(", ")}`,
      );
    }
    window.open(`${whatsappLink}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
  };

  const field =
    "w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <input name="name" required placeholder={t("fName")} className={field} />
      <input name="phone" required inputMode="tel" placeholder={t("fPhone")} className={field} />
      <input name="type" defaultValue={presetType ?? ""} placeholder={t("fType")} className={field} />
      <input name="area" placeholder={t("fArea")} className={field} />
      <textarea name="message" rows={4} placeholder={t("fMessage")} className={`${field} sm:col-span-2`} />
      <label className="sm:col-span-2">
        <span className="mb-2 block text-xs text-muted-foreground">{t("fFiles")}</span>
        <input
          type="file"
          multiple
          accept="image/*,.pdf"
          onChange={(e) => setFiles(Array.from(e.target.files ?? []).map((f) => f.name))}
          className="w-full cursor-pointer rounded-md border border-dashed border-border bg-background px-4 py-3 text-xs text-muted-foreground file:me-3 file:rounded file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:text-xs file:text-foreground"
        />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" className="btn-gold w-full rounded-md px-6 py-3.5 text-sm font-bold sm:w-auto">
          {t("fSubmit")}
        </button>
        <p className="mt-3 text-xs text-muted-foreground">{t("fSent")}</p>
      </div>
    </form>
  );
}

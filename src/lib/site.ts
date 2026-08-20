import logo from "@/assets/logo.jpg.asset.json";
import villa from "@/assets/villa-before-after.jpg.asset.json";
import interior from "@/assets/interior-before-after.jpg.asset.json";
import building1 from "@/assets/building-1.jpg.asset.json";
import building2 from "@/assets/building-2.jpg.asset.json";
import poolConstruction from "@/assets/pool-construction.jpg.asset.json";
import poolFinished from "@/assets/pool-finished.jpg.asset.json";
import transformation from "@/assets/transformation.jpg.asset.json";

export const logoUrl = logo.url;

export const phones = ["0109434561", "01023460554"];
export const whatsappNumber = "201023460554";
export const whatsappLink = `https://wa.me/${whatsappNumber}`;

export type ProjectImage = { url: string; captionAr: string; captionEn: string };

export type Project = {
  slug: string;
  nameAr: string;
  nameEn: string;
  typeAr: string;
  typeEn: string;
  shortAr: string;
  shortEn: string;
  descAr: string;
  descEn: string;
  servicesAr: string[];
  servicesEn: string[];
  images: ProjectImage[];
  cover: string | null;
};

export const projects: Project[] = [
  {
    slug: "villa-facade-finishing",
    nameAr: "تشطيب وتنفيذ واجهة فيلا",
    nameEn: "Villa facade execution & finishing",
    typeAr: "فيلا سكنية",
    typeEn: "Residential villa",
    shortAr: "تحويل الهيكل الخرساني إلى واجهة فيلا متكاملة التشطيب.",
    shortEn: "Turning a concrete structure into a fully finished villa facade.",
    descAr:
      "مشروع تنفيذ وتشطيب واجهة فيلا سكنية بدءًا من مرحلة الطوب والخرسانة وحتى الواجهة النهائية، شاملًا أعمال المحارة والدهانات والفتحات والأعمال المعدنية وإنارة الواجهة والمدخل.",
    descEn:
      "Execution and finishing of a residential villa facade from the brick and concrete stage to the final facade, including plastering, painting, openings, metal works, facade and entrance lighting.",
    servicesAr: ["مقاولات عامة", "تشطيبات خارجية", "الواجهات والديكورات", "أعمال الكهرباء", "الإشراف الهندسي"],
    servicesEn: ["General contracting", "Exterior finishing", "Facades & decoration", "Electrical works", "Engineering supervision"],
    images: [{ url: villa.url, captionAr: "قبل / بعد – واجهة الفيلا", captionEn: "Before / After – villa facade" }],
    cover: villa.url,
  },
  {
    slug: "apartment-full-finishing",
    nameAr: "تشطيب كامل لشقة سكنية",
    nameEn: "Full apartment finishing",
    typeAr: "شقة سكنية",
    typeEn: "Residential apartment",
    shortAr: "تشطيب متكامل من مرحلة الطوب الأحمر حتى التسليم.",
    shortEn: "Complete finishing from red-brick stage to handover.",
    descAr:
      "تنفيذ تشطيب كامل لشقة سكنية يبدأ من مرحلة الطوب الأحمر، مرورًا بأعمال المحارة والتأسيس الكهربائي والصحي والأرضيات والأسقف الجبسية والإنارة المخفية، وصولًا إلى التسليم النهائي.",
    descEn:
      "Full finishing of a residential apartment starting from the red-brick stage through plastering, electrical and plumbing first fix, flooring, gypsum ceilings and concealed lighting, up to final handover.",
    servicesAr: ["التشطيبات الداخلية", "أعمال الكهرباء والسباكة", "الديكورات والأسقف", "الإشراف الهندسي"],
    servicesEn: ["Interior finishing", "Electrical & plumbing", "Decoration & ceilings", "Engineering supervision"],
    images: [
      { url: interior.url, captionAr: "قبل / بعد – الصالة", captionEn: "Before / After – living area" },
      { url: transformation.url, captionAr: "مراحل التنفيذ من البداية حتى التسليم", captionEn: "Execution stages from start to handover" },
    ],
    cover: interior.url,
  },
  {
    slug: "residential-buildings",
    nameAr: "مباني سكنية",
    nameEn: "Residential buildings",
    typeAr: "مشروع سكني",
    typeEn: "Residential project",
    shortAr: "أعمال إنشاء وتشطيب خارجي لمبانٍ سكنية متعددة الأدوار.",
    shortEn: "Construction and exterior finishing of multi-storey residential buildings.",
    descAr:
      "تنفيذ أعمال إنشائية وتشطيبات خارجية لمبانٍ سكنية متعددة الأدوار، تشمل الواجهات والبلكونات والأعمال المعدنية للدرابزين مع الالتزام بالتفاصيل الهندسية للتصميم.",
    descEn:
      "Structural works and exterior finishing for multi-storey residential buildings, including facades, balconies and metal balustrade works, executed to the design's engineering details.",
    servicesAr: ["مقاولات عامة", "تشطيبات خارجية", "الواجهات", "الإشراف الهندسي"],
    servicesEn: ["General contracting", "Exterior finishing", "Facades", "Engineering supervision"],
    images: [
      { url: building1.url, captionAr: "واجهة المبنى", captionEn: "Building facade" },
      { url: building2.url, captionAr: "منظور جانبي للمشروع", captionEn: "Side view of the project" },
    ],
    cover: building1.url,
  },
  {
    slug: "swimming-pool",
    nameAr: "تنفيذ حمام سباحة",
    nameEn: "Swimming pool execution",
    typeAr: "أعمال خارجية",
    typeEn: "Outdoor works",
    shortAr: "تنفيذ حمام سباحة من أعمال الخرسانة حتى التشطيب النهائي.",
    shortEn: "Pool execution from concrete works to final finishing.",
    descAr:
      "تنفيذ حمام سباحة يشمل أعمال الخرسانة والعزل وتركيب الفسيفساء وأعمال السباكة والتغذية والصرف، وتشطيب المحيط بالرخام والأرضيات الخارجية.",
    descEn:
      "Swimming pool execution including concrete works, waterproofing, mosaic tiling, plumbing supply and drainage, plus marble coping and outdoor deck finishing.",
    servicesAr: ["مقاولات عامة", "أعمال السباكة", "التشطيبات الخارجية", "الإشراف الهندسي"],
    servicesEn: ["General contracting", "Plumbing works", "Exterior finishing", "Engineering supervision"],
    images: [
      { url: poolConstruction.url, captionAr: "أثناء التنفيذ", captionEn: "During execution" },
      { url: poolFinished.url, captionAr: "بعد التسليم", captionEn: "After handover" },
    ],
    cover: poolFinished.url,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

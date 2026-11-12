export type TreatmentCategory =
  | "Dental Care"
  | "Teeth Alignment"
  | "Dentures"
  | "Dental Treatments"
  | "Implants"
  | "Cosmetic Dentistry";

export interface Treatment {
  slug: string;
  title: string;
  category: TreatmentCategory;
  pillTone: "sky" | "peach";
  shortDescription: string;
  overview: string;
  duration: string;
  benefits: string[];
  steps: string[];
  priceGuide: string;
  image: string;
  imageAlt: string;
}

export const treatments: Treatment[] = [
  {
    slug: "routine-dental-care",
    title: "Routine Check-ups & Hygiene",
    category: "Dental Care",
    pillTone: "sky",
    shortDescription:
      "Comprehensive oral examinations, digital X-rays, and gentle ultrasonic hygiene cleans for lifelong gum and tooth health.",
    overview:
      "Preventive dentistry is the foundation of a confident, healthy smile. Our experienced UK dentists perform thorough examinations, early cavity screening, and gentle airflow polishing in a calm, welcoming setting.",
    duration: "30 – 45 mins",
    benefits: [
      "Early detection of decay and gum inflammation",
      "Gentle ultrasonic plaque and tartar removal",
      "Personalised home-care plan tailored to your enamel",
    ],
    steps: [
      "Digital oral scan and low-dose diagnostic X-rays",
      "Full gum health assessment and enamel check",
      "Ultrasonic scale, polish, and fluoride protection",
    ],
    priceGuide: "From £65",
    image: "/images/about-clinic-1.jpg",
    imageAlt: "Bright modern Denta Care examination room with digital diagnostic displays",
  },
  {
    slug: "braces-and-teeth-alignment",
    title: "Braces & Clear Aligners",
    category: "Teeth Alignment",
    pillTone: "sky",
    shortDescription:
      "Discreet clear aligners and precision ceramic or metal braces designed to straighten teeth comfortably at any age.",
    overview:
      "Whether you prefer virtually invisible removable aligners or precision fixed braces, our orthodontic specialists craft a 3D digital treatment plan so you can preview your future smile before starting.",
    duration: "6 – 18 months",
    benefits: [
      "3D digital smile simulation at your first consultation",
      "Comfortable, discreet aligner and ceramic brace options",
      "Retainer plan included to keep your alignment stable",
    ],
    steps: [
      "3D intraoral scan — no messy traditional impressions",
      "Custom orthodontic roadmap reviewed with your specialist",
      "Regular progress checks across any of our 20+ UK clinics",
    ],
    priceGuide: "From £1,950",
    image: "/images/about-patient-1.jpg",
    imageAlt: "Smiling patient relaxing in a modern Denta Care dental chair after teeth alignment",
  },
  {
    slug: "modern-dentures",
    title: "Custom Comfort Dentures",
    category: "Dentures",
    pillTone: "peach",
    shortDescription:
      "Lightweight, natural-looking full and partial dentures precision-crafted for a secure fit and natural facial support.",
    overview:
      "Today's dentures are sculpted to match the natural shade, contour, and translucency of real teeth. We craft bespoke acrylic, chrome, and implant-retained dentures that feel secure when speaking and dining.",
    duration: "2 – 4 visits",
    benefits: [
      "Natural-looking tooth shade and gum tint matching",
      "Precision digital bite balance for comfortable chewing",
      "Optional implant-retained stability for zero slipping",
    ],
    steps: [
      "Gentle consultation and digital bite mapping",
      "Trial wax try-in to confirm aesthetics and comfort",
      "Final custom fit with complimentary follow-up adjustments",
    ],
    priceGuide: "From £750",
    image: "/images/about-patient-2.jpg",
    imageAlt: "Confident mature patient smiling comfortably in a bright Denta Care suite",
  },
  {
    slug: "restorative-dental-treatments",
    title: "Fillings, Crowns & Root Care",
    category: "Dental Treatments",
    pillTone: "peach",
    shortDescription:
      "Tooth-coloured composite restorations, porcelain crowns, and pain-free endodontic care using modern numbing techniques.",
    overview:
      "Damaged or sensitive teeth can be restored seamlessly without dark metal lines. Our clinicians use biomimetic composite resins and high-strength ceramics to preserve natural tooth structure.",
    duration: "45 – 75 mins",
    benefits: [
      "Mercury-free, shade-matched composite fillings",
      "Pain-free local anaesthetic with gentle numbing gel",
      "Durable porcelain crowns crafted for natural bite harmony",
    ],
    steps: [
      "Targeted comfort numbing and digital tooth assessment",
      "Precision removal of decay while preserving healthy enamel",
      "Layered composite bonding or custom ceramic crown fit",
    ],
    priceGuide: "From £140",
    image: "/images/about-clinic-2.jpg",
    imageAlt: "Calm, sunlit Denta Care treatment suite equipped with modern dental chair",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    category: "Implants",
    pillTone: "sky",
    shortDescription:
      "Permanent titanium and ceramic tooth replacements that look, feel, and function just like natural teeth.",
    overview:
      "Missing teeth affect both confidence and jawbone health. Our implantologists use 3D CBCT guided placement to anchor biocompatible implants with exceptional precision and minimal recovery time.",
    duration: "3 – 5 months total",
    benefits: [
      "Prevents bone loss and preserves facial structure",
      "No impact on neighbouring healthy teeth",
      "Engineered for decades of natural biting strength",
    ],
    steps: [
      "3D CBCT bone scan and digital implant planning",
      "Gentle guided implant placement under local anaesthetic",
      "Custom hand-finished porcelain crown attachment",
    ],
    priceGuide: "From £2,200",
    image: "/images/about-clinic-1.jpg",
    imageAlt: "Advanced surgical and implant planning suite at Denta Care UK",
  },
  {
    slug: "cosmetic-dentistry",
    title: "Teeth Whitening & Veneers",
    category: "Cosmetic Dentistry",
    pillTone: "peach",
    shortDescription:
      "Enamel-safe professional whitening, composite bonding, and ultra-thin porcelain veneers for a radiant smile.",
    overview:
      "Subtle enhancements can transform how you feel in every photo and conversation. We tailor cosmetic treatments conservatively so your smile stays bright, natural, and unmistakably yours.",
    duration: "1 – 2 visits",
    benefits: [
      "Clinically tested whitening gels formulated for low sensitivity",
      "Minimally invasive edge bonding for chipped or uneven teeth",
      "Bespoke porcelain veneers designed around your facial symmetry",
    ],
    steps: [
      "Smile design consultation and shade assessment",
      "Enamel-safe whitening or conservative composite sculpting",
      "Final polish and long-term brightness care guide",
    ],
    priceGuide: "From £320",
    image: "/images/about-patient-1.jpg",
    imageAlt: "Bright, natural smile following cosmetic dental care at Denta Care",
  },
];

export const treatmentCategories: TreatmentCategory[] = [
  "Dental Care",
  "Teeth Alignment",
  "Dentures",
  "Dental Treatments",
  "Implants",
  "Cosmetic Dentistry",
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

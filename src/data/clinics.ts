export interface Clinic {
  id: string;
  name: string;
  city: string;
  region: string;
  address: string;
  postcode: string;
  phone: string;
  hours: string;
  highlights: string[];
  wheelchairAccessible: boolean;
}

export const clinics: Clinic[] = [
  {
    id: "london-marylebone",
    name: "Denta Care Marylebone",
    city: "London",
    region: "Greater London",
    address: "42 Harley Street, Marylebone, London",
    postcode: "W1G 9PR",
    phone: "+44 20 7946 0192",
    hours: "10:00 AM - 07:00 PM",
    highlights: ["3D CBCT Scanner", "Clear Aligners", "Evening Slots"],
    wheelchairAccessible: true,
  },
  {
    id: "london-canary-wharf",
    name: "Denta Care Canary Wharf",
    city: "London",
    region: "Greater London",
    address: "18 Cabot Square, Canary Wharf, London",
    postcode: "E14 4QW",
    phone: "+44 20 7946 0418",
    hours: "10:00 AM - 07:00 PM",
    highlights: ["Same-Day Emergency", "Cosmetic Suite", "Hygiene Studio"],
    wheelchairAccessible: true,
  },
  {
    id: "manchester-spinningfields",
    name: "Denta Care Spinningfields",
    city: "Manchester",
    region: "North West",
    address: "12 Hardman Street, Spinningfields, Manchester",
    postcode: "M3 3HF",
    phone: "+44 161 496 0221",
    hours: "10:00 AM - 07:00 PM",
    highlights: ["Implant Centre", "Braces & Aligners", "Family Care"],
    wheelchairAccessible: true,
  },
  {
    id: "birmingham-colmore",
    name: "Denta Care Colmore Row",
    city: "Birmingham",
    region: "West Midlands",
    address: "85 Colmore Row, Birmingham",
    postcode: "B3 2BA",
    phone: "+44 121 496 0844",
    hours: "10:00 AM - 07:00 PM",
    highlights: ["Custom Dentures", "Digital X-Ray", "Sedation Care"],
    wheelchairAccessible: true,
  },
  {
    id: "leeds-city-square",
    name: "Denta Care Leeds Central",
    city: "Leeds",
    region: "Yorkshire",
    address: "24 Park Row, Leeds",
    postcode: "LS1 5JA",
    phone: "+44 113 496 0512",
    hours: "10:00 AM - 07:00 PM",
    highlights: ["Teeth Whitening", "Routine Hygiene", "Orthodontics"],
    wheelchairAccessible: true,
  },
  {
    id: "bristol-clifton",
    name: "Denta Care Clifton Village",
    city: "Bristol",
    region: "South West",
    address: "7 Regent Street, Clifton, Bristol",
    postcode: "BS8 4HW",
    phone: "+44 117 496 0309",
    hours: "10:00 AM - 07:00 PM",
    highlights: ["Family Dentistry", "Ceramic Crowns", "Gentle Care"],
    wheelchairAccessible: false,
  },
  {
    id: "edinburgh-new-town",
    name: "Denta Care George Street",
    city: "Edinburgh",
    region: "Scotland",
    address: "61 George Street, New Town, Edinburgh",
    postcode: "EH2 2JG",
    phone: "+44 131 496 0775",
    hours: "10:00 AM - 07:00 PM",
    highlights: ["Implantology", "Clear Aligners", "Airflow Hygiene"],
    wheelchairAccessible: true,
  },
  {
    id: "glasgow-buchanan",
    name: "Denta Care Buchanan",
    city: "Glasgow",
    region: "Scotland",
    address: "114 St Vincent Street, Glasgow",
    postcode: "G2 5UB",
    phone: "+44 141 496 0630",
    hours: "10:00 AM - 07:00 PM",
    highlights: ["Emergency Dental", "Custom Dentures", "Cosmetic Care"],
    wheelchairAccessible: true,
  },
];

export const clinicRegions = Array.from(new Set(clinics.map((c) => c.region)));

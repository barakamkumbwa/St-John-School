export const schoolInfo = {
  name: "St. John Secondary School",
  shortName: "St. John",
  motto: "Knowledge for Life",
  tagline:
    "Nurturing Tanzania's future leaders through academic excellence, integrity, and service.",
  foundedYear: 1998,
  location: "Morogoro, Tanzania",
  address: {
    poBox: "P.O. Box 1234",
    city: "Morogoro",
    country: "Tanzania",
  },
  contact: {
    phone: "+255 23 261 0000",
    mobile: "+255 712 345 678",
    email: "info@stjohnsecondary.ac.tz",
    admissionsEmail: "admissions@stjohnsecondary.ac.tz",
    hours: "Mon – Fri: 7:30 AM – 4:30 PM",
  },
  stats: {
    students: 1200,
    teachers: 48,
    years: 26,
    passRate: 98,
  },
  social: {
    facebook: "https://facebook.com/stjohnsecondary",
    instagram: "https://instagram.com/stjohnsecondary",
    youtube: "https://youtube.com/@stjohnsecondary",
  },
  navLinks: [
    { label: "Home",       href: "/" },
    { label: "About",      href: "/about" },
    { label: "Academics",  href: "/academics" },
    { label: "Admissions", href: "/admissions/apply" },
    { label: "News",       href: "/news" },
    { label: "Gallery",    href: "/gallery" },
    { label: "Staff",      href: "/staff" },
    { label: "Contact",    href: "/contact" },
  ],
} as const;

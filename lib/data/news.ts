export type NewsPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
};

export function getNewsImage(category: string) {
  const images: Record<string, string> = {
    Achievements: "/images/child2.jpeg",
    Admissions: "/images/admissions-banner.jpeg",
    Campus: "/images/gallery-banner.jpg",
    Sports: "/images/gallery-4.jpg",
    Newsletter: "/images/about-1.jpeg",
  };

  return images[category] ?? "/images/gallery-banner.jpg";
}

export const newsPosts: NewsPost[] = [
  {
    slug: "st-john-wins-national-science-fair-2025",
    title: "St. John Wins National Science Fair 2025",
    excerpt:
      "Our Form 3 students took first place at the Tanzania National Science Fair with an innovative solar-powered water purification system.",
    content: `We are thrilled to announce that a team of four Form 3 students from St. John Secondary School has won first place at the Tanzania National Science Fair 2025, held in Dar es Salaam last week.

The team — Amani Joseph, Fatuma Hassan, Baraka Mwinyi, and Neema Kessy — designed a solar-powered water purification system aimed at providing clean drinking water to rural communities in Morogoro region.

The project impressed judges with its practical application, low cost, and environmental sustainability. The team received a trophy, a cash prize of TZS 2,000,000, and an invitation to represent Tanzania at the East African Science Olympiad in Nairobi later this year.

"Our teachers encouraged us to think about real problems in our community," said team leader Amani Joseph. "We wanted to build something that could actually help people."

The school congratulates the students and their mentor, Mr. Daniel Mushi, for this outstanding achievement.`,
    date: "2025-10-15",
    category: "Achievements",
    author: "Communications Office",
    readTime: "3 min read",
  },
  {
    slug: "2026-admissions-now-open",
    title: "2026 Admissions Now Open for Form 1 and Form 5",
    excerpt:
      "Applications for the 2026 academic year are officially open. We invite ambitious learners to join our community of scholars and leaders.",
    content: `St. John Secondary School is pleased to announce that applications for the 2026 academic year are now open for both Form 1 (O-Level) and Form 5 (A-Level).

Prospective students and their families are invited to visit our campus in Morogoro for a guided tour, meet our teachers, and learn more about our programs.

**Key Dates:**
- Application Deadline: 15 December 2025
- Entrance Examination: 10 January 2026
- Results Announced: 20 January 2026
- Reporting Day: 5 February 2026

**How to Apply:**
Visit our Admissions page to complete the online application form. Our team will contact you within 3 business days.

For inquiries, call +255 712 345 678 or email admissions@stjohnsecondary.ac.tz.`,
    date: "2025-10-01",
    category: "Admissions",
    author: "Admissions Office",
    readTime: "2 min read",
  },
  {
    slug: "new-science-laboratory-inaugurated",
    title: "New State-of-the-Art Science Laboratory Inaugurated",
    excerpt:
      "Thanks to the generous support of our alumni, we have officially opened a new science laboratory equipped with modern instruments for chemistry, physics, and biology.",
    content: `St. John Secondary School officially inaugurated a new state-of-the-art science laboratory on Saturday, marking a significant milestone in our commitment to academic excellence.

The laboratory features:
- Fully equipped chemistry benches with fume hoods
- Modern physics apparatus for experiments in mechanics, optics, and electricity
- Advanced biology microscopes and specimen storage

The project was made possible through a generous donation from the St. John Alumni Association, in partnership with several corporate sponsors.

"We believe that hands-on learning is essential for developing the scientists and innovators of tomorrow," said the Headmaster during the ribbon-cutting ceremony. "This lab is a gift to our students — and to the future of Tanzania."`,
    date: "2025-09-18",
    category: "Campus",
    author: "Communications Office",
    readTime: "3 min read",
  },
  {
    slug: "inter-house-sports-week-highlights",
    title: "Inter-House Sports Week: Highlights and Winners",
    excerpt:
      "A week of intense competition, sportsmanship, and school spirit came to a close last Friday. Here are the highlights.",
    content: `Our annual Inter-House Sports Week concluded last Friday with a spectacular closing ceremony, filled with cheers, music, and celebration.

**House Standings:**
1. 🥇 St. Peter's House — 245 points
2. 🥈 St. Mary's House — 218 points
3. 🥉 St. Joseph's House — 196 points
4. St. Michael's House — 180 points

**Star Athletes:**
- Best Male Athlete: John Msigwa (St. Peter's) — 100m, 200m, and long jump champion
- Best Female Athlete: Grace Mwakalinga (St. Mary's) — 400m and high jump champion

The week featured football, netball, volleyball, athletics, and a highly anticipated teachers vs. students football match (which the students won 3–2, much to the delight of their peers).

Congratulations to all participants for their effort, teamwork, and sportsmanship.`,
    date: "2025-09-05",
    category: "Sports",
    author: "Sports Department",
    readTime: "2 min read",
  },
  {
    slug: "headmasters-message-new-term",
    title: "Headmaster's Message: A Warm Welcome to Term 2",
    excerpt:
      "As we begin a new term, I want to personally welcome every student, parent, and teacher back to our campus.",
    content: `Dear St. John Community,

Welcome back to Term 2. I hope you all had a restful break and return with renewed energy and enthusiasm.

This term promises to be filled with opportunities — from academic competitions and the science fair to sports events and cultural performances. I encourage every student to participate fully, try new things, and support one another.

To our parents, thank you for your continued partnership. Your involvement is key to our students' success.

Let us embrace this term with optimism, discipline, and a commitment to excellence.

Warm regards,
Dr. John Doe
Headmaster`,
    date: "2025-08-20",
    category: "Newsletter",
    author: "Headmaster's Office",
    readTime: "2 min read",
  },
  {
    slug: "students-shine-in-necta-results-2024",
    title: "Students Shine in 2024 NECTA Results",
    excerpt:
      "We are proud to announce that 98% of our Form 4 students passed the 2024 NECTA CSEE examinations, with many achieving Division I and II.",
    content: `St. John Secondary School is delighted to share the outstanding results of our Form 4 students in the 2024 NECTA Certificate of Secondary Education Examination (CSEE).

**Highlights:**
- 98% pass rate
- 42 students achieved Division I
- 68 students achieved Division II
- Top student: Neema Kessy with 6 A's

Our A-Level students also performed admirably, with a 96% pass rate in the 2024 ACSEE.

These results reflect the dedication of our students, teachers, and parents. We celebrate every one of you.

To our Form 4 and Form 6 graduates: the world is yours. Go forth and shine.`,
    date: "2025-01-15",
    category: "Achievements",
    author: "Academic Office",
    readTime: "2 min read",
  },
];

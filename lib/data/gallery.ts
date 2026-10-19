export type GalleryItem = {
  id: string;
  title: string;
  category: "Campus" | "Sports" | "Academics" | "Events" | "Graduation";
  image: string;
  gradient: string;
  span?: "tall" | "wide";
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", title: "School grounds", category: "Campus", image: "/images/gallery-4.jpg", gradient: "from-navy-700 to-navy-900", span: "wide" },
  { id: "g2", title: "Science laboratory", category: "Academics", image: "/images/gallery-5.jpg", gradient: "from-forest-500 to-forest-700" },
  { id: "g3", title: "Library and reading", category: "Campus", image: "/images/gallery-8.jpg", gradient: "from-gold-500 to-gold-700" },
  { id: "g4", title: "Inter-house football", category: "Sports", image: "/images/gallery-2.jpg", gradient: "from-forest-600 to-navy-800", span: "tall" },
  { id: "g5", title: "Graduation day", category: "Graduation", image: "/images/gallery-3.jpg", gradient: "from-gold-600 to-navy-800", span: "wide" },
  { id: "g6", title: "Classroom learning", category: "Academics", image: "/images/gallery-1.jpg", gradient: "from-navy-600 to-forest-600" },
  { id: "g7", title: "Cultural celebration", category: "Events", image: "/images/gallery-6.jpg", gradient: "from-gold-500 to-forest-500" },
  { id: "g8", title: "Football practice", category: "Sports", image: "/images/gallery-7.jpg", gradient: "from-navy-800 to-gold-600" },
  { id: "g9", title: "Parents and students", category: "Events", image: "/images/gallery-9.jpg", gradient: "from-forest-500 to-navy-700" },
  { id: "g10", title: "Students at play", category: "Campus", image: "/images/about-1.jpeg", gradient: "from-navy-700 to-forest-700" },
  { id: "g11", title: "Young learners", category: "Events", image: "/images/child2.jpeg", gradient: "from-gold-600 to-forest-600", span: "tall" },
  { id: "g12", title: "Learning together", category: "Academics", image: "/images/about-2.jpeg", gradient: "from-forest-700 to-navy-800" },
];

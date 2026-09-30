export const categories = [
  "Featured", "Music", "Drawing & Painting", "Marketing", "Animation",
  "Social Media", "UI/UX Design", "Creative Marketing", "Digital Illustration",
  "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design",
  "Photography", "Productivity", "Web Development", "Data Science", "Cooking",
  "Finance", "Business",
] as const;

export type Category = (typeof categories)[number];

export type Course = {
  id: string;
  title: string;
  image: string;
  categories: Category[];
  instructor: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: string;
  price: number;
  students: number;
};

export const courses: Course[] = [
  {
    id: "learn-figma", title: "Learn Figma from Basic",
    image: "/images/course-design.webp", categories: ["UI/UX Design", "Graphic Design"],
    instructor: "purepearl studio", lessons: 17, duration: "2 hours 16 mins",
    comments: 59, rating: 4.5, level: "Beginner", price: 25, students: 26,
  },
  {
    id: "digital-assets", title: "Build Digital Asset",
    image: "/images/course-digital.webp", categories: ["Graphic Design", "Digital Illustration", "UI/UX Design"],
    instructor: "purepearl studio", lessons: 17, duration: "2 hours 16 mins",
    comments: 59, rating: 4.5, level: "Beginner", price: 25, students: 26,
  },
  {
    id: "big-data", title: "The Power of Big Data",
    image: "/images/course-data.webp", categories: ["Data Science", "Business"],
    instructor: "purepearl studio", lessons: 17, duration: "2 hours 16 mins",
    comments: 59, rating: 4.5, level: "Beginner", price: 25, students: 26,
  },
  {
    id: "productivity", title: "Balancing Productivity and Creativity",
    image: "/images/course-productivity.webp", categories: ["Productivity", "Freelance & Entrepreneurship"],
    instructor: "purepearl studio", lessons: 17, duration: "2 hours 16 mins",
    comments: 59, rating: 4.5, level: "Beginner", price: 25, students: 26,
  },
  {
    id: "money-management", title: "Mastering Money Management",
    image: "/images/course-finance.webp", categories: ["Finance", "Business", "Freelance & Entrepreneurship"],
    instructor: "purepearl studio", lessons: 17, duration: "2 hours 16 mins",
    comments: 59, rating: 4.5, level: "Beginner", price: 25, students: 26,
  },
  {
    id: "startup-success", title: "From Idea to Startup Success",
    image: "/images/course-startup.webp", categories: ["Business", "Marketing", "Creative Marketing", "Freelance & Entrepreneurship"],
    instructor: "purepearl studio", lessons: 17, duration: "2 hours 16 mins",
    comments: 59, rating: 4.5, level: "Beginner", price: 25, students: 26,
  },
];

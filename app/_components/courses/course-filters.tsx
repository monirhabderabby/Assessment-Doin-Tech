import { useState } from "react";
import { motion } from "framer-motion";
import { categories, type Category } from "./course-data";

type CourseFiltersProps = {
  selected: Category;
  onSelect: (category: Category) => void;
};

export default function CourseFilters({ selected, onSelect }: CourseFiltersProps) {
  const [expanded, setExpanded] = useState(false);
  const visibleCategories = expanded ? categories : categories.slice(0, 18);

  return (
    <div role="group" aria-label="Filter courses by category" className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
      {visibleCategories.map((category) => (
        <button
          key={category}
          type="button"
          aria-pressed={selected === category}
          aria-controls="course-results"
          onClick={() => onSelect(category)}
          className="relative isolate rounded-full bg-[#f5f5f7] px-4 py-2.5 text-xs text-ink transition-colors hover:bg-gray-200 sm:text-sm"
        >
          {selected === category && (
            <motion.span layoutId="active-course-category" className="absolute inset-0 -z-10 rounded-full bg-lime" transition={{ type: "spring", stiffness: 400, damping: 35 }} />
          )}
          {category}
        </button>
      ))}
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => {
          setExpanded(!expanded);
          if (expanded && categories.indexOf(selected) >= 18) onSelect("Featured");
        }}
        className="rounded-full px-4 py-2.5 text-xs font-medium text-brand hover:bg-brand/5 sm:text-sm"
      >
        {expanded ? "− Less" : "+ More"}
      </button>
    </div>
  );
}

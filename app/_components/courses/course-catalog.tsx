"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, MotionConfig, motion, useReducedMotion } from "framer-motion";
import { courses, type Category } from "./course-data";
import CourseCard from "./courseCard";
import CourseFilters from "./course-filters";

export default function CourseCatalog() {
  const [selected, setSelected] = useState<Category>("Featured");
  const reduceMotion = useReducedMotion();
  const filteredCourses = selected === "Featured"
    ? courses
    : courses.filter((course) => course.categories.includes(selected));

  return (
    <MotionConfig reducedMotion="user">
      <section id="courses" aria-labelledby="catalog-heading" className="container py-16 sm:py-20 lg:py-24">
        <header className="mx-auto mb-9 max-w-4xl text-center">
          <h2 id="catalog-heading" className="text-3xl font-bold leading-tight tracking-tight text-[#101322] sm:text-4xl lg:text-5xl">
            Discover Your Passion,<br />Build Your Skills
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </header>
        <LayoutGroup id="course-catalog">
          <CourseFilters selected={selected} onSelect={setSelected} />
          <p role="status" className="sr-only">{filteredCourses.length} courses available in {selected}.</p>
          <motion.ul id="course-results" layout className="relative mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
            <AnimatePresence initial={false} mode="popLayout">
              {filteredCourses.map((course) => (
                <motion.li
                  key={course.id}
                  layout="position"
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.95 }}
                  transition={{ duration: reduceMotion ? 0 : 0.25, layout: { type: "spring", stiffness: 300, damping: 30 } }}
                  className="min-w-0"
                >
                  <CourseCard course={course} />
                </motion.li>
              ))}
              {filteredCourses.length === 0 && (
                <motion.li key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="col-span-full rounded-3xl border border-dashed border-gray-300 px-6 py-16 text-center">
                  <h3 className="text-xl font-semibold">No courses in {selected} yet</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Explore our featured courses to find something new to learn.</p>
                  <button type="button" onClick={() => setSelected("Featured")} className="mt-6 rounded-full bg-lime px-5 py-3 text-sm font-medium">View featured courses</button>
                </motion.li>
              )}
            </AnimatePresence>
          </motion.ul>
        </LayoutGroup>
      </section>
    </MotionConfig>
  );
}

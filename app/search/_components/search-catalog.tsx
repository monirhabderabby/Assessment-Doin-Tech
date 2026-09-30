"use client";

import type { ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight, Filter, Search, Shapes, Signal, SlidersHorizontal, X } from "lucide-react";
import CourseCard from "@/app/_components/courses/courseCard";
import { categories, courses } from "@/app/_components/courses/course-data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const quickCategories = [...categories.slice(0, 8), "Cooking"];
const sortOptions = ["Most relevant", "Highest rated", "Price: low to high", "Price: high to low", "Title: A–Z"];
const searchTypes = ["Courses", "Topics", "Creators"];
const levels = ["All levels", "Beginner", "Intermediate", "Advanced"];
const categoryAliases: Record<string, string> = { Design: "UI/UX Design", Development: "Web Development", "IT & Software": "Web Development" };
const PAGE_SIZE = 18;
// The supplied design repeats the six existing demo courses across five pages.
// Keep their real IDs for detail links; use separate keys for demo placements.
const catalog = Array.from({ length: 15 }, (_, batch) =>
  courses.map((course) => ({ course, key: `${batch}-${course.id}` })),
).flat();

function FilterSelect({ label, value, options, onChange, icon, className, placeholder }: {
  label: string; value: string; options: readonly string[]; onChange: (value: string) => void;
  icon?: ReactNode; className?: string; placeholder?: string;
}) {
  return (
    <Select value={value} onValueChange={(next) => { if (next) onChange(next); }}>
      <SelectTrigger aria-label={label} className={cn("max-w-full gap-2 rounded-full border-[#dedee3] bg-white px-4 text-sm text-[#686970] data-[size=default]:h-12", className)}>
        {icon}
        <SelectValue>{placeholder ?? value}</SelectValue>
      </SelectTrigger>
      <SelectContent align="start" alignItemWithTrigger={false} className="min-w-48 p-1">
        {options.map((option) => <SelectItem key={option} value={option} className="py-2.5">{option}</SelectItem>)}
      </SelectContent>
    </Select>
  );
}

export default function SearchCatalog() {
  const params = useSearchParams();
  const query = params.get("q") ?? "";
  const rawCategory = params.get("category") ?? "Featured";
  const category = categoryAliases[rawCategory] ?? rawCategory;
  const level = levels.includes(params.get("level") ?? "") ? params.get("level")! : "All levels";
  const sort = sortOptions.includes(params.get("sort") ?? "") ? params.get("sort")! : sortOptions[0];
  const searchType = searchTypes.includes(params.get("type") ?? "") ? params.get("type")! : "Courses";
  const affordable = params.get("affordable") === "true";
  const highlyRated = params.get("rated") === "true";
  const hasFilters = Boolean(query || category !== "Featured" || level !== "All levels" || affordable || highlyRated);

  function updateParams(changes: Record<string, string | null>) {
    const next = new URLSearchParams(params.toString());
    next.delete("page");
    Object.entries(changes).forEach(([key, value]) => {
      if (value) next.set(key, value);
      else next.delete(key);
    });
    window.history.pushState(null, "", next.size ? `/search?${next}` : "/search");
  }

  function resetFilters() {
    updateParams({ q: null, category: null, level: null, affordable: null, rated: null });
  }

  const filtered = catalog.filter(({ course }) => {
    const searchable = searchType === "Creators" ? course.instructor
      : searchType === "Topics" ? course.categories.join(" ")
        : `${course.title} ${course.instructor} ${course.categories.join(" ")}`;
    return searchable.toLowerCase().includes(query.trim().toLowerCase())
      && (category === "Featured" || course.categories.some((item) => item === category))
      && (level === "All levels" || course.level === level)
      && (!affordable || course.price <= 25)
      && (!highlyRated || course.rating >= 4.5);
  }).sort((a, b) => {
    if (sort === "Highest rated") return b.course.rating - a.course.rating;
    if (sort === "Price: low to high") return a.course.price - b.course.price;
    if (sort === "Price: high to low") return b.course.price - a.course.price;
    if (sort === "Title: A–Z") return a.course.title.localeCompare(b.course.title);
    return 0;
  });
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const requestedPage = Number(params.get("page") ?? 1);
  const page = Number.isFinite(requestedPage) ? Math.min(pageCount, Math.max(1, Math.floor(requestedPage))) : 1;
  const visibleCourses = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function changePage(next: number) {
    updateParams({ page: next === 1 ? null : String(next) });
    document.getElementById("search-results-heading")?.focus({ preventScroll: true });
    document.getElementById("search-results")?.scrollIntoView({ behavior: "instant", block: "start" });
  }

  return (
    <>
      <section aria-labelledby="search-heading" className="bg-blueprint bg-brand pb-16 pt-9 text-white sm:pb-[68px] sm:pt-10">
        <div className="container">
          <h1 id="search-heading" className="text-center text-3xl font-bold tracking-tight sm:text-[38px]">Find Your Next Course</h1>
          <form role="search" onSubmit={(event) => {
            event.preventDefault();
            updateParams({ q: String(new FormData(event.currentTarget).get("q") ?? "").trim() || null });
          }} className="mx-auto mt-8 flex max-w-[624px] flex-col gap-4 min-[400px]:flex-row">
            <div className="flex min-w-0 flex-1 items-center rounded-full bg-white pl-4 text-ink sm:pl-6">
              <button type="submit" aria-label="Search courses" className="shrink-0 rounded-full p-1 text-muted-foreground hover:text-brand"><Search aria-hidden="true" className="size-5" /></button>
              <label htmlFor="search-query" className="sr-only">Search courses, topics, or creators</label>
              <input key={query} id="search-query" name="q" defaultValue={query} type="search" placeholder="Search" className="h-[52px] w-full min-w-0 rounded-full bg-transparent px-3 pr-5 text-base outline-none placeholder:text-muted-foreground" />
            </div>
            <FilterSelect label="Search by" value={searchType} options={searchTypes} onChange={(value) => updateParams({ type: value === "Courses" ? null : value })} className="justify-center border-0 bg-lime px-6 text-ink data-[size=default]:h-[52px] [&_svg]:text-ink" />
          </form>
        </div>
      </section>

      <section id="search-results" aria-labelledby="search-results-heading" className="container scroll-mt-36 pb-16 pt-12 sm:pb-[72px] sm:pt-[72px]">
        <h2 id="search-results-heading" tabIndex={-1} className="sr-only">Course search results</h2>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger className={cn("flex h-12 items-center gap-2 rounded-full border border-[#dedee3] px-4 text-sm text-[#686970] hover:bg-muted", (affordable || highlyRated) && "border-brand bg-brand/5 text-brand")}>
                <Filter aria-hidden="true" className="size-4" /> Filter{(affordable || highlyRated) && <span className="size-2 rounded-full bg-brand" />}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuCheckboxItem checked={affordable} onCheckedChange={(checked) => updateParams({ affordable: checked ? "true" : null })}>$25 and under</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={highlyRated} onCheckedChange={(checked) => updateParams({ rated: checked ? "true" : null })}>Rated 4.5 and above</DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={resetFilters}>Clear all filters</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <FilterSelect label="Course level" value={level} placeholder={level === "All levels" ? "Level" : level} options={levels} icon={<Signal aria-hidden="true" className="size-4" />} onChange={(value) => updateParams({ level: value === "All levels" ? null : value })} />
            <FilterSelect label="Course category" value={category} placeholder={category === "Featured" ? "Category" : category} options={categories} icon={<Shapes aria-hidden="true" className="size-4" />} onChange={(value) => updateParams({ category: value === "Featured" ? null : value })} />
          </div>
          <FilterSelect label="Sort courses" value={sort} options={sortOptions} icon={<SlidersHorizontal aria-hidden="true" className="size-4" />} onChange={(value) => updateParams({ sort: value === sortOptions[0] ? null : value })} />
        </div>

        <div role="group" aria-label="Course categories" className="mt-8 flex flex-wrap gap-3 lg:justify-between">
          {quickCategories.map((item) => (
            <button key={item} type="button" aria-pressed={category === item} aria-controls="search-course-list" onClick={() => updateParams({ category: item === "Featured" ? null : item })} className={cn("rounded-full px-4 py-3 text-sm transition-colors", category === item ? "bg-lime text-ink" : "bg-[#f5f5f7] text-[#686970] hover:bg-gray-200")}>{item}</button>
          ))}
        </div>
        {hasFilters && <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>{filtered.length} results{query ? ` for “${query}”` : ""}{category !== "Featured" ? ` in ${category}` : ""}</p>
          <button type="button" onClick={resetFilters} className="flex items-center gap-1.5 rounded-full px-2 py-1 text-brand hover:bg-brand/5"><X aria-hidden="true" className="size-4" /> Clear filters</button>
        </div>}
        <p role="status" aria-live="polite" className="sr-only">{filtered.length} courses found. Page {page} of {pageCount}.</p>

        {visibleCourses.length > 0 ? <ul id="search-course-list" className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-[76px] lg:grid-cols-3 lg:gap-10">
          {visibleCourses.map(({ course, key }) => <li key={key} className="min-w-0"><CourseCard course={course} /></li>)}
        </ul> : <div id="search-course-list" className="my-16 rounded-3xl border border-dashed px-6 py-20 text-center">
          <Search aria-hidden="true" className="mx-auto mb-5 size-9 text-muted-foreground" />
          <h3 className="text-2xl font-bold">No courses found</h3>
          <p className="mt-3 text-muted-foreground">Try another search or clear your filters to explore more courses.</p>
          <button type="button" onClick={resetFilters} className="mt-6 rounded-full bg-lime px-6 py-3 text-sm font-medium">Explore all courses</button>
        </div>}

        {pageCount > 1 && <nav aria-label="Course pagination" className="mt-16 flex items-center justify-center gap-2 sm:mt-[72px] sm:gap-3">
          <button type="button" aria-label="Previous page" disabled={page === 1} onClick={() => changePage(page - 1)} className="mr-1 flex size-12 items-center justify-center rounded-full border border-[#dedee3] text-[#686970] hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"><ChevronLeft aria-hidden="true" className="size-6" /></button>
          {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => <button key={number} type="button" aria-label={`Page ${number}`} aria-current={page === number ? "page" : undefined} onClick={() => changePage(number)} className={cn("flex size-9 items-center justify-center rounded-full text-base font-bold transition-colors hover:bg-lime", page === number ? "text-gray-400" : "text-[#424349]")}>{number}</button>)}
          <button type="button" aria-label="Next page" disabled={page === pageCount} onClick={() => changePage(page + 1)} className="ml-1 flex size-12 items-center justify-center rounded-full border border-[#dedee3] text-[#686970] hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"><ChevronRight aria-hidden="true" className="size-6" /></button>
        </nav>}
      </section>
    </>
  );
}

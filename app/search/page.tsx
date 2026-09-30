import type { Metadata } from "next";
import { Suspense } from "react";
import SearchCatalog from "./_components/search-catalog";

export const metadata: Metadata = {
  title: "Find Your Next Course | ByteSpace",
  description: "Explore ByteSpace courses and find your next skill. Search by course, topic, or creator and filter by category and level.",
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container min-h-screen py-20" role="status">Loading courses…</div>}>
      <SearchCatalog />
    </Suspense>
  );
}

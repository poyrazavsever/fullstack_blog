import SmallCard from "@/Components/Cards/SmallCard";
import React from "react";

const Blog = () => {
  const categoryBtn =
    "text-neutral-800 dark:text-neutral-200 font-semibold uppercase";

  return (
    <div className="container mx-auto mt-16 flex items-start justify-between">
      <div className="w-full md:w-1/2 flex flex-col gap-8">
        <h1 className="w-full text-3xl md:text-4xl font-bold text-white text-center md:text-left">
          View My Blog Posts
        </h1>
        <div className="flex flex-col items-start gap-4">
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
      </div>

      <div className="hidden md:block">
        <p className="text-neutral-500 font-medium pb-4">Categories</p>
        <div className="flex flex-col items-start gap-4">
          <button className={categoryBtn}>News</button>
          <button className={categoryBtn}>Technology</button>
          <button className={categoryBtn}>Frontend</button>
          <button className={categoryBtn}>Backend</button>
          <button className={categoryBtn}>Mobile</button>
          <button className={categoryBtn}>UI/UX Topics</button>
          <button className={categoryBtn}>UI/UX Trends</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

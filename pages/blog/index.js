import SmallCard from "@/Components/Cards/SmallCard";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const categoryBtn =
    "text-neutral-800 dark:text-neutral-200 font-semibold uppercase transition-all duration-300 ease-in-out hover:text-neutral-600 dark:hover:text-neutral-400 hover:underline hover:underline-offset-4 hover:scale-105";

  // Dummy blog data
  const blogPosts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
    { id: 4, title: "Post 4" },
    { id: 5, title: "Post 5" },
    { id: 6, title: "Post 6" },
    { id: 7, title: "Post 7" },
    { id: 8, title: "Post 8" },
    // Daha fazla veri ekleyebilirsin
  ];

  const postsPerPage = 4; // Her sayfadaki blog kart sayısı
  const [currentPage, setCurrentPage] = useState(1); // Mevcut sayfa state

  // Blog kartlarını sayfalara bölmek için slice kullanıyoruz
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Sayfa değiştirme işlevleri
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto mt-16 flex items-start justify-between">
      <div className="w-full md:w-1/2 flex flex-col gap-8">
        <h1 className="w-full text-3xl md:text-4xl font-bold text-white text-center md:text-left">
          View My Blog Posts
        </h1>

        <motion.div
          className="flex flex-col items-start gap-4"
          key={currentPage} // Her sayfa için unique key veriyoruz
          initial={{ opacity: 0, x: 100 }} // Başlangıç animasyonu
          animate={{ opacity: 1, x: 0 }} // Hedef animasyon
          exit={{ opacity: 0, x: -100 }} // Sayfa çıkışı animasyonu
          transition={{ duration: 0.5 }} // Animasyon süresi
        >
          {/* O anki sayfadaki postları render ediyoruz */}
          {currentPosts.map((post) => (
            <SmallCard key={post.id} title={post.title} />
          ))}
        </motion.div>

        {/* Sayfa değiştirme butonları */}
        <div className="flex justify-between w-full mt-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-500 text-white disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-white">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-500 text-white disabled:opacity-50"
          >
            Next
          </button>
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

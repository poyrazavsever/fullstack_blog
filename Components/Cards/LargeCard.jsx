import React from 'react';

const LargeCard = () => {
  return (
    <a href='/blog/1' className="relative p-4 rounded-lg border bg-neutral-200 border-neutral-300 dark:bg-neutral-800 dark:border-neutral-700 bg-opacity-10 dark:bg-opacity-10 backdrop-blur-lg shadow-lg">
      {/* Resim */}
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <img
          src="https://via.placeholder.com/1920x400" // Kendi resim dosya yolunuzu buraya ekleyin
          alt="Card Visual"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Başlık */}
      <h3 className="mt-4 text-lg font-bold text-white">
        Webpack vs Vite: Comparison of Build Tools for Frontend Projects
      </h3>

      {/* İçerik */}
      <p className="mt-2 text-sm text-neutral-900 dark:text-neutral-300">
        The world of frontend development is very dynamic and new tools are emerging every day. As projects grow, compiling and delivering our code becomes more complex...
      </p>

      {/* Buton */}
      <button className="w-full mt-4 px-4 py-2 bg-transparent border border-neutral-500 text-neutral-900 dark:text-white rounded-lg hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center gap-2 hover:gap-3">
        Read
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 7L6 18m5-11.868s5.634-.475 6.488.38c.855.854.38 6.488.38 6.488" color="#ffffff" /></svg>
        </span>
      </button>
    </a>
  );
};

export default LargeCard;

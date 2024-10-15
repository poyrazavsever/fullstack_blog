import React from "react";
import LargeCard from "@/Components/Cards/LargeCard";

function LastBlog() {
  return (
    <div className="container mx-auto mt-12">
      <div className="flex flex-col items-start gap-12">
        <h1 className="w-full text-3xl md:text-4xl font-bold text-white text-center md:text-left">
          My Last Blog Post
        </h1>
        <LargeCard />
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-12">

        <div className="flex flex-col items-start gap-2 w-full md:w-1/2">
          <h6 className="w-full text-xl md:text-3xl font-medium text-neutral-200 text-left">
            Why Did I Write
          </h6>

          <p className="text-neutral-400 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquid
            dignissimos aliquam consequatur quisquam molestias cum incidunt
            aperiam ut provident? Alias eius tempora laboriosam minima libero,
            molestias laudantium itaque voluptatibus adipisci veritatis, dicta
            in ipsum incidunt facilis sit assumenda quisquam at maiores ex.
            Minus, odio? Quidem qui earum blanditiis quo.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 w-full md:w-1/2">
          <h6 className="w-full text-xl md:text-3xl font-medium text-neutral-200 text-left">
            Resources
          </h6>

          <p className="text-neutral-400 leading-relaxed">
            Webpack Official Documentation For detailed information and
            configuration options about Webpack, visit the official
            documentation. https://webpack.js.org/concepts/ Vite Official
            Documentation For detailed information on how to install and use
            Vite, visit the official website. https://vitejs.dev/guide/ “Webpack
            vs. Vite: Which Build Tool Is Right for You?” — Smashing Magazine
            This article goes into more depth about Webpack vs Vite.
            https://smashingtips.com/programming/webpack-vs-vite-choosing-right-build-tool-for-your-next-web-project/
          </p>
        </div>

      </div>
    </div>
  );
}

export default LastBlog;

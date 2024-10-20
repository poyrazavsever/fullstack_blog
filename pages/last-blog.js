import React, { useEffect, useState } from "react";
import LargeCard from "@/Components/Cards/LargeCard";
import { useDispatch, useSelector } from "react-redux";
import { getLastPost } from "@/features/post/thunks/getLastPost";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // HTML desteği için

function LastBlog() {
  const dispatch = useDispatch();
  const { currentPost, status, error } = useSelector((state) => state.posts);
  
  // İstemci tarafında render edildiğini anlamak için bir state ekleyelim
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // İstemci tarafında çalıştığını belirtiyoruz
    setIsClient(true);
    dispatch(getLastPost());
  }, [dispatch]);

  if (!isClient) {
    // İstemci tarafında henüz render edilmediği için sunucu tarafında boş bir render döndür
    return null; 
  }

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto mt-12">
      <div className="flex flex-col items-start gap-12">
        <h1 className="w-full text-3xl md:text-4xl font-bold text-white text-center md:text-left">
          My Last Blog Post
        </h1>

        {currentPost && (
          <LargeCard
            imageHref={currentPost.bannerImage} // Görsel URL'si
            title={currentPost.title} // Başlık
            content={currentPost.content} // İçerik
            id={currentPost._id}
          />
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-12">
        {/* Reason  */}
        <div className="flex flex-col items-start gap-2 w-full md:w-1/2">
          <h6 className="w-full text-xl md:text-3xl font-medium text-neutral-200 text-left">
            Why Did I Write
          </h6>
          <p className="text-neutral-400 leading-relaxed">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              className="react-markdown"
            >
              {currentPost ? currentPost.reason : "Reason not available."}
            </ReactMarkdown>
          </p>
        </div>

        {/* Resources  */}
        <div className="flex flex-col items-start gap-2 w-full md:w-1/2">
          <h6 className="w-full text-xl md:text-3xl font-medium text-neutral-200 text-left">
            Resources
          </h6>
          <p className="text-neutral-400 leading-relaxed">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              className="react-markdown"
            >
              {currentPost ? currentPost.source : "Source not available."}
            </ReactMarkdown>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LastBlog;

import { useEffect } from "react";
import LargeCard from "@/Components/Cards/LargeCard";
import SmallCard from "@/Components/Cards/SmallCard";
import InfoCard from "@/Components/Cards/InfoCard";
import Modal from "@/Components/UserModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "@/features/post/thunks/fetchPosts";

const bulbIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="#ffffff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      color="#ffffff"
    >
      <path d="M5.143 14A7.8 7.8 0 0 1 4 9.919C4 5.545 7.582 2 12 2s8 3.545 8 7.919A7.8 7.8 0 0 1 18.857 14" />
      <path d="M14 10c-.613.643-1.289 1-2 1s-1.387-.357-2-1m-2.617 7.098c-.092-.276-.138-.415-.133-.527a.6.6 0 0 1 .382-.53c.104-.041.25-.041.54-.041h7.656c.291 0 .436 0 .54.04a.6.6 0 0 1 .382.531c.005.112-.041.25-.133.527c-.17.511-.255.767-.386.974a2 2 0 0 1-1.2.869c-.238.059-.506.059-1.043.059h-3.976c-.537 0-.806 0-1.043-.06a2 2 0 0 1-1.2-.868c-.131-.207-.216-.463-.386-.974M15 19l-.13.647c-.14.707-.211 1.06-.37 1.34a2 2 0 0 1-1.113.912C13.082 22 12.72 22 12 22s-1.082 0-1.387-.1a2 2 0 0 1-1.113-.913c-.159-.28-.23-.633-.37-1.34L9 19m3-3.5V11" />
    </g>
  </svg>
);

const globalIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="#ffffff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      color="#ffffff"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10" />
      <path d="M20 5.699c-.935.067-2.124.43-2.962 1.504c-1.5 1.94-2.999 2.103-3.999 1.456c-1.5-.97-.239-2.543-1.999-3.397C9.893 4.705 9.733 3.19 10.372 2M2 11c.763.662 1.83 1.268 3.089 1.268c2.6 0 3.12.497 3.12 2.484s0 1.987.52 3.477c.338.97.456 1.938-.218 2.771M22 13.452c-.887-.51-2-.721-3.127.088c-2.155 1.55-3.642.266-4.311 1.549C13.577 16.977 17.096 17.57 14 22" />
    </g>
  </svg>
);

const codeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="#ffffff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      color="#ffffff"
    >
      <path d="M15 8c.65.065 1.088.211 1.414.542C17 9.135 17 10.09 17 12s0 2.865-.586 3.458c-.246.33-.764.477-1.414.542m-6 0c-.65-.065-1.088-.211-1.414-.542C7 14.865 7 13.91 7 12s0-2.865.586-3.458C7.912 8.212 8.35 8.065 9 8" />
      <circle cx="12" cy="12" r="10" />
    </g>
  </svg>
);

const mutualIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="#ffffff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      color="#ffffff"
    >
      <path d="m9.143 10.691l.207-.207a5.067 5.067 0 1 1 7.166 7.166l-2.866 2.866a5.067 5.067 0 1 1-7.166-7.166l.464-.464" />
      <path d="m17.052 11.114l.464-.464a5.067 5.067 0 1 0-7.166-7.166L7.484 6.35a5.067 5.067 0 1 0 7.166 7.166l.207-.207" />
    </g>
  </svg>
);

export default function Home() {
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  // Son iki yazıyı al
  const recentPosts = posts.slice(-2).reverse(); // Son iki yazıyı al ve ters çevir

  return (
    <div className="container mx-auto my-24 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-start gap-6">
          <h1 className="w-full text-3xl md:text-4xl font-bold text-white text-center md:text-left">
            Innovative Approach
          </h1>
          <p className="hidden md:block text-gray-400">
            Making a difference in the blogging world with an innovative
            approach. I aim to create a world where integrity is essential.
          </p>
          <div className="flex flex-col items-center justify-start gap-6 w-full">
            {recentPosts.length > 0 && (
              <LargeCard
                title={recentPosts[0].title}
                content={recentPosts[0].content}
                imageHref={recentPosts[0].bannerImage}
                id={recentPosts[0]._id}
              />
            )}
            {recentPosts.length > 1 && (
              <SmallCard
                title={recentPosts[1].title}
                id={recentPosts[1]._id}
                content={recentPosts[1].content}
              />
            )}
          </div>
        </div>

        {/* Sağdaki Bilgi Kartları */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoCard
            title="Interesting"
            description="I tortor quis dolor. Pellentesque imperdiet at massa sed tempor."
            icon={bulbIcon}
          />
          <InfoCard
            title="Global"
            description="I tortor quis dolor. Pellentesque imperdiet at massa sed tempor."
            icon={globalIcon}
          />
          <InfoCard
            title="Inclusive"
            description="I tortor quis dolor. Pellentesque imperdiet at massa sed tempor."
            icon={codeIcon}
          />
          <InfoCard
            title="Mutual"
            description="I tortor quis dolor. Pellentesque imperdiet at massa sed tempor."
            icon={mutualIcon}
          />
        </div>
      </div>

      <Modal />
    </div>
  );
}

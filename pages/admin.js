import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

// Sekme içerikleri için dummy bileşenler
import CreatePost from "@/Components/Admin/CreatePost";
import CreateCategory from "@/Components/Admin/CreateCategory";
import Users from "@/Components/Admin/Users";

const Admin = () => {
  const router = useRouter();

  // Kullanıcı bilgilerini Redux'tan al
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isAdmin = useSelector((state) => state.auth.user?.isAdmin); // Kullanıcı bilgilerinden isAdmin'i al

  const [activeTab, setActiveTab] = useState("Create Post"); // Varsayılan olarak "Create Post" sekmesi

  const renderContent = () => {
    switch (activeTab) {
      case "Create Post":
        return <CreatePost />;
      case "Create Category":
        return <CreateCategory />;
      case "Users":
        return <Users />;
      default:
        return null;
    }
  };

  const tabClass =
    "cursor-pointer px-4 py-2 text-lg font-semibold transition-colors duration-300 text-neutral-700 dark:text-neutral-400";
  const activeTabClass =
    "border-b-4 border-orange-500 text-orange-500 dark:text-orange-400";

  return !isAuthenticated || !isAdmin ? (
    <h1 className="container mx-auto w-full text-center text-5xl font-semibold mt-24 text-neutral-200">Bu sayfaya erişim izniniz yok.</h1>
  ) : (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-neutral-800 dark:text-neutral-100">
        Admin Panel
      </h1>

      {/* Tab Menüsü */}
      <div className="flex justify-center gap-4 border-b mb-8">
        <div
          className={`${tabClass} ${
            activeTab === "Create Post" ? activeTabClass : ""
          }`}
          onClick={() => setActiveTab("Create Post")}
        >
          Create Post
        </div>
        <div
          className={`${tabClass} ${
            activeTab === "Create Category" ? activeTabClass : ""
          }`}
          onClick={() => setActiveTab("Create Category")}
        >
          Create Category
        </div>
        <div
          className={`${tabClass} ${
            activeTab === "Users" ? activeTabClass : ""
          }`}
          onClick={() => setActiveTab("Users")}
        >
          Users
        </div>
      </div>

      {/* Aktif Sekmenin İçeriği */}
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default Admin;

import React from "react";
import MainLayout from "../layout/MainLayout";
import useScrollTop from "../hook/useScroll";

const PrivacyPolicy = () => {
  useScrollTop();
  return (
    <MainLayout>
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="mb-4">
            This is where you'd add your Privacy Policy content. You can replace
            this text with your actual Privacy Policy.
          </p>
          <p className="mb-4">
            Remember to cover important aspects like data collection, usage,
            protection, user rights, etc.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;

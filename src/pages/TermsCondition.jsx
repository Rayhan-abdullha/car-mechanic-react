// TermsAndConditions.js

import React from "react";
import MainLayout from "../layout/MainLayout";

const TermsAndConditions = () => {
  return (
    <MainLayout>
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
          <p className="mb-4">
            This is where you'd add your Terms and Conditions content. You can
            replace this text with your actual T&C.
          </p>
          <p className="mb-4">
            Cover aspects like user responsibilities, usage guidelines,
            disclaimers, legal obligations, etc.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default TermsAndConditions;

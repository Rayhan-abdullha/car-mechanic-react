import React from "react";
import MainLayout from "./../layout/MainLayout";

const BookNow = () => {
  return (
    <MainLayout>
      <div className="h-full flex justify-center items-center px-12">
        <iframe
          className="h-[300px] md:h-[500px]"
          width="1000px"
          src="https://www.youtube.com/embed/WFob-1aWGCo?modestbranding=1&showinfo=0&rel=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </MainLayout>
  );
};

export default BookNow;

import React, { useEffect, useRef } from "react";
import MainLayout from "./../layout/MainLayout";

const BookNow = () => {
  return (
    <MainLayout>
      <div className="my-[70px]">
        <iframe
          style={{ width: "100%", height: "900px" }}
          src="https://rentsyst.com/settings/iframe-constructor/?token=fUcB8AQRLSUYdEGRDiJtIo34Y7oEkp9R&id=5247"
        ></iframe>
      </div>
    </MainLayout>
  );
};

export default BookNow;

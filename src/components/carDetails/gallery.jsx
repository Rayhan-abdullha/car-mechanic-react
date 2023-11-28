import { useState } from "react";
import ImageModal from "../modal/ImageModal";
const items = [
  {
    id: 1,
    img: "https://vid.alarabiya.net/images/2023/04/12/2d220739-e6e3-4f4a-86f0-672691659959/2d220739-e6e3-4f4a-86f0-672691659959.jpg?crop=1:1&width=1000",
  },
  {
    id: 1,
    img: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fc.ndtvimg.com%2F2022-01%2F0d2m0qkg_car_625x300_12_January_22.jpg&w=750&q=75",
  },
  {
    id: 1,
    img: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fc.ndtvimg.com%2F2022-01%2F0d2m0qkg_car_625x300_12_January_22.jpg&w=750&q=75",
  },
  {
    id: 1,
    img: "https://vid.alarabiya.net/images/2023/04/12/2d220739-e6e3-4f4a-86f0-672691659959/2d220739-e6e3-4f4a-86f0-672691659959.jpg?crop=1:1&width=1000",
  },
  {
    id: 1,
    img: "https://vid.alarabiya.net/images/2023/04/12/2d220739-e6e3-4f4a-86f0-672691659959/2d220739-e6e3-4f4a-86f0-672691659959.jpg?crop=1:1&width=1000",
  },
  {
    id: 1,
    img: "https://vid.alarabiya.net/images/2023/04/12/2d220739-e6e3-4f4a-86f0-672691659959/2d220739-e6e3-4f4a-86f0-672691659959.jpg?crop=1:1&width=1000",
  },
  {
    id: 1,
    img: "https://vid.alarabiya.net/images/2023/04/12/2d220739-e6e3-4f4a-86f0-672691659959/2d220739-e6e3-4f4a-86f0-672691659959.jpg?crop=1:1&width=1000",
  },
];
const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (image) => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="singlePhoto-gallery">
      <div
        className="sm:grid sm:gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr)" }}
      >
        {items?.map((img, index) => (
          <>
            {index < 5 && (
              <>
                <div
                  className={`image-card ${
                    index === 0 ? "big" : "ismall"
                  } mb-5 sm:mb-0`}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={img.img}
                    alt="notfound"
                  />
                </div>
                <ImageModal
                  isOpen={modalIsOpen}
                  closeModal={closeModal}
                  imageInfo={img}
                  images={items}
                />
              </>
            )}
          </>
        ))}
      </div>
      <div className="text-center mt-5">
        <button
          onClick={() => openModal()}
          className="text-bg-slate-400 text-[18px] font-semibold w-[200px] h-[60px] bg-[#D9D9D9] hover:bg-slate-300"
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Gallery;

const Gallery = () => {
  return (
    <div className="singlePhoto-gallery">
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr)" }}
      >
        <div className="image-card big">
          <img
            className="w-full h-full object-cover"
            src="https://vid.alarabiya.net/images/2023/04/12/2d220739-e6e3-4f4a-86f0-672691659959/2d220739-e6e3-4f4a-86f0-672691659959.jpg?crop=1:1&width=1000"
            alt="notfound"
          />
        </div>
        <div className="image-card small">
          <img
            src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fc.ndtvimg.com%2F2022-01%2F0d2m0qkg_car_625x300_12_January_22.jpg&w=750&q=75"
            alt="notfound"
          />
        </div>
        <div className="image-card small">
          <img
            src="https://vid.alarabiya.net/images/2023/04/12/2d220739-e6e3-4f4a-86f0-672691659959/2d220739-e6e3-4f4a-86f0-672691659959.jpg?crop=1:1&width=1000"
            alt="notfound"
          />
        </div>
        <div className="image-card small">
          <img
            src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fc.ndtvimg.com%2F2022-01%2F0d2m0qkg_car_625x300_12_January_22.jpg&w=750&q=75"
            alt="notfound"
          />
        </div>
        <div className="image-card small">
          <img
            src="https://vid.alarabiya.net/images/2023/04/12/2d220739-e6e3-4f4a-86f0-672691659959/2d220739-e6e3-4f4a-86f0-672691659959.jpg?crop=1:1&width=1000"
            alt="notfound"
          />
        </div>
      </div>
      <div className="text-center mt-5">
        <button className="text-bg-slate-400 text-[18px] font-semibold uppercase w-[200px] h-[60px] bg-gray-400 hover:bg-slate-500">
          See All
        </button>
      </div>
    </div>
  );
};

export default Gallery;

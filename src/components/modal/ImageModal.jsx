import { IoMdClose } from "react-icons/io";
const ImageModal = ({ isOpen, closeModal, imageInfo, images }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed overflow-scroll top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-[.2] backdrop-blur-[1px] z-50">
      <div className="bg-white p-8 rounded-lg max-w-[1000px]">
        <IoMdClose
          className="absolute top-4 right-4 text-white text-[60px] cursor-pointer"
          onClick={closeModal}
        />
        <div className="text-center mb-10">
          <h2 className="text-xl font-bold mb-2">BMW Car</h2>
          <p className="text-sm text-gray-600">Wow Car</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {images?.map((img, index) => (
            <img
              key={index}
              src={img.img}
              alt={`Other ${index + 1}`}
              className="w-[100%] h-[100%] object-cover mx-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;

import Gallery from "./gallery";
const PhotoDetails = () => {
  return (
    <div className="m-auto max-w-[1400px] px-5">
      <div className="xl:flex xl:justify-between xl:items-center mb-7">
        <div className="mb-10">
          <h2 className="mb-3 text-[25px] font-semibold">Bentley Bentayga</h2>
          <span className="mr-3 text-gray-600">4.0-liter V8 engine</span>|
          <span className="mx-2 text-gray-600">Automatic</span> |
          <span className="ml-2 text-gray-600">542</span>
        </div>
        <div className="flex gap-0 sm:gap-3">
          <div className="w-[150px] text-center border border-gray-300 p-2">
            <h3 className="font-semibold text-[17px]">24hr</h3>
            <h3 className="text-17px">$899</h3>
            <p className="uppercase text-[14px]">
              Refundable security deposit required
            </p>
          </div>
          <div className="w-[150px] text-center border border-gray-300 p-2">
            <h3 className="font-semibold text-[17px]">24hr</h3>
            <h3 className="text-17px">$899</h3>
            <p className="uppercase text-[14px]">
              Refundable security deposit required
            </p>
          </div>
          <div className="w-[150px] text-center border border-gray-300 p-2">
            <h3 className="font-semibold text-[17px]">24hr</h3>
            <h3 className="text-17px">$899</h3>
            <p className="uppercase text-[14px]">
              Refundable security deposit required
            </p>
          </div>
        </div>
        <div className="mt-5 xl:mt-0">
          <button className="bg-orange-500 rounded-sm px-4 py-2 hover:bg-orange-600 text-white uppercase">
            call to book
          </button>
        </div>
      </div>
      <Gallery />
    </div>
  );
};

export default PhotoDetails;

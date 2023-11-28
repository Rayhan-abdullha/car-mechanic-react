import { FiAlertOctagon } from "react-icons/fi";
const RentalRequirement = () => {
  return (
    <div className="requirement-card m-auto px-5 max-w-[1400px] text-black my-[70px]">
      <div className="sm:flex sm:justify-between px-1 text-center">
        <h3 className="uppercase text-[20px] font-semibold mb-3">
          Rental Requirement
        </h3>
        <h3 className="sm:uppercase sm:text-[20px] sm:font-semibold mb-10 sm:mb-3">
          United State Drivers
        </h3>
      </div>
      <div className="bg-[#E6E6E6] py-5 rounded-[10px] border border-gray-300">
        <h2 className="bg-white py-7 text-center mx-5 font-semibold rounded-[10px]">
          Exotic Cars & SUVs
        </h2>
        <div className="requirement mt-5 sm:flex sm:justify-around px-5">
          <div>
            <div className="relative group mb-3 flex sm:justify-center">
              <span className="hover:cursor-pointer font-semibold">
                Age
                <span className="tooltip absolute bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 ease-in-out -left-[-20px] sm:-left-[-70px] top-[-20px]">
                  Tooltip text
                </span>
              </span>
              <FiAlertOctagon className="mt-[5px] ml-1" />
            </div>
            <div className="relative group mb-3 flex sm:justify-center">
              <span className="hover:cursor-pointer font-semibold">
                Driver Licence
                <span className="tooltip absolute bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 ease-in-out -left-[-110px] top-[-20px]">
                  Tooltip text
                </span>
              </span>
              <FiAlertOctagon className="mt-[5px] ml-1" />
            </div>
            <div className="relative group mb-3 flex sm:justify-center">
              <span className="hover:cursor-pointer font-semibold">
                Car Insurance
                <span className="tooltip absolute bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 ease-in-out -left-[-110px] top-[-20px]">
                  Tooltip text
                </span>
              </span>
              <FiAlertOctagon className="mt-[5px] ml-1" />
            </div>
          </div>
          <div>
            <div className="relative group mb-3 flex sm:justify-center">
              <span className="0 hover:cursor-pointer font-semibold">
                21+
                <span className="tooltip absolute bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 ease-in-out -left-[-30px] sm:-left-[-180px] top-[-20px]">
                  Tooltip text
                </span>
              </span>
              <FiAlertOctagon className="mt-[5px] ml-1" />
            </div>
            <div className="relative group mb-3 flex sm:justify-center">
              <span className="hover:cursor-pointer font-semibold">
                United States Drivers Licences
                <span className="tooltip absolute bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 ease-in-out -left-[-200px] sm:-left-[-250px] top-[-20px]">
                  Tooltip text
                </span>
              </span>
              <FiAlertOctagon className="mt-[5px] ml-1" />
            </div>
            <div className="relative group mb-3 flex sm:justify-center">
              <span className=" hover:cursor-pointer font-semibold">
                Full Coverage (Comprehensive & collision)
                <span className="tooltip absolute bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 ease-in-out -left-[-280px] sm:left-[300px] top-[-20px]">
                  Tooltip text
                </span>
              </span>
              <FiAlertOctagon className="mt-[5px] ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalRequirement;

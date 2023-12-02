const RentalRequirement = () => {
  return (
    <div className="requirement-card m-auto px-10  max-w-[1400px] text-black my-[70px] text-sm">
      <div className="sm:flex sm:justify-between px-1 text-center ">
        <h3 className="uppercase text-[20px] font-semibold mb-10">
          Rental Requirement
        </h3>
        <h3 className="sm:uppercase sm:text-[20px] sm:font-semibold mb-10 sm:mb-3">
          United State Drivers
        </h3>
      </div>
      <div className="bg-[#E6E6E6]  rounded-[10px] border border-gray-300 py-12">
        <h2 className="bg-white py-7 text-center mx-5 font-semibold rounded-[10px]">
          Exotic Cars & SUVs
        </h2>
        <div className="requirement mt-5 sm:flex sm:justify-around px-5  pt-6">
          <div>
            <div className="relative gap-1 group mb-3 flex items-center sm:justify-center">
              <span className="hover:cursor-pointer font-semibold flex gap-4 ">
                Age
                <div className="tooltip absolute bg-black text-white text-xs py-1 px-2 rounded  opacity-0 invisible group-hover:opacity-100 w-48 flex flex-wrap text-clip text group-hover:visible transition duration-300 ease-in-out left-0 bottom-[30px] md:bottom-[30px] md:right-0">
                  Minimum Age requirements are strictly enforced and ensure
                  proper insurance protection. All renters who allow an underage
                  driver will be fined $2,500 and their rental will be
                  immediately canceled.
                </div>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" stroke="#888" />
                <line x1="12" y1="16" x2="12" y2="12" stroke="#888" />
                <line x1="12" y1="8" x2="12" y2="8" stroke="#888" />
              </svg>
            </div>
            <div className="relative gap-1 group mb-3 flex items-center sm:justify-center">
              <span className="hover:cursor-pointer font-semibold flex gap-4 ">
                Driver Licence
                <div className="tooltip absolute bg-black text-white text-xs py-1 px-2 rounded  opacity-0 invisible group-hover:opacity-100 w-48 flex flex-wrap text-clip text group-hover:visible transition duration-300 ease-in-out bottom-6 left-0">
                  All renters must have a valid driver's license within the
                  United States, be 21+ yrs of age, and have full coverage
                  insurance.
                </div>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" stroke="#888" />
                <line x1="12" y1="16" x2="12" y2="12" stroke="#888" />
                <line x1="12" y1="8" x2="12" y2="8" stroke="#888" />
              </svg>
            </div>
            <div className="relative gap-1 group mb-3 flex items-center sm:justify-center">
              <span className="hover:cursor-pointer font-semibold flex gap-4 ">
                Car Insurance
                <div className="tooltip absolute bg-black text-white text-xs py-1 px-2 rounded  opacity-0 invisible group-hover:opacity-100 w-48 flex flex-wrap text-clip text group-hover:visible transition duration-300 ease-in-out bottom-[30px] left-0">
                  Minimum Age requirements are strictly enforced and ensure
                  proper insurance protection. All renters who allow an underage
                  driver will be fined $2,500 and their rental will be
                  immediately canceled.
                </div>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" stroke="#888" />
                <line x1="12" y1="16" x2="12" y2="12" stroke="#888" />
                <line x1="12" y1="8" x2="12" y2="8" stroke="#888" />
              </svg>
            </div>
          </div>
          <div>
            <div className="relative group mb-3 flex sm:justify-center">
              <span className="0 hover:cursor-pointer font-semibold">21+</span>
            </div>
            <div className="relative group mb-3 flex sm:justify-center">
              <span className="0 hover:cursor-pointer font-semibold">
                United States Drivers Licences
              </span>
            </div>
            <div className="relative gap-1 group mb-3  items-center flex sm:justify-center">
              <span className="hover:cursor-pointer font-semibold flex gap-4 ">
                Full Coverage (Comprehensive & collision)
                <div className="tooltip absolute bg-black text-white text-xs py-1 px-2 rounded  opacity-0 invisible group-hover:opacity-100 w-48 flex flex-wrap text-clip text group-hover:visible transition duration-300 ease-in-out  bottom-6 -right-6">
                  is required & "property damage liability" needs to be set to
                  100,000 at least. "Property damage liability" of 200,000 is
                  required for the highest end exotics.
                </div>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" stroke="#888" />
                <line x1="12" y1="16" x2="12" y2="12" stroke="#888" />
                <line x1="12" y1="8" x2="12" y2="8" stroke="#888" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalRequirement;

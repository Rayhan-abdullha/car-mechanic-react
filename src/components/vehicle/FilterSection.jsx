import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsArrowDownUp } from "react-icons/bs";

const FilterSection = ({ setFilter, filter }) => {
  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="sort-section sm:flex bg-white p-5 mb-10 rounded-md border border-gray-300"
      style={{ boxShadow: "0 5px 40px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="relative mb-3 sm:mb-0 border-[#dce0e0]">
        <select
          value={filter.category}
          onChange={handleChange}
          name="category"
          className="rounded-md text-[17px] w-full border appearance-none outline-0 px-3 sm:px-10 py-2 text-[#000000]"
        >
          <option value="">Category</option>
          <option value="Audi">Audi</option>
          <option value="Bentley">Bentley</option>
          <option value="BMW">BMW</option>
        </select>
        <MdOutlineKeyboardArrowDown className="absolute top-[10px] right-[2px] text-[25px] text-[#939393]" />
      </div>
      <div className="sm:ml-4 mb-3 sm:mb-0 relative border-[#dce0e0]">
        <select
          value={filter.price}
          onChange={handleChange}
          name="price"
          className="rounded-md text-[17px] w-full border appearance-none outline-0 px-3 sm:px-10 py-2 text-[#000000]"
        >
          <option value="">Price</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="600">600</option>
        </select>
        <MdOutlineKeyboardArrowDown className="absolute top-[10px] right-[2px] text-[25px] text-[#939393]" />
      </div>
      <div className="sm:ml-4 relative border-[#dce0e0]">
        <select
          value={filter.highOrLow}
          onChange={handleChange}
          name="highOrLow"
          className="rounded-md text-[17px] w-full border appearance-none outline-0 py-2 px-3 sm:px-10 text-[#000000]"
        >
          <option value="">Price Low to High</option>
          <option value="hightToLow">High to Low</option>
          <option value="lowToHigh">Low to High</option>
        </select>
        <BsArrowDownUp className="absolute top-[13px] right-[8px] text-[16px] text-[#595959]" />
      </div>
    </div>
  );
};

export default FilterSection;

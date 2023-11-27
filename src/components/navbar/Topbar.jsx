import { FaInstagram, FaTwitter, FaFacebook, FaLockOpen } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
const Topbar = () => {
  return (
    <div className="topbar flex flex-col md:flex-row md:justify-between gap-3 md:gap-1 pt-5">
      <p>
        <CiLocationOn className="float-left mr-1 text-yellow-300 text-[20px] md:text-[25px]" />
        <span className="text-[13px] lg:text-[16px]">
          1474 Raonaneod Ct, Highte VA 24179
        </span>
      </p>
      <p>
        <IoIosPhonePortrait className="float-left mr-1 text-yellow-300 text-[20px] md:text-[25px]" />
        <span className="text-[13px] lg:text-[16px]">+1(571) 520 490</span>
      </p>
      <p>
        <FaLockOpen className="float-left mr-1 text-yellow-300 text-[20px] md:text-[25px]" />
        <span className="text-[13px] lg:text-[16px]">
          Open: Mon-Sun, 7am - 7pm{" "}
        </span>
      </p>
      <div className="socialLinks flex gap-5 mt-2 md:mt-0">
        <FaFacebook className="text-[20px] md:text-[25px] text-white cursor-pointer hover:text-blue-100" />
        <FaInstagram className="text-[20px] md:text-[25px] text-[#cf7dff] hover:text-[#a94ede] cursor-pointer" />
        <FaTwitter className="text-[20px] md:text-[25px] text-[#1DA1F2] hover:text-[#4db9fb] cursor-pointer" />
      </div>
    </div>
  );
};

export default Topbar;

import { FaInstagram, FaTwitter, FaFacebook, FaLockOpen } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
const Topbar = () => {
  return (
    <div className="topbar flex justify-between pt-5">
      <p>
        <CiLocationOn className="float-left mr-1 text-yellow-300 text-[25px]" />
        <span>1474 Raonaneod Ct, Highte VA 24179</span>
      </p>
      <p>
        <IoIosPhonePortrait className="float-left mr-1 text-yellow-300 text-[25px]" />
        <span>+1(571) 520 490</span>
      </p>
      <p>
        <FaLockOpen className="float-left mr-1 text-yellow-300 text-[25px]" />
        <span>Open: Mon-Sun, 7am - 7pm </span>
      </p>
      <div className="socialLinks flex gap-5">
        <FaFacebook className="text-[25px] text-blue-400 cursor-pointer hover:text-blue-500" />
        <FaInstagram className="text-[25px] text-[#8a3ab9] hover:text-[#7934a1] cursor-pointer" />
        <FaTwitter className="text-[25px] text-[#1DA1F2] hover:text-[#4db9fb] cursor-pointer" />
      </div>
    </div>
  );
};

export default Topbar;

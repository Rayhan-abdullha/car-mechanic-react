import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black py-[50px] text-[#bdc3c7]">
      <div className="m-auto px-12 max-w-[1400px]">
        <div className="footer-top flex justify-between">
          <div className="footer-menu">
            <h3 className="font-bold text-[20px] mb-4">LEGAL</h3>
            <div>
              <ul>
                <li>
                  <Link to="/terms">Terms & Condition</Link>
                </li>
                <li>
                  <Link to="/policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="contactUs">
            <h3 className="font-bold text-[20px] mb-4">CONTACT US</h3>
            <div>
              <p>Phone: +1 (571) 520 987 4900</p>
              <p>Email: info@xclusiv-lux.com</p>
              <p>Open: Mon-Sun:07:00 am - 7:00 pm</p>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="footer-bottom flex justify-between items-center">
          <div className="logo">
            <img width={100} src={logo} alt="notfound" />
          </div>
          <h1 className="copyright">
            Copyright 2023 Xclusiv Lux LLC. All Rights Reserved
          </h1>
          <div className="flex gap-5">
            <FaFacebook className="text-[25px] text-blue-400 cursor-pointer hover:text-blue-500" />
            <FaInstagram className="text-[25px] text-[#8a3ab9] hover:text-[#7934a1] cursor-pointer" />
            <FaTwitter className="text-[25px] text-[#1DA1F2] hover:text-[#4db9fb] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

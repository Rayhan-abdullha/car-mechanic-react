import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Topbar from "./Topbar";
import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import DropdownMenu from "./DropdownMenu";
const Navbar = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
      setShowMenu(false);
    }
  };

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    console.log("resize");
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="bg-[#2d3436] text-[#bdc3c7]">
      <div className="m-auto px-5 max-w-[1400px]">
        <Topbar />
        {showIcon ? (
          <div onClick={handleShowMenu} className="pb-5 mt-8">
            <CiMenuFries className="text-[30px] cursor-pointer font-bold hover:text-white" />
          </div>
        ) : (
          <div className="menu-bar flex justify-between items-center">
            <div className="logo">
              <img className="w-[100px]" src={logo} alt="notfound" />
            </div>
            <nav>
              <ul>
                <li className="flex gap-10">
                  <Link
                    className="text-[19px] italic hover:text-yellow-400"
                    to={"/vahicles"}
                  >
                    Vahicles
                  </Link>
                  <Link
                    className="text-[19px] italic hover:text-yellow-400"
                    to={"/services"}
                  >
                    Limo Services
                  </Link>
                  <Link
                    className="text-[19px] italic hover:text-yellow-400"
                    to={"/contact"}
                  >
                    Contact
                  </Link>
                  <Link
                    className="text-[19px] italic hover:text-yellow-400"
                    to={"/book_now"}
                  >
                    Book Now
                  </Link>
                  <Link
                    className="text-[19px] italic hover:text-yellow-400"
                    to={"/about"}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
      {showMenu && <DropdownMenu />}
    </div>
  );
};

export default Navbar;

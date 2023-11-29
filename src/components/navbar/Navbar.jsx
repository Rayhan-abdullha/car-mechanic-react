import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import Topbar from "./Topbar";
import { useEffect, useState } from "react";
import { CgMenuRound } from "react-icons/cg";
import DropdownMenu from "./DropdownMenu";
const Navbar = () => {
  const navigate = useNavigate();
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
    if (window.innerWidth < 792) {
      setShowIcon(true);
      setShowMenu(false);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-black text-[#bdc3c7]">
      <div className="m-auto px-5 max-w-[1400px] flex md:block items-center justify-between py-5 md:py-0">
        <Topbar />
        {showIcon ? (
          <div onClick={handleShowMenu} className="pb-5 ml-[-7px]">
            <CgMenuRound className="text-[40px] cursor-pointer font-bold text-white" />
            <span>Menu</span>
          </div>
        ) : (
          <div className="menu-bar flex justify-between items-center">
            <div className="logo cursor-pointer" onClick={() => navigate("/")}>
              <img className="w-[100px]" src={logo} alt="notfound" />
            </div>
            <nav>
              <ul>
                <li className="flex gap-10">
                  <Link
                    className="text-[19px] italic hover:text-yellow-400"
                    to={"/vehicles"}
                  >
                    Vahicles
                  </Link>
                  <Link
                    className="text-[19px] italic hover:text-yellow-400"
                    to={"/limo-services"}
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
                    to={"/book-now"}
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

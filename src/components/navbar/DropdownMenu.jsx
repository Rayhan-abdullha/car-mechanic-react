import { Link } from "react-router-dom";

function DropdownMenu() {
  return (
    <nav className="flex justify-center bg-slate-100 w-full h-full ml-[20px] p-5 rounded-md absolute top-[130px] right-0 z-[9999]">
      <ul className="flex flex-col gap-10 text-center pt-10 uppercase">
        <Link
          to="/"
          className="text-slate-600 text-[18px] font-semibold hover:text-orange-400"
        >
          Home
        </Link>
        <Link
          to="/vehicles"
          className="text-slate-600 text-[18px] font-semibold hover:text-orange-400"
        >
          Vehicles
        </Link>
        <Link
          to="/services"
          className="text-slate-600 text-[18px] font-semibold hover:text-orange-400"
        >
          Limo Services
        </Link>

        <Link
          to="/contact"
          className="text-slate-600 text-[18px] font-semibold hover:text-orange-400"
        >
          Contact
        </Link>

        <Link
          to="/book"
          className="text-slate-600 text-[18px] font-semibold hover:text-orange-400"
        >
          Book Now
        </Link>

        <Link
          className="text-slate-600 text-[18px] font-semibold hover:text-orange-400"
          to="/about"
        >
          About
        </Link>
      </ul>
    </nav>
  );
}

export default DropdownMenu;

import { Link } from "react-router-dom";

function DropdownMenu() {
  return (
    <nav className="flex justify-center bg-slate-100 w-full h-full ml-[20px] p-5 rounded-md absolute top-[120px] right-0 z-[9999]">
      <ul className="flex flex-col gap-10 text-center pt-10 uppercase">
        <Link
          to="/vehicles"
          className="text-slate-600 text-[18px] font-semibold hover:text-orange-400"
        >
          Vehicles
        </Link>
        <Link
          to="/limo-services"
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
          to="/book-now"
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

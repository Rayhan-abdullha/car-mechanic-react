import { Link } from "react-router-dom";

function DropdownMenu() {
  return (
    <nav className="bg-slate-100 w-[200px] ml-[20px] p-5 rounded-md">
      <ul className="flex flex-col gap-5">
        <li>
          <Link className="text-slate-600 text-[18px] font-semibold hover:text-orange-400">
            Vehicle
          </Link>
        </li>
        <li>
          <Link className="text-slate-600 text-[18px] font-semibold hover:text-orange-400">
            Limo Services
          </Link>
        </li>
        <li>
          <Link className="text-slate-600 text-[18px] font-semibold hover:text-orange-400">
            About
          </Link>
        </li>
        <li>
          <Link className="text-slate-600 text-[18px] font-semibold hover:text-orange-400">
            Book Now
          </Link>
        </li>
        <li>
          <Link className="text-slate-600 text-[18px] font-semibold hover:text-orange-400">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default DropdownMenu;

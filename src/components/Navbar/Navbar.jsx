import { NavLink } from "react-router-dom";
import { navData } from "../../data/data";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-500 py-6">
      <ul className="flex justify-around items-center">
        {navData.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-red-600 text-xl font-medium"
                : "text-red-600 text-xl hover:text-red-400 transition duration-300"
            }
          >
            <li className="cursor-pointer">{item.label}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
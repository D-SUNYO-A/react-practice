import { Link, NavLink } from "react-router-dom";
import { links } from "../utils/data";

const Sidebar = () => {
  const normalLink =
    "rounded-md inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 hover:bg-indigo-200 py-2";
  const activeLink =
    "rounded-md inline-flex items-center w-full text-sm font-semibold text-gray-100 transition-colors duration-150 hover:text-gray-100 bg-indigo-500 py-2";

  return (
    <aside className="z-30 hidden w-64 overflow-y-auto bg-gray-100 md:block flex-shrink-0">
      <div className="py-4 text-gray-500">
        <Link
          className="flex items-center ml-6 text-lg font-bold text-gray-800"
          to="dashboard"
        >
          React Practice
        </Link>
        <ul className="mt-5">
          {links.map((link) => (
            <li className="relative px-6 py-1" key={link.name}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to={link.path}
              >
                <span className="ml-4">{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

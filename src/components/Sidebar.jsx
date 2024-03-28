import { Link, NavLink } from "react-router-dom";
import { links } from "../utils/data";

const Sidebar = () => {
  const normalLink =
    "inline-flex items-center w-full py-2 text-sm font-semibold transition-colors duration-150 rounded-md hover:text-gray-800 hover:bg-indigo-200";
  const activeLink =
    "inline-flex items-center w-full py-2 text-sm font-semibold text-gray-100 transition-colors duration-150 bg-indigo-500 rounded-md hover:text-gray-100";

  return (
    <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-gray-100 md:block">
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

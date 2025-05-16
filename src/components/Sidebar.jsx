import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-gray-900 py-4 px-4">
        <h2 className="text-xl font-bold text-white">App Name</h2>
      </div>
      <nav className="flex flex-col flex-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `py-3 px-4 ${
              isActive
                ? "bg-gray-900 text-white border-l-4 border-blue-500"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            `py-3 px-4 ${
              isActive
                ? "bg-gray-900 text-white border-l-4 border-blue-500"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`
          }
        >
          Jobs
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `py-3 px-4 ${
              isActive
                ? "bg-gray-900 text-white border-l-4 border-blue-500"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`
          }
        >
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;

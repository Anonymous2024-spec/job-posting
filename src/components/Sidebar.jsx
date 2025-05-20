import { NavLink } from "react-router-dom";

const menuItems = [
  { icon: "fas fa-home", label: "Dashboard", path: "/" },
  { icon: "fas fa-search", label: "Job Search", path: "/jobs" },
  { icon: "fas fa-cog", label: "Settings", path: "/settings" },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-sm">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-3 rounded-lg ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <i className={`${item.icon} w-5 text-center`}></i>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-8 pt-4 border-t border-gray-200">
          <button className="w-full flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100">
            <i className="fas fa-sign-out-alt w-5 text-center"></i>
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;

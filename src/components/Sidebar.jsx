import { SideBarData } from "../Utils/SidebarData";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="h-screen lg:w-[250px] w-[70px] fixed top-0 left-0 bg-[#191D29] pl-[20px]">
      <div className="w-full h-fit  py-[20px] mt-[100px]">
        {SideBarData.map((data) => {
          return (
            <NavLink
              key={data.id}
              to={data.path}
              style={({ isActive }) => ({
                background: isActive && "#6B7280",
              })}
              className="flex items-center gap-2 mt-3 cursor-pointer p-2 w-full hover:bg-gray-400"
            >
              {data.icon}
              <span
                className="lg:text-lg text-sm whitespace-pre text-white px-2 lg:px-0 py-1 lg:py-0 lg:ml-0 ml-3
               hidden lg:flex s"
              >
                {data.name}
              </span>
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;

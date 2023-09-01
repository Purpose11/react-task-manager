import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineDescription } from "react-icons/md";
import { MdOutlinePending } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";

export const SideBarData = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: <BiHomeAlt2 className="text-white text-2xl flex-shrink-0" />,
  },
  {
    id: 2,
    name: "Completed Tasks",
    path: "/completed",
    icon: (
      <AiOutlineCheckCircle className="text-white text-2xl flex-shrink-0" />
    ),
  },
  {
    id: 3,
    name: "Pending Tasks",
    path: "/pending",
    icon: <MdOutlinePending className="text-white text-2xl flex-shrink-0" />,
  },
  {
    id: 4,
    name: "About",
    path: "/about",
    icon: (
      <MdOutlineDescription className="text-white text-2xl flex-shrink-0" />
    ),
  },
  {
    id: 5,
    name: "Calendar",
    path: "/calendar",
    icon: <MdCalendarMonth className="text-white text-2xl flex-shrink-0" />,
  },
];

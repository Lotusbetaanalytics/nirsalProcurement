import { FaThLarge, FaCog, FaFolder, FaBriefcase } from "react-icons/fa";
import { AiFillAppstore,AiOutlineAppstoreAdd } from "react-icons/ai";
import { ImCheckmark2 } from "react-icons/im"
const Helpers = {
  url: {
    admin: [
      {
        name: "Dashboard",
        path: "/app/dashboard",
        Icon: FaThLarge,
      },
      {
        name: "Configurations",
        path: "/app/config",
        Icon: FaCog,
      },
    ],
    hop: [
      {
        name: "Dashboard",
        path: "/app/dashboard",
        Icon: FaThLarge,
      },
      {
        name: "Projects",
        path: "/app/projects",
        Icon: FaBriefcase,
      },
      {
        name: "Projects Folder",
        path: "/app/projects/folder",
        Icon: FaFolder,
      },
    ],
    frontdesk:[
      {
        name: "Dashboard",
        path: "/app/frontdesk/dashboard",
        Icon: AiFillAppstore,
      },
      {
        name: "Initiate New Project",
        path: "/app/frontdesk/newproject",
        Icon: AiOutlineAppstoreAdd,
      },
      {
        name: "Projects",
        path: "/app/frontdesk/confirmedproject",
        Icon: ImCheckmark2,
      }
    ]
  },
};
export default Helpers;

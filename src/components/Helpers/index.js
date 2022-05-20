import { FaThLarge, FaCog, FaFolder, FaBriefcase } from "react-icons/fa";
const Helpers = {
  url: {
    admin: [
      // {
      //   name: "Dashboard",
      //   path: "/app/dashboard",
      //   Icon: FaThLarge,
      // },
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
  },
};
export default Helpers;

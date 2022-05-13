import React from "react";
import { useNavigate } from "react-router-dom";
import "./tabNavigation.css";

const TabNavigation = ({ tabs }) => {
  const navigate = useNavigate();
  const [clickedTab, setClickedTab] = React.useState(false);
  return (
    <div className="tabs__container">
      {tabs.map((tab) => {
        return (
          <div
            className={`${clickedTab && `active`}  tab__btn`}
            onClick={() => {
              navigate(tab.path);

              clickedTab ? setClickedTab(false) : setClickedTab(true);

              setClickedTab((prev) => {
                if (prev) {
                  return false;
                } else {
                  return true;
                }
              });
            }}
          >
            {tab.title}
          </div>
        );
      })}
    </div>
  );
};

export default TabNavigation;

export const Tabs = [
  { id: 1, title: "Total Projects", path: "/hop/projects/total" },
  { id: 2, title: "Pending Projects", path: "/hop/projects/pending" },
  { id: 3, title: "New Projects", path: "/hop/projects/new" },
  { id: 4, title: "Closed Projects", path: "/hop/projects/closed" },
  { id: 5, title: "Approved Projects", path: "/hop/projects/approved" },
  { id: 6, title: "Terminated Projects", path: "/hop/projects/terminated" },
];

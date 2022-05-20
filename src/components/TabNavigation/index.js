import React from "react";
import { useNavigate } from "react-router-dom";
import "./tabNavigation.css";

const TabNavigation = ({ tabs, active }) => {
  const navigate = useNavigate();

  return (
    <div className="tabs__container">
      {tabs.map((tab) => {
        return (
          <div
            className={`${tab.active && `active`}    tab__btn`}
            key={tab.id}
            onClick={() => {
              navigate(tab.path);
              tabs.filter(({ id }) => {
                return id === tab.id;
              })[0].active = true;
              tabs
                .filter(({ id }) => {
                  return id !== tab.id;
                })
                .map((tab) => {
                  return (tab.active = false);
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
  {
    id: 1,
    title: "Total Projects",
    path: "/hop/projects/total",
    active: false,
  },
  {
    id: 2,
    title: "Pending Projects",
    path: "/hop/projects/pending",
    active: false,
  },
  { id: 3, title: "New Projects", path: "/hop/projects/new", active: false },
  {
    id: 4,
    title: "Closed Projects",
    path: "/hop/projects/closed",
    active: false,
  },
  {
    id: 5,
    title: "Approved Projects",
    path: "/hop/projects/approved",
    active: false,
  },
  {
    id: 6,
    title: "Terminated Projects",
    path: "/hop/projects/terminated",
    active: false,
  },
];

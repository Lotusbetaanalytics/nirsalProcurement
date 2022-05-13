import React, { useState } from "react";
import {
  MenuBar,
  Navigation,
  PageTitle,
} from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";

const FrontDeskRejectedProject = () => {
  // Helpers
  const dispatch = useDispatch();
  const toast = useToast();

  const createRole = useSelector((state) => state.createRole);
  const { loading, error, success } = createRole;

  // Menubar Items
  const menu = [
    { name: "Confirmed Projects",  url: "/app/frontdesk/confirmedproject" },
    { name: "Rejected Projects",active: true, url: "/app/frontdesk/rejectedproject" },
    { name: "Pending Projects", url: "/app/frontdesk/pendingproject" },
  ];

  

  return (
    <div className="appContainer">
      <Navigation />
      <div className="contentsRight">
        <PageTitle title="Rejected Projects" />
        <MenuBar menu={menu} />
        <div className="pageContents">
            <div className="nirsal__InputFlex">
              
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default FrontDeskRejectedProject;

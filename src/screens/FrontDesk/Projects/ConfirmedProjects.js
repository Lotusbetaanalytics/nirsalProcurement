import React, { useEffect } from "react";
import {
  MenuBar,
  Navigation,
  PageTitle,
} from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { frontDeskConfirmedProject } from "../../../redux/actions/FrontDesk/frontDeskProjectActions";

const FrontDeskConfirmedProject = () => {
  // Helpers
  const dispatch = useDispatch();
  const toast = useToast();

  const getFrontDeskConfirmedProject = useSelector((state) => state.getFrontDeskConfirmedProject);
  const { loading, confirmedProject } = getFrontDeskConfirmedProject;

  useEffect(()=>{
      dispatch(frontDeskConfirmedProject())
  })

  // Menubar Items
  const menu = [
    { name: "Confirmed Projects", active: true, url: "/app/frontdesk/confirmedproject" },
    { name: "Rejected Projects", url: "/app/frontdesk/rejectedproject" },
    { name: "Pending Projects", url: "/app/frontdesk/pendingproject" },
  ];

  

  return (
    <div className="appContainer">
      <Navigation />
      <div className="contentsRight">
        <PageTitle title="Confirmed Projects" />
        <MenuBar menu={menu} />
        <div className="pageContents">
            <div className="nirsal__InputFlex">
              
            </div>
        </div>
      </div>
    </div>
  );
};

export default FrontDeskConfirmedProject;

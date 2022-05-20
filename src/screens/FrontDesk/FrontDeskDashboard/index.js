import React,{ useEffect } from "react";
import { Cards, Navigation, PageTitle } from "../../../components";
import { useSelector, useDispatch } from "react-redux";

import { getMe } from "../../../redux/actions/authActions";
import { frontDeskConfirmedProject, frontDeskPendingProject } from "../../../redux/actions/FrontDesk/frontDeskProjectActions";
// import FrontDeskPendingProject from "../Projects/PendingProjects";

const FrontDeskDashboard = () => {

  const dispatch = useDispatch;


const getFrontDeskPendingProject = useSelector((state) => state.getFrontDeskPendingProject);
  const { loading, error, data } = getFrontDeskPendingProject;
  console.log(data)

 
  return (
    <div className="appContainer">
      <Navigation />
      <div className="contentsRight">
        <PageTitle title="Dashboard" />
        <div className="cardFlex">
          <Cards title="Number of Created Projects" count={10} />
          <Cards title="Number of confirmed projects" count={10} />
          <Cards title="Number of rejected Projects" count={10} />
        </div>
      </div>
    </div>
  );
};

export default FrontDeskDashboard;

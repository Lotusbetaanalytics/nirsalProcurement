import React,{ useEffect } from "react";
import { Cards, Navigation, PageTitle } from "../../../components";
import { useSelector, useDispatch } from "react-redux";

import { frontDeskConfirmedProject, frontDeskPendingProject, frontDeskRejectedProject } from "../../../redux/actions/FrontDesk/frontDeskProjectActions";



const FrontDeskDashboard = () => {

  const dispatch = useDispatch();


const getFrontDeskPendingProject = useSelector((state) => state.getFrontDeskPendingProject);
  const {  pendingProject } = getFrontDeskPendingProject;

  const getFrontDeskConfirmedProject = useSelector((state) => state.getFrontDeskConfirmedProject);
  const { confirmedProject} = getFrontDeskConfirmedProject;
  
  const getFrontDeskRejectedProject = useSelector((state) => state.getFrontDeskRejectedProject);
  const { rejectedProject } = getFrontDeskRejectedProject;



  const confirmed_project = confirmedProject && confirmedProject.data && confirmedProject.data.length;
  const created_project = pendingProject && pendingProject.length;
  const rejected_project = rejectedProject && rejectedProject.length;


  useEffect(()=>{
    dispatch(frontDeskConfirmedProject())
    dispatch(frontDeskPendingProject())
    dispatch(frontDeskRejectedProject())
},[dispatch])
 
  return (
    <div className="appContainer">
      <Navigation />
      <div className="contentsRight">
        <PageTitle title="Dashboard" />
        <div className="cardFlex">
          <Cards title="Number of Created Projects" count={created_project} />
          <Cards title="Number of confirmed projects" count={confirmed_project} />
          <Cards title="Number of rejected Projects" count={rejected_project} />
        </div>
      </div>
    </div>
  );
};

export default FrontDeskDashboard;

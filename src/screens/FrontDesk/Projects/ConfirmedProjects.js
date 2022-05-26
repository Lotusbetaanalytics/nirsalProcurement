import React, { useEffect } from "react";
import {
  MenuBar,
  Navigation,
  PageTitle,
} from "../../../components";

import MaterialTable from "material-table"
import { useSelector, useDispatch } from "react-redux";
import { frontDeskConfirmedProject } from "../../../redux/actions/FrontDesk/frontDeskProjectActions";
// import data from "../../../redux/data";


const FrontDeskConfirmedProject = () => {
  // Helpers
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(frontDeskConfirmedProject())
},[dispatch])

  
  const getFrontDeskConfirmedProject = useSelector((state) => state.getFrontDeskConfirmedProject);
  const { loading, confirmedProject=[]} = getFrontDeskConfirmedProject;
  

  
  // Menubar Items
  const menu = [
    { name: "Confirmed Projects", active: true, url: "/app/frontdesk/confirmedproject" },
    { name: "Rejected Projects", url: "/app/frontdesk/rejectedproject" },
    { name: "Pending Projects", url: "/app/frontdesk/pendingproject" },
  ];

  const columns=[
    {
      title: "Employee Name",
      field: "name",
      type:"string"
    },
    {
      title: "Employee Email",
      field: "email",
      type:"string"
    },
    {
      title: "Project Title",
      field: "projectTitle",
      type:"string"
    },
    {
      title: "Vendor Name",
      field: "vendorName",
      type:"string"
    },
    {
      title: "Head of Procurement",
      field: "headOfProcurement.fullname",
      type:"string"
    },
  ]


  return (
    <div className="appContainer">
      <Navigation />
      <div className="contentsRight">
        <PageTitle title="Confirmed Projects" />
        <MenuBar menu={menu} />
        {loading ? (
          <h1>Loading...</h1>
        )  : (
          <MaterialTable
          columns={columns}
            data={[confirmedProject]}
            title="Confirmed Projects"
            options={{
              exportButton: true,
              headerStyle: {
                fontSize: 14,
                borderBottom: "1px solid rgba(196, 196, 196, 0.32)",
              },
             
            }}
            
            style={{
              boxShadow: "none",
              width: "100%",
              boxSizing: "border-box",
               paddingLeft: "5px",
              paddingRight: "5px",
              
              margin: "0 0",
            }}
            
          />
        )
        }
      </div>
    </div>
  );
};

export default FrontDeskConfirmedProject;

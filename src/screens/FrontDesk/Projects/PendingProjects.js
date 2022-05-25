import React, { useEffect } from "react";
import {
  MenuBar,
  Navigation,
  PageTitle,
} from "../../../components";
import styles from "./styles.module.css"


import { useSelector, useDispatch } from "react-redux";

import { frontDeskPendingProject } from "../../../redux/actions/FrontDesk/frontDeskProjectActions";
import MaterialTable from "material-table";


const FrontDeskPendingProject = () => {
  // Helpers
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  

  const handleAssign = (_id) => {
    setId(id);
    
  };

  useEffect(()=>{
    dispatch(frontDeskPendingProject())
    
  },[dispatch])
 

  const getFrontDeskPendingProject = useSelector((state) => state.getFrontDeskPendingProject);
  const { loading, pendingProject= [] } = getFrontDeskPendingProject;

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

  // Menubar Items
  const menu = [
    { name: "Confirmed Projects",  url: "/app/frontdesk/confirmedproject" },
    { name: "Rejected Projects", url: "/app/frontdesk/rejectedproject" },
    { name: "Pending Projects",active: true, url: "/app/frontdesk/pendingproject" },
  ];

  

  return (
    <div className="appContainer">
      <Navigation />
      <div className="contentsRight">
        <PageTitle title="Pending Projects" />
        <MenuBar menu={menu} />
        {loading ? (
          <h1>Loading...</h1>
        ) : (<div className={styles.material}><MaterialTable
         
          columns={columns}
          data={pendingProject}
          title={`Pending Projects: ${pendingProject.length}`}
          options={{
            headerStyle: {
              
              fontSize: 14,
              borderBottom: "1px solid rgba(196, 196, 196, 0.32)",
            },
            actionsCellStyle: {
              color: "#FF00dd",
            },
            actionsColumnIndex: -1,
          }}
          
          style={{
            boxShadow: "none",
            width: "100%",
            boxSizing: "border-box",
             paddingLeft: "5px",
            paddingRight: "5px",
            
            margin: "0 0",
          }}
          actions={[
            {
              icon: "visibility",
              iconProps: {
                style: { fontSize: "20px", color: "gold" },
              },
              tooltip: "select",

              onClick: (event, rowData) => {
                 handleAssign(rowData._id);
              },
            },
          ]}
          components={{
            Action: (props) => (
              <button
                onClick={(event) => props.action.onClick(event, props.data)}
                // className="btn__table btn__assign"
              >
                {props.action.tooltip}
              </button>
            ),
          }}
          
        />
          </div>) }
      </div>
    </div>
  );
};

export default FrontDeskPendingProject;

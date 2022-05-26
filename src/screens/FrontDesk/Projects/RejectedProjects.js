import React,{ useEffect  } from "react";
import MaterialTable from "material-table"
import {
  MenuBar,
  Navigation,
  PageTitle,
} from "../../../components";
import { useSelector, useDispatch } from "react-redux";

// import data from "../../../redux/data";
import { frontDeskRejectedProject } from "../../../redux/actions/FrontDesk/frontDeskProjectActions";

const FrontDeskRejectedProject = () => {
  // Helpers
  const dispatch = useDispatch();


  const getFrontDeskRejectedProject = useSelector((state) => state.getFrontDeskRejectedProject);
  const { loading, rejectedProject =[]} = getFrontDeskRejectedProject;

  
  useEffect(()=>{
    dispatch(frontDeskRejectedProject())
},[dispatch])

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
        {loading ? (
          <h1>Loading...</h1>
        ) :   (
          <MaterialTable
            columns={[
              { title: "SN", field: "tableData.id", render:rowData => rowData.tableData.id+1},
              { title: "Employee Name", field: "name" },
              
              {
                title: "Employee Email",
                field: "email",
                align:"center"
              },
              {
                title: "Project Title",
                field: "projectTitle",
                align:"center"
              },
              {
                title: "Vendor Name",
                field: "vendorName",
                align:"center"
              },
              {
                title: "Head of Procurement",
                field: "headOfProcurement.name",
                align:"center"
              },
              
            ]}
            data={rejectedProject}
            title={`Rejected Projects: ${rejectedProject.length}`} 
            options={{
             
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
        )}
      </div>
    </div>
  );
};

export default FrontDeskRejectedProject;

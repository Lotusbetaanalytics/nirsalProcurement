import React, { useEffect, useState } from "react";
import {
  MenuBar,
  Navigation,
  PageTitle,
} from "../../../components";
import MaterialTable from "material-table"
import { useSelector, useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { frontDeskPendingProject } from "../../../redux/actions/FrontDesk/frontDeskProjectActions";
// import data from "../../../redux/data";

const FrontDeskPendingProject = () => {
  // Helpers
  const dispatch = useDispatch();
  const toast = useToast();
  const  [tableData,setTableData] = useState([]);

  const getFrontDeskPendingProject = useSelector((state) => state.getFrontDeskPendingProject);
  const { loading, error, data } = getFrontDeskPendingProject;
  console.log(data)

  useEffect(()=>{
    dispatch(frontDeskPendingProject())
    if (data){
      setTableData(data)
    }
    
},[tableData,dispatch])

console.log(tableData)

 

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
        ) : data? (<MaterialTable
          columns={[
            { title: "SN", field: "tableData.id", render:rowData => rowData.tableData.id+1},
            { title: "Employee Name", field: "employeeName" },
            
            {
              title: "Employee Email",
              field: "employeeEmail",
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
              field: "headOfProcurement",
              align:"center"
            },
            
          ]}
          data={tableData}
          title="Pending Projects"
          options={{
            exportButton: true,
            headerStyle: {
              backgroundColor: "#6B9109",
              color: "white",
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
          ) : (
            <div className="pageContents">
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <div style={{borderRadius:"50%",
              height:"300px",
              width:"300px", 
              border: "10px solid rgba(196,196,196,0.32)",
               display:"flex",
               fontSize:"12px",
               justifyContent:"center",
               alignItems:"center",textAlign:"center",backgroundColor:"#C4C4C4"}}>There are no Pending Projects</div>
              </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FrontDeskPendingProject;

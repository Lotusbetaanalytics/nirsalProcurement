import React,{ useEffect,useState  } from "react";
import MaterialTable from "material-table"
import {
  MenuBar,
  Navigation,
  PageTitle,
} from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
// import data from "../../../redux/data";
import { frontDeskRejectedProject } from "../../../redux/actions/FrontDesk/frontDeskProjectActions";

const FrontDeskRejectedProject = () => {
  // Helpers
  const dispatch = useDispatch();
  const toast = useToast();

  const createRole = useSelector((state) => state.createRole);
  const { loading, error, data } = createRole;
  const  [tableData,setTableData] = useState([]);

  useEffect(()=>{
    dispatch(frontDeskRejectedProject())
    setTableData(data)
},[tableData,dispatch])

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
        ) : data && data.length == 0 ? (
          <div className="pageContents">
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <div style={{borderRadius:"50%",
              height:"300px",
              width:"300px", 
              border: "10px solid rgba(196,196,196,0.32)",
               display:"flex",
               fontSize:"12px",
               justifyContent:"center",
               alignItems:"center",textAlign:"center",backgroundColor:"#C4C4C4"}}>There are no Rejected Projects</div>
              </div>
          </div>
          ) : (
          <MaterialTable
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
            title="Rejected Projects" 
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
        )}
      </div>
    </div>
  );
};

export default FrontDeskRejectedProject;

import React from "react";
import MaterialTable from "material-table";
import {
  Navigation,
  PageTitle,
  tableIcons,
  TabNavigation,
} from "../../../../components";
import { Tabs } from "../../../../components/TabNavigation";
import "./totalProjects.css";
import "../projects.css";
import { useNavigate } from "react-router-dom";
import { getTotalProjects } from "../ProjectApiCalls";

const TotalProjects = () => {
  const [data, setData] = React.useState([]);
  const [findingData, setFindingData] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    setFindingData(true);
    setActive(true);
    getTotalProjects(setFindingData, setData);
  }, []);

  console.log(data);

  const columns = [
    // { title: "SN", field: "name", type: "string" },
    { title: "Name", field: "name", type: "string" },
    { title: "Email", field: "email", type: "string" },
    { title: "Project Title", field: "projectTitle", type: "string" },
    { title: "Contract Type", field: "contractType", type: "string" },
    { title: "PDO", field: "projectDeskOfficer[email]" },
    { title: "FDO", field: "frontDeskOfficer[email]" },
  ];

  return (
    <div className="appContainer">
      <Navigation />
      <div className="contentContainer contentsRight">
        <PageTitle title="Projects" />
        <div>
          <TabNavigation tabs={Tabs} active={active} />
        </div>
        <div>
          {findingData ? (
            <div className="loading__indicator">Getting...</div>
          ) : (
            <MaterialTable
              icons={tableIcons}
              title={`Total Projects: ${data.length}`}
              columns={columns}
              data={data}
              options={{
                exportButton: true,
                actionsCellStyle: {
                  color: "#FF00dd",
                },
                actionsColumnIndex: -1,

                headerStyle: {
                  backgroundColor: "none",
                  color: "black",
                  fontSize: "14px",
                  padding: "10px",
                  borderBottom: "1px solid rgba(196, 196, 196, 0.32)",
                },
                rowStyle: {
                  fontSize: "13px",
                },
              }}
              style={{
                boxShadow: "none",
                width: "95%",
                boxSizing: "border-box",
                paddingLeft: "30px",
                paddingRight: "30px",
                backgroundColor: "white",
                margin: "auto 1rem",
              }}
              actions={[
                {
                  icon: "visibility",
                  iconProps: {
                    style: { fontSize: "20px", color: "gold" },
                  },
                  tooltip: "View all",

                  onClick: (event, rowData) => {
                    navigate(`/totalproject/view/${rowData._id}`);
                  },
                },
              ]}
              components={{
                Action: (props) => (
                  <button
                    onClick={(event) => props.action.onClick(event, props.data)}
                    className="btn__table btn__assign"
                  >
                    <span>{props.action.tooltip}</span>
                  </button>
                ),
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TotalProjects;

import React from "react";
import MaterialTable from "material-table";
import {
  Modal,
  Navigation,
  PageTitle,
  tableIcons,
  TabNavigation,
} from "../../../../components";
import { Tabs } from "../../../../components/TabNavigation";
import "./pendingProjects.css";
import "../projects.css";
import { getPendingProjects } from "../ProjectApiCalls";
import { AssignProject } from "../helpers/hopHelpers";

const PendingProjects = () => {
  const [data, setData] = React.useState([]);
  const [findingData, setFindingData] = React.useState(false);
  const [id, setId] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAssign = (id) => {
    handleOpen();
    setId(id);
  };

  React.useEffect(() => {
    setFindingData(true);
    getPendingProjects(setFindingData, setData);
  }, []);

  const columns = [
    { title: "Name", field: "name", type: "string" },
    { title: "Email", field: "email", type: "string" },
    { title: "Project Title", field: "projectTtitle", type: "string" },
    { title: "Contract Type", field: "contractType", type: "string" },
    { title: "FDO", field: "EXApprovalStatus" },
  ];

  return (
    <div className="appContainer">
      <Navigation />
      <div className="contentContainer contentsRight">
        <PageTitle title="Projects" />
        <div>
          <TabNavigation tabs={Tabs} />
        </div>
        <div>
          {findingData ? (
            <div className="loading__indicator">Getting...</div>
          ) : (
            <MaterialTable
              icons={tableIcons}
              title={`Pending Projects: ${data.length}`}
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
                  tooltip: "Assign to",

                  onClick: (event, rowData) => {
                    handleAssign(rowData._id);
                  },
                },
              ]}
              components={{
                Action: (props) => (
                  <button
                    onClick={(event) => props.action.onClick(event, props.data)}
                    className="btn__table btn__assign"
                  >
                    {props.action.tooltip}
                  </button>
                ),
              }}
            />
          )}
          <Modal
            isVisible={open}
            onClose={handleClose}
            content={<AssignProject id={id} handleClose={handleClose} />}
            size="lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PendingProjects;

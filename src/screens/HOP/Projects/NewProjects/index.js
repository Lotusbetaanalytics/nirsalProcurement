import React from "react";
import { forwardRef } from "react";
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from "@material-ui/icons";
import MaterialTable from "material-table";
import {
  Modal,
  Navigation,
  PageTitle,
  TabNavigation,
} from "../../../../components";
import { Tabs } from "../../../../components/TabNavigation";
import "./newProjects.css";
import "../projects.css";
import { useNavigate } from "react-router-dom";
import {
  approveProject,
  assignProject,
  getTotalProjects,
} from "../ProjectApiCalls";

const NewProjects = () => {
  const [data, setData] = React.useState([]);
  const [findingData, setFindingData] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openAssign, setOpenAssign] = React.useState(false);
  const [id, setId] = React.useState("");

  const navigate = useNavigate();

  React.useEffect(() => {
    console.log(navigator.onLine);
    setFindingData(true);
    getTotalProjects(setFindingData, setData);
  }, []);

  console.log(data);

  const confirmHandler = (id) => {
    openAssign && handleAssignClose();
    setOpen(true);
    setId(id);
  };
  const assignHandler = (id) => {
    open && handleClose();
    setOpenAssign(true);
    setId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAssignClose = () => {
    setOpenAssign(false);
  };

  const columns = [
    { title: "SN", field: "name", type: "string" },
    { title: "Name", field: "email", type: "string" },
    { title: "Email", field: "alias", type: "string" },
    { title: "Project Title", field: "division", type: "string" },
    { title: "Contract Type", field: "AvatarGroup", type: "string" },
    { title: "Project Desk Officer", field: "EXApprovalStatus" },
    { title: "Front Desk Officer", field: "EXApprovalStatus" },
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
              icons={{
                Add: forwardRef((props, ref) => (
                  <AddBox {...props} ref={ref} />
                )),
                Check: forwardRef((props, ref) => (
                  <Check {...props} ref={ref} />
                )),
                Clear: forwardRef((props, ref) => (
                  <Clear {...props} ref={ref} />
                )),
                Delete: forwardRef((props, ref) => (
                  <DeleteOutline {...props} ref={ref} />
                )),
                DetailPanel: forwardRef((props, ref) => (
                  <ChevronRight {...props} ref={ref} />
                )),
                Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
                Export: forwardRef((props, ref) => (
                  <SaveAlt {...props} ref={ref} />
                )),
                Filter: forwardRef((props, ref) => (
                  <FilterList {...props} ref={ref} />
                )),
                FirstPage: forwardRef((props, ref) => (
                  <FirstPage {...props} ref={ref} />
                )),
                LastPage: forwardRef((props, ref) => (
                  <LastPage {...props} ref={ref} />
                )),
                NextPage: forwardRef((props, ref) => (
                  <ChevronRight {...props} ref={ref} />
                )),
                PreviousPage: forwardRef((props, ref) => (
                  <ChevronLeft {...props} ref={ref} />
                )),
                ResetSearch: forwardRef((props, ref) => (
                  <Clear {...props} ref={ref} />
                )),
                Search: forwardRef((props, ref) => (
                  <Search {...props} ref={ref} />
                )),
                SortArrow: forwardRef((props, ref) => (
                  <ArrowDownward {...props} ref={ref} />
                )),
                ThirdStateCheck: forwardRef((props, ref) => (
                  <Remove {...props} ref={ref} />
                )),
                ViewColumn: forwardRef((props, ref) => (
                  <ViewColumn {...props} ref={ref} />
                )),
              }}
              title={`New Projects: ${data.length}`}
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
                  padding: "10px",
                  borderBottom: "1px solid rgba(196, 196, 196, 0.32)",
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
                  tooltip: "Confirm",

                  onClick: (event, rowData) => {
                    confirmHandler(rowData._id);
                  },
                },
                {
                  icon: "visibility",
                  iconProps: {
                    style: { fontSize: "20px", color: "gold" },
                  },
                  tooltip: "Assign to",

                  onClick: (event, rowData) => {
                    assignHandler(rowData._id);
                  },
                },
              ]}
              components={{
                Action: (props) => (
                  <button
                    onClick={(event) => props.action.onClick(event, props.data)}
                    className={`btn__table  ${
                      props.action.tooltip === "Confirm"
                        ? "btn__confirm"
                        : "btn__assign"
                    }`}
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
            content={<ConfirmProject id={id} handleClose={handleClose} />}
            size="lg"
          />
          <Modal
            isVisible={openAssign}
            onClose={handleAssignClose}
            content={<AssignProject id={id} handleClose={handleAssignClose} />}
            size="lg"
          />
        </div>
      </div>
    </div>
  );
};

export default NewProjects;

export const ConfirmProject = ({ id, handleClose }) => {
  const [data, setData] = React.useState([]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [projectName, setProjectName] = React.useState("");
  const [vendorName, setVendorName] = React.useState("");
  const [projectTitle, setProjectTitle] = React.useState("");
  const [projectDeskOfficer, setProjectDeskOfficer] = React.useState("");
  const [uploadedDocuments, setUploadedDocuments] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [findingData, setFindingData] = React.useState(false);

  React.useEffect(() => {
    setFindingData(true);
  }, []);

  const onConfirmHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    approveProject(id, setLoading, handleClose, data);
  };

  return (
    <div>
      <form onSubmit={onConfirmHandler} className="projectForm">
        <div>
          <label>Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" />
        </div>
        <div>
          <label>Project Name</label>
          <input type="text" />
        </div>
        <div>
          <label>vendor Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Project Title</label>
          <input type="text" />
        </div>
        <div>
          <label>Project Desk Officer</label>
          <input type="text" />
        </div>
        <div>
          <label>Uploaded Documents</label>
        </div>
        <div></div>
        <div></div>
        <div className="btn__left">
          <button type="submit" className="btn__table btn__assign ">
            Approve
          </button>
        </div>
      </form>
    </div>
  );
};
export const AssignProject = ({ id, handleClose }) => {
  const [data, setData] = React.useState([]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [projectName, setProjectName] = React.useState("");
  const [vendorName, setVendorName] = React.useState("");
  const [projectTitle, setProjectTitle] = React.useState("");
  const [projectDeskOfficer, setProjectDeskOfficer] = React.useState("");
  const [uploadedDocuments, setUploadedDocuments] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [findingData, setFindingData] = React.useState(false);

  React.useEffect(() => {
    setFindingData(true);
  }, []);

  const onAssignHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    assignProject(id, setLoading, handleClose, data);
  };

  return (
    <div>
      <form onSubmit={onAssignHandler} className="projectForm">
        <div>
          <label>Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" />
        </div>
        <div>
          <label>Project Name</label>
          <input type="text" />
        </div>
        <div>
          <label>vendor Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Project Title</label>
          <input type="text" />
        </div>
        <div>
          <label>Project Desk Officer</label>
          <input type="text" />
        </div>
        <div>
          <label>Uploaded Documents</label>
        </div>
        <div></div>
        <div></div>
        <div className="btn__left">
          <button type="submit" className="btn__table btn__assign ">
            Assign
          </button>
        </div>
      </form>
    </div>
  );
};

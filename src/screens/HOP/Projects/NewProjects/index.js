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
import { useDispatch, useSelector } from "react-redux";
import { getSingleProject } from "../../../../redux/actions/hop/projectActions";

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
  const [data, setData] = React.useState({
    projectName: "",
    name: "",
    email: "",
    vendorName: "",
    projectTitle: "",
    files: [],
    projectDeskOfficer: "",
    frontDeskOfficer: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [findingData, setFindingData] = React.useState(false);
  const dispatch = useDispatch();

  const { success, project } = useSelector((state) => state.getProject);

  React.useEffect(() => {
    if (success) {
      setData(project);
    }
  }, [success, project]);

  React.useEffect(() => {
    setFindingData(true);
    dispatch(getSingleProject(id));
  }, [id, dispatch]);

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
          <input
            type="text"
            value={data.name}
            onChange={(e) => (data.name = e.target.value)}
            readOnly
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={data.email}
            onChange={(e) => (data.name = e.target.value)}
            readOnly
          />
        </div>
        <div>
          <label>Project Name</label>
          <input
            type="text"
            value={data.projectName}
            onChange={(e) => (data.name = e.target.value)}
            readOnly
          />
        </div>
        <div>
          <label>vendor Name</label>
          <input
            type="text"
            value={data.vendorName}
            onChange={(e) => (data.name = e.target.value)}
            readOnly
          />
        </div>
        <div>
          <label>Project Title</label>
          <input
            type="text"
            value={data.projectTitle}
            onChange={(e) => (data.name = e.target.value)}
            readOnly
          />
        </div>
        <div>
          <label>Project Desk Officer</label>
          <input
            type="text"
            onChange={(e) => (data.name = e.target.value)}
            value={
              (data.projectDeskOfficer && data.projectDeskOfficer["email"]) ||
              ""
            }
            readOnly
          />
        </div>
        <div>
          <label>Uploaded Documents</label>
          <div>{data.files.map((doc) => JSON.stringify(doc))}</div>
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
  const [data, setData] = React.useState({
    projectName: "",
    name: "",
    email: "",
    vendorName: "",
    projectTitle: "",
    files: [],
    projectDeskOfficer: {},
    frontDeskOfficer: "",
  });
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [findingData, setFindingData] = React.useState(false);
  const [projectTitle, setProjectTitle] = React.useState("");
  const [projectDeskOfficer, setProjectDeskOfficer] = React.useState("");
  const [frontDeskOfficer, setFrontDeskOfficer] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [vendorName, setVendorName] = React.useState("");
  const [files, setFiles] = React.useState([]);
  const [projectName, setProjectName] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const { success, project } = useSelector((state) => state.getProject);

  React.useEffect(() => {
    if (success) {
      console.log(project);
      setName(project.name);
      setEmail(project.email);
      setVendorName(project.vendorName);
      setProjectTitle(project.projectTitle);
      setProjectDeskOfficer(
        project.projectDeskOfficer &&
          (project.projectDeskOfficer["email"] || "")
      );
      setFrontDeskOfficer(project.frontDeskOfficer["email"]);
      setFiles(project.files);
    }
  }, [success, project]);

  React.useEffect(() => {
    setFindingData(true);
    dispatch(getSingleProject(id));
  }, [id, dispatch]);

  const onAssignHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    assignProject(id, setLoading, handleClose);
  };

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const Content = (staff) => {
    return (
      <div className="permissionPrompt">
        <div>
          Are you sure you want to assign this project to <br />
          <strong>{staff}</strong>?
        </div>
        <div className="promptButton">
          <button onClick={onAssignHandler}>Yes</button>
          <button
            onClick={() => {
              closeModal();
            }}
          >
            No
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={onAssignHandler} className="projectForm">
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            readOnly
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly
          />
        </div>
        <div>
          <label>Project Name</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            readOnly
          />
        </div>
        <div>
          <label>vendor Name</label>
          <input
            type="text"
            value={vendorName}
            onChange={(e) => setVendorName(e.target.value)}
            readOnly
          />
        </div>
        <div>
          <label>Project Title</label>
          <input
            type="text"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            readOnly
          />
        </div>
        <div>
          <label>Project Desk Officer</label>
          <input
            type="text"
            onChange={(e) => setProjectDeskOfficer(e.target.value)}
            value={projectDeskOfficer}
            readOnly
          />
        </div>
        <div>
          <label>Uploaded Documents</label>
          <div>{files.map((doc) => JSON.stringify(doc))}</div>
        </div>
        <div></div>
        <div></div>
        <div className="btn__left">
          <button
            type="submit"
            className="btn__table btn__assign "
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
          >
            Assign
          </button>
        </div>
      </form>
      <Modal isVisible={open} onClose={closeModal} content={Content(name)} />
    </div>
  );
};

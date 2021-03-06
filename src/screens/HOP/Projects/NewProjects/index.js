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
import "./newProjects.css";
import "../projects.css";
import { getTotalProjects } from "../ProjectApiCalls";
import { ConfirmProject, AssignProject } from "../helpers/hopHelpers";

const NewProjects = () => {
  const [data, setData] = React.useState([]);
  const [findingData, setFindingData] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openAssign, setOpenAssign] = React.useState(false);
  const [id, setId] = React.useState("");

  React.useEffect(() => {
    setFindingData(true);
    getTotalProjects(setFindingData, setData);
  }, []);

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
    { title: "PDO", field: "EXApprovalStatus" },
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

// export const ConfirmProject = ({ id, handleClose }) => {
//   const [data, setData] = React.useState({
//     projectName: "",
//     name: "",
//     email: "",
//     vendorName: "",
//     projectTitle: "",
//     files: [],
//     projectDeskOfficer: "",
//     frontDeskOfficer: "",
//   });
//   const [loading, setLoading] = React.useState(false);
//   const [findingData, setFindingData] = React.useState(false);
//   const dispatch = useDispatch();

//   const { success, project } = useSelector((state) => state.getProject);
//   const getRoleState = useSelector((state) => state.getRole);

//   console.log(getRoleState);

//   React.useEffect(() => {
//     if (success) {
//       setData(project);
//     }
//   }, [success, project]);

//   React.useEffect(() => {
//     setFindingData(true);
//     dispatch(getSingleProject(id));
//   }, [id, dispatch]);

//   const onConfirmHandler = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     approveProject(id, setLoading, handleClose, data);
//   };

//   return (
//     <div>
//       <form onSubmit={onConfirmHandler} className="projectForm">
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             value={data.name}
//             onChange={(e) => (data.name = e.target.value)}
//             readOnly
//           />
//         </div>
//         <div>
//           <label>Email</label>
//           <input
//             type="text"
//             value={data.email}
//             onChange={(e) => (data.name = e.target.value)}
//             readOnly
//           />
//         </div>
//         <div>
//           <label>Project Name</label>
//           <input
//             type="text"
//             value={data.projectName}
//             onChange={(e) => (data.name = e.target.value)}
//             readOnly
//           />
//         </div>
//         <div>
//           <label>vendor Name</label>
//           <input
//             type="text"
//             value={data.vendorName}
//             onChange={(e) => (data.name = e.target.value)}
//             readOnly
//           />
//         </div>
//         <div>
//           <label>Project Title</label>
//           <input
//             type="text"
//             value={data.projectTitle}
//             onChange={(e) => (data.name = e.target.value)}
//             readOnly
//           />
//         </div>
//         <div>
//           <label>Project Desk Officer</label>
//           <SelectInput />
//         </div>
//         <div>
//           <label>Uploaded Documents</label>
//           <div>{data.files.map((doc) => JSON.stringify(doc))}</div>
//         </div>
//         <div></div>
//         <div></div>
//         <div className="btn__left">
//           <button type="submit" className="btn__table btn__assign ">
//             Approve
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export const AssignProject = ({ id, handleClose }) => {
//   const [data, setData] = React.useState({
//     projectName: "",
//     name: "",
//     email: "",
//     vendorName: "",
//     projectTitle: "",
//     files: [],
//     projectDeskOfficer: {},
//     frontDeskOfficer: "",
//   });

//   const dispatch = useDispatch();
//   const [loading, setLoading] = React.useState(false);
//   const [findingData, setFindingData] = React.useState(false);
//   const [projectTitle, setProjectTitle] = React.useState("");
//   const [listOfPDO, setListOfPDO] = React.useState([]);
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [vendorName, setVendorName] = React.useState("");
//   const [files, setFiles] = React.useState([]);
//   const [projectName, setProjectName] = React.useState("");
//   const [pdo, setPdo] = React.useState("");
//   const [comment, setComment] = React.useState("");
//   const [teams, setTeams] = React.useState([]);
//   const [open, setOpen] = React.useState(false);
//   const [openSecond, setOpenSecond] = React.useState(false);
//   const [team, setTeam] = React.useState("");

//   const { success, project } = useSelector((state) => state.getProject);
//   const listOfPdoRequest = useSelector((state) => state.listOfPdo);
//   const getTeamRequest = useSelector((state) => state.teams);

//   React.useEffect(() => {
//     if (listOfPdoRequest.success) {
//       setListOfPDO(listOfPdoRequest.data);
//     }
//   }, [listOfPdoRequest.success, listOfPdoRequest.data]);

//   React.useEffect(() => {
//     if (getTeamRequest.success) {
//       setTeams(getTeamRequest.data);
//     }
//   }, [getTeamRequest.success, getTeamRequest.data]);

//   console.log(teams, team, ">>>>>>>");

//   React.useEffect(() => {
//     if (success) {
//       setName(project.name);
//       setEmail(project.email);
//       setVendorName(project.vendorName);
//       setProjectTitle(project.projectTitle);
//       setFiles(project.files);
//     }
//   }, [success, project]);

//   React.useEffect(() => {
//     setFindingData(true);
//     dispatch(getSingleProject(id));
//   }, [id, dispatch]);

//   React.useEffect(() => {
//     dispatch(getListOfPdo());
//     dispatch(getAllTeams());
//   }, [dispatch]);

//   const onAssignHandler = (event) => {
//     event.preventDefault();
//     setLoading(true);
//     assignProject(id, setLoading, handleClose);
//   };

//   const openModal = () => {
//     setOpen(true);
//   };
//   const openModalSecond = () => {
//     setOpenSecond(true);
//   };

//   const closeModal = () => {
//     setOpen(false);
//   };
//   const closeModalSecond = () => {
//     setOpenSecond(false);
//   };

//   const Content = (staff) => {
//     return (
//       <div className="permissionPrompt">
//         <div>
//           Are you sure you want to assign this project to <br />
//           <strong>{staff}</strong>?
//         </div>
//         <div className="promptButton">
//           <button onClick={onAssignHandler}>Yes</button>
//           <button
//             onClick={() => {
//               closeModal();
//             }}
//           >
//             No
//           </button>
//         </div>
//       </div>
//     );
//   };
//   const ClearContent = () => {
//     const clearInputs = () => {
//       closeModalSecond();
//       setComment("");
//       setProjectTitle("");
//       setPdo("");
//       setTeam("");
//     };

//     return (
//       <div className="permissionPrompt">
//         <div>Are you sure you want to clear all inputs?</div>
//         <div className="promptButton">
//           <button onClick={clearInputs}>Yes</button>
//           <button
//             onClick={() => {
//               closeModalSecond();
//             }}
//           >
//             No
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <form onSubmit={onAssignHandler} className="projectForm">
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             readOnly
//           />
//         </div>
//         <div>
//           <label>Email</label>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             readOnly
//           />
//         </div>
//         <div>
//           <label>Project Title</label>
//           <input
//             type="text"
//             value={projectTitle}
//             onChange={(e) => setProjectTitle(e.target.value)}
//             readOnly
//           />
//         </div>
//         <div>
//           <label>Responsible Unit</label>
//           <SelectInput
//             data={teams}
//             value={team}
//             title="Team"
//             onChange={(e) => setTeam(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Responsible Officer</label>
//           <SelectInput
//             data={listOfPDO}
//             value={pdo}
//             title="Officer"
//             onChange={(e) => setPdo(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Comment</label>
//           <input
//             type="text"
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//           />
//         </div>
//         <div></div>
//         <section className="btn__container">
//           <span
//             className="btn__assign__nobg "
//             onClick={(e) => {
//               openModalSecond();
//             }}
//           >
//             Cancel
//           </span>
//           <button
//             type="submit"
//             className="btn__assign"
//             onClick={(e) => {
//               e.preventDefault();
//               openModal();
//             }}
//           >
//             Assign
//           </button>
//         </section>
//       </form>
//       <Modal isVisible={open} onClose={closeModal} content={Content(name)} />
//       <Modal
//         isVisible={openSecond}
//         onClose={closeModalSecond}
//         content={ClearContent()}
//       />
//     </div>
//   );
// };

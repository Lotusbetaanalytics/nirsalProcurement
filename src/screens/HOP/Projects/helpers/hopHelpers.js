import React from "react";
import { Modal } from "../../../../components";
import "../projects.css";
import { approveProject, assignProject } from "../ProjectApiCalls";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProject } from "../../../../redux/actions/hop/projectActions";
import { getListOfPdo } from "../../../../redux/actions/staff/staffActions";
import {
  SelectInput,
  SelectOfficers,
} from "../../../../components/Forms/Select";
import { getAllTeams } from "../../../../redux/actions/team/teamAction";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

//  @desc     Confirm Project
//  @props    projectId, handleClose
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
  const getRoleState = useSelector((state) => state.getRole);

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
          <SelectInput />
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

//  @desc     HOP assign Project to a team
//  @props    projectId, handleClose
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

  const toast = useToast();
  const dispatch = useDispatch();
  const [assignee, setAssignee] = React.useState("");
  const [assigneeTeam, setAssigneeTeam] = React.useState("");
  const [loadingStaff, setLoadingStaff] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [findingData, setFindingData] = React.useState(false);
  const [projectTitle, setProjectTitle] = React.useState("");
  const [listOfPDO, setListOfPDO] = React.useState([]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [vendorName, setVendorName] = React.useState("");
  const [files, setFiles] = React.useState([]);
  const [projectName, setProjectName] = React.useState("");
  const [responsibleOfficer, setResponsibleOfficer] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [teams, setTeams] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);
  const [team, setTeam] = React.useState("");
  const { success, project } = useSelector((state) => state.getProject);
  const listOfPdoRequest = useSelector((state) => state.listOfPdo);
  const getTeamRequest = useSelector((state) => state.teams);

  React.useEffect(() => {
    if (listOfPdoRequest.success) {
      setListOfPDO(listOfPdoRequest.data);
    }
  }, [listOfPdoRequest.success, listOfPdoRequest.data]);

  React.useEffect(() => {
    if (getTeamRequest.success) {
      setTeams(getTeamRequest.data);
    }
  }, [getTeamRequest.success, getTeamRequest.data]);

  React.useEffect(() => {
    if (success) {
      setName(project.name);
      setEmail(project.email);
      setVendorName(project.vendorName);
      setProjectTitle(project.projectTitle);
      setFiles(project.files);
    }
  }, [success, project]);

  React.useEffect(() => {
    setFindingData(true);
    dispatch(getSingleProject(id));
  }, [id, dispatch]);

  React.useEffect(() => {
    dispatch(getListOfPdo());
    dispatch(getAllTeams());
  }, [dispatch]);

  const onAssignHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    const data = {
      comment,
      responsibleUnit: team,
      responsibleOfficer,
      projectTitle,
    };
    assignProject(id, data, setLoading, handleClose, toast);
  };

  const openModal = () => {
    setOpen(true);
  };
  const openModalSecond = () => {
    setOpenSecond(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  const closeModalSecond = () => {
    setOpenSecond(false);
  };

  React.useEffect(() => {
    if (responsibleOfficer) {
      setLoadingStaff(true);
      axios
        .get(`/api/v1/staff/${responsibleOfficer}`, {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("userInfo")).token
            }`,
          },
        })
        .then((res) => {
          setAssignee(res.data.data.fullname);
          setAssigneeTeam(res.data.data.team["title"]);
          setLoadingStaff(false);
        })
        .catch((err) => {
          console.log(err);
          setLoadingStaff(false);
        });
    }
  }, [responsibleOfficer]);

  const Content = () => {
    return (
      <div className="permissionPrompt">
        <div>
          Are you sure you want to assign this project to <br />
          <strong>{assignee}</strong> in {assigneeTeam}?
        </div>
        <div className="promptButton">
          {loading ? (
            <button disabled>Assigning...</button>
          ) : (
            <button onClick={onAssignHandler}>Yes</button>
          )}
          <button
            disabled={loading}
            onClick={() => {
              closeModal();
              setResponsibleOfficer("");
            }}
          >
            No
          </button>
        </div>
      </div>
    );
  };
  const ClearContent = () => {
    const clearInputs = () => {
      closeModalSecond();
      setComment("");
      setResponsibleOfficer("");
      setTeam("");
    };

    return (
      <div className="permissionPrompt">
        <div>Are you sure you want to clear all inputs?</div>
        <div className="promptButton">
          <button onClick={clearInputs}>Yes</button>
          <button
            onClick={() => {
              closeModalSecond();
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          openModal();
        }}
        className="projectForm"
      >
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
          <label>Project Title</label>
          <input
            type="text"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            readOnly
          />
        </div>
        <div>
          <label>Responsible Unit</label>
          <SelectInput
            data={teams}
            value={team}
            title="Team"
            show="title"
            onChange={(e) => setTeam(e.target.value)}
            required={true}
          />
        </div>
        <div>
          <label>Responsible Officer</label>
          <SelectOfficers
            value={responsibleOfficer}
            id={team}
            title="Officer"
            show="fullname"
            onChange={(e) => setResponsibleOfficer(e.target.value)}
            success={getTeamRequest.success}
            required={true}
          />
        </div>
        <div>
          <label>Comment</label>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div></div>
        <section className="btn__container">
          <span
            className="btn__assign__nobg "
            onClick={(e) => {
              openModalSecond();
            }}
          >
            Cancel
          </span>
          <button type="submit" className="btn__assign" disabled={loadingStaff}>
            Assign
          </button>
        </section>
      </form>
      <Modal isVisible={open} onClose={closeModal} content={Content()} />
      <Modal
        isVisible={openSecond}
        onClose={closeModalSecond}
        content={ClearContent()}
      />
    </div>
  );
};

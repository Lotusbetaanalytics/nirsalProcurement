import React, { useEffect, useState } from "react";
import {
  Button,
  Cards,
  Input,
  Navigation,
  PageTitle,
  Select,
} from "../../components";
import { IoMdAdd } from "react-icons/io";
import Modal from "../../components/Modal";
import { getMe } from "../../redux/actions/authActions";
import { useToast } from "@chakra-ui/react";
import "./hopDashboard.css";
import { postNewProjectList } from "../../redux/actions/HopAction/HopAction";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_NEWPROJECTLIST_RESET } from "../../redux/constants/HopConstant/hopConstant";
import {
  getFrontDeskPerso,
  getProcurementPerso,
  getProjectDeskPersonal,
} from "../../redux/actions/HopAction/getUsersProjectAction";
import {
  getAllProjects,
  getApprovedProjects,
  getClosedProjects,
  getNewProjects,
  getPendingProjects,
  getTerminatedProjects,
} from "../../redux/actions/getAllProjectsAction/getAllProjectsAction";

function HopDashboard() {
  const dispatch = useDispatch();
  const toast = useToast();

  const userProfile = useSelector((state) => state.userProfile);
  const { user = {} } = userProfile;

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  const name = user.fullname;
  const email = user.email;
  const [projectTitle, setProjectTitle] = useState("");
  const [contractType, setContractType] = useState("");
  // const [projectDeskOfficer, setProjectDeskOfficer] = useState("");
  // const [frontDeskOfficer, setFrontDeskOfficer] = useState("");
  const [uploadDocument, setUploadDocument] = useState("");
  // const [Approved, setApporved] = useState("");

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getProcurementPerso());
  }, [dispatch]);

  const getProcurementPerson = useSelector(
    (state) => state.getProcurementPerson
  );
  const { procurementHea = {} } = getProcurementPerson;
  const procurementHeadData = procurementHea._id;
  const procurementHead = procurementHea.fullname;

  const postNewProject = useSelector((state) => state.postNewProject);
  const { loading, error, success } = postNewProject;

  const submitHandler = (e) => {
    e.preventDefault();
    const projectData = {
      name: name,
      email: email,
      projectTitle: projectTitle,
      contractType: contractType,
      projectDeskOfficer: projectDeskStaff,
      frontDeskOfficer: frontDeskstaff,
      headOfProcurement: procurementHeadData,
      files: uploadDocument,
      status: "Approved",
    };
    dispatch(postNewProjectList(projectData));
  };

  const data = [{ value: "New Contract" }, { value: "Existing Contact" }];

  useEffect(() => {
    dispatch(getFrontDeskPerso());
  }, [dispatch]);

  const [sample, setSample] = React.useState([]);

  const getFrontDeskPerson = useSelector((state) => state.getFrontDeskPerson);
  const { frontDesk, success: okay } = getFrontDeskPerson;
  console.log(frontDesk && frontDesk[0].email);

  React.useEffect(() => {
    if (okay) {
      setSample(frontDesk && frontDesk[0].email);
    }
  }, [okay]);
  console.log(sample);
  const frontDeskstaff = frontDesk && frontDesk[0]._id;
  const frontDeskStaffData = sample;

  useEffect(() => {
    dispatch(getProjectDeskPersonal());
  }, [dispatch]);

  const [sampleData, setSampleData] = React.useState([]);
  const [idData, setIdData] = React.useState([]);

  const getProjectPerson = useSelector((state) => state.getProjectPerson);
  const { projectDesk, success: okey } = getProjectPerson;
  // console.log(projectDesk && projectDesk[0].email);

  React.useEffect(() => {
    if (okey) {
      setSampleData(projectDesk && projectDesk[0].email);
      setIdData(projectDesk && projectDesk[0]._id);
    }
  }, [okey]);

  console.log(sampleData);
  console.log(idData);

  const projectDeskStaff = idData;
  const projectDeskStaffData = sampleData;

  React.useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  const getProjectAll = useSelector((state) => state.getProjectAll);
  const { allProject } = getProjectAll;

  React.useEffect(() => {
    dispatch(getNewProjects());
  }, [dispatch]);

  const getProjectNew = useSelector((state) => state.getProjectNew);
  const { newProject } = getProjectNew;
  console.log(newProject && newProject.length);

  React.useEffect(() => {
    dispatch(getClosedProjects());
  }, [dispatch]);

  const getClosedProject = useSelector((state) => state.getClosedProject);
  const { closedProject } = getClosedProject;

  React.useEffect(() => {
    dispatch(getPendingProjects());
  }, [dispatch]);

  const getProjectPending = useSelector((state) => state.getProjectPending);
  const { pendingProject } = getProjectPending;

  React.useEffect(() => {
    dispatch(getApprovedProjects());
  }, [dispatch]);

  const getProjectApproved = useSelector((state) => state.getProjectApproved);
  const { approvedProject } = getProjectApproved;

  React.useEffect(() => {
    dispatch(getTerminatedProjects());
  }, [dispatch]);

  const getTerminated = useSelector((state) => state.getTerminated);
  const { terminatedProject } = getTerminated;
  console.log(terminatedProject);

  if (success) {
    toast({
      title: "Notification",
      description: "Project Initiated Successfully",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    dispatch({ type: CREATE_NEWPROJECTLIST_RESET });
  }
  if (error) {
    toast({
      title: "Error",
      description: "Error",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
    dispatch({ type: CREATE_NEWPROJECTLIST_RESET });
  }

  return (
    <div className="appContainer">
      <Navigation />
      <div className="contentsRight">
        <PageTitle title="Dashboard" />
        <div className="pageContent">
          <div className="cardFlex">
            <Cards
              title="Total Number of Projects"
              count={allProject && allProject.length}
            />
            <Cards
              title="No of New Projects"
              count={newProject && newProject.length}
            />
            <Cards
              title="No of Pending Project"
              count={pendingProject && pendingProject.length}
            />
            <Cards
              title="No of Closed Projects"
              count={closedProject && closedProject.length}
            />
            <Cards
              title="No of Approved Projects"
              count={approvedProject && approvedProject.length}
            />
            <Cards
              title="No of Terminated Projects"
              count={terminatedProject && terminatedProject.length}
            />
          </div>
          <div className="initiNewProject">
            <button
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Initiate New project
            </button>
            <IoMdAdd />
          </div>
          {openModal && (
            <Modal
              onClose={() => setOpenModal(false)}
              isVisible={true}
              size="lg"
              content={
                <form onSubmit={submitHandler}>
                  <div className="nirsal__InputFlex">
                    <Input
                      type="text"
                      title="Name"
                      value={name}
                      // onChange={(e) => setName(e.target.value)}
                      required={true}
                    />
                    <Input
                      title="Email"
                      type="email"
                      value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      required={true}
                    />
                    <Input
                      title="Project Title"
                      type="text"
                      value={projectTitle}
                      onChange={(e) => setProjectTitle(e.target.value)}
                      required={true}
                    />
                    <Select
                      title="Contract Type"
                      data={data}
                      value={contractType}
                      onChange={(e) => setContractType(e.target.value)}
                    />
                    <Input
                      title="Project Desk Office"
                      type="email"
                      value={projectDeskStaffData}
                      // onChange={(e) => setProjectDeskOfficer(e.target.value)}
                      required={true}
                    />

                    <Input
                      title="Front Desk Office"
                      type="email"
                      value={frontDeskStaffData}
                      // onChange={(e) => setFrontDeskOfficer(e.target.value)}
                    />
                    <Input
                      title="Procurement Head"
                      type="text"
                      value={procurementHead}
                      // onChange={(e) => setProcurementHead(e.target.value)}
                    />
                    <Input
                      title="Upload Document"
                      type="file"
                      value={uploadDocument}
                      onChange={(e) => setUploadDocument(e.target.files[0])}
                    />
                  </div>
                  <div className="formBtn">
                    <Button
                      title="Submit"
                      disabled={loading}
                      loading={loading}
                      className="btn"
                    />
                  </div>
                </form>
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default HopDashboard;

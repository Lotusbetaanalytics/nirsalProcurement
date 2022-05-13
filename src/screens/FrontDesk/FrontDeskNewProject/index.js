import React, { useState } from "react";
import {
  Button,
  Input,
  Navigation,
  PageTitle,
  Select,
} from "../../../components";
import { BsPlusCircleDotted } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { frontdeskInitiateProject } from "../../../redux/actions/FrontDesk/frontDeskProjectActions";
import { INITIATE_PROJECT_RESET } from "../../../redux/constants/FrontDesk/frontDeskProject";

const FrontDeskNewProject = () => {
  // Helpers
  const dispatch = useDispatch();
  const toast = useToast();

  const createNewProject = useSelector((state) => state.createNewProject);
  const { loading, error, success } = createNewProject;


  // Form State
  const [employeeName,setEmployeeName] = useState("");
  const [employeeEmail,setEmployeeEmail] =useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [headOfProcurement, setHeadOfProcurement] = useState("");

  // Submit form
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(frontdeskInitiateProject(employeeEmail));
  };
  if (success) {
    toast({
      title: "Notification",
      description: "Project Initiated Successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: INITIATE_PROJECT_RESET });
  }
  if (error) {
    toast({
      title: "Error",
      description: error,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: INITIATE_PROJECT_RESET });
  }


  return (
    <div className="appContainer">
      <Navigation />
      <div className="contentsRight">
        <PageTitle title="New Project" />
        <div className="pageContents">
          <form onSubmit={submitHandler}>
            <div className="nirsal__InputFlex">
              <Input
                title="Employee Name"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
                required={true}
              />
               <Input
                title="Employee Email"
                value={employeeEmail}
                onChange={(e) => setEmployeeEmail(e.target.value)}
                required={true}
              />
              <Select
                title="Project Title"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                required={true}
                
              />
              <Input
                title="Vendor Name"
                value={vendorName}
                onChange={(e) => setVendorName(e.target.value)}
                required={true}
              />
              <Input
                title="Head of Procurement"
                value={headOfProcurement}
                onChange={(e) => setHeadOfProcurement(e.target.value)}
                required={true}
              />
              <Button
                title="Add User"
                Icon={BsPlusCircleDotted}
                disabled={loading}
                loading={loading}
              />
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FrontDeskNewProject;

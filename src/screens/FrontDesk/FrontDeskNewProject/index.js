import React, { useEffect, useState } from "react";
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
import { getMe } from "../../../redux/actions/authActions";
import { headofProcurement } from "../../../redux/actions/HeadOfProcurement/headOfprocurement";

const FrontDeskNewProject = () => {
  // Helpers
  const dispatch = useDispatch();
  const toast = useToast();

  const userProfile = useSelector((state) => state.userProfile)
  const { user = {} } = userProfile

  console.log(user)

  const createNewProject = useSelector((state) => state.createNewProject);
  const { loading, error, success } = createNewProject;

  useEffect(() => {
    dispatch(getMe())
    dispatch(headofProcurement())
}, [dispatch])

const  getHeadofProcurement = useSelector((state) => state.getHeadofProcurement);
  const {data} =  getHeadofProcurement;
  console.log(data)

  // Form State
  const employeeName = user.fullname;
  const employeeEmail = user.email;
  const [projectTitle, setProjectTitle] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [document,setDocument] = useState("")
  const headOfProcurement = data && data._id;

  const headOfProcurementName = data && data.fullname
  console.log(headOfProcurementName)

  // Submit form
  const submitHandler = (e) => {
    e.preventDefault();
    
    dispatch(frontdeskInitiateProject(employeeEmail,employeeName,projectTitle,vendorName,headOfProcurement,document));
    console.log(document)
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
                
                required={true}
              />
               <Input
                title="Employee Email"
                value={employeeEmail}
                required={true}
              />
              <Input
                title="Project Title"
                value={projectTitle}
                required={true}
                onChange={(e) => setProjectTitle(e.target.value)}
              />
              
              <Input
                title="Vendor Name"
                value={vendorName}
                onChange={(e) => setVendorName(e.target.value)}
                required={true}
              />
              <Input
                title="Head of Procurement"
                value={headOfProcurementName}
                required={true}
              />
              <Input
                title="Upload Document"
                value={document}
                onChange={(e) => setDocument(e.target.value)}
                required={true}
                type={"file"}
              />
              <div style={{marginLeft:'3.2%'}} > 
               <Button
                title="Initiate Project"
                Icon={BsPlusCircleDotted}
                disabled={loading}
                loading={loading}
              />
                </div>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FrontDeskNewProject;

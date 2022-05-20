import React, { useState } from "react";
import {
  Button,
  Input,
  MenuBar,
  Navigation,
  PageTitle,
} from "../../../components";
import { BsPlusCircleDotted } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { addRole } from "../../../redux/actions/admin/roleActions";
import { CREATE_ROLES_RESET } from "../../../redux/constants/admin/rolesConstants";
import { useToast } from "@chakra-ui/react";

const AdminConfig = () => {
  // Helpers
  const dispatch = useDispatch();
  const toast = useToast();

  const createRole = useSelector((state) => state.createRole);
  const { loading, error, success } = createRole;

  // Menubar Items
  const menu = [
    { name: "Create Role", active: true, url: "/app/config" },
    { name: "Add Sub-Unit Head", url: "/app/config/subunit" },
    { name: "Add Users", url: "/app/config/users" },
  ];

  // Form State
  const [title, setTitle] = useState("");

  // Submit form
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addRole(title));
  };
  if (success) {
    toast({
      title: "Notification",
      description: "Role added Successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: CREATE_ROLES_RESET });
  }
  if (error) {
    toast({
      title: "Error",
      description: error,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: CREATE_ROLES_RESET });
  }

  return (
    <div className="appContainer">
      <Navigation />
      <div className="contentsRight">
        <PageTitle title="Configurations" />
        <MenuBar menu={menu} />
        <div className="pageContents">
          <form onSubmit={submitHandler}>
            <div className="nirsal__InputFlex">
              <Input
                title="Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required={true}
              />
              <Button
                title="Add Role"
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

export default AdminConfig;

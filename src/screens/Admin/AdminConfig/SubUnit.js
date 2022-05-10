import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  MenuBar,
  Navigation,
  PageTitle,
  Select,
} from "../../../components";
import { BsPlusCircleDotted } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { addRole, fetchRoles } from "../../../redux/actions/admin/roleActions";
import { CREATE_ROLES_RESET } from "../../../redux/constants/admin/rolesConstants";
import { useToast } from "@chakra-ui/react";

const AdminSubUnit = () => {
  // Helpers
  const dispatch = useDispatch();
  const toast = useToast();

  const getRole = useSelector((state) => state.getRole);
  const { loading, error, success, roles } = getRole;

  // Menubar Items
  const menu = [
    { name: "Create Role", url: "/app/config" },
    { name: "Add Sub-Unit Head", active: true, url: "/app/config/subunit" },
    { name: "Add Users", url: "/app/config/users" },
  ];

  // Form State
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  // Submit form
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addRole(name));
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

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

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
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
              />
              <Select
                title="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required={true}
                data={roles}
                filter="title"
                filterValue="_id"
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

export default AdminSubUnit;

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
import { fetchRoles } from "../../../redux/actions/admin/roleActions";
import { useToast } from "@chakra-ui/react";
import { CREATE_USER_RESET } from "../../../redux/constants/admin/userConstants";
import { addUser } from "../../../redux/actions/admin/userActions";

const AdminUsers = () => {
  // Helpers
  const dispatch = useDispatch();
  const toast = useToast();

  const getRole = useSelector((state) => state.getRole);
  const { roles } = getRole;

  const createUser = useSelector((state) => state.createUser);
  const { loading, error, success } = createUser;

  // Menubar Items
  const menu = [
    { name: "Create Role", url: "/app/config" },
    { name: "Add Sub-Unit Head", url: "/app/config/subunit" },
    { name: "Add Users", active: true, url: "/app/config/users" },
  ];

  // Form State
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  // Submit form
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addUser(email, role));
  };
  if (success) {
    toast({
      title: "Notification",
      description: "User added Successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: CREATE_USER_RESET });
  }
  if (error) {
    toast({
      title: "Error",
      description: error,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: CREATE_USER_RESET });
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
                title="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

export default AdminUsers;

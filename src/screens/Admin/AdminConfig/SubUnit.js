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
import { useToast } from "@chakra-ui/react";
import { CREATE_SUBUNIT_RESET } from "../../../redux/constants/admin/subunitConstants";
import { addSubunit } from "../../../redux/actions/admin/subunitActions";
import { fetchUsers } from "../../../redux/actions/admin/userActions";

const AdminSubUnit = () => {
  // Helpers
  const dispatch = useDispatch();
  const toast = useToast();

  const getUser = useSelector((state) => state.getUser);
  const { users } = getUser;

  const createSubUnit = useSelector((state) => state.createSubUnit);
  const { loading, error, success } = createSubUnit;

  // Menubar Items
  const menu = [
    { name: "Create Role", url: "/app/config" },
    { name: "Add Sub-Unit Head", active: true, url: "/app/config/subunit" },
    { name: "Add Users", url: "/app/config/users" },
  ];

  // Form State
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [head, setHead] = useState("");

  // Submit form
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addSubunit(title, email, head));
  };
  if (success) {
    toast({
      title: "Notification",
      description: "Subunit Head created Successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: CREATE_SUBUNIT_RESET });
  }
  if (error) {
    toast({
      title: "Error",
      description: error,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: CREATE_SUBUNIT_RESET });
  }

  useEffect(() => {
    dispatch(fetchUsers());
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required={true}
              />
              <Input
                title="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
                type="email"
              />
              <Select
                title="user"
                value={head}
                onChange={(e) => setHead(e.target.value)}
                required={true}
                data={users}
                filter="fullname"
                filterValue="_id"
              />
              <Button
                title="Add Subunit"
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

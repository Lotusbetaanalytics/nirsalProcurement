import React, { useEffect } from "react";
import "./landingPage.css";
import MicrosoftLogin from "react-microsoft-login";
import { useNavigate } from "react-router-dom";
import { useToast, CircularProgress } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import { auth } from "../../redux/actions/authActions";
import { USER_AUTH_RESET } from "../../redux/constants/authConstants";

const Home = () => {
  // Helpers
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  //   Microsoft SSO
  const authHandler = (err, data, msal) => {
    if (err) {
      toast({
        title: "Error",
        description: err,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      sessionStorage.clear();
    }
    if (data) {
      const accessToken = data.accessToken;
      dispatch(auth(accessToken));
      sessionStorage.clear();
    }
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error, loading } = userLogin;

  // if token exist redirect to dashboard
  useEffect(() => {
    if (userInfo) {
      navigate("/app/dashboard");
    }
  }, [navigate, userInfo]);

  // if error login
  if (error) {
    toast({
      title: "Error",
      description: error,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: USER_AUTH_RESET });
  }
  return (
    <div className="landingPageContainer">
      <div className="landingLogo">
        <img src={logo} alt="logo" />
      </div>
      <div className="landingContent">
        <span>Welcome to</span>
        <h1>
          The Procurement <br />
          Portal
        </h1>
        {loading ? (
          <CircularProgress isIndeterminate color="#FFFFFF" />
        ) : (
          <MicrosoftLogin
            clientId="ee241df3-3ed6-424f-95cb-2b58de8f5e07"
            authCallback={authHandler}
          />
        )}
      </div>
    </div>
  );
};

export default Home;

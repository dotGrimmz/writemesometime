import React, { useState, useContext } from "react";
import LoginComponent from "../components/LoginComponent";
import WMSService from "../service/WMSService";
import { UserContext } from "../context/UserContext";

const LoginScreen = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const service = new WMSService();
  const { navigation } = props;
  const { setUserCredentials, userCredentials } = useContext(UserContext);
  const authenticateUser = async () => {
    let credentials = {
      userName,
      password,
    };
    try {
      await service.authenticateCredentials(credentials).then((response) => {
        response.data.createdAt
          ? navigation.reset({
              index: 0,
              routes: [{ name: "Home" }],
            })
          : alert(response.data.message);
        setUserCredentials(response.data);
      });
    } catch (err) {
      console.log("Error message:", err);
    }
  };
  console.log(userCredentials, "should be user obj");
  return (
    <LoginComponent
      password={password}
      userName={userName}
      setUserName={setUserName}
      setPassword={setPassword}
      authenticateUser={authenticateUser}
    />
  );
};

export default LoginScreen;

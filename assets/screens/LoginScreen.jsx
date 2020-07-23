import React, { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import WMSService from "../service/WMSService";

const LoginScreen = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const service = new WMSService();
  const { navigation, setUserCredentials } = props;
  console.log(props, "props in log in component ");
  const authenticateUser = async () => {
    let credentials = {
      userName,
      password,
    };
    try {
      await service.authenticateCredentials(credentials).then((response) => {
        response.createdAt
          ? navigation.reset({
              index: 0,
              routes: [{ name: "Home" }],
            })
          : alert(response.data.message);
        setUserCredentials({});
      });
    } catch (err) {
      console.log("Error message:", err);
    }
  };

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

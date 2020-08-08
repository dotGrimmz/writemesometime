import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import WMSService from "../service/WMSService";
import { UserContext } from "../context/UserContext";

const RegisterScreen = (props) => {
  const { navigation } = props;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastname] = useState("");
  const [failedClickCount, setFailedClickCount] = useState(0);
  const [passwordCheck, setPasswordCheck] = useState("");
  const [textValidation, setTextValidation] = useState(false);
  const [passwordNonIdentical, setPasswordNonIdentical] = useState(
    !textValidation
  );
  let service = new WMSService();
  const { setUserCredentials } = useContext(UserContext);

  const checkTextErros = (text) => {
    if (text.length > 3) {
      setTextValidation(true);
      resetCounter();
    } else {
      incrementOne();
      setTextValidation(false);
    }
  };

  const finalStep = () => {
    if (passwordCheck.length > 3) {
      setTextValidation(true);
      resetCounter();
      if (passwordsMatch()) {
        resetCounter();
        setPasswordNonIdentical(false);
      } else {
        incrementOne();
        setPasswordNonIdentical(true);
      }
    } else {
      setTextValidation(false);
      incrementOne();
    }
  };

  const incrementOne = () => {
    setFailedClickCount(failedClickCount + 1);
  };

  const resetCounter = () => {
    setFailedClickCount(0);
  };

  const createUser = async () => {
    finalStep();
    let stateObj = {
      userName,
      password,
      firstName,
      lastName,
    };

    try {
      service.createNewUser(stateObj).then((response) => {
        if (response.status === 200) {
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
          console.log(
            "this is the reponse after creating a new user",
            response
          );
          setUserCredentials(response.data);
        } else {
          alert(response.data.message);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const passwordsMatch = () => {
    return passwordCheck === password;
  };

  const progressStepsStyle = {
    activeStepIconBorderColor: "#686868",
    activeLabelColor: "#686868",
    activeStepNumColor: "#e9d4b7",
    activeStepIconColor: "#686868",
    completedStepIconColor: "#686868",
    completedProgressBarColor: "#686868",
    completedCheckColor: "#4bb543",
  };

  return (
    <View style={{ flex: 1 }}>
      <ProgressSteps {...progressStepsStyle}>
        <ProgressStep
          label="User Name"
          errors={!textValidation}
          onNext={() => checkTextErros(userName)}
        >
          <View style={{ alignItems: "center" }}>
            <TextInput
              style={styles.userNameInput}
              name="userName"
              onChangeText={(text) => setUserName(text)}
              value={userName}
            />
            {failedClickCount > 2 && (
              <Text style={styles.errorMessage}>
                Needs to be longer then 4 letters
              </Text>
            )}
          </View>
        </ProgressStep>
        <ProgressStep
          label="First Name"
          errors={!textValidation}
          onNext={() => checkTextErros(firstName)}
        >
          <View style={{ alignItems: "center" }}>
            <TextInput
              style={styles.userNameInput}
              name="firstName"
              onChangeText={(text) => setFirstName(text)}
              value={firstName}
            />
            {failedClickCount > 2 && (
              <Text style={styles.errorMessage}>
                Needs to be longer then 4 letters
              </Text>
            )}
          </View>
        </ProgressStep>
        <ProgressStep
          label="Last Name"
          errors={!textValidation}
          onNext={() => checkTextErros(lastName)}
        >
          <View style={{ alignItems: "center" }}>
            <TextInput
              style={styles.userNameInput}
              name="lastName"
              onChangeText={(text) => setlastname(text)}
              value={lastName}
            />
            {failedClickCount > 2 && (
              <Text style={styles.errorMessage}>
                Needs to be longer then 4 letters
              </Text>
            )}
          </View>
        </ProgressStep>
        <ProgressStep
          label="Password"
          onNext={() => checkTextErros(password)}
          errors={!textValidation}
        >
          <View style={{ alignItems: "center" }}>
            <TextInput
              secureTextEntry={true}
              password={true}
              style={styles.userNameInput}
              name="password"
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>
          {failedClickCount > 2 && (
            <Text style={styles.errorMessage}>
              Needs to be longer then 4 letters
            </Text>
          )}
        </ProgressStep>
        <ProgressStep
          label="Retype Password"
          onSubmit={createUser}
          errors={!textValidation}
        >
          <View style={{ alignItems: "center" }}>
            <TextInput
              secureTextEntry={true}
              password={true}
              style={styles.userNameInput}
              name="passwordCheck"
              onChangeText={(text) => setPasswordCheck(text)}
              value={passwordCheck}
            />
          </View>
          {passwordNonIdentical && failedClickCount > 2 && (
            <Text style={styles.errorMessage}>Passwords are NOT IDENTICAL</Text>
          )}
          {failedClickCount > 2 && (
            <Text style={styles.errorMessage}>
              Needs to be longer then 4 letters
            </Text>
          )}
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

const styles = StyleSheet.create({
  userNameInput: {
    height: 40,
    width: "80%",
    borderColor: "#e9d4b7",
    borderWidth: 3,
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
  },
});

export default RegisterScreen;

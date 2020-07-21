import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";

const LoginComponent = (props) => {
  const {
    userName,
    password,
    setPassword,
    setUserName,
    authenticateUser,
  } = props;
  return (
    <View styles={styles.background}>
      <View>
        <Text style={styles.lables}>User Name</Text>
        <TextInput
          style={styles.Input}
          onChangeText={(text) => setUserName(text)}
          value={userName}
        />
        <Text style={styles.lables}>Password</Text>
        <TextInput
          style={styles.Input}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <View style={styles.loginBtnContainer}>
        <Button
          style={styles.btn}
          disabled={userName.lengh === 0}
          title="log In"
          onPress={authenticateUser}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Input: {
    height: 40,
    width: "80%",
    borderColor: "#e9d4b7",
    borderWidth: 3,
    alignSelf: "center",
    top: "30%",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  loginBtnContainer: {
    paddingTop: "20%",
    marginTop: "20%",
    alignSelf: "center",
  },
  lables: {
    paddingLeft: "10%",
    top: "30%",
  },
  inputContainer: {
    paddingTop: "10%",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#e9d4b7",
  },
});

export default LoginComponent;

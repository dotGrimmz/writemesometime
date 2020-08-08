import React from "react";
import {
  Modal,
  StyleSheet,
  TextInput,
  Text,
  //   TouchableHighlight,
  View,
} from "react-native";
import { Button } from "react-native-elements";

const EditModal = (props) => {
  const { open, setOpen } = props;
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={false} visible={open}>
        <View style={styles.modalView}>
          <View style={styles.inputContainer}>
            <Text>User Name:</Text>
            <TextInput style={styles.textInput} />
          </View>
          <View style={styles.inputContainer}>
            <Text>First Name:</Text>
            <TextInput style={styles.textInput} />
          </View>
          <View style={styles.inputContainer}>
            <Text>Last Name: </Text>
            <TextInput style={styles.textInput} />
          </View>
          <View style={styles.btnContainer}>
            <Button
              style={styles.btn}
              title="Cancel"
              onPress={() => setOpen(false)}
            />
            <Button
              style={styles.btn}
              title="Submit"
              onPress={() => console.log("this is the submit btn")}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textInput: {
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    right: 2,
  },
  inputContainer: {
    flexDirection: "row",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#e9d4b7",
    alignSelf: "center",
    padding: 2,
    width: 100,
    height: 50,
  },
  btnContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
});
export default EditModal;

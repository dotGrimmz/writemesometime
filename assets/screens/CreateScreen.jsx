import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import CreatePostComponent from "../components/CreatePost/CreatePostComponent";
import { UserContext } from "../context/UserContext";
import WMSService from "../service/WMSService";

const service = new WMSService();

const CreateScreen = (props) => {
  const { navigation } = props;
  const [usersPost, setUsersPost] = useState("");

  const {
    userCredentials,
    setAvatarInitials,
    setUserLoggedInUserAvatarInitials,
    setPostSent,
    postSent,
  } = useContext(UserContext);

  const createUsersPost = () => {
    let message = {
      userName: userCredentials.userName,
      firstName: userCredentials.firstName,
      lastName: userCredentials.lastName,
      message: usersPost,
      liked: 0,
    };

    return message;
  };

  const submitPost = async () => {
    let userId = userCredentials._id;
    try {
      let response = await service.postUserMessage(createUsersPost(), userId);
      response.status === 200
        ? (setPostSent(!postSent), navigation.navigate("Home"))
        : alert("ERROR MESSAGE DID NOT SEND");
      console.log("post successful", response);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <View>
      <CreatePostComponent
        setAvatarInitials={setAvatarInitials}
        setUserLoggedInUserAvatarInitials={setUserLoggedInUserAvatarInitials}
        usersPost={usersPost}
        setUsersPost={setUsersPost}
        submitPost={submitPost}
      />
    </View>
  );
};

export default CreateScreen;

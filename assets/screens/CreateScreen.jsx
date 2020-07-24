import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import CreatePostComponent from "../components/CreatePost/CreatePostComponent";
import { UserContext } from "../context/UserContext";

const CreateScreen = (props) => {
  const {
    setUserCredentials,
    userCredentials,
    setAvatarInitials,
    setUserLoggedInUserAvatarInitials,
  } = useContext(UserContext);
  const [usersPost, setUsersPost] = useState("");

  const createUsersPost = () => {
    console.log("users credentials from create", userCredentials);
    let message = {};
  };
  createUsersPost();
  const submitPost = () => {};
  console.log("users post:", usersPost);
  return (
    <View>
      <Text>This is the create Screen</Text>
      <CreatePostComponent
        setAvatarInitials={setAvatarInitials}
        setUserLoggedInUserAvatarInitials={setUserLoggedInUserAvatarInitials}
        usersPost={usersPost}
        setUsersPost={setUsersPost}
      />
    </View>
  );
};

export default CreateScreen;

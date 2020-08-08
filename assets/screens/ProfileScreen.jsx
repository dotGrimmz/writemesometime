import React, { useContext } from "react";
import { View, Text } from "react-native";
import { UserContext } from "../context/UserContext";
import UserProfile from "../components/UserProfile/UserProfile";

const ProfileScreen = (props) => {
  const {
    setAvatarInitials,
    userCredentials,
    setUserLoggedInUserAvatarInitials,
    avatarInitials,
    handleDate,
    postSent,
  } = useContext(UserContext);

  return (
    <View>
      <UserProfile
        userCredentials={userCredentials}
        avatarInitials={avatarInitials}
        setAvatarInitials={setAvatarInitials}
        setUserLoggedInUserAvatarInitials={setUserLoggedInUserAvatarInitials}
      />
    </View>
  );
};

export default ProfileScreen;

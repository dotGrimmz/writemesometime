import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
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

  const styles = {
    userProfileCard: {
      paddingTop: 20,
      flex: 1,
      width: "auto",
    },
  };

  return (
    <Container style={styles.userProfileCard}>
      <UserProfile
        style={styles.userProfileCard}
        userCredentials={userCredentials}
        avatarInitials={avatarInitials}
        setAvatarInitials={setAvatarInitials}
        setUserLoggedInUserAvatarInitials={setUserLoggedInUserAvatarInitials}
      />
    </Container>
  );
};

export default ProfileScreen;

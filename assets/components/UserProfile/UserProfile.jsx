import React, { useState } from "react";
import { View } from "react-native";
import EditModal from "./EditModal";
import { Tooltip, Avatar, Text, Button, Card } from "react-native-elements";

const UserProfile = (props) => {
  const { userCredentials, setAvatarInitials } = props;
  const [open, setOpen] = useState(false);

  const styles = {
    cardStyles: {
      alignItems: "center",
      flexDirection: "column",
      alignSelf: "center",
      width: "50%",
      padding: 2,
    },

    btn: {
      flexDirection: "row",
      justifyContent: "space-between",
      color: "#e9d4b7",
      alignSelf: "center",
      padding: 2,
    },
    fullName: {
      alignSelf: "flex-end",
      padding: 1,
    },
  };
  return (
    <View>
      <Card containerStyle={styles.cardStyles}>
        <View>
          <Avatar
            rounded
            raised
            overlayContainerStyle={{ backgroundColor: "green" }}
            activeOpacity={0.7}
            title={setAvatarInitials(userCredentials.userName)}
          />
        </View>
        <View>
          <Text h1>{userCredentials.userName}</Text>
          <Text style={styles.fullName}>
            {userCredentials.lastName + " " + userCredentials.firstName}
          </Text>
          <Text>Total Likes .. feature to soon be implemented</Text>
        </View>
        <View>
          <Button
            style={styles.btn}
            title="Edit Profile"
            onPress={() => setOpen(true)}
          />
        </View>
      </Card>
      <EditModal open={open} setOpen={setOpen} />
    </View>
  );
};

export default UserProfile;

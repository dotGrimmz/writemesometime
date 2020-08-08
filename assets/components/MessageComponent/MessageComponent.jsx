import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Tooltip, Avatar, Icon } from "react-native-elements";

const MessageComponent = (props) => {
  const [userLike, setUserLike] = useState(false);

  const {
    firstName,
    LastName,
    message,
    liked,
    _id,
    userName,
    date,
    avatarInitials,
  } = props;
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        raised
        overlayContainerStyle={{ backgroundColor: "black" }}
        activeOpacity={0.7}
        title={avatarInitials}
      />
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.likeBtn}>
        <Icon
          name="thumb-up"
          reverse
          size={10}
          color="green"
          raised
          onPress={() => setUserLike(!userLike)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {},
  dateCreated: {
    alignSelf: "flex-end",
    flexDirection: "column",
  },
  message: {
    alignSelf: "baseline",
  },
  date: {
    fontSize: 8,
    fontStyle: "italic",
    alignSelf: "flex-end",
  },
  container: {
    width: "90%",
    flex: 1,
    flexWrap: "nowrap",
    backgroundColor: "#e9d4b7",
    borderRadius: 15,
    flexDirection: "row",
    borderWidth: 1,
    padding: 3,
    margin: 3,
    alignItems: "flex-start",
    alignSelf: "center",
  },
  likeBtn: {
    alignSelf: "center",
  },
  liked: {
    alignSelf: "flex-end",
  },
});

export default MessageComponent;

import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Tooltip, Avatar, Icon, Card } from "react-native-elements";

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
  avatar: {
    paddingRight: 5,
  },
  dateCreated: {
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  date: {
    fontSize: 8,
    fontStyle: "italic",
    alignSelf: "flex-end",
  },
  container: {
    height: "42%",
    width: "90%",
    flexWrap: "nowrap",
    marginTop: 5,
    backgroundColor: "#e9d4b7",
    borderRadius: 15,
    flexDirection: "column",
    borderWidth: 1,
    padding: 15,
    margin: 15,
    marginBottom: 0,
    alignItems: "flex-start",
  },
  likeBtn: {
    alignSelf: "center",
  },
});

export default MessageComponent;

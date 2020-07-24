import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";

const CreatePostComponent = (props) => {
  const { setUserLoggedInUserAvatarInitials, usersPost, setUsersPost } = props;
  const [lessThanFortyRemaining, setLessThanFortyRemaining] = useState(false);

  return (
    <View>
      <Avatar
        rounded
        raised
        overlayContainerStyle={{ backgroundColor: "brown" }}
        activeOpacity={0.7}
        title={setUserLoggedInUserAvatarInitials()}
      />
      <TextInput
        style={styles.input}
        nowrap="true"
        multiline={true}
        maxLength={140}
        placeholder="Write Me Sometimes..."
        value={usersPost}
        onChangeText={(text) => setUsersPost(text)}
      />
      {lessThanFortyRemaining && (
        <Text>
          Dont write too much .. you only have {userPost.length - 140} left
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
  },
  input: {
    width: "75%",
    alignSelf: "flex-start",
    borderColor: "transparent",
    borderWidth: 1,
    fontSize: 18,
    fontFamily: "Verdana-Italic",
  },
});

export default CreatePostComponent;

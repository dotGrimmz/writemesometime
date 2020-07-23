import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import WMSService from "../service/WMSService";

const service = new WMSService();

const PostsScreen = (props) => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetchUserPosts = async () => {
      let response = service.getAllUsersPosts(id);
    };
  });
  return (
    <View>
      <Text> This is the User Posts Scree </Text>
      <FlatList
        data={userPosts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <MessageComponent
            avatarInitials={setAvatarInitials(item.userName)}
            userName={item.userName}
            message={item.message}
            date={item.date}
            liked={item.liked}
            _id={item._id}
          />
        )}
      />
    </View>
  );
};

export default PostsScreen;

import React, { useState, useEffect, useContext } from "react";
import { View, Text, FlatList } from "react-native";
import WMSService from "../service/WMSService";
import MessageComponent from "../components/MessageComponent/MessageComponent";
import { UserContext } from "../context/UserContext";

const service = new WMSService();

const PostsScreen = (props) => {
  const [userPosts, setUserPosts] = useState([]);
  const { setAvatarInitials, userCredentials } = useContext(UserContext);

  useEffect(() => {
    const fetchUserPosts = async () => {
      let response = await service.getAllUsersPosts(userCredentials._id);
      setUserPosts(response.data);
    };
    fetchUserPosts();
  }, [service]);
  return (
    <View>
      <Text> This is the User Posts Screen</Text>
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

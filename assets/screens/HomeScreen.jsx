import React, { useState, useEffect, useContext } from "react";
import { Text, View, FlatList } from "react-native";
import MessageComponent from "../components/MessageComponent/MessageComponent";
import WMSService from "../service/WMSService";
import { UserContext } from "../context/UserContext";

let service = new WMSService();

const HomeScreen = (props) => {
  const [allPosts, setAllPosts] = useState([]);
  const { setAvatarInitials, handleDate, postSent } = useContext(UserContext);

  useEffect(() => {
    const fetchAllPosts = async () => {
      let response = await service.getAllPosts();
      setAllPosts(response.data);
    };
    fetchAllPosts();
  }, [service, postSent]);

  return (
    <View>
      <FlatList
        data={allPosts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <MessageComponent
            avatarInitials={setAvatarInitials(item.userName)}
            userName={item.userName}
            message={item.message}
            date={handleDate(item.createdAt)}
            liked={item.liked}
            _id={item._id}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;

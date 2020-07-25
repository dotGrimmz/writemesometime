import React, { useState, useEffect, useContext } from "react";
import { Text, View, FlatList } from "react-native";
import MessageComponent from "../components/MessageComponent/MessageComponent";
import WMSService from "../service/WMSService";
import { UserContext } from "../context/UserContext";
let service = new WMSService();

const HomeScreen = (props) => {
  const [allPosts, setAllPosts] = useState([]);
  const { setAvatarInitials, handleDate } = useContext(UserContext);

  useEffect(() => {
    const fetchAllPosts = async () => {
      let response = await service.getAllPosts();
      setAllPosts(response.data);
    };
    fetchAllPosts();
  }, [service]);

  return (
    <View>
      <Text> This is the HomeScreen</Text>
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

const mockData = [
  {
    firstName: "Rakeem",
    lastName: "Gordon",
    userName: "Grimmz",
    date: "7/20/2020",
    message:
      "This is my first post, maybe you should write me sometimes will be sorta cool when its deployed one day.. but this will be my first full stack app",
    liked: 1,
    _id: "1",
  },
  {
    firstName: "Angel",
    lastName: "McDay",
    userName: "Cloud Crafted",
    date: "2/20/2020",
    message:
      "This is my first post, maybe you should write me sometimes will be sorta cool when its deployed one day.. but this will be my first full stack app",
    liked: 2,
    _id: "2",
  },
  {
    firstName: "Joanna",
    lastName: "Annan ",
    userName: "JoJo",
    date: "2/20/2020",
    message: " herp a der",
    liked: 3,
    _id: "3",
  },
  {
    firstName: "Rakeem",
    lastName: "Gordon",
    userName: "Grimmz",
    date: "7/20/2020",
    message:
      "This is my first post, maybe you should write me sometimes will be sorta cool when its deployed one day.. but this will be my first full stack app",
    liked: 0,
    _id: "4",
  },
];

export default HomeScreen;

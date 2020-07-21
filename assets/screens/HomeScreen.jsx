import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";
import MessageComponent from "../components/MessageComponent/MessageComponent";

const mockData = [
  {
    firstName: "Rakeem",
    lastName: "Gordon",
    userName: "Grimmz",
    date: "7/20/2020",
    message:
      "This is my first post, maybe you should write me sometimes will be sorta cool when its deployed one day.. but this will be my first full stack app",
    liked: true,
    _id: "1",
  },
  {
    firstName: "Rakeem",
    lastName: "Gordon",
    userName: "Grimmz",
    date: "7/20/2020",
    message:
      "This is my first post, maybe you should write me sometimes will be sorta cool when its deployed one day.. but this will be my first full stack app",
    liked: true,
    _id: "1",
  },
  {
    firstName: "Rakeem",
    lastName: "Gordon",
    userName: "Grimmz",
    date: "7/20/2020",
    message:
      "This is my first post, maybe you should write me sometimes will be sorta cool when its deployed one day.. but this will be my first full stack app",
    liked: true,
    _id: "2",
  },
  {
    firstName: "Rakeem",
    lastName: "Gordon",
    userName: "Grimmz",
    date: "7/20/2020",
    message:
      "This is my first post, maybe you should write me sometimes will be sorta cool when its deployed one day.. but this will be my first full stack app",
    liked: true,
    _id: "3",
  },
];

const HomeScreen = (props) => {
  const setAvatarInitials = (str) => {
    let first = str.charAt(0) + str.charAt(str.length - 1).toUpperCase();
    return first;
  };
  return (
    <View>
      <Text> This is the HomeScreen</Text>
      <FlatList
        data={mockData}
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

export default HomeScreen;

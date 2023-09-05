import React, { useState } from "react";
import { FlatList } from "react-native";

import Screen from "../components/Screen";
// for android safeareaview

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: `Christelle Desire`,
    description: `Hey! is this item still available`,
    image: require("../assets/christy.jpeg"),
  },
  {
    id: 2,
    title: "Christelle Desire",
    description: "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/christy.jpeg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    //delete the message from the message

    setMessages(messages.filter((m) => m.id !== message.id));
    //call the server
  };

  return (
    //How to render List items in react native
    <Screen>
      <FlatList
        data={messages} //accepts an array of messages
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            image={item.image}
            description={item.description}
            onPress={() => console.log("Messages selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        // this is separtion for each item
        ItemSeparatorComponent={ListItemSeparator}
        //pull to refresh method
        refreshing={refreshing}
        //usually comes from the backend for now it's an ex on the client
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/christy.jpeg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

//All of this implementation is simplified in Screeen.js
// const styles = StyleSheet.create({
//   screen: {
//     // adding a padding top on android since safeAreaView isn't supported on android
//     // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     // another way of achieving this is to download npm i expo-constants
//     paddingTop: Constant.statusBarHeight,
//   },
// });

export default MessagesScreen;

import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "Flowers carry a lot of importance in our lives. In India, no worship of God is complete without some kind of flower. Devotees make a garland of flowers to dedicate it to God. In addition, we also use flowers for special occasions like weddings. The bride and groom wear garlands of flowers to signify their marriage. In addition, flowers smell so good that we use it in different places by planting them in our garden. This way, the beauty of our place enhances. Flowers carry importance in each nook and corner of the world. They also come in use for making medicines. Similarly, we also make difference in fragrance perfumes from the flowers. Further, the butterflies, birds and bees take the flowers as food.In many weddings, the bride carries a bouquet of flowers when she walks down the aisle. Thus, it is very symbolic in that sense. On special occasions of valentines and anniversary, we gift our partners’ beautiful flowers as a symbol of our love.Similarly, we send flowers for someone who is sick to brighten their day. We also send flowers as a token of condolence during funerals. Thus, we see they have so many uses in so many areas.",
    image: require("../assets/bg.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/bg.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/bg.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;

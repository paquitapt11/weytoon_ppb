import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

export default function Manga({ manga, onPress }) {
  return (
    <TouchableHighlight
      underlayColor="#fafafa"
      style={{ width: 160, margin: 5 }}
      onPress={onPress}
    >
      <View style={{ width: "100%" }}>
        <Image
          style={styles.thumbnail}
          source={{
            uri: manga.item.thumb,
          }}
        />
        <Text
          numberOfLines={3}
          style={{
            textAlign: "center",
          }}
        >
          {manga.item.title}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  thumbnail: {
    width: "100%",
    height: 200,
  },
});

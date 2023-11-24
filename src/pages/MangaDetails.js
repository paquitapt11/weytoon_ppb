import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

export default function MangaDetails({ route }) {
  const {
    mangaId,
    mangaDetails: { thumb, title, status, authors, summary, genres },
  } = route.params;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center", gap: 2 }}
    >
      <Image
        style={{ width: 180, height: 320 }}
        source={{
          uri: thumb,
        }}
      />
      <Text style={{ textAlign: "center", fontWeight: 500, fontSize: 18 }}>
        {title}
      </Text>
      <Text style={{ textAlign: "center" }}>Status: {status}</Text>
      <Text style={{ textAlign: "center" }}>Author: {authors.join(", ")}</Text>
      <Text style={{ textAlign: "center" }}>Genre: {genres.join(", ")}</Text>
      <Text style={{ textAlign: "center" }}>Summary: {summary}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    gap: 4,
  },
});

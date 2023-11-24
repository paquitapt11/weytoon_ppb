import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { fetchLatestManga } from "../services/MangaService";
import Manga from "../components/Manga";
import { dummyData } from "../dummyData";

export default function HomeScreen({ navigation }) {
  const [mangas, setMangas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLatestManga()
      .then((res) => {
        setMangas(res.data?.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  if (mangas === undefined) {
    return (
      <View style={styles.container}>
        <Text>Cannot retrieve manga</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={mangas}
        numColumns={2}
        renderItem={(manga) => {
          return (
            <Manga
              manga={manga}
              onPress={() => {
                navigation.navigate("Manga Details", {
                  mangaId: manga.item.id,
                  mangaDetails: manga.item,
                });
              }}
            />
          );
        }}
        keyExtractor={(manga) => manga.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

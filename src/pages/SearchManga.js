import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { searchManga } from "../services/MangaService";
import Manga from "../components/Manga";

function SearchManga({ navigation }) {
  const [text, onChangeText] = useState("");
  const [mangas, setMangas] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (text === "") {
      return;
    }

    const timeoutId = setTimeout(() => {
      searchManga(text)
        .then((res) => {
          setMangas(res.data?.data);
        })
        .catch((err) => {
          setError(err);
        });
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search Manga"
      />
      {mangas?.length > 0 && (
        <FlatList
          data={mangas}
          numColumns={2}
          renderItem={(manga) => (
            <Manga
              manga={manga}
              onPress={() =>
                navigation.navigate("Manga Details", {
                  mangaId: manga.item.id,
                  mangaDetails: manga.item,
                })
              }
            />
          )}
          keyExtractor={(manga) => manga.id}
        />
      )}
      {mangas?.length === 0 && <Text>No manga found</Text>}
      {error && <Text>{error}</Text>}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "92%",
  },
});

export default SearchManga;

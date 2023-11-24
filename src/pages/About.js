import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text>Halo, 👋</Text>
      <Text>Selamat datang di Weytoon.</Text>
      <Text style={{ textAlign: "center" }}>
        Weytoon menyediakan list Manga dan Manhwa terbaru yang populer dan seru.
        Anda juga bisa mencari Manga dan Manhwa favorit Anda di Weytoon.
      </Text>
      <Text style={{ textAlign: "center", marginTop: 48 }}>Dibuat oleh:</Text>
      <Text style={{ textAlign: "center" }}>Paquita Putri Ababil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

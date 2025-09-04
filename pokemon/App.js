import React, { useRef, useState } from "react";
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
} from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
} from "react-native-safe-area-context";

const App = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");

  const changeDrawerPosition = () => {
    setDrawerPosition(drawerPosition === "left" ? "right" : "left");
  };

  // Conteúdo do menu lateral
  const navigationView = () => (
    <SafeAreaView style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.title}>📌 Menu Lateral</Text>

      <Button
        title="Fechar Drawer"
        onPress={() => drawer.current.closeDrawer()}
      />

      <View style={styles.divider} />

      <Button title="Home" onPress={() => alert("Ir para Home")} />
      <Button title="Buscar" onPress={() => alert("Ir para Buscar")} />
      <Button title="Perfil" onPress={() => alert("Ir para Perfil")} />
    </SafeAreaView>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  navigationContainer: {
    backgroundColor: "#f1f5f9",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
  buttonGroup: {
    marginVertical: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 12,
  },
});

export default App;

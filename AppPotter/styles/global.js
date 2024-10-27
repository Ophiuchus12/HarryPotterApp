import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    paddingTop: 20,
    paddingHorizontal: 20, // Marges latérales
    flex: 1,
  },

  container2: {
    backgroundColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    paddingTop: 20,
    paddingHorizontal: 20, // Marges latérales
    flex: 1,
  },

  item: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // Ajout d'ombre pour un effet de carte
    width: "100%", // Prend toute la largeur
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333", // Couleur foncée pour le nom
  },
});

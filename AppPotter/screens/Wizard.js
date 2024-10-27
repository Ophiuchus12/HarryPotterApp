import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useState, useEffect } from "react";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";
var { width, height } = Dimensions.get("window");

export default function wizard() {
  const [listStudent, setListStudent] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    try {
      getStudent();
    } catch (error) {
      console.log(error);
    }
  };

  const getStudent = async () => {
    fetch(`https://hp-api.herokuapp.com/api/characters`)
      .then((response) => response.json())
      .then((student) => {
        setListStudent(student);
      })
      .catch((error) => {
        console.error("Erreur", error);
      });
  };

  const image = (path) =>
    path ? `../assets/icon-${path}.png` : "../asset/incon-no_house.png";

  return (
    <View style={globalStyles.container2}>
      <Text> Students :</Text>
      <ScrollView>
        {listStudent.length > 0 ? (
          listStudent.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate("WizardDetails", item)}
              style={[
                globalStyles.item,
                { flexDirection: "row", alignItems: "center" },
              ]}
            >
              <Image
                source={{
                  source: image(item.house),
                }}
                style={{ width: 50, height: 50, marginRight: 10 }}
              />
              <Text style={globalStyles.name}>{item.name}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text>Aucun etudiant trouvé</Text>
        )}
      </ScrollView>
    </View>
  );
}

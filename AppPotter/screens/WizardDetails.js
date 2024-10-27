import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { globalStyles } from "../styles/global";

export default function wizardDetails({}) {
  const { params: item } = useRoute();
  console.log(item.image);
  const image = { uri: item.image };
  return (
    <View style={globalStyles.container2}>
      {/* Nom de la brasserie */}
      <Text style={globalStyles.header}>{item.name}</Text>

      {/* Informations de la brasserie */}
      <View>
        <Image
          source={{
            image,
          }}
        />
        <Text style={globalStyles.label}>alternate names :</Text>
        <Text style={globalStyles.info}>
          {item.alternate_names ? item.alternate_names : "aucun nom"}
        </Text>

        <Text style={globalStyles.label}>date Of Birth:</Text>
        <Text style={globalStyles.info}>{item.dateOfBirth}</Text>

        <Text style={globalStyles.label}>house:</Text>
        <Text style={globalStyles.info}>{item.house}</Text>

        <Text style={globalStyles.label}>actor:</Text>
        <Text style={globalStyles.info}>{item.actor}</Text>
      </View>
    </View>
  );
}

import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HousesScreen from "../screens/Houses";
import spellsScreen from "../screens/Spells";
import wizardScreen from "../screens/Wizard";
import wizardDetailsScreen from "../screens/WizardDetails";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {/* Écrans principaux */}
      <Stack.Screen
        name="Houses"
        component={HousesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Spells"
        component={spellsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Wizard"
        component={wizardScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="WizardDetails" component={wizardDetailsScreen} />
    </Stack.Navigator>
  );
}

export default function appNavigations() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HousesTab"
          component={MainStackNavigator}
          options={{
            tabBarLabel: "Houses",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="castle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Wizard"
          component={wizardScreen}
          options={{
            tabBarLabel: "Wizards",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="wizard-hat"
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Spells"
          component={spellsScreen}
          options={{
            tabBarLabel: "Spells",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="magic-staff"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

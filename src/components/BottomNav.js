import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../pages/HomeScreen";
import About from "../pages/About";
import SearchManga from "../pages/SearchManga";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MangaDetails from "../pages/MangaDetails";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Latest Manga" component={HomeScreen} />
      <HomeStack.Screen name="Manga Details" component={MangaDetails} />
    </HomeStack.Navigator>
  );
}

const SearchStack = createNativeStackNavigator();

function SearchStackScreen() {
  return (
    <HomeStack.Navigator>
      <SearchStack.Screen name="Search Manga" component={SearchManga} />
      <SearchStack.Screen name="Manga Details" component={MangaDetails} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-search"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

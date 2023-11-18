import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconButton, MD3Colors } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Stats from "./Screens/Stats";
import TomoFit from "./Screens/Home";
import Store from "./Screens/Store";
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Home"

      screenOptions={
        ({ route }) => ({
          tabBarStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            elevation: 0,
            height: 150,
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            fontSize: 0,
          },
          tabBarInactiveTintColor: "white",
          tabBarActiveTintColor: "#213c96",

        })
      }
    >
      <Tab.Screen
        name="TomoFit"
        component={TomoFit}
        options={{
          tabBarButton: () => null,
          tabBarLabel: "Home",
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-list" color={color} size={30} />
          ),
          // headerTransparent: true,
          // headerTitle: false,
          headerTitleStyle: {
            fontSize: 27,
            color: "white"
          },
          headerTitleAlign: "center",
          headerLeftContainerStyle: {
            height: 80,
            width: 80,
            left: 0,
            top: -15
          },
          headerRightContainerStyle: {
            height: 80,
            width: 80, 
            right: 0,
            top: -15,
          },
          headerLeft: () => (
            <MaterialCommunityIcons 
              name="storefront" 
              size={50} 
              margin={10}
              onPress={() => navigation.navigate('Store')}
              color={"white"}
              />
          ),
          headerRight: () => (
            <MaterialCommunityIcons 
              name="chart-box" 
              size={50} 
              margin={10}
              //onPress={() => console.log("ACCOUNT SETTING")}
              onPress={() => navigation.navigate('Stats')}
              color={"white"}
              />
          ),
          headerStyle: {
            backgroundColor: "black",
          }
        }}
      />

    
      <Tab.Screen
        name={"Store"}
        component={Store}
        options={{
          tabBarStyle: { display: "none" },
          tabBarLabel: "Log",
          tabBarLabelStyle: {
            opacity: 0,
          }, 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="storefront" color={color} size={50} />
          ),
          headerRight: () => (
            <MaterialCommunityIcons 
              name="chevron-triple-right" 
              size={40} 
              marginRight={20}
              onPress={() => navigation.navigate('TomoFit')}
              color={"white"}
              />
          ),
          headerTitleStyle: {
            fontSize: 27,
            color: "white"
          },
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "black",
          }
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarStyle: { display: "none" },
          tabBarLabel: "Add",
          tabBarLabelStyle: {
            opacity: 0,
          }, 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-box" color={color} size={50} />
          ),
          headerLeft: () => (
            <MaterialCommunityIcons 
              name="chevron-triple-left" 
              size={40} 
              marginLeft={20}
              onPress={() => navigation.navigate('TomoFit')}
              color={"white"}
              />
          ),
          headerTitleStyle: {
            fontSize: 27,
            color: "white"
          },
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "black",
          }
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

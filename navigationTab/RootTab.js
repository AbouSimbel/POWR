import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "../stacks/HomeStack";
import SessionsStackScreen from "./TrainingTab";
import LiveCoachingStackScreen from "../stacks/LiveCoachingStack";
import ProfilStackScreen from "../stacks/ProfileStack";
import Ionicons from "@expo/vector-icons/Ionicons";
import TrainingTab from "./TrainingTab";
import { View, Text } from "react-native";
import TabHeader from "../components/common/TabHeader";

export default function RootTab() {

    const Tab = createBottomTabNavigator();

    return(
      <Tab.Navigator

      options={{
        title: "123"
      }}
      screenOptions={
          ({ route }) => ({
      
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
  
            if(route.name === 'Séances libres') {
              iconName = focused ? 'football' : 'football-outline'
            } else if(route.name === 'Live Coaching') {
              iconName = focused ? 'videocam' : 'videocam-outline'
            } else if(route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          }   
          
        })}>
          
            <Tab.Screen 
              name="Séances libres" 
              component={TrainingTab}
              options={{
                headerStyle: {backgroundColor: 'white'},
                header: () => <TabHeader/>
              }}
              />
            <Tab.Screen name="Live Coaching" component={LiveCoachingStackScreen}/>
            <Tab.Screen name="Profile" component={ProfilStackScreen}/>

        </Tab.Navigator>
  );
};

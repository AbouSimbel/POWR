import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TrainingTab from "./navigationTab/TrainingTab";
import AuthStackScreen from "./stacks/AuthStack";
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import RootTab from "./navigationTab/RootTab";
import SessionStack from './stacks/SessionStack';
import ChallengeStack from "./stacks/ChallengeStack";

const auth = getAuth();
const Stack = createNativeStackNavigator();

export default function App() {

  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, user => {
    setUser(user);
  });

  return (
    <NavigationContainer>

      {!user ? (
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen name="Auth" component={AuthStackScreen}/>
        </Stack.Navigator>

       ) : (

          <Stack.Navigator
          options={{headerShown: false}}
          screenOptions={{
            headerShown: false
          }}>

            <Stack.Screen
              options={{headerShown: false}}
              screenOptions={{
                headerShown: false
              }}
              name="Root"
              component={RootTab}
              />
          
            <Stack.Screen options={{headerShown: false}} name="Session" component={SessionStack}/>

            <Stack.Screen options={{headerShown: false}} name="Challenge" component={ChallengeStack}/>

          </Stack.Navigator>
        )
    }
    </NavigationContainer>
  );
}

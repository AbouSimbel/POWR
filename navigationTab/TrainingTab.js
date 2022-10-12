import Sessions from "../screens/sessions/Sessions";
import SessionsHome from "../screens/sessions/SessionsHome";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SessionsStackScreen from "../stacks/SessionsStack";
import ChallengesStackScreen from "../stacks/ChallengesStack";

const Tab = createMaterialTopTabNavigator();

export default function TrainingTab() {
    return(
        <Tab.Navigator
            options={{headerShown: false}}
            screenOptions={{
                tabBarLabelStyle: { fontSize: 9 },
                tabBarStyle: { height: 40 },
                swipeEnabled: false
            }}
            >

            <Tab.Screen name="Les séances" component={SessionsHome}/>
            <Tab.Screen name="Les dribbles" component={ChallengesStackScreen}/>
            <Tab.Screen listeners={{tabPress: e => e.preventDefault()}} name=" " component={ChallengesStackScreen}/>
            <Tab.Screen listeners={{tabPress: e => e.preventDefault()}} name="  " component={ChallengesStackScreen}/>
        </Tab.Navigator>
    )
};

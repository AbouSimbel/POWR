import Sessions from "../screens/sessions/Sessions";
import SessionDetails from "../screens/sessions/SessionDetails";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SessionsStackScreen from "../stacks/SessionsStack";
import ChallengesStackScreen from "../stacks/ChallengesStack";

const Tab = createMaterialTopTabNavigator();

export default function TrainingTab() {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 10 },
                tabBarStyle: { height: 40 },
                headerShown: true
            }}>
            <Tab.Screen name="MA PREPA" component={SessionDetails}/>
            <Tab.Screen name="CHALLENGES" component={ChallengesStackScreen}/>
            <Tab.Screen name="SEANCES LIBRES" component={SessionsStackScreen}/>
        </Tab.Navigator>
    )
};

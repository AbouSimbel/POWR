import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LiveCoachingMain from "../screens/liveCoaching/LiveCoachingMain";

const LiveCoachingStack = createNativeStackNavigator();

export default function LiveCoachingStackScreen() {
    return(
        <LiveCoachingStack.Navigator>
            <LiveCoachingStack.Screen name="LiveCoachingMain" component={LiveCoachingMain}/>
        </LiveCoachingStack.Navigator>
    )
}
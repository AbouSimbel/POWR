import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SessionMain from "../screens/session/Session";
import Preparation from "../screens/session/Preparation";
import Congratulations from "../screens/session/Congratulations";

const SessionStack = createNativeStackNavigator();

export default function SessionStackScreen() {
    return(
        <SessionStack.Navigator>
            <SessionStack.Screen options={{headerShown: false}} name="Preparation" component={Preparation}/>
            <SessionStack.Screen options={{headerShown: false}} name="SessionMain" component={SessionMain}/>
            <SessionStack.Screen options={{headerShown: false}} name="Congratulations" component={Congratulations}/>
        </SessionStack.Navigator>
    )
};

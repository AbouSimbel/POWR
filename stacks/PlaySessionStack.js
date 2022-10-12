import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlaySessionMain from "../screens/session/PlaySessionMain";

const SessionStack = createNativeStackNavigator();

export default function PlaySessionStackScreen() {
    return(
        <SessionStack.Navigator>
            <SessionStack.Screen options={{headerShown: false}} name="PlaySessionMain" component={PlaySessionMain}/>
        </SessionStack.Navigator>
    )
};

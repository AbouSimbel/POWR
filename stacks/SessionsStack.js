import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sessions from '../screens/sessions/Sessions';



const SessionsStack = createNativeStackNavigator();

export default function SessionsStackScreen() {
    return(
        <SessionsStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            >
            <SessionsStack.Screen name="Sessions" component={Sessions}/>
        </SessionsStack.Navigator>
    )
};


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";

const AuthStack = createNativeStackNavigator();

export default function AuthStackScreen() {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen options={{headerShown: false}} name="Login" component={Login}/>
            <AuthStack.Screen options={{headerShown: false}} name="SignUp" component={SignUp}/>
        </AuthStack.Navigator>
    )
};
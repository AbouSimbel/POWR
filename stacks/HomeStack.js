import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeMain from "../screens/home/HomeMain";


const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
    return(
        <HomeStack.Navigator
            screenOptions={{headerShown: false}}
            >
            <HomeStack.Screen name="HomeMain" component={HomeMain}/>
        </HomeStack.Navigator>
    )
};

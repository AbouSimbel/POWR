import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Challenge from "../screens/challenge/Challenge";

const ChallengeStack = createNativeStackNavigator();

export default function ChallengeStackScreen() {
    return(
        <ChallengeStack.Navigator>
            <ChallengeStack.Screen options={{headerShown: false}} name="ChallengeMain" component={Challenge}/>
        </ChallengeStack.Navigator>
    )
};

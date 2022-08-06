import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChallengesMain from '../screens/challenges/ChallengesMain';
import ChallengeDetails from "../screens/challenges/ChallengeDetails";




const ChallengesStack = createNativeStackNavigator();

export default function ChallengesStackScreen() {
    return(
        <ChallengesStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            >
            <ChallengesStack.Screen name="ChallengesMain" component={ChallengesMain}/>
            <ChallengesStack.Screen name="ChallengeDetails" component={ChallengeDetails}/>
        </ChallengesStack.Navigator>
    )
};

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilMain from "../screens/profil/ProfilMain";


const ProfilStack = createNativeStackNavigator();

export default function ProfilStackScreen() {
    return(
        <ProfilStack.Navigator>
            <ProfilStack.Screen name="ProfilMain" component={ProfilMain}/>
        </ProfilStack.Navigator>
    )
};
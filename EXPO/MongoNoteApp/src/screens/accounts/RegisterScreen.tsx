import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

export default function RegisterScreen() {
    const route = useRoute();
    const navigation = useNavigation();

    return (
        <View>
            <Text>
                Welcome to the Entry Screen! This is the first screen of the app.
            </Text>

            <View>

            </View>
        </View>
    )
}


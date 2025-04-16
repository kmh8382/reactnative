import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MySafeAreaView() {
    return(
        <SafeAreaView>
            <View>
                <Text>Hello World</Text>
            </View>
        </SafeAreaView>
    );
}
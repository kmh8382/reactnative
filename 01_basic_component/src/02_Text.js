import { Text, View } from "react-native";

export default function MyText() {
    return (
        <View>
            <Text style={{ fontSize: 32, fontWeight: 'w900', }}>Hello world</Text>
            <Text>Nice <Text style={{ color: 'gray', }}>to meet</Text> you</Text>
        </View>        
    );
}
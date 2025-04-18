import { Button, Text, View } from "react-native";

export default function AboutScreen( { navigation } ) {
    return(
        <View>
            <Text>AboutScreen</Text>

            <Button
                title="Home"
                onPress={() => navigation.navigate("home")}
            />            
            <Button
                title="Profile"
                onPress={() => navigation.navigate("profile")}
            />
        </View>
    );
}
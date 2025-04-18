import { Button, Text, View } from "react-native";

export default function ProfileScreen( { navigation } ) {
    return(
        <View>
            <Text>ProfileScreen</Text>

            <Button
                title="Home"
                onPress={() => navigation.navigate("home")}
            />            
            <Button
                title="About"
                onPress={() => navigation.navigate("about")}
            />
        </View>
    );
}
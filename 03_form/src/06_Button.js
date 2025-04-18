import { View, Alert, Button } from "react-native";

export default function MyButton() {
    return(
        <View>
            <Button
                title='Press me'
                onPress={() => Alert.alert('Pressed!')}
            />
        </View>
    );
}
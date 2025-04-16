import { View } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";

export default function MyIcon() {
    return(
        <View>
            <Icon name="home" size={32} color="#F00" />
            <Icon name="heart" size={32} color="#F00" />
        </View>
    );
}
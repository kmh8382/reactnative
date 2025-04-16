import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";

export default function MyTouchableOpacity() {
    return(
        <TouchableOpacity
            style={styles.Button}
            onPress={() => { Alert.alert('msggg..') }}
            activeOpacity={0.5}>    {/* 터치 시 투명도 조정 (디폴트 0.2) */}
            <Text style={styles.Text}>Button</Text>
            <Icon name="home" size={32} color='white' />
            <Icon name="heart" size={32} color="#F00" />
        </TouchableOpacity>
    );
    
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor: 'green',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center'
    },
    Text: {
        color: 'white',
        fontWeight: 'bold',
    },
})
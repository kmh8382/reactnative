import { View } from "react-native";

export default function MyView() {
    return (
        <View style={ {flex: 1, backgroundColor: 'gray', } }>
            <View style={ {width:100, height:100, backgroundColor: 'green', } } />
            <View style={ {width:100, height:100, backgroundColor: 'yellow', } } />
        </View>
    );
}
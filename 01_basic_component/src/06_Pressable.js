import { Alert, Pressable, Text } from "react-native";

export default function MyPressable() {
    return(
        // 1. style 속성에서 pressed 상태 값 사용하기   
        <Pressable
            onPress={() => { Alert.alert('pressed!!') }}
            style={ ( { pressed } ) => {
                backgroundColor: pressed ? 'black' : 'white'
                // return [ { backgroundColor: pressed ? 'black' : 'white' } ]
            } }>

            {/* 2. children(자식 컴포넌트) 에서 pressed 상태 값 사용하기     */}
            {
                ( { pressed } ) => {
                    return(
                        <Text style={{ backgroundColor: pressed ? 'white' : 'black' }}>
                            { pressed ? 'pressed' : 'press' }
                        </Text>
                    );
                }
            }
        </Pressable>
    );
}
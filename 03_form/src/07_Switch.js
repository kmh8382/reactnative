import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function MySwitch() {

    const [ isDark, setIsDark ] = useState(false);

    // 상태 isDark 에 따른 스타일 설정
    const backgroundColor = isDark ? '#222' : '#eee';
    const textColor = isDark ? '#eee' : '#222';

    return(
        <View style={[styles.background, { backgroundColor }]}>
            <Text style={[styles.text, { color: textColor }]}>
                {isDark ? 'Dark Mode' : 'Light Mode'}
            </Text>
            <Switch
                value={isDark}
                onValueChange={() => setIsDark(!isDark)}
                trackColor={isDark ? '#eee' : '#222'}   // 스위치 배경색
                thumbColor={isDark ? '#eee' : '#222'}   // 버튼(썸) 색
            />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        // flex: 1
        // justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold'
    }
})
import { useRef, useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

export default function Form() {

    const [ user, setUser] = useState({
        id: '',
        pw: '',
    });

    const idInputRef = useRef(null);  // 아이디 TextInput의 ref 생성

    const onChangeHandler = (key, value) => {
        setUser({
            ...user,
            [key]: value,
        })
    }

    const onPressHandler = () => {
        // 입력 검증 및 로그인 요청
        Alert.alert(`아이디: ${user.id}, 비밀번호: ${user.pw}`);
        setUser({
            id: '',
            pw: '',
        })

        // 커서 아이디 input으로 이동
        idInputRef.current.focus();
    }

    return(
        <View>
            <TextInput
                ref={idInputRef} // ref 연결
                style={styles.input}
                placeholder="아이디"
                value={user.id}
                onChangeText={(inputId) => onChangeHandler("id", inputId)}
            />
            <TextInput
                style={styles.input}
                placeholder="비밀번호"
                value={user.pw}
                onChangeText={(inputPw) => onChangeHandler("pw", inputPw)}
                secureTextEntry={true}  // 비밀번호 입력 활성화
            />
            <Button
                title="로그인"
                onPress={onPressHandler}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  input: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 5,
  }
})

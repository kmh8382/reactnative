import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyTextInput from './src/01_TextInput';
import CustomCheckbox from './src/02_Checkbox';
import MyKeyboardAvoidingView from './src/03_KeyboardAvoidingView';
import RadioButtonLibrary from './src/04_RadioButtonLibrary';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <MyTextInput/> */}
      {/* <CustomCheckbox/> */}
      {/* <MyKeyboardAvoidingView/> */}
      <RadioButtonLibrary/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MySafeAreaView from './src/02_SafeAreaView/MySafeAreaView';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />      
      <MySafeAreaView />
    </SafeAreaProvider>
  );
}

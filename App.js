import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Formulario from './src/exemplos/formulario/Index';
//import Conversor from './src/exemplos/conversor/Index'

export default function App() {
  return (
    <Formulario />
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

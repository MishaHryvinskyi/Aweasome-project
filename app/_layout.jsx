import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import { styles } from './styles';
import CustomButton from './CustomButton';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      <Text style={styles.text}>Запустив =)</Text>
      <StatusBar style="auto" />

      <CustomButton title="Натисни мене"
        onPress={() => {
          console.log('Clicked button')
        }}
        color='green'
      ></CustomButton>

<CustomButton title="Ще кнопка"
        onPress={() => {
          console.log('Clicked button2')
        }}
        color='blue'
      ></CustomButton>
    </View>

    </SafeAreaView>
    
  );
}

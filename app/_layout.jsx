import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView } from 'react-native';
import { styles } from './styles';

import MyFlatList from './CustomButton';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <MyFlatList />
      </View>
    </SafeAreaView>
    
  );
}

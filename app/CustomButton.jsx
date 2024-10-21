import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";


const Index = ({ title, onPress, color }) => {
    return (
        <View style={styles.container}>
        <TouchableOpacity 
        style={[styles.button, { backgroundColor: color }]} 
        onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
        </View>
    )
};

export default Index;
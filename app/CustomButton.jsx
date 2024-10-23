import { Text, FlatList, View } from "react-native";

import { styles } from "./styles";

const data = [
    { id: '1', title: 'ELEM 1' },
    { id: '2', title: 'ELEM 2' },
    { id: '3', title: 'ELEM 3' },
    { id: '4', title: 'ELEM 4' },
  ]

const Item = ({ title }) => {
    return (
       <View
        style={styles.item}
       >
        <Text style={styles.title}>{title}</Text>
       </View>
    )
};

const MyFlatList = () => {
    return(
        <FlatList
            data={data}
            renderItem={({ item }) => <Item title={item.title}/>}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator}/>}
        ></FlatList>
    )
}

export default MyFlatList;
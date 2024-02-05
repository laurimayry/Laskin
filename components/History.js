import { StatusBar } from 'expo-status-bar';
import {Text, View, FlatList, } from 'react-native';
import {StyleSheet} from 'react-native';


export default function History( {route} ){

    const {data} = route.params;

    return(
        <>
        <View style={styles.HistoryContainer}>
        <Text>History</Text>
        <FlatList data={data} renderItem={({item}) => <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()} />
        </View> 
        <StatusBar style="auto" />
       
        </>

      
    )
}

const styles = StyleSheet.create({
    HistoryContainer: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });


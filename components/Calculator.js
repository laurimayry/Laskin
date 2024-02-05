import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';


export default function Calculator( { navigation }) {

  const [firstInput, setFirstInput] = useState(null)
  const [secondInput, setSecondInput] = useState(null)
  const [result, setResult] = useState(null)

  const [data, setData] = useState([])

  const handlePlus = () => {
    const sum = parseFloat(firstInput) + parseFloat(secondInput);
    const resultValue = sum.toString();
    const equation = `${firstInput} + ${secondInput} = ${resultValue}`;
    setResult(resultValue)
    setData((prevData) => [...prevData, { key: equation }]);
    console.log(data)
  };

  const handleMinus = () => {
    const difference = parseFloat(firstInput) - parseFloat(secondInput);
    const resultValue = difference.toString();
    const equation = `${firstInput} - ${secondInput} = ${resultValue}`;
    setResult(resultValue);
    setData((prevData) => [...prevData, { key: equation }]);
    console.log(data)

  };

  return (
    <>
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
        style={{width: 200, borderColor: 'black', borderWidth:1}}
        onChangeText={firstInput => setFirstInput(firstInput)} value={firstInput}
        keyboardType='numeric'
      />
      <TextInput
        style={{width: 200, borderColor: 'black', borderWidth:1}}
        onChangeText={secondInput => setSecondInput(secondInput)} value={secondInput}
        keyboardType='numeric'
      />

    <View style={{display: 'flex', flexDirection: 'row', gap: 10, marginTop: 10, justifyContent: 'center', width: 200}}>
      <Button title='+' onPress={handlePlus} style={{flex: 2}}/>
      <Button title='-' onPress={handleMinus} style={{flex: 1}}/>
      <Button title='HISTORY' onPress={() => navigation.navigate('History', {data})} style={{flex: 1}}/>
      
    </View>

    </View>
      <StatusBar style="auto" />
  </>
    
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

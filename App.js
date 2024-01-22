import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {


  const [firstInput, setFirstInput] = useState(null)
  const [secondInput, setSecondInput] = useState(null)
  const [result, setResult] = useState(null)

  const handlePlus = () => {
    const sum = parseFloat(firstInput) + parseFloat(secondInput);
    setResult(sum.toString());
  };

  const handleMinus = () => {
    const difference = parseFloat(firstInput) - parseFloat(secondInput);
    setResult(difference.toString());
  };

  return (
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

    <View style={{display: 'flex', flexDirection: 'row', gap: 20, marginTop: 10, justifyContent: 'center', width: 200}}>
    <Button title='+' onPress={handlePlus} style={{flex: 2}}/>
    <Button title='-' onPress={handleMinus} style={{flex: 1}}/>
    </View>

      <StatusBar style="auto" />
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

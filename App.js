import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';


export default function App() {

  const [Numero, setNumero] = useState(0);

  return (
    <View style={styles.container}>
      <Text>
       Numero = {Numero}
      </Text>

      <Button 
      title= "Incrementar"
      onPress={() => setNumero(Numero + 1)}
      />
      <br/>
      <Button 
      title= "Restar"
      onPress={() => setNumero(Numero - 1)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'A96CD5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

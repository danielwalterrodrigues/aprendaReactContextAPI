import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContextTotal from './Context';
import Filho1 from './Fliho1';
import Filho2 from './Filho2';

export default function App() {
  const [total, setTotal] = useState(0);
  
  return (
    <ContextTotal.Provider value={[total, setTotal]}>
      <View style={styles.container}>
        <Text>Valor no App.js: {total}</Text>
        <View style={{flexDirection: 'column'}}>
          <Filho1 />
          <Filho2 />
        </View>
      </View>
    </ContextTotal.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

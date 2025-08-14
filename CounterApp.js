import React, { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function CounterApp() {
  const [count, setCount] = useState(0);
  
  return (
    <View style={styles.container}>
      <Textstyle={styles.title}>Counter App</Text>
      <Textstyle={styles.counter}>{count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)}></Button>
      <Button title="Decrease" onPress={() => setCount(count - 1)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  counter: {
    fontSize: 20,
    marginBottom: 20,
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import JobsNavigaor from './Navigation/JobsNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <JobsNavigaor></JobsNavigaor>
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

import * as React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

import { Text } from '../components/Themed';
import {
  TextInput
} from "react-native-paper";


export default function TabOneScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
       <ScrollView
        contentContainerStyle={styles.scrollViewContentContainerStyle}
        keyboardShouldPersistTaps="handled"
       >
          <TextInput label="Text1" placeholder="Text1" style={styles.textInput} mode="outlined"/>
          <TouchableOpacity onPress={()=>navigation()?.navigate("Root2", {screen: "TabTwo"})}><Text>Tab Two</Text></TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollViewContentContainerStyle: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: "yellow"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  textInput: {
    height: 50,
    width: 150,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "white",
  }
});

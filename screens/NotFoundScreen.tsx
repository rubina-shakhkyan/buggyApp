import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import {
  TextInput
} from "react-native-paper";

import { RootStackParamList } from '../types';

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList>) {
  return (
    <SafeAreaView style={styles.container}>
       <ScrollView
        contentContainerStyle={styles.scrollViewContentContainerStyle}
        keyboardShouldPersistTaps="handled"
       >
        <Text>First screen</Text>
        <TextInput label="Text" placeholder="Text" style={styles.textInput} mode="outlined" />
        <TouchableOpacity onPress={()=>navigation.navigate("Root2", undefined)}><Text>Tab2</Text></TouchableOpacity>
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
    backgroundColor: "yellow",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  textInput: {
    height: 50,
    width: 150,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "white",
  }
});

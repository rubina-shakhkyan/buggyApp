/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MainStackParamList } from '../types';


const MainStack = createStackNavigator<MainStackParamList>();

export default function MainNavigator() {

  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1, backgroundColor: "blue"}}>
      <MainStack.Navigator>
        <MainStack.Screen
          name="TabOneScreen"
          component={TabOneScreen}
        />
        <MainStack.Screen
          name="TabTwoScreen"
          component={TabTwoScreen}
        />
      </MainStack.Navigator>
    </KeyboardAvoidingView>
    
  );
}

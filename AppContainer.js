import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import CalculatorScreen from './components/CalculatorScreen';
import LifecycleScreen from './components/LifecycleScreen';
import NativeBaseCompScreen from './components/NativeBaseCompScreen';

const AppNavigator = createStackNavigator(
{
	Home: HomeScreen,
	Login: LoginScreen,
	Calci: CalculatorScreen,
	Life: LifecycleScreen,
	NativeBase: NativeBaseCompScreen,

},{
	initialRouteName: 'NativeBase'
});

export default createAppContainer(AppNavigator);
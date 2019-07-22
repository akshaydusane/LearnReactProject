import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default class HomeScreen extends Component{

	static navigationOptions = {
	    title: 'LearnReactNativeApp'
	};

	render(){
		return(
			<View style={styles.container}>
				<View style={styles.listBtns}>
					<Button title="Login" onPress={() => this.props.navigation.navigate('Login')}/>
					<Button title="Calculator" onPress={() => this.props.navigation.navigate('Calci')}/>
					<Button title="React Lifecycle" onPress={() => this.props.navigation.navigate('Life')}/>
					<Button title="NativeBase Components" onPress={() => this.props.navigation.navigate('NativeBase')}/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		margin: 10
	},
	listBtns:{
		flex: 1,
        justifyContent: 'space-evenly',
	}
});
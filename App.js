import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import AppContainer from './AppContainer';

export default class App extends Component{

	constructor(){
		super()

		this.state = {}
		this.state = {
			usernameValue : ""
		}

		// this.settingCustomStyles();
		this.handleTextChange = this.handleTextChange.bind(this)
	}

	render() {
		return <AppContainer />;
	}

	handleTextChange(newText){
		this.setState({
			usernameValue: newText
		})
	}

	settingCustomStyles(){
		
		this.state.customStyles = {
			color: 'red'
		}

		setInterval(() => {
			if(this.state.customStyles.color == 'yellow'){
				this.setState({
					customStyles:{
						color: 'green'
					}
				})
			}else{
				this.setState({
					customStyles:{
						color: 'yellow'
					}
				})
			}
		}, 500)
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		// flexDirection: 'row',
		// justifyContent: 'center',
		// alignItems: 'center',
		// backgroundColor: 'green'
	},
	content:{
		fontSize: 30,
		color: 'black'
	},
	uppercontent:{
		flex: 1,
		// backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
	},
	lowercontent:{
		flex: 1,
		margin: 10
		// backgroundColor: 'yellow'
	}
});
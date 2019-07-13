import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default class HomeScreen extends Component{

	static navigationOptions = {
	    title: 'LoginScreen'
	};

	constructor(){
		super()

		this.state = {}
		this.state = {
			usernameValue : ""
		}

		// this.settingCustomStyles();
		this.handleTextChange = this.handleTextChange.bind(this)
	}

	render(){
		return(
			<View style={styles.container}>
				<View style={styles.uppercontent}>
					<Text style={[styles.content, this.state.customStyles]}>
						Login
					</Text>
				</View>
				<View style={styles.lowercontent}>
					
					<TextInput 
						placeholder="Username"
						underlineColorAndroid={'green'}
						onChangeText={this.handleTextChange}
						defaultValue={this.state.usernameValue}
					/>
					
					<TextInput 
						placeholder="Password"
						underlineColorAndroid={'green'}
						// onChangeText={this.handleTextChange}
						defaultValue={this.state.passwordValue}
						secureTextEntry={true}
					/>
				</View>
			</View>
		);
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
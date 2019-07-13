import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import * as Constants from '../Constants';

export default class LifecycleScreen extends Component{

	static navigationOptions = {
	    title: 'LifecycleScreen'
	};

	constructor() {
		super()
		this.state = {
			message: 'constructor()'
		}
		console.log('constructor()')
	}

	UNSAFE_componentWillMount(){
		// console.log('componentWillMount()')
	}

	render() {
		// console.log('render()')
		return (
			<View style={styles.container}>
				<Text>{this.state.message}</Text>
			</View>
		);
	}

	componentDidMount(){
		this.setState({
			message: 'This is to call componentDidUpdate()'
		});

		fetch(Constants.TEST_API, {
			method: 'GET'
		})
		.then(response => response.json())
  		.then(json => {
  			// console.log(json.title)
  			this.setState({
  				message: json.title
  			})
  		});
	}

	componentDidUpdate(prevProps, prevState) {
		// console.log('componentDidUpdate()')
		// console.log(this.state)
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
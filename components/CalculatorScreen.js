import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default class CalculatorScreen extends Component{

	static navigationOptions = {
	    title: 'CalculatorScreen'
	};

	render(){
		return(
			<View style={styles.container}>
				<View style={styles.calcLayout}>

				</View>
				<View style={styles.resultLayout}>

				</View>
				<View style={styles.btnsLayout}>
					<View style={styles.numsLayout}>
					</View>
					<View style={styles.opersLayout}>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1
	},
	calcLayout:{
		flex: 1,
		backgroundColor: 'red'
	},
	resultLayout:{
		flex: 1,
		backgroundColor: 'green'
	},
	btnsLayout:{
		flex: 4,
		backgroundColor: 'yellow',
		flexDirection: 'row'
	},
	numsLayout:{
		flex: 6,
		backgroundColor: 'blue'
	},
	opersLayout:{
		flex: 2,
		backgroundColor: 'black'
	}
});
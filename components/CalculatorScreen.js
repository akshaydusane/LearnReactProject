import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

export default class CalculatorScreen extends Component{

	static navigationOptions = {
	    title: 'CalculatorScreen'
	};

	render(){

		let numrows = []
		let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]

		for(let i = 0; i < 4; i++){
			let numrow = []

			for(let j = 0; j < 3; j++){
				numrow.push(
					<TouchableOpacity key={nums[i][j]} style={styles.btn}>
						<Text style={styles.numText}>{nums[i][j]}</Text>
					</TouchableOpacity>
				)
			}
			numrows.push(<View style={styles.row}>{numrow}</View>)
		}

		let opsrow = []
		let ops = ['+', '-', '*', '/', 'Del']

		for(let i = 0; i < 5; i++){
			opsrow.push(
				<TouchableOpacity style={styles.btn}>
					<Text style={styles.opsText}>{ops[i]}</Text>
				</TouchableOpacity>
			)
		}

		return(
			<View style={styles.container}>
				<View style={styles.calcLayout}>
					<Text style={styles.calcText}>11*11</Text>
				</View>
				<View style={styles.resultLayout}>
					<Text style={styles.resText}>121</Text>
				</View>
				<View style={styles.btnsLayout}>
					<View style={styles.numsLayout}>
						{numrows}
					</View>
					<View style={styles.opersLayout}>
						{opsrow}
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
	row: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	btn:{
		flex: 1,
		alignItems: 'center',
		alignSelf: 'stretch',
		justifyContent: 'center'
	},
	calcLayout:{
		flex: 1,
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'flex-end'
	},
	resultLayout:{
		flex: 1,
		backgroundColor: 'green',
		justifyContent: 'center',
		alignItems: 'flex-end'
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
		justifyContent: 'space-around',
		backgroundColor: 'black'
	},
	resText:{
		fontSize: 30,
		color: 'white'
	},
	calcText:{
		fontSize: 40,
		color: 'white'
	}, 
	numText:{
		fontSize: 20,
		color: 'white'
	},
	opsText:{
		fontSize: 25,
		color: 'white'	
	}
});
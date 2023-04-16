import { StyleSheet, View, KeyboardAvoidingView, Text, TextInput, Button, Alert, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from "react";
import RatingSliderGraph from './RatingSliderGraph';

export default function RatingView({ name }: { name: string }) {
	const [rating, setRating] = useState(4);
	const [comment, setComment] = useState("");

	const onButtonPress = () => {
		Alert.alert(`submitting or some sht\nRating: ${rating}${comment && `\nComment: ${comment}`}`);
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.innerContainer}>
					<View style={styles.titlePanel}>
						<Text style={styles.title}>{name}</Text>
					</View>
					<View style={styles.inputPanel}>
						<View style={styles.graph}>
							<RatingSliderGraph rating={rating} setRating={setRating}/>
						</View>
						<View style={styles.commentBoxContainer}>
							<TextInput style={styles.commentBox}
								placeholder="opt. comment (140 chars)"
								onChangeText={setComment}
								maxLength={140}
								multiline
								value={comment}
							/>
						</View>
						<View style={styles.submitButton}>
							<Button
								onPress={onButtonPress}
								title="Submit Rating"
								color="white"
							/>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	innerContainer: {
		flex: 1,
	},
	titlePanel: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		color: "black",
		fontSize: 72,
		fontWeight: "200",
	},
	inputPanel: {
		flex: 3,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
	graph: {
		margin: 15,
	},
	commentBoxContainer: {
		width: 300,
		margin: 15,
	},
	commentBox: {
		borderColor: "black",
		borderWidth: 1,
		borderRadius: 10,
		height: 65,
		fontSize: 24,
		padding: 10,
	},
	submitButton: {
		backgroundColor: "orange",
		borderRadius: 15,
		fontSize: 10,
		fontWeight: "light",
	},
});

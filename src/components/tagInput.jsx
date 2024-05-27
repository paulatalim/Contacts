import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons/faArrowsRotate';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { faAdd } from '@fortawesome/free-solid-svg-icons/faAdd';

export default props => {
	const [tags, setTags] = useState([]);
	const [text, setText] = useState('');
	const [editIndex, setEditIndex] = useState(null);

	const save = tag => {
		let str = tag[0];

		for (let i = 1; i < tag.length; i++) {
			str += ', ' + tag[i];
		}

		props.save(str);
	};

	const addTag = () => {
		if (text.trim() !== '') {
			setText(text.trim());

			if (editIndex !== null) {
				// If editing an existing tag
				const newTags = [...tags];
				newTags[editIndex] = text.charAt(0).toUpperCase() + text.slice(1);
				setTags(newTags);
				save(newTags);
				setEditIndex(null);
			} else {
				// If adding a new tag
				const newTags = [...tags, text.charAt(0).toUpperCase() + text.slice(1)];
				setTags(newTags);
				save(newTags);
			}
			setText('');
		}
	};

	const removeTag = (index) =>{
		const newTags = [...tags];
		newTags.splice(index, 1);
		save(newTags);
	};

	const editTag = (index) =>{
		const tagToEdit = tags[index];
		setText(tagToEdit);
		setEditIndex(index);
	};

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Exemplo: Extrovertido"
                    placeholderTextColor={'#757470'}
					value={text}
					onChangeText={setText}
					onSubmitEditing={addTag}
				/>
				<TouchableOpacity onPress={addTag}
					style={styles.addButton}>
                        {editIndex !== null
                            ? <FontAwesomeIcon icon={faArrowsRotate} size={20} color="#000" style={styles.buttonText} />
                            : <FontAwesomeIcon icon={faAdd} size={20} color="#000" style={styles.buttonText} />
                        }
				</TouchableOpacity>
			</View>
            <View style={styles.tagContainer}>
				{tags.map((tag, index) =>(
					<View key={index}
						style={styles.tagWrapper}>
						<TouchableOpacity
							onPress={() =>editTag(index)}
							style={styles.tag}>
							<Text style={styles.tagText}>
								{tag}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() =>removeTag(index)}
							style={styles.removeButton}>
                                <FontAwesomeIcon icon={faXmark} size={20} color="#000" style={styles.removeButtonText}/>
						</TouchableOpacity>
					</View>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	tagContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	tagWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 5,
		marginRight: 5,
        backgroundColor: '#ffff00',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
	},
	tag: {
		borderRadius: 20,
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	tagText: {
		color: 'black',
        fontFamily: 'Roboto',
		fontWeight: '500',
		fontSize: 18,
	},
	removeButton: {
		marginLeft: 5,
		borderRadius: 50,
		backgroundColor: '#FFF',
        padding: 5,
	},
	removeButtonText: {
		color: '#FFFFFF',
		fontSize: 18,
	},
	inputContainer: {
        marginBottom: 20,
		flexDirection: 'row',
		alignItems: 'center',
        gap: 15,
	},
	input: {
		flex: 1,
		backgroundColor: '#ffffc0',
        borderRadius: 15,
        padding: 15,
        color: '#000',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 18,
	},
	addButton: {
		backgroundColor: '#ffff00',
		paddingHorizontal: 15,
		paddingVertical: 15,
		borderRadius: 15,
	},
});

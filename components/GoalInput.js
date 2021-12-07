import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const onEnteredGoalHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal)
      }

    const addGoalHandler = () => {
        props.onSetGoals(enteredGoal)
        setEnteredGoal('')
    }  

    return (
        <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputView}>
        <TextInput 
        placeholder='course goal'
        style={styles.textInput}
        onChangeText={onEnteredGoalHandler}
        value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
        <Button title='CANCEL' color='red' onPress={props.onCancel}/>
        </View>
        <View style={styles.button}>
        <Button title='ADD' onPress={addGoalHandler}/>
        </View>
        </View>
      </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
    inputView: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
      },
      textInput: {
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
      },
      buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '60%'
      },
      button: {
          width: '40%'
      }
})
export default GoalInput;

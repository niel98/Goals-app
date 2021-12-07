import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const onSetGoals = (goalTitle) => {
    setGoals(currentGoal => [
      ...currentGoal, 
      { id: Math.random().toString(), value: goalTitle }
    ])
    setIsAddMode(false)
  }

  const onRemoveGoal = goalId => {
    setGoals(currentGoal => {
      return currentGoal.filter((goal) => goal.id != goalId)
    })
  }

  const onCancelHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.root}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onSetGoals={onSetGoals} onCancel={onCancelHandler}/>
      <FlatList
      keyExtractor={(item, index) => item.id}
      data={goals} renderItem={(itemData => 
        <GoalItem title={itemData.item.value} id={itemData.item.id} onDelete={onRemoveGoal}/>
        )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 70
  },
});

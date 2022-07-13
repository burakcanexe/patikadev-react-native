import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import Todo from "./components/Todo/Todo";

const App = () => {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    const todo = {
      id: Math.random(),
      title: input,
      comp:false
    }
    const newTodos = todos
    newTodos.unshift(todo)
    setTodos(newTodos)
    setInput('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.count}>{todos.length}</Text>
      </View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} todos={todos} setTodos={setTodos} />
        )}
      />
      <View style={styles.addTodo}>
        <TextInput value={input} onChangeText={text => setInput(text)} placeholderTextColor={'grey'} underlineColorAndroid='grey' style={styles.input} placeholder="Yapılacak..." />
        <TouchableOpacity onPress={addTodo} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#102027',
    flex: 1,
    padding: 4
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12
  },
  title: {
    color: '#FFA500',
    fontSize: 36,
    fontWeight: 'bold'
  },
  count: {
    color: '#FFA500',
    fontSize: 36,
  },
  addTodo: {
    backgroundColor: '#ffffff25',
    margin: 9,
    borderRadius: 12,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    color: 'grey',
    width: '100%',
    marginBottom: 8
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    backgroundColor: 'grey',
    borderRadius: 6,
    width: Dimensions.get('window').width / 2
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold'
  }
})



export default App
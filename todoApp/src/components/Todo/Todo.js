import React from 'react'
import { View, Text } from 'react-native'

import styles from './Todo.styles'

function Todo({ todo, todos, setTodos }) {
    const compTodo = () => {
        const newTodos = []
        todos.map(t=>{
            if (t.id===todo.id) {
                newTodos.push({
                    id:t.id,
                    title:t.title,
                    comp:!t.comp
                })
            }else{
                newTodos.push(t)
            }
        })

        setTodos(newTodos)

    }

    return (
        <Text onPress={compTodo} style={todo.comp ? styles.compTodo : styles.uncompTodo}>{todo.title}</Text>
    )
}



export default Todo
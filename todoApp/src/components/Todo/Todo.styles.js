import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    uncompTodo:{
        backgroundColor:'green',
        padding:8,
        flex:1,
        fontSize:20,
        marginBottom:12,
        borderRadius:6,
        color:'white'
    },
    compTodo:{
        backgroundColor:'grey',
        padding:8,
        fontSize:20,
        flex:1,
        textDecorationLine:'line-through',
        marginBottom:12,
        borderRadius:6,
        color:'white'
    }
})
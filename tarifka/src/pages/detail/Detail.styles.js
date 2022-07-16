import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    image: { 
        width: '100%',
        height: Dimensions.get('screen').height/4
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'orange',
        padding:12,
        paddingBottom:6,
        marginBottom:6,
        borderBottomWidth:1,
        borderColor:'darkorange'
    },
    scroolContainer:{
        padding:12,
        flex:1,
    },
    description:{
        fontSize:16,
        color:'black',
        marginBottom:14
    },
    btnContainer:{
        marginLeft:24,
        marginRight:24,
        marginBottom:24,
        padding:12,
        alignItems:'center',
        backgroundColor:'red',
        borderRadius:6
    },
    btnText:{
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    }

})
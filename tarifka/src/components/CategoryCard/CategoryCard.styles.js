import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        marginBottom:12,
        marginTop:12,
        padding:6,
        paddingLeft:24,
        paddingRight:24,
        width:Dimensions.get('screen').width*5/6,
        borderTopRightRadius:24,
        borderBottomRightRadius:24,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    image:{
        width:50,
        height:50,
        resizeMode:'stretch',
        borderRadius:50
    },
    title:{
        fontSize:24,
        color:'black',
        fontWeight:'600'
    }
})
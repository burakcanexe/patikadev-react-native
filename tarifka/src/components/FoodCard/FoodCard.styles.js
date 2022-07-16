import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        margin:12,
        height:200,
        borderRadius:12
    },
    imageBack:{
        width:Dimensions.get('screen').width-24,
        resizeMode:'cover',
        height:200,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    title:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    },
    titleBg:{
        backgroundColor:'#00000050',
        width:'100%',
        alignItems:'center',
        padding:12,
        borderBottomLeftRadius:12,
        borderBottomRightRadius:12
    }
})
import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10,
    },

    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize:20
    },

    price: {
        fontWeight: 'bold',
        marginTop:10
    },

    image: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        borderRadius: 10,
        resizeMode: 'center',
    },
    card: {
        flex: 2,
        backgroundColor: '#dedede',
        width: Dimensions.get('window').width / 2,
        borderRadius: 10,
        padding:12
    },
    nostocks:{
        color:'red',
        fontWeight:'600',
        fontSize:16
    }
})
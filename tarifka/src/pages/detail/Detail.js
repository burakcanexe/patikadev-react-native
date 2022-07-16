import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native'

import axios from 'axios'
import styles from './Detail.styles'

function Detail({ navigation, route }) {
    const food = route.params

    const [foodDetail, setFoodDetail] = useState([])

    useEffect(() => {
        
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${food.idMeal}`)
        .then(res=>{
            setFoodDetail(res.data.meals[0])
            navigation.setOptions({ title: res.data.meals[0].strMeal, headerTintColor: 'orange' })
        })
        .catch(err=>{
            console.log(err);
        })
    }, [])

    const watchYoutube = ()=>{
        Linking.openURL(foodDetail.strYoutube)
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:foodDetail.strMealThumb}} />
            <Text style={styles.title}>{foodDetail.strMeal}</Text>
            <ScrollView style={styles.scroolContainer}>
                <Text style={styles.description}>{foodDetail.strInstructions}</Text>
                <TouchableOpacity onPress={watchYoutube} style={styles.btnContainer}>
                    <Text style={styles.btnText}>Watch on YouTube</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Detail
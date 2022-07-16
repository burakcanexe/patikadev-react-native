import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'

import styles from './FoodCard.styles'

function FoodCard({ food, navigation }) {

    const goDetail = () => {
        navigation.navigate('foodDetail', food)
    }

    return (
        <TouchableOpacity onPress={goDetail} style={styles.container}>
            <ImageBackground borderRadius={12} style={styles.imageBack} source={{ uri: food.strMealThumb }}>
                <View style={styles.titleBg}>
                    <Text style={styles.title}>{food.strMeal}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default FoodCard
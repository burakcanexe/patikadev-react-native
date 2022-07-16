import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'

import axios from 'axios'

import styles from './Foods.styles'
import FoodCard from '../../components/FoodCard/FoodCard'

function Foods({navigation, route}) {

  const category = route.params

  const [foods,setFoods]=useState([])

  useEffect(()=>{
    navigation.setOptions({title:category.strCategory, headerTintColor:'orange'})

    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`)
    .then(response=>{
      setFoods(response.data.meals)
    })
  },[])

  return (
    <View style={styles.container}>
      <FlatList 
        data={foods}
        renderItem={({item})=>(
          <FoodCard navigation={navigation} food={item} />
        )}
      />
    </View>
  )
}

export default Foods
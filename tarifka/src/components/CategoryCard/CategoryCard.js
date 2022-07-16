import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import styles from './CategoryCard.styles'

function CategoryCard({ category, navigation }) {

  const goFoods = ()=>{
    navigation.navigate('foods',category)
  }

  return (
    <TouchableOpacity onPress={goFoods} style={styles.container}>
      <Text style={styles.title}>{category.strCategory}</Text>
      <Image style={styles.image} source={{uri:category.strCategoryThumb}} />
    </TouchableOpacity>
  )
}

export default CategoryCard
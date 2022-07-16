import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './Categories.styles'

import axios from 'axios'

import CategoryCard from '../../components/CategoryCard/CategoryCard'

function Categories({navigation}) {

    const [categoryList,setCategoryList] = useState([])

    useEffect(()=>{

        navigation.setOptions({title:'Categories',headerTintColor:'orange'})

        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response=>{
            setCategoryList(response.data.categories)
        })
    },[])


  return (
    <View style={styles.container}>
        <FlatList
            data={categoryList}
            renderItem={({item})=>(
                <CategoryCard navigation={navigation} category={item} />
            )}
        />
    </View>
  )
}

export default Categories
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput, FlatList } from "react-native";
import products from './products.json'
import ProductCard from "./components/ProductCard/ProductCard";

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>PATIKASTORE</Text>
        <TextInput style={styles.search} placeholder="Ara..." />
        <FlatList
          numColumns='2'
          data={products}
          renderItem={({item}) => (
            <ProductCard product={item} />
          )}

        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEFEFE',
    padding: 6,
    paddingBottom:180
  },
  title: {
    color: '#810180',
    fontSize: 30,
    fontWeight: 'bold',
  },
  search: {
    backgroundColor: '#ECEFF1',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
})

export default App
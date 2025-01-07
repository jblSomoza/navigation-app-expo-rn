import { View, Text, FlatList } from 'react-native'
import React from 'react'

import { products } from "@/store/products.store";
import { Link } from 'expo-router';
 
const ProductsScreen = () => {
  return (
    <View className='flex flex-1 px-4'>
      <FlatList
        data={ products }
        keyExtractor={ item => item.id }
        renderItem={({ item }) => (
          <View className='mt-10'>
            <Text className='text-2xl font-work-black'>{ item.title }</Text>
            <Text className='text-lg font-work-medium'>{ item.description }</Text>

            <View className='flex flex-row justify-between mt-4'>
              <Text className='text-lg font-work-bold'>{ item.price }</Text>
              <Link href={`/tabs/(stack)/products/${item.id}`}>
              <Text className='text-lg font-work-bold text-blue-500'>Ver más</Text>
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default ProductsScreen
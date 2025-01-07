import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { products } from '@/store/products.store';

const ProductScreen = () => {

    const { id } = useLocalSearchParams();

    const product = products.find(product => product.id === id);
    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({
        title: product?.title ?? "Product",
      });
    }, [product]);

    if (!product) {
        return <Redirect href={'/'}/>
    }

  return (
    <View className='px-5 mt-2'>
        <Text className='font-work-black text-2xl'>{ product.title }</Text>
        <Text className='font-work-medium text-lg'>{ product.description }</Text>
        <Text className='font-work-bold text-lg mt-4'>{ product.price }</Text>
    </View>
  )
}

export default ProductScreen
import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props : DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
        style={{ flex: 1 }}
        {...props}
    >
      <View className='flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary'>
        <View className='flex justify-center items-center bg-white rounded-full w-24 h-24'>
            <Text className='text-2xl text-primary'>JBLS</Text>
        </View>
      </View>

      {/* ITEMS LIST */}
        <DrawerItemList {...props} />

    </DrawerContentScrollView>
  )
}

export default CustomDrawer
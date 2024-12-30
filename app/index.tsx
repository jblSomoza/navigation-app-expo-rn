import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaView >
      <View>
        <Text className='text-3xl text-primary' style={{ fontFamily: 'WorkSans-Black'}}>HelloWave</Text>

        <Text className='text-3xl text-secondary font-work-black' >HelloWave</Text>

        <Text className='text-3xl text-tertiary font-work-medium'>HelloWave</Text>

        <Text className='text-3xl text-secondary-200 font-work-light'>HelloWave</Text>
      </View>
    </SafeAreaView>
  )
}

export default App
import { Link } from 'expo-router'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView className='px-10'>
      <View>

        <Link className='mb-5' href={'/settings'}>Settings</Link>
        <Link className='mb-5' href={'/products'}>Products</Link>
        <Link className='mb-5' href={'/profile'}>Profile</Link>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
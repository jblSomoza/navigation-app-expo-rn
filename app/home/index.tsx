import CustomButton from '@/components/shared/CustomButton'
import { Link, router } from 'expo-router'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView className='px-10 mt-5'>
      <View>

        <Link href='/products' asChild>

        <CustomButton color='primary' onPress={() => router.push('/products') } className='mb-5'>
          Hola mundo
        </CustomButton>
        </Link>

        <Link href='/products' asChild>

        <CustomButton color='primary' onPress={() => router.push('/products') } variant='text-only' className='mb-5'>
          Hola mundo
        </CustomButton>
        </Link>

        {/* <Link className='mb-5' href={'/settings'}>Settings</Link>
        <Link className='mb-5' href={'/products'}>Products</Link>
        <Link className='mb-5' href={'/profile'}>Profile</Link> */}
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
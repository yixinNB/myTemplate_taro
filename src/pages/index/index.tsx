import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    // <View className='index p5 accent-red-600'>
    //   <Text>Hello world!</Text>
    // </View>
      <View className="text-[#acc855] text-[100px]">Hello world!</View>
  )
}

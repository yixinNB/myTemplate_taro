import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import {Button} from "@nextui-org/react";

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index p5 accent-red-600'>
      <Text className={"text-red-500"}>Hello world!</Text>
      <button>test button</button>
      <p className={"p-5 text-red-500"}>ttt</p>
      <Button color="primary">test</Button>
    </View>
  )
}

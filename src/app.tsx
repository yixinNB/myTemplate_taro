import {PropsWithChildren} from 'react'
import {useLaunch} from '@tarojs/taro'
import {NextUIProvider} from "@nextui-org/react";

import './app.css'

function App({children}: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}


export default App

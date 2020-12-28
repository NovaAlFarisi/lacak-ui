import 'tailwindcss/tailwind.css';
import {useContext, useEffect} from 'react'
import {observer} from 'mobx-react';
import {PositionProvider, PositionContext} from '../store/positionStore'
import sampleData from '../sample.json'
const MyApp = observer(({ Component, pageProps }) => {
  return (
      <PositionProvider>
        <Component {...pageProps} />
      </PositionProvider>
  )
})

export default MyApp

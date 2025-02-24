
import './App.css'
import { ScreenSizeProvider } from './context/ScreenSizeProvider'
import {Routers} from './routers'

function App() {

  return (
    <>
      <ScreenSizeProvider>
        <Routers/>
      </ScreenSizeProvider>   
    </>
  )
}

export default App

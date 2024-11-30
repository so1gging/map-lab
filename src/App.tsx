import './App.css'
import NaverMap from './common/components/NaverMap'
import Environment from './common/consts/environment.ts'
import Marker from './common/components/NaverMap/Overlay/Marker'

function App() {

  return (
    <>
      <NaverMap clientId={Environment.NCP_CLIENT_ID} width="100vw" height="100vh">
        <Marker lat={37.3595704} lng={127.105399}>
          <div>??</div>
        </Marker>
      </NaverMap>
    </>
  )
}

export default App

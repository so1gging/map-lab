import './App.css'
import NaverMap from './common/components/NaverMap'
import Environment from './common/consts/environment.ts'

function App() {

  return (
    <>
      <NaverMap clientId={Environment.NCP_CLIENT_ID} width='100vw' height='100vh'/>
    </>
  )
}

export default App

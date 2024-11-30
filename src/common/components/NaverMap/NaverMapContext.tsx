import {createContext} from 'react'

interface NaverMapContextProps {
  instance: naver.maps.Map | undefined
}


const NaverMapContext = createContext<NaverMapContextProps>({
  instance: undefined,
})

export default NaverMapContext

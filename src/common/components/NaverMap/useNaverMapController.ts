import {useContext} from 'react'
import NaverMapContext from './NaverMapContext.tsx'

const useNaverMapController = () => {
  return useContext(NaverMapContext)
}

export default useNaverMapController

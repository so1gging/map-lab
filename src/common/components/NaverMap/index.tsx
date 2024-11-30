import {CSSProperties, PropsWithChildren, useCallback, useEffect, useRef, useState} from 'react'
import {loadNaverMapScript} from './utils.ts'
import NaverMapContext from './NaverMapContext.tsx'

interface NaverMapProps extends PropsWithChildren {
  clientId: string
  width: CSSProperties['width']
  height: CSSProperties['height']
  onLoaded?: () => void
}

const NaverMap = (props: NaverMapProps) => {
  const {clientId, onLoaded, width, height, children} = props
  const [mapInstance, setMapInstance] = useState<naver.maps.Map>()
  const ref = useRef<HTMLDivElement | null>(null)

  const loadNaverMap = useCallback(() => {
    if (!clientId || !ref.current) return

    loadNaverMapScript(clientId).then(() => {
      if (!ref.current) return
      if (!window.naver) return
      console.log('Naver Map script loaded successfully')

      const map = new naver.maps.Map(ref.current)

      setMapInstance(map)
      onLoaded?.()

    }).catch((error) => {
      console.error(error)
    })
  }, [clientId])

  useEffect(() => {
    loadNaverMap()

  }, [clientId])

  if (!clientId) return null

  return <NaverMapContext.Provider value={{instance: mapInstance}}>
    <div ref={ref} style={{width: width, height: height}}>
      {mapInstance && children}
    </div>
  </NaverMapContext.Provider>

}

export default NaverMap

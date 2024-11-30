import {CSSProperties, PropsWithChildren, useCallback, useEffect, useRef, useState} from 'react'
import {loadNaverMapScript} from './utils.ts'

interface NaverMapProps extends PropsWithChildren {
  clientId: string
  width: CSSProperties['width']
  height: CSSProperties['height']
  onLoaded?: () => void
}

const NaverMap = (props: NaverMapProps) => {
  const {clientId, onLoaded, width, height, children} = props
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  const loadNaverMap = useCallback(() => {
    if (!clientId || !ref.current) return

    loadNaverMapScript(clientId).then(() => {
      if (!ref.current) return
      if (!window.naver) return
      console.log('Naver Map script loaded successfully')

      new naver.maps.Map(ref.current)

      setIsMapLoaded(true)
      onLoaded?.()

    }).catch((error) => {
      console.error(error)
    })
  }, [clientId])

  useEffect(() => {
    loadNaverMap()

  }, [clientId])

  if (!clientId) return null

  return <div ref={ref} style={{width: width, height: height}}>
    {isMapLoaded && children}
  </div>

}

export default NaverMap

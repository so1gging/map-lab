import useNaverMapController from '../../useNaverMapController.ts'
import {PropsWithChildren, useEffect, useRef} from 'react'
import {createPortal} from 'react-dom'
import withOverlay from '../index.tsx'

interface MarkerProps extends PropsWithChildren, Omit<naver.maps.MarkerOptions, 'map' | 'position' | 'icon'> {
  lat: number
  lng: number
}

const Marker = withOverlay<MarkerProps>((props) => {
  const {lat, lng, children, ...markerOptions} = props
  const {instance} = useNaverMapController()
  const markerRef = useRef<naver.maps.Marker>()
  const divRef = useRef<HTMLDivElement>(document.createElement('div'))

  useEffect(() => {

    if (!markerRef.current) {
      const marker = new naver.maps.Marker({
        map: instance,
        position: new naver.maps.LatLng(lat, lng),
        icon: {
          content: divRef.current,
        },
        ...markerOptions,
      })

      markerRef.current = marker
    }

  }, [props.lat, props.lng])

  return createPortal(children, divRef.current)
})

export default Marker

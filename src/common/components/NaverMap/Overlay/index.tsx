import {ComponentType, PropsWithChildren, useEffect} from 'react'
import useNaverMapController from '../useNaverMapController.ts'

const Overlay = ({children}: PropsWithChildren) => {
  const {instance} = useNaverMapController()

  useEffect(() => {
    if (!instance) {
      new Error('No instanace !')
    }
  }, [instance])

  if (!instance) return null

  return children

}

const withOverlay = <P extends object>(Component: ComponentType<P>) => {
  return (props: P) => (
    <Overlay>
      <Component {...props} />
    </Overlay>
  );
};


export default withOverlay

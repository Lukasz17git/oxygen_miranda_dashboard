import { useEffect } from "react"


const useA11yEscKey = (closeHandler: () => any) => {

   useEffect(() => {
      const handleEscKeyPress = (e: KeyboardEvent) => e.key === 'Escape' && closeHandler()
      window.addEventListener('keydown', handleEscKeyPress)
      return () => window.removeEventListener('keydown', handleEscKeyPress)
   }, [closeHandler])

}

export default useA11yEscKey
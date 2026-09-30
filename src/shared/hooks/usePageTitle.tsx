import { useEffect } from "react"


const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = "Byte Space New | " + title
  }, [title])
}

export default usePageTitle
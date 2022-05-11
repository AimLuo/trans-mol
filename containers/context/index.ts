import { useCallback, useState } from 'react'

export function useKetcherState() {
  const [ketcher, setKetcher] = useState()
  const hanldeInit = useCallback((ketcher) => {
    setKetcher(ketcher)
  }, [])
  return { ketcher, hanldeInit }
}

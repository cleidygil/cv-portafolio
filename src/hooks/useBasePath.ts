import { useMemo } from 'react'

export function useBasePath(): string {
  return useMemo(() => {
    if (process.env.NODE_ENV === 'development') {
      return ''
    }
    return process.env.NEXT_PUBLIC_BASE_PATH || ''
  }, [])
}
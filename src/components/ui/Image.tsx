'use client'

import { useState } from 'react'
import { ImageProps } from '@/lib/type'
interface CustomImageProps extends ImageProps {
  eager?: boolean // Nueva prop personalizada
}

const Image: React.FC<CustomImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  fallback = 'images/LogoCG.png',
  eager = false,
  onLoad,
  onError,
  ...props
}) => {
  const [hasError, setHasError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleError = (): void => {
    if (!hasError) {
      // console.error(`❌ Error cargando imagen: ${src}`)
      setHasError(true)
      onError?.()
    }
  }

  const handleLoad = (): void => {
    // console.log(`✅ Imagen cargada: ${src}`)
    setIsLoading(false)
    onLoad?.()
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded flex items-center justify-center">
          <div className="text-gray-400 text-sm">Cargando...</div>
        </div>
      )}
      <img
        src={hasError ? fallback : src}
        alt={alt}
        width={width}
        height={height}
        className={`
          ${className}
          transition-opacity duration-300
          ${isLoading ? 'opacity-0' : 'opacity-100'}
        `}
        onLoad={handleLoad}
        onError={handleError}
        loading={eager ? 'eager' : 'lazy'} // ← Usamos loading en lugar de priority
        decoding="async"
        {...props}
      />
    </div>
  )
}

export default Image
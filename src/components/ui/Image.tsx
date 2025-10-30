'use client'

import { useState } from 'react'
import { useBasePath } from '@/hooks/useBasePath'
import { ImageProps } from '@/lib/type'
import NextImage from 'next/image'

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  fallback = '/images/placeholder.jpg',
  priority = false,
  ...props
}) => {
  const basePath = useBasePath()
  const [imageSrc, setImageSrc] = useState<string>(`${basePath}${src}`)
  const [hasError, setHasError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const handleError = (): void => {
    if (!hasError) {
      console.warn(`Error loading image: ${src}`)
      setHasError(true)
      setImageSrc(`${basePath}${fallback}`)
    }
  }

  const handleLoad = (): void => {
    setIsLoading(false)
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded flex items-center justify-center">
          <div className="text-gray-400 text-sm">Cargando...</div>
        </div>
      )}
      <NextImage
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoadingComplete={handleLoad}
        onError={handleError}
        priority={priority}
        {...props}
      />
    </div>
  )
}

export default Image
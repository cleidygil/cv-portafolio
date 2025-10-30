// components/DownloadButton.tsx
'use client'

import React from 'react'

interface DownloadButtonProps {
  filePath: string
  fileName: string
  children: React.ReactNode
  className?: string
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  filePath,
  fileName,
  children,
  className = ''
}) => {
  const handleDownload = () => {
    // Crear un enlace temporal
    const link = document.createElement('a')
    link.href = filePath
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button
      onClick={handleDownload}
      className={`bg-gray-600 hover:bg-gray-500 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 justify-center ${className}`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg> 
      prueba
      {children}
    </button>
  )
}

export default DownloadButton
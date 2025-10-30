// components/ui/ContactCard.tsx
'use client'

import { motion } from 'framer-motion'
import { ContactItem } from '@/lib/type'

interface ContactCardProps {
  contact: ContactItem
  index: number
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, index }) => {
  const handleAction = () => {
    switch (contact.type) {
      case 'email':
        window.location.href = `mailto:${contact.value}`
        break
      case 'phone':
        window.location.href = `tel:${contact.value}`
        break
      case 'location':
        // Abrir en Google Maps o similar
        window.open(contact.mapUrl, '_blank')
        break
      default:
        break
    }
  }

  const getIcon = () => {
    switch (contact.type) {
      case 'email':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      case 'phone':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        )
      case 'location':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={handleAction}
      className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-200 dark:border-gray-700"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors duration-200">
        <div className="text-purple-600 dark:text-purple-400">
          {getIcon()}
        </div>
      </div>
      
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 dark:text-white capitalize">
          {contact.type === 'email' ? 'Correo Electrónico' : 
           contact.type === 'phone' ? 'Teléfono' : 'Ubicación'}
        </h4>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          {contact.value}
        </p>
        {contact.description && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {contact.description}
          </p>
        )}
      </div>

      <div className="flex-shrink-0 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </motion.div>
  )
}

export default ContactCard
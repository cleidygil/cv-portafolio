// components/ui/StatsCard.tsx
'use client'

import { motion } from 'framer-motion'
import { StatItem } from '@/lib/type'

interface StatsCardProps {
  stat: StatItem
  index: number
}

export const StatsCard: React.FC<StatsCardProps> = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-all duration-300"
    >
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
        {stat.value}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
        {stat.label}
      </div>
    </motion.div>
  )
}


'use client'
import { motion } from 'framer-motion'
import { Star, ExternalLink, Heart } from 'lucide-react'
import { useState } from 'react'

export default function ToolCard({ tool }) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <motion.div 
      className="tool-card p-6 group cursor-pointer"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-navy group-hover:text-burgundy transition-colors">
            {tool.name}
          </h3>
          <span className="text-sm text-gold font-medium">{tool.category}</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsFavorite(!isFavorite)}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <Heart fill={isFavorite ? "currentColor" : "none"} size={20} />
        </motion.button>
      </div>

      <p className="text-charcoal mb-4 line-clamp-2">{tool.description}</p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-1">
          <Star fill="currentColor" className="text-yellow-400" size={16} />
          <span className="text-sm font-medium">{tool.rating}</span>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          tool.price === "Freemium" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
        }`}>
          {tool.price}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {tool.features.slice(0, 3).map((feature, index) => (
          <span key={index} className="px-2 py-1 bg-navy text-white text-xs rounded">
            {feature}
          </span>
        ))}
      </div>

      <motion.a 
        href={tool.website}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full flex items-center justify-center space-x-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Visit Website</span>
        <ExternalLink size={16} />
      </motion.a>
    </motion.div>
  )
}

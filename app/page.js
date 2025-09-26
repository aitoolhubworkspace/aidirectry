'use client'
import { motion } from 'framer-motion'
import { Search, Star, TrendingUp, Users } from 'lucide-react'
import ToolCard from './components/ToolCard'

const tools = [
  {
    id: 1,
    name: "ChatGPT",
    category: "Writing",
    description: "Advanced AI writing assistant with natural language processing",
    rating: 4.8,
    price: "Freemium",
    website: "https://chat.openai.com",
    features: ["Content Generation", "Code Assistance", "Research Help"]
  },
  {
    id: 2,
    name: "Midjourney",
    category: "Image Generation",
    description: "AI-powered image creation with stunning visual results",
    rating: 4.7,
    price: "Paid",
    website: "https://midjourney.com",
    features: ["AI Art", "Style Transfer", "High Resolution"]
  },
  {
    id: 3, 
    name: "Claude",
    category: "Writing",
    description: "Conversational AI with strong reasoning capabilities",
    rating: 4.6,
    price: "Freemium",
    website: "https://claude.ai",
    features: ["Long Context", "File Processing", "Analysis"]
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-cream">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-navy text-white py-6"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-3xl font-bold text-gold"
              whileHover={{ scale: 1.05 }}
            >
              AIDirectry
            </motion.h1>
            <nav className="hidden md:flex space-x-8">
              {['Tools', 'Categories', 'Pricing', 'About'].map((item) => (
                <motion.a 
                  key={item}
                  href="#" 
                  className="hover:text-gold transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="py-20 text-center"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-5xl font-bold text-navy mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Discover the Best AI Tools
          </motion.h2>
          <motion.p 
            className="text-xl text-charcoal mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Curated directory of artificial intelligence tools with detailed reviews, comparisons, and pricing.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search AI tools by name, category, or feature..."
              className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-12 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: TrendingUp, number: "250+", label: "AI Tools" },
              { icon: Star, number: "4.7", label: "Average Rating" },
              { icon: Users, number: "10K+", label: "Monthly Visitors" }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6"
              >
                <stat.icon className="mx-auto mb-4 text-burgundy" size={40} />
                <div className="text-3xl font-bold text-navy">{stat.number}</div>
                <div className="text-charcoal">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h3 
            className="text-3xl font-bold text-navy mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Featured AI Tools
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ToolCard tool={tool} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
          }

'use client'

import { MessageCircle, Phone } from 'lucide-react'
import { useState, useEffect } from 'react'

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed bottom-6 left-6 z-50 flex flex-col gap-4 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <a
        href="https://wa.me/966563009155"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-16 bg-white text-green-600 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          تواصل عبر واتساب
        </span>
      </a>
      
      <a
        href="tel:0563009155"
        className="bg-[#8f1332] hover:bg-[#8f1332]/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="اتصل بنا"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-16 bg-white text-indigo-600 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          اتصل بنا
        </span>
      </a>
    </div>
  )
}

export default FloatingButtons 
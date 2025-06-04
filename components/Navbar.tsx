'use client'

import { useState } from 'react'
import { Menu, X} from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Image src="/02.png" width={120} height={120} alt="Meuvox Logo" className="h-8 w-auto mr-2" />
              <span className="mr-2 text-xl font-bold text-[#8f1332] px-2">شركة نقل عفش جدة </span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:space-x-reverse">
              <a href="#" className="border-[#8f1332] text-[#8f1332] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                الرئيسية
              </a>
              <a href="#services" className="border-transparent text-gray-500 hover:border-[#cc9a60] hover:text-[#8f1332] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                خدماتنا
              </a>
              <a href="#why-choose-us" className="border-transparent text-gray-500 hover:border-[#cc9a60] hover:text-[#8f1332] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                لماذا نحن
              </a>
              <a href="tel:0563009155" className="border-transparent text-gray-500 hover:border-[#cc9a60] hover:text-[#8f1332] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                اتصل بنا
              </a>
            </div>
          </div>
          <div className="-ml-2 mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#8f1332] hover:text-[#cc9a60] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#8f1332]"
            >
              <span className="sr-only">افتح القائمة الرئيسية</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="bg-[#8f1332]/10 border-[#8f1332] text-[#8f1332] block pl-3 pr-4 py-2 border-r-4 text-base font-medium">
              الرئيسية
            </a>
            <a href="#services" className="border-transparent text-gray-500 hover:bg-[#cc9a60]/10 hover:border-[#cc9a60] hover:text-[#8f1332] block pl-3 pr-4 py-2 border-r-4 text-base font-medium">
              خدماتنا
            </a>
            <a href="#why-choose-us" className="border-transparent text-gray-500 hover:bg-[#cc9a60]/10 hover:border-[#cc9a60] hover:text-[#8f1332] block pl-3 pr-4 py-2 border-r-4 text-base font-medium">
              لماذا نحن
            </a>
            <a href="#contact" className="border-transparent text-gray-500 hover:bg-[#cc9a60]/10 hover:border-[#cc9a60] hover:text-[#8f1332] block pl-3 pr-4 py-2 border-r-4 text-base font-medium">
              اتصل بنا
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar


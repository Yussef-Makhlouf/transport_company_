'use client'
import Image from "next/image"
import { useState } from "react"

const images = [
  { src: '/Artboard 5 copy.webp', alt: 'عملية نقل أثاث', height: 400 },
  { src: '/cover 01.webp', alt: 'تغليف الأثاث', height: 300 },
  { src: '/cover 02.webp', alt: 'تحميل العفش', height: 350 },
  { src: '/Artboard 4 copy.webp', alt: 'فك التغليف وترتيب الأثاث', height: 380 },
  { src: '/Artboard 5 copy.webp', alt: 'عملية نقل أثاث', height: 400 },
  { src: '/cover 01.webp', alt: 'تغليف الأثاث', height: 300 },
  { src: '/cover 02.webp', alt: 'تحميل العفش', height: 350 },
  { src: '/Artboard 4 copy.webp', alt: 'فك التغليف وترتيب الأثاث', height: 380 },
  { src: '/Artboard 5 copy.webp', alt: 'عملية نقل أثاث', height: 400 },
]

const Gallery = () => {
  const [loadedImages, setLoadedImages] = useState<number[]>([])

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => [...prev, index])
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#8f1332] font-semibold tracking-wide uppercase">معرض الصور</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            أعمالنا السابقة
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            نعرض لكم بعض من مشاريعنا الناجحة في نقل العفش
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onLoadingComplete={() => handleImageLoad(index)}
                    style={{
                      opacity: loadedImages.includes(index) ? 1 : 0,
                      transition: 'opacity 0.3s ease-in-out',
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-[#8f1332]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
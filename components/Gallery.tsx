import Image from 'next/image'

const images = [
  { src: '/cover 01.webp', alt: 'عملية نقل أثاث' },
  { src: '/blog-2.avif', alt: 'تغليف الأثاث' },
  { src: '/abs.avif', alt: 'تحميل العفش' },
  { src: '/about.avif', alt: 'فك التغليف وترتيب الأثاث' },
]

const Gallery = () => {
  return (
    <section className="bg-white py-12 overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            معرض الصور
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            شاهد كيف نقوم بعملية نقل العفش والأثاث باحترافية وعناية فائقة.
          </p>
        </div>
        <div className="mt-12 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery


import { Truck, Package, PenToolIcon as Tools, Shield, Home, Clipboard } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    title: 'نقل الأثاث المنزلي',
    description: 'نقدم خدمة شاملة لنقل أثاث منزلك بعناية فائقة وأمان تام، من الفك إلى التركيب في موقعك الجديد.',
    icon: Home,
    image: '/Artboard 1 copy.webp'
  },
  {
    title: 'نقل المكاتب والشركات',
    description: 'خدمة متخصصة لنقل مكاتب الشركات والمؤسسات مع الحفاظ على سير العمل وتقليل وقت التوقف.',
    icon: Clipboard,
    image: '/Artboard 2 copy.webp'
  },
  {
    title: 'التغليف الاحترافي',
    description: 'نستخدم أحدث مواد التغليف وتقنياته لضمان حماية ممتلكاتك أثناء النقل من أي ضرر محتمل.',
    icon: Package,
    image: '/Artboard 3 copy.webp'
  },
  {
    title: 'فك وتركيب الأثاث',
    description: 'فريقنا المحترف يقوم بفك وإعادة تركيب جميع أنواع الأثاث بمهارة عالية وبدون أي أضرار.',
    icon: Tools,
    image: '/Artboard 4 copy.webp'
  },
  {
    title: 'النقل الدولي',
    description: 'نوفر خدمات النقل الدولي لمن يرغب في نقل أثاثه خارج المملكة مع ضمان الوصول الآمن.',
    icon: Truck,
    image: '/Artboard 6 copy.webp'
  },
  {
    title: 'التخزين الآمن',
    description: 'نقدم خدمات تخزين آمنة وطويلة الأمد لأثاثكم في مستودعات مؤمنة ومجهزة بأحدث أنظمة الحماية.',
    icon: Shield,
    image: '/Artboard 5 copy.webp'
  }
]

const ServiceCards = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8" id="services">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#8f1332] text-center mb-12">خدماتنا في نقل العفش</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="h-6 w-6 text-[#8f1332] ml-2" />
                  <h3 className="text-xl font-semibold text-[#8f1332]">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceCards


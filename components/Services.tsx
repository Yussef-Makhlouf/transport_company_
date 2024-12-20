import { Truck, Package, PenToolIcon as Tools, Shield } from 'lucide-react'

const services = [
  {
    name: 'نقل العفش والأثاث',
    description: 'نقوم بنقل جميع أنواع الأثاث والعفش بعناية فائقة وأمان تام.',
    icon: Truck,
  },
  {
    name: 'فك وتركيب الأثاث',
    description: 'خدمة احترافية لفك وتركيب جميع أنواع الأثاث والأجهزة الكهربائية.',
    icon: Tools,
  },
  {
    name: 'التغليف الآمن',
    description: 'نستخدم أفضل مواد التغليف لحماية ممتلكاتكم أثناء النقل.',
    icon: Package,
  },
  {
    name: 'التأمين على المنقولات',
    description: 'نوفر خدمة التأمين على العفش والأثاث أثناء عملية النقل لراحة بالكم.',
    icon: Shield,
  },
]

const Services = () => {
  return (
    <div id="services" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">خدماتنا</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            خدمات نقل العفش والأثاث الشاملة
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            نقدم مجموعة متكاملة من خدمات نقل العفش والأثاث لضمان تجربة نقل سلسة وآمنة.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {services.map((service) => (
              <div key={service.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mr-16 text-lg leading-6 font-medium text-gray-900">{service.name}</p>
                </dt>
                <dd className="mt-2 mr-16 text-base text-gray-500">{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Services


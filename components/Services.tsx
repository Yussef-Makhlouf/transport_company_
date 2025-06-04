'use client'
import { Truck, Package, PenToolIcon as Tools, Shield, Clock, MapPin, Check } from 'lucide-react'

const services = [
  {
    name: 'نقل العفش والأثاث',
    description: 'نقدم خدمة نقل العفش والأثاث بأحدث المعدات والسيارات المجهزة. فريقنا المدرب يضمن نقل آمن وسريع مع الحفاظ على سلامة ممتلكاتكم. نستخدم تقنيات حديثة في التغليف والنقل لضمان وصول الأثاث بحالة ممتازة.',
    icon: Truck,
    features: ['سيارات مجهزة', 'فريق محترف', 'تغليف احترافي'],
  },
  {
    name: 'فك وتركيب الأثاث',
    description: 'خدمة احترافية لفك وتركيب جميع أنواع الأثاث والأجهزة الكهربائية. فريقنا المدرب يمتلك الخبرة الكافية للتعامل مع جميع أنواع الأثاث والمكيفات. نضمن إعادة التركيب بشكل صحيح وآمن.',
    icon: Tools,
    features: ['فك آمن', 'تركيب احترافي', 'ضمان الجودة'],
  },
  {
    name: 'التغليف الآمن',
    description: 'نستخدم أحدث مواد التغليف عالية الجودة لحماية ممتلكاتكم. نقدم خدمة تغليف احترافية تشمل جميع أنواع الأثاث والأجهزة. نضمن حماية كاملة ضد الخدوش والكسر.',
    icon: Package,
    features: ['مواد عالية الجودة', 'تغليف متعدد الطبقات', 'حماية شاملة'],
  },
  {
    name: 'التأمين على المنقولات',
    description: 'نوفر بوليصة تأمين شاملة على جميع المنقولات. نضمن تعويضاً كاملاً في حالة حدوث أي ضرر. نقدم خدمة تأمين متميزة بأسعار تنافسية.',
    icon: Shield,
    features: ['تأمين شامل', 'تعويض كامل', 'أسعار تنافسية'],
  },
  {
    name: 'خدمة 24/7',
    description: 'نقدم خدمة نقل العفش على مدار الساعة. فريقنا جاهز للاستجابة لطلباتكم في أي وقت. نضمن وصولاً سريعاً وفعالاً.',
    icon: Clock,
    features: ['خدمة مستمرة', 'استجابة سريعة', 'مرونة في المواعيد'],
  },
  {
    name: 'خدمة تغطية جميع المناطق',
    description: 'نقدم خدماتنا في جميع مناطق المملكة. نضمن وصولاً سريعاً وفعالاً لأي موقع. نستخدم أحدث أنظمة التتبع للوصول السريع.',
    icon: MapPin,
    features: ['تغطية شاملة', 'وصول سريع', 'تتبع مباشر'],
  },
]

const Services = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#8f1332] font-semibold tracking-wide uppercase">خدماتنا</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            خدمات نقل العفش المتكاملة
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            نقدم مجموعة شاملة من الخدمات لضمان نقل آمن ومريح
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#8f1332] text-white mb-4">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{service.name}</h3>
                <p className="mt-2 text-base text-gray-500">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-[#8f1332] ml-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services


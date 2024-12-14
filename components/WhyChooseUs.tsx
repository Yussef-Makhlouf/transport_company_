import { Shield, Clock, ThumbsUp, Award } from 'lucide-react'

const features = [
  {
    name: 'خبرة واسعة',
    description: 'نمتلك خبرة تزيد عن 10 سنوات في مجال نقل العفش والأثاث.',
    icon: Award,
  },
  {
    name: 'فريق محترف',
    description: 'فريقنا مدرب على أعلى مستوى لضمان التعامل الاحترافي مع ممتلكاتكم.',
    icon: ThumbsUp,
  },
  {
    name: 'خدمة سريعة',
    description: 'نلتزم بالمواعيد ونضمن إتمام عملية النقل في الوقت المحدد.',
    icon: Clock,
  },
  {
    name: 'ضمان السلامة',
    description: 'نوفر تأمينًا شاملاً على جميع المنقولات لراحة بالكم.',
    icon: Shield,
  },
]

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">لماذا تختارنا</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            الأفضل في نقل العفش والأثاث
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            نحن نتميز بخدمة عالية الجودة وفريق محترف لضمان تجربة نقل مثالية.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mr-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 mr-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs


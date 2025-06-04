import { Truck, Package, Home, CheckCircle, Shield, Clock, Star, Heart } from 'lucide-react'

const steps = [
  {
    name: 'تقييم احترافي شامل',
    description: 'يقوم فريقنا المختص بزيارة منزلك لإجراء تقييم دقيق لجميع المقتنيات والأثاث، مع وضع خطة نقل مخصصة تضمن أعلى معايير السلامة والكفاءة. نأخذ في الاعتبار كل التفاصيل الدقيقة لضمان تجربة نقل مثالية.',
    icon: Home,
    features: ['تقييم مجاني', 'خبرة واسعة', 'حلول مخصصة']
  },
  {
    name: 'تغليف وتعبئة احترافية',
    description: 'نستخدم أحدث تقنيات التغليف ومواد عالية الجودة لحماية أثاثك ومقتنياتك. يتم تغليف كل قطعة بعناية فائقة باستخدام مواد متخصصة تمنع الخدوش والكسر أثناء النقل.',
    icon: Package,
    features: ['مواد تغليف عالية الجودة', 'تقنيات حديثة', 'حماية شاملة']
  },
  {
    name: 'نقل آمن ومضمون',
    description: 'شاحناتنا مجهزة بأحدث التقنيات وأنظمة التثبيت المتطورة. فريقنا المدرب يضمن نقل آمن وسلس لجميع المقتنيات مع مراعاة أعلى معايير السلامة والاحترافية.',
    icon: Truck,
    features: ['شاحنات مجهزة', 'فريق محترف', 'تأمين شامل']
  },
  {
    name: 'تركيب وإعادة ترتيب احترافية',
    description: 'نقوم بتركيب وإعادة ترتيب جميع المقتنيات في منزلك الجديد بدقة واحترافية عالية. نحرص على تنفيذ رغباتكم بدقة متناهية لضمان راحتكم التامة.',
    icon: CheckCircle,
    features: ['تركيب احترافي', 'تنظيف شامل', 'ضمان الجودة']
  }
]

const features = [
  { name: 'ضمان الجودة', icon: Shield, description: 'نلتزم بأعلى معايير الجودة في كل خطوة' },
  { name: 'خدمة سريعة', icon: Clock, description: 'ننهي عملية النقل بسرعة وكفاءة عالية' },
  { name: 'خبرة واسعة', icon: Star, description: 'سنوات من الخبرة في مجال نقل العفش' },
  { name: 'رعاية متميزة', icon: Heart, description: 'نعامل مقتنياتكم كأنها مقتنياتنا الخاصة' }
]

const HowItWorks = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#8f1332] font-semibold tracking-wide uppercase">خدماتنا المتميزة</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            نقل العفش باحترافية عالية
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            نقدم خدمات نقل العفش بأعلى معايير الجودة والاحترافية، مع ضمان سلامة وأمان مقتنياتكم الثمينة
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {steps.map((step) => (
              <div key={step.name} className="relative bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105">
                <div className="absolute -top-4 -right-4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#8f1332] text-white shadow-lg">
                    <step.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                </div>
                <div className="mr-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.features.map((feature) => (
                      <span key={feature} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#8f1332]/10 text-[#8f1332]">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#8f1332] text-white mb-4">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks


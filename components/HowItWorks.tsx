import { Truck, Package, Home, CheckCircle } from 'lucide-react'

const steps = [
  { name: 'تقييم وتخطيط', description: 'نقوم بزيارة منزلك لتقييم حجم العفش والأثاث وإعداد خطة النقل المناسبة.', icon: Home },
  { name: 'التغليف والتعبئة', description: 'نقوم بتغليف جميع الأثاث والمقتنيات بعناية فائقة لضمان سلامتها أثناء النقل.', icon: Package },
  { name: 'النقل الآمن', description: 'نستخدم شاحنات مجهزة خصيصًا لنقل العفش بأمان تام إلى الوجهة المطلوبة.', icon: Truck },
  { name: 'التفريغ وإعادة الترتيب', description: 'نقوم بتفريغ العفش وترتيبه في المنزل الجديد وفقًا لرغباتكم.', icon: CheckCircle },
]

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">كيف نعمل</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            خطوات عملية نقل العفش
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            نتبع منهجية دقيقة لضمان نقل آمن وفعال لعفشكم وأثاثكم.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {steps.map((step) => (
              <div key={step.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mr-16 text-lg leading-6 font-medium text-gray-900">{step.name}</p>
                </dt>
                <dd className="mt-2 mr-16 text-base text-gray-500">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks


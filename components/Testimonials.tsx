const testimonials = [
  {
    name: 'أحمد محمد',
    role: 'عميل',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'خدمة ممتازة ومهنية عالية. قاموا بنقل أثاث منزلي بعناية فائقة وفي الوقت المحدد. أنصح بهم بشدة.',
  },
  {
    name: 'سارة علي',
    role: 'عميلة',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'تجربة رائعة مع هذه الشركة. فريق العمل محترف جداً وودود. سعيدة جداً بخدمتهم وسأتعامل معهم مرة أخرى بالتأكيد.',
  },
  {
    name: 'محمد خالد',
    role: 'عميل',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: 'خدمة استثنائية وفريق عمل محترف. قاموا بنقل أثاث منزلي بكل عناية ودقة. أسعارهم معقولة جداً مقارنة بالخدمة الممتازة التي يقدمونها.',
  },
]
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="bg-white py-12 overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            ماذا يقول عملاؤنا
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            نحن فخورون بما يقوله عملاؤنا عن خدماتنا. إليكم بعض الشهادات من عملائنا السعداء.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Image className="h-12 w-12 rounded-full" src={testimonial.image} alt="" />
                    </div>
                    <div className="mr-4">
                      <div className="text-lg font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="mt-4 text-gray-500">
                    {testimonial.quote}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials


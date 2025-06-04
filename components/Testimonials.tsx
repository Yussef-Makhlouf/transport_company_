const movingSteps = [
  {
    title: 'التخطيط المسبق لنقل العفش',
    description: 'قبل البدء في عملية النقل، يجب وضع خطة شاملة تشمل تحديد موعد النقل، تجهيز الأدوات اللازمة، وتقسيم المهام بين فريق العمل. نقدم لك دليلاً شاملاً للتحضير المثالي.',
    keywords: ['تخطيط نقل العفش', 'تحضير نقل الأثاث', 'جدولة نقل العفش', 'أدوات نقل الأثاث'],
  },
  {
    title: 'تغليف وتعبئة الأثاث',
    description: 'تعتبر مرحلة التغليف من أهم مراحل نقل العفش. نستخدم مواد تغليف عالية الجودة وأساليب متطورة لحماية أثاثك. تعرف على أفضل طرق التغليف لكل نوع من الأثاث.',
    keywords: ['تغليف الأثاث', 'حماية العفش', 'مواد تغليف', 'تعبئة الأثاث'],
  },
  {
    title: 'نقل وتفكيك الأثاث',
    description: 'نمتلك فريقاً محترفاً لتفكيك وإعادة تركيب جميع أنواع الأثاث. نستخدم أحدث المعدات والتقنيات لضمان سلامة أثاثك أثناء النقل.',
    keywords: ['تفكيك الأثاث', 'تركيب العفش', 'معدات نقل', 'فريق نقل محترف'],
  },
  {
    title: 'النقل الآمن',
    description: 'نستخدم سيارات مجهزة خصيصاً لنقل العفش مع أنظمة تثبيت متطورة. نضمن وصول أثاثك بحالة ممتازة إلى وجهتك الجديدة.',
    keywords: ['سيارات نقل', 'نقل آمن', 'تثبيت الأثاث', 'حماية أثناء النقل'],
  },
  {
    title: 'إعادة التركيب والتنظيم',
    description: 'بعد الوصول، يقوم فريقنا بإعادة تركيب الأثاث وتنظيمه في المكان الجديد. نقدم نصائح لتنظيم منزلك الجديد بشكل مثالي.',
    keywords: ['تركيب الأثاث', 'تنظيم المنزل', 'ترتيب العفش', 'تنسيق المنزل'],
  },
  {
    title: 'خدمات ما بعد النقل',
    description: 'نقدم خدمات إضافية مثل تنظيف المنزل القديم والجديد، والتخلص من النفايات، وتركيب الأجهزة الكهربائية. نحن معك في كل خطوة.',
    keywords: ['تنظيف المنزل', 'تركيب الأجهزة', 'خدمات إضافية', 'رعاية ما بعد النقل'],
  },
]

const MovingGuide = () => {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-[#8f1332] sm:text-5xl">
            دليل شامل لنقل العفش في جدة
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف أفضل الطرق والممارسات لنقل أثاثك بأمان وكفاءة. نقدم لك دليلاً شاملاً لكل مرحلة من مراحل عملية النقل.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {movingSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#8f1332]/10 text-[#8f1332] mb-4">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-[#8f1332] mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="flex flex-wrap gap-2">
                  {step.keywords.map((keyword, idx) => (
                    <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#8f1332]/10 text-[#8f1332]">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#8f1332] mb-4">
            لماذا تختار خدماتنا لنقل العفش في جدة؟
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-[#8f1332] mb-2">خبرة واسعة</h4>
              <p className="text-gray-600">فريق محترف مع سنوات من الخبرة في نقل العفش</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-[#8f1332] mb-2">أدوات متطورة</h4>
              <p className="text-gray-600">استخدام أحدث المعدات والتقنيات في عملية النقل</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-[#8f1332] mb-2">ضمان الجودة</h4>
              <p className="text-gray-600">التزام تام بسلامة أثاثك ورضا العملاء</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovingGuide


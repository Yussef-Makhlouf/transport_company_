'use client'
import { Shield, Clock, ThumbsUp, Award, Truck, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import Head from 'next/head'

const features = [
  {
    name: 'خبرة واسعة',
    description: 'نمتلك خبرة تزيد عن 15 عاماً في مجال نقل العفش والأثاث، مع آلاف العملاء الراضين عن خدماتنا.',
    icon: Award,
    id: 'experience',
  },
  {
    name: 'فريق محترف',
    description: 'فريقنا المدرب على أعلى مستوى يضمن التعامل الأمثل مع ممتلكاتكم بكل عناية واحترافية.',
    icon: ThumbsUp,
    id: 'professional-team',
  },
  {
    name: 'خدمة سريعة',
    description: 'نلتزم بالمواعيد بدقة متناهية ونضمن إتمام عملية النقل بكفاءة عالية وفي الوقت المحدد.',
    icon: Clock,
    id: 'fast-service',
  },
  {
    name: 'ضمان السلامة',
    description: 'نوفر تأميناً شاملاً على جميع المنقولات مع معدات متطورة لضمان سلامة ممتلكاتكم.',
    icon: Shield,
    id: 'safety-guarantee',
  },
  {
    name: 'أسطول حديث',
    description: 'نمتلك أحدث سيارات النقل المجهزة بأحدث التقنيات لضمان نقل آمن وسريع.',
    icon: Truck,
    id: 'modern-fleet',
  },
  {
    name: 'خدمة العملاء',
    description: 'فريق خدمة العملاء متاح على مدار الساعة لتلبية احتياجاتكم والرد على استفساراتكم.',
    icon: Heart,
    id: 'customer-service',
  },
]

const WhyChooseUs = () => {
  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'شركة نقل العفش',
    description: 'خدمات نقل العفش والأثاث مع ضمان الجودة والسلامة',
    offers: features.map(feature => ({
      '@type': 'Offer',
      name: feature.name,
      description: feature.description
    }))
  }

  return (
    <>
      <Head>
        <title>لماذا تختارنا - خدمات نقل العفش المتميزة</title>
        <meta name="description" content="اكتشف لماذا نحن الخيار الأفضل لنقل العفش والأثاث. خبرة واسعة، فريق محترف، خدمة سريعة، ضمان السلامة، أسطول حديث، وخدمة عملاء متميزة." />
        <meta name="keywords" content="نقل العفش, نقل الأثاث, خدمات نقل, شركة نقل, نقل آمن" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      <section 
        className="bg-white py-24" 
        id="why-choose-us"
        aria-labelledby="why-choose-us-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:text-center"
          >
            <h2 
              id="why-choose-us-heading"
              className="text-base text-[#8f1332] font-semibold tracking-wide uppercase"
            >
              لماذا تختارنا
            </h2>
            <p className="mt-4 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              الأفضل في نقل العفش والأثاث
            </p>
            <p className="mt-6 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              نحن نتميز بخدمة عالية الجودة وفريق محترف لضمان تجربة نقل مثالية وآمنة لممتلكاتكم.
            </p>
          </motion.div>

          <div className="mt-20">
            <dl className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 md:gap-y-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <dt>
                    <div className="absolute flex items-center justify-center h-16 w-16 rounded-2xl bg-[#8f1332] text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#cc9a60]">
                      <feature.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <p className="mr-20 text-xl leading-6 font-bold text-gray-900 group-hover:text-[#8f1332] transition-colors duration-300">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-6 mr-20 text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs


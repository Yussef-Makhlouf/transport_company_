'use client'
import Image from 'next/image';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Head from 'next/head';

const services = [
  {
    title: "نقل آمن ومضمون",
    description: "نستخدم أحدث المعدات والسيارات المجهزة لنقل أثاثك بأمان تام",
    color: "#8f1332"
  },
  {
    title: "تغليف احترافي",
    description: "نقدم خدمة تغليف احترافية لجميع قطع الأثاث والعفش",
    color: "#8f1332"
  },
  {
    title: "خدمة 24/7",
    description: "متاحون على مدار الساعة لتلبية احتياجاتكم في أي وقت",
    color: "#8f1332"
  },
  {
    title: "فريق محترف",
    description: "فريق عمل مدرب ومحترف لضمان أفضل خدمة",
    color: "#8f1332"
  }
];

const HeroSection = () => {
  return (
    <>
      <Head>
        <title>خدمة نقل العفش والأثاث في جدة | نقل آمن ومضمون | شركة نقل معتمدة</title>
        <meta name="description" content="خدمة نقل العفش والأثاث في جدة بأعلى مستويات الاحترافية والأمان. نقدم خدمات تغليف احترافية، نقل آمن، وفريق عمل محترف على مدار الساعة. احصل على أفضل خدمة نقل عفش في جدة." />
        <meta name="keywords" content="نقل عفش جدة, نقل اثاث جدة, شركة نقل عفش, نقل آمن, نقل مضمون, تغليف عفش, فك وتركيب, نقل عفش معتمد" />
        <meta property="og:title" content="خدمة نقل العفش والأثاث في جدة | نقل آمن ومضمون" />
        <meta property="og:description" content="خدمة نقل العفش والأثاث في جدة بأعلى مستويات الاحترافية والأمان. نقدم خدمات تغليف احترافية، نقل آمن، وفريق عمل محترف على مدار الساعة." />
        <meta property="og:image" content="/02.png" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "خدمة نقل العفش والأثاث في جدة",
            "description": "خدمة نقل العفش والأثاث في جدة بأعلى مستويات الاحترافية والأمان",
            "image": "/02.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "جدة",
              "addressCountry": "SA"
            },
            "telephone": "+966563009155",
            "priceRange": "$$",
            "openingHours": "Mo-Su 00:00-23:59",
            "sameAs": [
              "https://wa.me/966563009155"
            ]
          })}
        </script>
      </Head>

      <section className="relative min-h-screen bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="space-y-8">
                <div className="relative">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                    <span className="block text-[#8f1332]">
                      خدمة نقل العفش
                    </span>
                    <span className="block text-gray-900 mt-2">والأثاث في جدة</span>
                  </h1>
                  <p className="mt-6 text-xl text-gray-600 font-medium">
                    نقل آمن • تغليف احترافي • فك وتركيب • خدمة 24/7
                  </p>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed">
                  نقدم لكم خدمة نقل العفش والأثاث بأعلى مستويات الاحترافية والأمان. فريقنا المتخصص يضمن لكم تجربة نقل سلسة وآمنة لجميع ممتلكاتكم. نحن نستخدم أحدث المعدات والتقنيات لضمان سلامة أثاثكم.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/966563009155"
                    className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#8f1332] rounded-xl hover:bg-[#8f1332]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    احجز الآن
                    <ChevronRight className="mr-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
               
                
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 gap-6 mt-12">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#8f1332] transition-colors duration-300">{service.title}</h3>
                          <p className="mt-2 text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/02.png"
                alt="خدمة نقل العفش والأثاث في جدة - نقل آمن ومضمون"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;


'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'ما هي الخدمات التي تقدمونها في مجال نقل العفش؟',
    answer: 'نقدم خدمات شاملة لنقل العفش تتضمن فك وتركيب الأثاث، التغليف الآمن، النقل باستخدام شاحنات مجهزة، وإعادة ترتيب الأثاث في المنزل الجديد.',
  },
  {
    question: 'هل تقدمون خدمات النقل خارج مدينة جدة؟',
    answer: 'نعم، نقدم خدمات نقل العفش داخل مدينة جدة وإلى المدن المجاورة. للنقل لمسافات أبعد، يرجى الاتصال بنا للحصول على تفاصيل إضافية.',
  },
  {
    question: 'كيف يتم تحديد سعر خدمة نقل العفش؟',
    answer: 'يعتمد السعر على عدة عوامل منها حجم العفش، المسافة، وأي خدمات إضافية مطلوبة. نقوم بتقديم تقدير مجاني بعد معاينة العفش المراد نقله.',
  },
  {
    question: 'هل تقدمون خدمة التأمين على العفش أثناء النقل؟',
    answer: 'نعم، نوفر خدمة التأمين الشامل على العفش أثناء عملية النقل لضمان تعويض العميل في حالة حدوث أي أضرار غير متوقعة.',
  },
  {
    question: 'كم من الوقت تستغرق عملية نقل العفش عادة؟',
    answer: 'تختلف المدة حسب حجم العفش والمسافة، ولكن في المتوسط، تستغرق عملية نقل منزل متوسط الحجم من 4 إلى 6 ساعات.',
  },
  {
    question: 'هل يجب علي تفريغ خزائن الملابس والأدراج قبل النقل؟',
    answer: 'نعم، ننصح بتفريغ جميع الخزائن والأدراج قبل النقل. هذا يساعد في تقليل وزن الأثاث ويحمي محتوياتك من الضرر أثناء النقل.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-gray-50 py-12 overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            الأسئلة الشائعة
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            إليك بعض الإجابات على الأسئلة الأكثر شيوعًا التي نتلقاها من عملائنا حول خدمات نقل العفش.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-6 divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt className="text-lg">
                  <button
                    className="text-right w-full flex justify-between items-start text-gray-400"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <span className="ml-6 h-7 flex items-center">
                      {openIndex === index ? (
                        <ChevronUp className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-2 pr-12">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default FAQ


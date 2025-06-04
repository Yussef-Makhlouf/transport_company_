'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: "ما هي الخدمات التي تقدمونها؟",
    answer: "نقدم خدمات نقل العفش والأثاث، فك وتركيب الأثاث، تغليف احترافي، وتخزين آمن. نستخدم أحدث المعدات والسيارات المجهزة لضمان نقل آمن ومضمون."
  },
  {
    id: 2,
    question: "كيف يمكنني طلب خدمة النقل؟",
    answer: "يمكنك التواصل معنا عبر الهاتف أو الواتساب أو من خلال نموذج الاتصال في موقعنا. سنقوم بزيارة منزلك لتقييم المقتنيات وتقديم عرض سعر مجاني."
  },
  {
    id: 3,
    question: "هل تقدمون خدمة التغليف؟",
    answer: "نعم، نقدم خدمة تغليف احترافية لجميع أنواع الأثاث والمقتنيات. نستخدم مواد تغليف عالية الجودة لضمان حماية ممتلكاتكم أثناء النقل."
  },
  {
    id: 4,
    question: "ما هي مناطق الخدمة التي تغطونها؟",
    answer: "نقدم خدماتنا في جميع أنحاء جدة والمناطق المحيطة بها. يمكنك التواصل معنا للتحقق من تغطية منطقتك."
  },
  {
    id: 5,
    question: "هل لديكم تأمين على المقتنيات؟",
    answer: "نعم، جميع المقتنيات مؤمنة ضد أي ضرر قد يحدث أثناء النقل. نحرص على سلامة ممتلكاتكم ونقدم ضماناً شاملاً على خدماتنا."
  }
]

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#8f1332] font-semibold tracking-wide uppercase">الأسئلة الشائعة</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            كل ما تحتاج معرفته
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا
          </p>
        </div>

        <div className="mt-12">
          <dl className="space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <div key={faq.id} className="pt-6">
                <dt className="text-lg">
                  <button
                    className="text-right w-full flex justify-between items-start text-gray-900"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span className="font-medium text-[#8f1332]">{faq.question}</span>
                    <span className="ml-6 h-7 flex items-center">
                      {openFaq === faq.id ? (
                        <Minus className="h-6 w-6 text-[#8f1332]" aria-hidden="true" />
                      ) : (
                        <Plus className="h-6 w-6 text-[#8f1332]" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </dt>
                <dd className={`mt-2 pr-12 ${openFaq === faq.id ? 'block' : 'hidden'}`}>
                  <p className="text-base text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default FAQ


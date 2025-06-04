import React from 'react';
import { MapPin } from 'lucide-react';

const areas = [
  {
    district: "شمال جدة",
    streets: ["حي الروضة", "حي النزهة", "حي السلامة", "حي النخيل"]
  },
  {
    district: "وسط جدة",
    streets: ["حي البلد", "حي الرويس", "حي العزيزية", "حي الهنداوية"]
  },
  {
    district: "جنوب جدة",
    streets: ["حي النعيم", "حي الحمراء", "حي الثعالبة", "حي الكندرة"]
  },
  {
    district: "شرق جدة",
    streets: ["حي السامر", "حي النهضة", "حي الفيصلية", "حي العزيزية"]
  },
  {
    district: "غرب جدة",
    streets: ["حي الرويس", "حي البغدادية الغربية", "حي البغدادية الشرقية", "حي النزلة اليمانية"]
  },
  {
    district: "المناطق المحيطة",
    streets: ["مكة المكرمة", "الطائف", "رابغ", "خليص"]
  }
]

const ServiceAreas = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#8f1332] font-semibold tracking-wide uppercase">مناطق الخدمة</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            نغطي جميع مناطق جدة
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            نقدم خدماتنا في جميع أنحاء جدة والمناطق المحيطة بها
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area.district}
                className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#8f1332] text-white mb-4">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{area.district}</h3>
                <p className="mt-2 text-base text-gray-500">
                  {area.streets.map((street, index) => (
                    <span key={index}>{street}
                      {index < area.streets.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <div className="bg-[#8f1332]/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#8f1332] mb-4">
              هل تحتاج إلى مساعدة في تحديد موقعك؟
            </h2>
            <p className="text-gray-600 mb-6">
              فريقنا جاهز لمساعدتك في تحديد أقرب نقطة خدمة لك
            </p>
            <a
              href="tel:0563009155"
              className="inline-flex items-center justify-center bg-[#8f1332] text-white px-8 py-4 rounded-xl hover:bg-[#cc9a60] transition-colors duration-200 text-lg font-medium"
              aria-label="اتصل بنا للحصول على المساعدة"
            >
              <MapPin className="w-5 h-5 ml-2" />
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas; 
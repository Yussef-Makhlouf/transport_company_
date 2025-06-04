import { Facebook, Instagram,  Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#8f1332]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-[#cc9a60] tracking-wider uppercase">
                  خدماتنا
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-white hover:text-[#cc9a60]">
                      نقل العفش
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-white hover:text-[#cc9a60]">
                      فك وتركيب الأثاث
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-white hover:text-[#cc9a60]">
                      التغليف
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-white hover:text-[#cc9a60]">
                      التخزين
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-[#cc9a60] tracking-wider uppercase">
                  الدعم
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-white hover:text-[#cc9a60]">
                      الأسئلة الشائعة
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-white hover:text-[#cc9a60]">
                      طلب تسعيرة
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-white hover:text-[#cc9a60]">
                      جدول المواعيد
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-white hover:text-[#cc9a60]">
                      سياسة الضمان
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-[#cc9a60] tracking-wider uppercase">
                  الشركة
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#about" className="text-base text-white hover:text-[#cc9a60]">
                      من نحن
                    </a>
                  </li>
                  <li>
                    <a href="https://naqlaty-ship.com/" className="text-base text-white hover:text-[#cc9a60]">
                      شركاؤنا
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-[#cc9a60] tracking-wider uppercase">
                  تواصل معنا
                </h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center">
                    <Phone className="h-6 w-6 text-[#cc9a60] ml-2" />
                    <span className="text-base text-white">0563009155</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-6 w-6 text-[#cc9a60] ml-2" />
                    <span className="text-base text-white">info@movingcompany.com</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-6 w-6 text-[#cc9a60] ml-2" />
                    <span className="text-base text-white">جدة، المملكة العربية السعودية</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[#cc9a60]/20 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="https://www.facebook.com/profile.php?id=61574108861445" className="text-white hover:text-[#cc9a60]">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/riaydh_ads?fbclid=IwY2xjawKqm1hleHRuA2FlbQIxMABicmlkETE1UG9SQTNGQmFSdlZyZGF0AR4EK_2qXJN_94MAwQ4fQudGJ2LqjJWXpRSynl8U-7vlnNUcCMP4hqZ2S_emFQ_aem_bpVp2fxj4zfKC-YNxGkbcw" className="text-white hover:text-[#cc9a60]">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-8 text-base text-white md:mt-0 md:order-1">
            &copy; 2025شركة نقل العفش. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


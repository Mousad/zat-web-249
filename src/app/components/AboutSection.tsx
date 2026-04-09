import { Link } from "react-router-dom";

import {
  Phone,
  MapPin,
  FileText,
  Home,
  BookOpen,
  Compass,
  GraduationCap,
  MessageCircle,
  Globe,
  HeartHandshake,
} from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "استشارات مجانية",
    description: "نقدم استشارات مجانية متخصصة حول الدراسة في الجامعات التركية وفرص المنح المتاحة",
    color: "#0d2b5e",
  },
  {
    icon: Compass,
    title: "التوجيه اكاديمي",
    description: "فريق من المستشارين الأكاديميين المتخصصين يوجهونك خطوة بخطوة نحو مسارك التعليمي",
    color: "#c0392b",
  },
  {
    icon: GraduationCap,
    title: "اختيار الجامعة المناسبة",
    description: "نساعدك على اختيار الجامعة والتخصص المناسب بما يتوافق مع طموحاتك وإمكانياتك",
    color: "#0d2b5e",
  },
  {
    icon: BookOpen,
    title: "المساعدة في القبول الجامعي",
    description: "نتولى كامل إجراءات التقديم والقبول في الجامعات المعتمدة لضمان نجاح طلبك",
    color: "#c0392b",
  },
  {
    icon: Home,
    title: "دعم السكن للطلاب",
    description: "نوفر حلول سكن مناسبة وآمنة للطلاب القادمين للدراسة في تركيا",
    color: "#0d2b5e",
  },
  {
    icon: Globe,
    title: "المساعدة في تصاريح الإقامة",
    description: "نرافقك في استخراج الإقامة الطلابية وتجديدها وجميع  ",
    color: "#c0392b",
  },
  {
    icon: FileText,
    title: "ترجمة وتوثيق المستندات",
    description: "نوفر خدمات الترجمة المعتمدة وتوثيق الوثائق  اللازمة للتسجيل",
    color: "#0d2b5e",
  },
  {
    icon: Phone,
    title: "دعم متواصل على مدار الساعة",
    description: "فريق دعم متاح 24/7 عبر الهاتف والواتساب للإجابة على جميع استفساراتك",
    color: "#c0392b",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start gap-16 mb-16">
          <div className="flex-1">
  <span
    className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-4"
    style={{ backgroundColor: "#c0392b15", color: "#c0392b" }}
  >
    من نحن
  </span>

  <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
    عن مؤسسة {" "}
    <span style={{ color: "#0d2b5e" }}>ذات التعليمية</span>
  </h2>

  <p className="text-gray-600 text-lg leading-relaxed mb-6">
    مؤسسة ذات التعليمية هي جهة متخصصة في تقديم الخدمات التعليمية والاستشارات الأكاديمية للطلاب الراغبين في الدراسة داخل وخارج البلاد.
    نساعد الطلاب في اختيار التخصصات المناسبة والتقديم على الجامعات وتأمين المنح الدراسية بأفضل الفرص المتاحة.
  </p>

  <p className="text-gray-600 leading-relaxed mb-8">
    نقدم خدمات متكاملة تشمل الاستشارات التعليمية، التقديم الجامعي، استخراج الشهادات والتصديقات الرسمية،
    مع متابعة دقيقة لكل خطوة لضمان تحقيق أهدافك الأكاديمية بسهولة وثقة.
    نسعى دائماً لتسهيل رحلتك التعليمية وفتح آفاق جديدة لمستقبلك.
  </p>

  


          {/* Image */}
          <div className="flex-1 relative">
  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
    <img
      src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSW77KgcVgR-ESCadIWyQ2JuAqCDskr3djN1kUHxhkY1RIpm7-t"
      alt="استشارة أكاديمية"
      className="w-full h-80 object-cover"
    />

    {/* Overlay */}
    <div
      className="absolute inset-0 opacity-20"
      style={{ background: "linear-gradient(to top, #0d2b5e, transparent)" }}
    />

    {/* الزر على اليمين */}
    <div className="absolute bottom-4 right-4">
  <Link
    to="/about" // هذا هو مسار صفحة About
    className="px-7 py-3.5 rounded-2xl text-white font-bold transition-all hover:shadow-xl hover:scale-105"
    style={{ backgroundColor: "#0d2b5e" }}
  >
    من نحن
  </Link>
</div>
  </div>
</div>
        </div>
   </div>     

        {/* Services Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-black text-gray-900 mb-3">خدماتنا المتكاملة</h3>
          <p className="text-gray-500">نقدم طيفاً شاملاً من الخدمات التعليمية لضمان تجربة دراسية ناجحة</p>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: "#c0392b" }} />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
  {services.map((service, index) => {
    const Icon = service.icon;
    return (
      <div
        key={index}
        className="p-6 rounded-2xl bg-white border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer text-center"
        style={{ borderColor: "#e8ecf0" }}
      >
        {/* الأيقونة في النص */}
        <div
          className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
          style={{ background: `linear-gradient(135deg, ${service.color}15, ${service.color}30)` }}
        >
          <Icon size={26} style={{ color: service.color }} strokeWidth={1.8} />
        </div>

        {/* العنوان */}
        <h4 className="font-bold text-gray-900 mb-2 text-lg">
          {service.title}
        </h4>

        {/* الوصف */}
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
          {service.description}
        </p>
      </div>
    );
  })}
</div>
      </div>
    </section>
  );
}

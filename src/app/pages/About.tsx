import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* صورة */}
        <div className="flex-1 relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSW77KgcVgR-ESCadIWyQ2JuAqCDskr3djN1kUHxhkY1RIpm7-t"
            alt="منصة رتال التعليمية"
            className="w-full h-80 object-cover"
          />
          <div
            className="absolute inset-0 opacity-20"
            style={{ background: "linear-gradient(to top, #0d2b5e, transparent)" }}
          />
          {/* زر داخل الصورة */}
          <div className="absolute bottom-4 right-4">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-2xl text-white font-bold bg-[#0d2b5e] hover:shadow-xl hover:scale-105 transition-all"
            >
              تواصل معنا
            </Link>
          </div>
        </div>

        {/* نصوص */}
        <div className="flex-1">
          <span className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-4" style={{ backgroundColor: "#c0392b15", color: "#c0392b" }}>
            من نحن
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
          مؤسسة  عن  <span style={{ color: "#0d2b5e" }}>  ذات التعليمية</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            منصة رتال التعليمية هي الوجهة الأولى للطلاب العرب الراغبين في الدراسة في تركيا
            والجامعات العالمية. نقدم حلولاً تعليمية متكاملة منذ الاستشارة الأولى حتى
            الاستقرار في بلد الدراسة.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            مع فريق من أكثر من 85 مستشاراً أكاديمياً متخصصاً، حققنا نسبة نجاح تجاوزت
            98% في قبول طلابنا في أرقى الجامعات. رسالتنا هي جعل حلم الدراسة في الخارج
            في متناول كل طالب عربي طموح.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/consultation"
              className="px-7 py-3.5 rounded-2xl text-white font-bold bg-[#0d2b5e] hover:shadow-xl hover:scale-105 transition-all"
            >
              ابدأ رحلتك التعليمية
            </Link>
            <Link
              to="/programs"
              className="px-7 py-3.5 rounded-2xl font-bold"
              style={{ backgroundColor: "#0d2b5e10", color: "#0d2b5e", border: "2px solid #0d2b5e30" }}
            >
              تصفح البرامج
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
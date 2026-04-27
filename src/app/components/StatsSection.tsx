import { useState, useEffect, useRef } from "react";
import { Users, Award, UserCheck, Building2 } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: 5000,
    suffix: "+",
    label: "طالب مقبول",
    description: "طالب حقق حلمه معنا حول العالم",
    color: "#0d2b5e",
  },
  {
    icon: Award,
    number: 12,
    suffix: "+",
    label: "سنة خبرة",
    description: "من الخبرة في مجال الاستشارات التعليمية",
    color: "#c0392b",
  },
  {
    icon: UserCheck,
    number: 85,
    suffix: "+",
    label: "مستشار أكاديمي",
    description: "خبراء متخصصون في التوجيه التعليمي",
    color: "#0d2b5e",
  },
  {
    icon: Building2,
    number: 150,
    suffix: "+",
    label: "جامعة شريكة",
    description: "من أفضل الجامعات في تركيا والعالم",
    color: "#c0392b",
  },
];

function useCounter(target: number, duration: number = 2000, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function StatCard({ stat, index, inView }: { stat: typeof stats[0]; index: number; inView: boolean }) {
  const count = useCounter(stat.number, 2000, inView);
  const Icon = stat.icon;

  return (
    <div
      className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
      style={{
        border: "1px solid #e8ecf0",
        animationDelay: `${index * 150}ms`,
      }}
    >
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
        style={{ background: `linear-gradient(135deg, ${stat.color}15, ${stat.color}30)` }}
      >
        <Icon size={36} style={{ color: stat.color }} strokeWidth={1.8} />
      </div>
      <div
        className="text-5xl font-black mb-2"
        style={{ color: stat.color, fontFamily: "Cairo, sans-serif" }}
      >
        {count.toLocaleString("ar-EG")}{stat.suffix}
      </div>
      <h3 className="text-gray-800 font-bold text-xl mb-2">{stat.label}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{stat.description}</p>
    </div>
  );
}

export function StatsSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-8 px-4" style={{ backgroundColor: "#f5f7fb" }}>

       <section className="py-8 px-4 bg-white text-center">

  {/* العنوان */}
  <h1 className="text-3xl md:text-5xl font-black mb-6 text-[#0d2b5e]">
    مؤسسة  <span className="text-[#f59e0b]">ذات</span>  التعليمية
  </h1>

  {/* الوصف */}
 <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
  مؤسسة  <span className="text-[#f59e0b]">ذات</span> التعليمية تقدم مجموعة متكاملة من الخدمات التعليمية التي تساعد الطلاب على تحقيق أهدافهم الأكاديمية.
  نحن متخصصون في توفير <span className="font-bold text-black">المنح الدراسية</span>، 
 
 
</p>

  {/* الكروت */}
 <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">

  {/* الكارت 1 */}
  <div className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer">
    <img
      src="https://i.pinimg.com/736x/51/46/2b/51462bff02c31d97324d43de3928996d.jpg"
      alt="CSC Scholarship"
      className="w-full h-44 object-cover"
    />
    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
      <h4 className="text-xl font-bold mb-2">
         تقدم منح دراسية
      </h4>
      <p className="text-sm mb-4 opacity-0 group-hover:opacity-100 transition">
      
      </p>
    </div>
  </div>

  {/* الكارت 2 */}
  <div className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer">
    <img
      src="https://i.pinimg.com/736x/68/49/ca/6849ca536ab457d52e0cd22165c5f0ef.jpg"
      alt="CIS Scholarship"
      className="w-full h-44 object-cover"
    />
    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
      <h4 className="text-xl font-bold mb-2">
      استشارة تعليمية
      </h4>
      <p className="text-sm mb-4 opacity-0 group-hover:opacity-100 transition">
        
      </p>
    </div>
  </div>

  {/* الكارت 3 (في النص تحت) */}
  

</div>
</section>
<div className="text-center mb-14">
          <span
            className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-4"
            style={{ backgroundColor: "#0d2b5e15", color: "#0d2b5e" }}
          >
            أرقامنا تتحدث
          </span>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            إنجازات تُثبت مصداقيتنا
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            على مدار أكثر من عقد من الزمان، نجحنا في مساعدة الآلاف من الطلاب على تحقيق أحلامهم الأكاديمية
          </p>
          <div className="w-20 h-1 rounded-full mx-auto mt-5" style={{ backgroundColor: "#9a1710" }} />
        </div>
<section
  className="relative bg-fixed bg-center bg-cover py-20"
  style={{ backgroundImage: "url('https://www.mie-study.net/assets/students-D_v95uZt.webp')" }}
>
  
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-4">
    
    <div className="grid grid-cols-4 md:grid-cols-4 gap-8 text-center text-white">
  
      {/* item 1 */}
      <div className="cursor-pointer">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-2">
          86+  
        </h3>
        <p className="text-sm md:text-base text-gray-200">
          الجامعات 
        </p>
      </div>

      {/* item 2 */}
      <div className="cursor-pointer">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-2">
          5.000
        </h3>
        <p className="text-sm md:text-base text-gray-200">
            مقبول المنح 
        </p>
      </div>

      {/* item 3 */}
      <div className="cursor-pointer">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-2">
           9+
        </h3>
        <p className="text-sm md:text-base text-gray-200">
            سنة خبرة

        </p>
      </div>

      {/* item 4 */}
      <div className="cursor-pointer">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-2">
          85+
        </h3>
        <p className="text-sm md:text-base text-gray-200">
            مستشار أكاديمي
        </p>
      </div>

    </div>
  </div>
</section>
      

     
    </section>
    
  );
}

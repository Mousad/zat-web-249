import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "أحمد الرشيدي",
    country: "🇸🇦 السعودية",
    university: "جامعة إسطنبول",
    major: "هندسة الحاسوب",
    rating: 5,
    image: "https://i.pinimg.com/736x/f1/2f/37/f12f37a580349c171e0cb7ff6f3e8331.jpg",
    text: "منصة رتال غيّرت مسار حياتي بالكامل. كنت أحلم بالدراسة في الخارج لكنني لم أكن أعرف من أين أبدأ. الفريق كان معي في كل خطوة من تجهيز الملفات حتى وصلت إسطنبول وبدأت دراستي. أنصح كل طالب عربي بالتواصل معهم.",
    year: "2023",
  },
  {
    name: "نور الحسن",
    country: "🇯🇴 الأردن",
    university: "جامعة بيلكنت",
    major: "إدارة الأعمال الدولية",
    rating: 5,
    image: "https://i.pinimg.com/1200x/8d/e6/21/8de621e960298a6c9374933bbd91a69d.jpg",
    text: "ما يميز منصة رتال هو الاهتمام الشخصي بكل طالب. لم أشعر يوماً أنني مجرد رقم بينهم. ساعدوني في الحصول على قبول في جامعة بيلكنت المرموقة ورتّبوا لي كل شيء من السكن لأوراق الإقامة. تجربة لا تُنسى!",
    year: "2024",
  },
  {
    name: "عمر بن يوسف",
    country: "🇲🇦 المغرب",
    university: "جامعة أنقرة",
    major: "الطب البشري",
    rating: 5,
    image: "https://i.pinimg.com/736x/37/82/09/378209b302939a1749713d491d69dcd8.jpg",
    text: "كان حلمي الدراسة في كلية الطب التركية وقد حققته بفضل فريق رتال. ساعدوني في فهم متطلبات القبول وترجمة وثائقي وقدموا لي دعماً نفسياً ومعنوياً خلال فترة الانتظار. الآن أنا في السنة الثانية طب في أنقرة.",
    year: "2023",
  },
  {
    name: "فاطمة الزهراوي",
    country: "🇩🇿 الجزائر",
    university: "جامعة حاجتبه",
    major: "الهندسة الطبية الحيوية",
    rating: 5,
    image: "https://i.pinimg.com/736x/67/f7/a3/67f7a3df69ad06a19afcbc19716a3cf5.jpg",
    text: "خدمة احترافية بكل معنى الكلمة. المستشارة سارة التي تولّت ملفي كانت متاحة في أي وقت وأجابت على كل استفساراتي بصبر ودقة. أنهيت إجراءات القبول في ثلاثة أسابيع فقط!",
    year: "2024",
  },
  {
    name: "يوسف القاسمي",
    country: "🇪🇬 مصر",
    university: "جامعة بوغازيتشي",
    major: "الذكاء الاصطناعي",
    rating: 5,
    image: "https://i.pinimg.com/1200x/5d/85/34/5d85345e3b679cde11fbf79ed6d7cfc5.jpg",
    text: "جامعة بوغازيتشي كانت حلماً يبدو بعيد المنال، لكن منصة رتال جعلته حقيقة. ساعدوني في تجهيز ملف استثنائي وأجروا معي تدريبات على المقابلة. اليوم أنا طالب ماجستير في الذكاء الاصطناعي في واحدة من أرقى جامعات تركيا.",
    year: "2024",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnim, setIsAnim] = useState(false);

  const go = (dir: number) => {
    if (isAnim) return;
    setIsAnim(true);
    setTimeout(() => {
      setCurrent((p) => (p + dir + testimonials.length) % testimonials.length);
      setIsAnim(false);
    }, 300);
  };

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [current]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-4"
            style={{ backgroundColor: "#c0392b15", color: "#c0392b" }}
          >
            آراء طلابنا
          </span>
          <h2 className="text-4xl font-black text-gray-900 mb-4">شهادات الطلاب</h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            اقرأ ما يقوله طلابنا عن تجربتهم مع منصة زات التعليمية
          </p>
          <div className="w-20 h-1 rounded-full mx-auto mt-5" style={{ backgroundColor: "#c0392b" }} />
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className={`transition-all duration-300 ${isAnim ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}
          >
            <div
              className="relative p-8 md:p-12 rounded-3xl shadow-xl"
              style={{
                background: "linear-gradient(135deg, #0d2b5e 0%, #1e5799 100%)",
              }}
            >
              {/* Quote Icon */}
             

              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-110 h-90 rounded-2xl object- border-4 border-white/20"
                    />
                    
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Stars */}
                 

                  <p className="text-white/90 text-lg leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>

                  <div>
                    <p className="text-white font-black text-xl">{t.name}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="text-blue-200 text-sm">{t.country}</span>
                      <span className="w-1 h-1 rounded-full bg-blue-400" />
                      <span className="text-blue-200 text-sm">{t.university}</span>
                      <span className="w-1 h-1 rounded-full bg-blue-400" />
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: "rgba(192,57,43,0.3)", color: "#ff9f8f" }}
                      >
                        {t.major}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          
        </div>

       
      </div>
    </section>
  );
}

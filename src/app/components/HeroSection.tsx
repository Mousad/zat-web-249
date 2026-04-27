import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, GraduationCap, Globe, Star } from "lucide-react";

const heroSlides = [
  {
    image: "https://www.mie-study.net/assets/greatwall-B4uz9E7-.webp",
    headline: " ذات  التعليمية - بوابتك للمنح والدراسة بالخارج",
    subheadline: "نساعدك على الوصول لأفضل الجامعات التركية والعالمية مع خطط تعليمية مخصصة واستشارات احترافية.",
  },
  {
    image: "https://www.mie-study.net/assets/shanghai-BqJbeaKu.webp",
    headline: "انضم لمجتمع الطلاب الناجحين",
    subheadline: "معنا التعليمية، أكثر من 5000 طالب وثّقوا مسيرتهم الأكاديمية وحصلوا على منح دراسية كاملة.",
  },
  {
    image: "https://www.mie-study.net/assets/beijing-BSqiENDG.webp",
    headline: "تعليم موثوق ومتاح للجميع",
    subheadline: "اكتشف برامج معتمدة دولياً، منح كاملة، واستشارات تساعدك على تحقيق حلمك بالدراسة في الخارج.",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const goToPrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const slide = heroSlides[currentSlide];

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isAnimating ? "opacity-60" : "opacity-100"}`}
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 max-w-3xl leading-tight">
          {slide.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl leading-relaxed">
          {slide.subheadline}
        </p>

        {/* CTA Button */}
        <a
          href="#programs"
          className="px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all duration-200 hover:shadow-2xl hover:scale-105 mb-12"
          style={{ backgroundColor: "#0e2575" }}
        >
          استكشف خدماتنا
        </a>

        {/* Floating Flags */}
        <div className="flex justify-center gap-6">
          <a href="" className="floating-btn" target="_blank" rel="noopener noreferrer" aria-label="الصين">
            <img
              alt="الصين"
              className="w-16 h-16 rounded-full shadow-lg"
              src="https://i.pinimg.com/736x/f8/39/bd/f839bd446b760fab027bb93bc414b6d8.jpg"
            />
          </a>
          <a href="https://www.mie-study.com/" className="floating-btn" target="_blank" rel="noopener noreferrer" aria-label="كوريا الجنوبية">
            <img
              alt="كوريا الجنوبية"
              className="w-16 h-16 rounded-full shadow-lg"
              src="https://i.pinimg.com/736x/d5/f2/fa/d5f2fa2c225a22855f26df40eb9c39d2.jpg"
            />
          </a>
          <a href="https://mingyang.ru/" className="floating-btn" target="_blank" rel="noopener noreferrer" aria-label="روسيا">
            <img
              alt="روسيا"
              className="w-16 h-16 rounded-full shadow-lg"
              src="https://i.pinimg.com/736x/26/ba/6a/26ba6a8f329a461297315d5f8965e58b.jpg"
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61557927511846" className="floating-btn" target="_blank" rel="noopener noreferrer" aria-label="منغوليا">
            <img
              alt="منغوليا"
              className="w-16 h-16 rounded-full shadow-lg"
              src="https://i.pinimg.com/1200x/d7/63/70/d763704858d28f31b5575fca50c376dd.jpg"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
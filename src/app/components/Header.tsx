import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchLang, setSearchLang] = useState("");
  const [searchMajor, setSearchMajor] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "الرئيسية", href: "#home" },
    { label: "عن المنصة", href: "#about" },
    { label: "الخدمات", href: "#services" },
    { label: "البرامج", href: "#programs" },
    { label: "شهادات الطلاب", href: "#testimonials" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#ffffff] shadow-lg" : "bg-[#ffffff] backdrop-blur-sm shadow-sm"
      }`}
    >
      {/* Top Bar */}
    

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-15">
          {/* Logo */}
              <div className="flex items-center gap-3">
 <div className="flex items-center gap-3">
  <img 
    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSW77KgcVgR-ESCadIWyQ2JuAqCDskr3djN1kUHxhkY1RIpm7-t" 
    alt="شعار المنصة" 
    className="w-15 h-14" 
    style={{ objectFit: "contain" }}
  />
</div>
</div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-white transition-all duration-200 text-sm font-semibold relative group"
                style={{ fontFamily: "Cairo, sans-serif" }}
              >
                <span className="relative z-10">{link.label}</span>
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ backgroundColor: "#0d2b5e" }}
                />
              </a>
            ))}
          </nav>
          

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#consultation"
              className="px-5 py-2.5 rounded-xl text-white text-sm font-bold transition-all duration-200 hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: "#0e2575" }}
            >
              احجز استشارة مجانية
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg  text-[#0e2575]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

    
        </div>

       
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white h-210 border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 rounded-xl text-[#0e2575]  hover:bg-blue-50 font-semibold text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#consultation"
                className="block text-center px-4 py-3 rounded-xl text-white font-bold"
                style={{ backgroundColor: "#0e2575" }}
                onClick={() => setIsMenuOpen(false)}
              >
                احجز استشارة مجانية
              </a>
            </div>
          </div>
        </div>
      )}

      
    </header>
  );
}

import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { StatsSection } from "../components/StatsSection";
import { AboutSection } from "../components/AboutSection";
import { ProgramsSection } from "../components/ProgramsSection";
import { ConsultationCTA } from "../components/ConsultationCTA";
import { EventsSection } from "../components/EventsSection";
import { TeamSection } from "../components/TeamSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { BlogSection } from "../components/BlogSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" dir="rtl" style={{ fontFamily: "Cairo, Tajawal, sans-serif" }}>
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProgramsSection />
      <ConsultationCTA />
      {/* <EventsSection /> */}
      {/* <TeamSection /> */}
      <TestimonialsSection />
      {/* <BlogSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
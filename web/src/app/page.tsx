import AgentsGrid from "@/components/AgentsGrid";
import CTA from "@/components/CTA";
import DashboardPreview from "@/components/DashboardPreview";
import DebateMode from "@/components/DebateMode";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-fixed">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <AgentsGrid />
        <DebateMode />
        <DashboardPreview />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

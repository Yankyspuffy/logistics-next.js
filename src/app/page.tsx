import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsMarquee from "@/components/StatsMarquee";
import Services from "@/components/Services";
import DataBar from "@/components/DataBar";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white overflow-hidden relative">
      <Header />
      <Hero />
      <StatsMarquee />
      <Services />
      <DataBar />
      <Footer />
      <Chatbot />
    </main>
  );
}

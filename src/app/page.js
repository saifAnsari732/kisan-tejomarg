
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMission from '../components/AboutMission';
import TrueVoices from '../components/TrueVoices';
import Testimonials from '../components/Testimonials';
import ReviewCards from '../components/ReviewCards';
import JoinCommunity from '../components/JoinCommunity';
import Footer from '../components/Footer';
import DailyDevotion from '../components/DailyDevotion';


export default function Home() {
  return (
    <main className="text-center">
      <Navbar />
      <Hero />
      <AboutMission />
      <TrueVoices />
      <Testimonials />
      <ReviewCards />
      <DailyDevotion />
      <JoinCommunity />
      <Footer />
    </main>
  );
}

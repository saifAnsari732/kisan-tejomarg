import './components.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMission from '../components/AboutMission';
import TrueVoices from '../components/TrueVoices';
import Testimonials from '../components/Testimonials';
import JoinCommunity from '../components/JoinCommunity';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMission />
      <Testimonials />
      <TrueVoices />
      <JoinCommunity />
      <Footer />
    </main>
  );
}

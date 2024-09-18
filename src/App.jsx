import './App.css'
import Experience from './components/Experience'
import Header from './components/Header'
import { Carousel } from './components/Carousel';
import { ContactUs } from './components/ContactUs';
import { FeedBack } from './components/FeedBack';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { WhatsApp } from './components/WhatsApp';

function App() {

  useEffect(() => {
    const initAos = async () => {
      await import('aos')
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-center'
      })
    };
    initAos();
  }, [])



  return (
    <main>
      <Header />
      <Carousel />
      <section id="about">
        <Experience />
        <WhyChooseUs />
      </section>
      <section id="services">
        <Services />
        <FAQ />
      </section>
      <section id="feedback">
        <FeedBack />
      </section>
      <section id="contact-us">
        <ContactUs />
      </section>
      <WhatsApp />
      <Footer />
    </main>
  )
}

export default App

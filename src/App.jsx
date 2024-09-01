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

function App() {


  return (
    <main>
      <Header />
      <Carousel />
      <Experience />
      <WhyChooseUs/>
      <Services/>
      <FAQ/>
      <FeedBack />
      <ContactUs />
      <Footer />
    </main>
  )
}

export default App

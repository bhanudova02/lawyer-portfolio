import './App.css'
import Experience from './components/Experience'
import Header from './components/Header'

import { Carousel } from './components/Carousel';
import { ContactUs } from './components/ContactUs';
import { Example } from './components/Example';
import { Footer } from './components/Footer';

function App() {


  return (
    <main>
      <Header />
      <Carousel />
      <Experience />
      <Example />
      <ContactUs />
      <Footer />
    </main>
  )
}

export default App

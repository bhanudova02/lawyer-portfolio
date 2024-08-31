import { useEffect } from 'react';
import './App.css'
import Experience from './components/Experience'
import Header from './components/Header'
import { Slider } from './components/Slider'

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    const initAos = async () => {
      await import('aos')
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        // anchorPlacement: 'top-center'
      })
    };
    initAos();
  }, []);

  return (
    <main>
      <Header />
      <Slider />
      <div className="mt-8 w-[90%] md:w-[80%] lg:max-w-6xl mx-auto space-y-10">
        <Experience />
        <div>

        </div>
      </div>
    </main>
  )
}

export default App

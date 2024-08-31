import './App.css'
import Experience from './components/Experience'
import Header from './components/Header'

import { Carousel } from './components/Carousel';

function App() {


  return (
    <main>
      <Header />
      <Carousel />
      <div className="mt-8 w-[90%] md:w-[80%] lg:max-w-6xl mx-auto space-y-10">
        <Experience />
        <div>

        </div>
      </div>
    </main>
  )
}

export default App

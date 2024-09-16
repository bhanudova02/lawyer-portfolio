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
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { LoginComponent } from './components/LoginComponent';
import { SignUpComponent } from './components/SignUpComponent';
import { VerifySignUp } from './components/VerifySignUp';
import { ForgotPassword } from './components/ForgotPassword';
import { ResetPassword } from './components/ResetPassword';

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

  const [cookies] = useCookies(['tokenId']);
  const navigate = useNavigate();

  useEffect(() => {
    const restrictedPaths = ['login', 'signup', 'verify_signup', 'mobile', 'forgot', 'reset_pass'];
    const currentPath = window.location.pathname.split('/')[1]; // Get the current path

    if (cookies.tokenId && restrictedPaths.includes(currentPath)) {
      navigate('/'); // Redirect to the home page
    }
  }, [cookies, navigate]);

  return (
    <main>
      <Routes>
        <Route path="/" element={<div>
          <Header />
          <Carousel />
          <WhatsApp />
          <Experience />
          <WhyChooseUs />
          <Services />
          <FAQ />
          <FeedBack />
          <ContactUs />
          <Footer />
        </div>} />
        <Route path="login" element={<LoginComponent />} />
        <Route path="signup" element={<SignUpComponent />} />
        <Route path="verify_signup" element={<VerifySignUp />} />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route path="reset_pass" element={<ResetPassword />} />
        <Route path="*" element={<div className='mt-20 '>
          <h2 className='text-3xl text-red-600 font-bold text-center pt-20'>Invalid Page</h2>
        </div>} />
      </Routes>

    </main>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import CookieConsent from 'react-cookie-consent'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeComplete from './pages/HomeComplete'
import Insights from './pages/Insights'
import BlogPost from './pages/BlogPost'
import About from './pages/About'
import ThankYou from './pages/ThankYou'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import './App.css'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-[#0A192F]">
          <Header />
        
        <Routes>
          <Route path="/" element={<HomeComplete />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>

        <Footer />

        {/* GDPR Cookie Consent Banner */}
        <CookieConsent
          location="bottom"
          buttonText="Accept All Cookies"
          declineButtonText="Decline"
          enableDeclineButton
          cookieName="martintamm-cookie-consent"
          style={{
            background: '#111827',
            borderTop: '1px solid #374151',
            padding: '20px',
            alignItems: 'center'
          }}
          buttonStyle={{
            background: 'linear-gradient(135deg, #6366F1, #34D399)',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer'
          }}
          declineButtonStyle={{
            background: 'transparent',
            color: '#9CA3AF',
            fontSize: '14px',
            padding: '12px 24px',
            borderRadius: '8px',
            border: '1px solid #374151',
            cursor: 'pointer'
          }}
          expires={365}
        >
          <span style={{ color: '#F3F4F6', fontSize: '14px' }}>
            This website uses cookies to enhance your browsing experience and analyze site traffic. 
            By clicking "Accept All Cookies", you consent to the use of cookies as described in our{' '}
            <Link 
              to="/privacy-policy" 
              style={{ color: '#6366F1', textDecoration: 'underline' }}
            >
              Privacy Policy
            </Link>.
          </span>
        </CookieConsent>
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App

import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-[#111827] border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-[#6366F1] transition-colors">
                Home
              </Link>
              <Link to="/insights" className="block text-gray-400 hover:text-[#6366F1] transition-colors">
                Insights
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-[#6366F1] transition-colors">
                About
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>
                Email:{' '}
                <a 
                  href="mailto:martin.t-amm@live.com" 
                  className="text-[#6366F1] hover:text-[#34D399] transition-colors"
                >
                  martin.t-amm@live.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a 
                  href="tel:+37256808182" 
                  className="text-[#6366F1] hover:text-[#34D399] transition-colors"
                >
                  +372 56808182
                </a>
              </p>
              <p>
                LinkedIn:{' '}
                <a 
                  href="https://linkedin.com/in/martintamm" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6366F1] hover:text-[#34D399] transition-colors"
                >
                  Connect with me
                </a>
              </p>
            </div>
          </div>

          {/* Legal & About */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <div className="space-y-2 mb-4">
              <Link 
                to="/privacy-policy" 
                className="block text-gray-400 hover:text-[#6366F1] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="block text-gray-400 hover:text-[#6366F1] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              AI & Data Analysis Consultant helping businesses transform data into revenue.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 Martin Tamm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

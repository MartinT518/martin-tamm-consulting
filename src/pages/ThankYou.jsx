import { motion } from 'framer-motion';
import { CheckCircle, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function ThankYou() {
  // Auto-download PDF on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/downloads/ai-ready-checklist.pdf';
      link.download = 'AI-Ready-Checklist-Martin-Tamm.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#111827]">
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mb-8"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>

          {/* Thank You Message */}
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Thank You!
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Your AI-Ready Checklist is on its way
          </p>

          {/* Download Info */}
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Download className="w-6 h-6 text-blue-400" />
              <p className="text-lg text-gray-300">
                Your download should start automatically
              </p>
            </div>
            <p className="text-gray-400 mb-6">
              If it doesn't start, click the button below:
            </p>
            <a
              href="/downloads/ai-ready-checklist.pdf"
              download="AI-Ready-Checklist-Martin-Tamm.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              <Download className="w-5 h-5" />
              Download Checklist
            </a>
          </div>

          {/* What's Next */}
          <div className="text-left bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl p-8 border border-blue-500/20 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">What's Next?</h2>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-start gap-3">
                <span className="text-green-400 font-bold">1.</span>
                <span>Review the 10-point checklist and assess your organization's AI readiness</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-400 font-bold">2.</span>
                <span>Identify gaps and opportunities in your current data infrastructure</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-400 font-bold">3.</span>
                <span>Schedule a free 45-minute AI Opportunity Audit to discuss your specific needs</span>
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Schedule Your Free Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/insights"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all"
            >
              Read More Insights
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-gray-400">
            <p className="mb-2">
              You'll also receive occasional insights about AI and data analysis.
            </p>
            <p className="text-sm">
              You can unsubscribe at any time. See our{' '}
              <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

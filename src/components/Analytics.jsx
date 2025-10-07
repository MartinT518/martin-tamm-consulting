import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics tracking component
// To activate: Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics ID

const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID'; // Replace with your GA4 Measurement ID (e.g., 'G-XXXXXXXXXX')

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Only track if GA is properly configured
    if (GA_MEASUREMENT_ID !== 'GA_MEASUREMENT_ID' && typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  // Load Google Analytics script
  useEffect(() => {
    if (GA_MEASUREMENT_ID !== 'GA_MEASUREMENT_ID') {
      // Add GA script to head
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script1);

      // Initialize GA
      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
        });
      `;
      document.head.appendChild(script2);

      return () => {
        // Cleanup
        document.head.removeChild(script1);
        document.head.removeChild(script2);
      };
    }
  }, []);

  return null; // This component doesn't render anything
}

// Helper function to track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (GA_MEASUREMENT_ID !== 'GA_MEASUREMENT_ID' && typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Common event tracking functions
export const trackFormSubmit = (formName) => {
  trackEvent('form_submit', {
    form_name: formName,
  });
};

export const trackDownload = (fileName) => {
  trackEvent('file_download', {
    file_name: fileName,
  });
};

export const trackOutboundLink = (url) => {
  trackEvent('click', {
    event_category: 'outbound',
    event_label: url,
  });
};

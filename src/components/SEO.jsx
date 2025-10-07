import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "Martin Tamm | AI & Data Analysis Consultant",
  description = "Transform your business data into revenue with expert AI and data analysis consulting. Specializing in predictive analytics, automation, and business intelligence for C-level executives.",
  keywords = "AI consultant, data analysis, business intelligence, machine learning, predictive analytics, data-driven decisions, automation, Estonia",
  ogImage = "/og-image.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  canonicalUrl
}) {
  const siteUrl = "https://martintamm.com"; // Replace with actual domain
  const fullUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : siteUrl);
  const fullTitle = title.includes('Martin Tamm') ? title : `${title} | Martin Tamm`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Martin Tamm" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Martin Tamm Consulting" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:creator" content="@martintamm" /> {/* Replace with actual Twitter handle */}

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Martin Tamm Consulting",
          "description": description,
          "url": siteUrl,
          "telephone": "+372-56808182",
          "email": "martin.t-amm@live.com",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "EE"
          },
          "founder": {
            "@type": "Person",
            "name": "Martin Tamm",
            "jobTitle": "AI & Data Analysis Consultant",
            "email": "martin.t-amm@live.com",
            "telephone": "+372-56808182"
          },
          "sameAs": [
            "https://linkedin.com/in/martintamm"  // Replace with actual LinkedIn
          ],
          "areaServed": {
            "@type": "Country",
            "name": "Estonia"
          },
          "serviceType": ["AI Consulting", "Data Analysis", "Business Intelligence", "Machine Learning", "Predictive Analytics"]
        })}
      </script>
    </Helmet>
  );
}

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, TrendingUp, Mail, Phone, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  // Placeholder data - replace with real information
  const experience = [
    {
      year: '2020 - Present',
      title: 'Senior AI & Data Analysis Consultant',
      company: 'Independent',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Helping businesses transform data into actionable insights and competitive advantages.'
    },
    {
      year: '2018 - 2020',
      title: 'Data Science Lead',
      company: '[Company Name]',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Led data science initiatives and built predictive models for business optimization.'
    },
    {
      year: '2015 - 2018',
      title: 'Business Intelligence Analyst',
      company: '[Company Name]',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Developed dashboards and analytics solutions for executive decision-making.'
    }
  ];

  const education = [
    {
      degree: '[Your Degree]',
      institution: '[Your University]',
      year: '[Year]',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  const certifications = [
    '[Certification 1]',
    '[Certification 2]',
    '[Certification 3]'
  ];

  const skills = [
    { category: 'AI & Machine Learning', items: ['Python', 'TensorFlow', 'Scikit-learn', 'XGBoost'] },
    { category: 'Data Analysis', items: ['SQL', 'Pandas', 'NumPy', 'Statistical Analysis'] },
    { category: 'Visualization', items: ['Tableau', 'Power BI', 'Matplotlib', 'Plotly'] },
    { category: 'Business', items: ['Strategy', 'Process Optimization', 'Change Management', 'Stakeholder Communication'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#111827]">
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-5xl font-bold">
            MT
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Martin Tamm
          </h1>
          <p className="text-2xl text-gray-300 mb-6">
            AI & Data Analysis Consultant
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="mailto:martin.t-amm@live.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="tel:+37256808182"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all"
            >
              <Phone className="w-5 h-5" />
              +372 56808182
            </a>
            <a
              href="https://linkedin.com/in/[your-profile]"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* About Me */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
            About Me
          </h2>
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <p className="text-gray-300 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-blue-400" />
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
                <div className="flex flex-wrap items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                    <p className="text-blue-400">{job.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm">{job.year}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-green-400" />
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-1">{edu.degree}</h3>
                  <p className="text-green-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.year}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-yellow-400" />
              Certifications
            </h2>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        </div>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-blue-400" />
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Personal Interests */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Beyond Work</h2>
          <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl p-8 border border-blue-500/20">
            <p className="text-gray-300 leading-relaxed mb-4">
              When I'm not helping businesses transform their data, you'll find me analyzing my own—tracking every run, every heartbeat, every mile. 
              My passion for running mirrors my approach to business analytics: obsessive attention to metrics, continuous optimization, and relentless pursuit of improvement.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Just as I use wearable data to shave seconds off my personal records, I help businesses use their data to gain competitive advantages that matter.
            </p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center p-12 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl border border-blue-500/20"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to transform your data into revenue? Book a complimentary 45-minute AI Opportunity Audit.
          </p>
          <Link
            to="/#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Schedule Your Free Audit →
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

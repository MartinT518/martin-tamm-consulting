import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, TrendingUp, Mail, Phone, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const experience = [
    {
      year: 'May 2023 - Present',
      title: 'Senior Analyst',
      company: 'Cybernetica',
      location: 'Tartumaa, Estonia',
      description: 'Leading Business/System Analyst role within the Centralized Clearance for Import (CCI) project. Analyzing and refining business requirements, developing comprehensive system specifications, conducting in-depth data analysis to support informed decision-making, and leading testing and implementation efforts to ensure seamless integration of new functionalities.'
    },
    {
      year: 'December 2022 - February 2024',
      title: 'Data Analyst',
      company: 'Piletilevi Group',
      location: 'Estonia',
      description: 'Power BI data analysis including reporting requirement analysis, DAX rules development, data transformation, and SQL query compiling to deliver actionable business insights.'
    },
    {
      year: 'May 2021 - May 2023',
      title: 'Project Business Analyst',
      company: 'Ridango',
      location: 'Tallinn, Harjumaa, Estonia',
      description: 'Analysis of development tasks in cooperation with product managers, developers and testers. Consulting customers and defining their needs into technical analysis documentation. Product improvement analysis and roadmap development for back-office, real-time, customer web, devices, and integrations.'
    },
    {
      year: 'June 2019 - May 2021',
      title: 'Business System Analyst',
      company: 'Icefire',
      location: 'Estonia',
      description: 'Collected and defined functional requirements, modeled complex business processes, led requirements analysis and verification processes, developed solution architecture with IT architects, and created comprehensive documentation including user stories, use cases, and process diagrams. Key projects included bank business data model, SKAIS2 architecture, and X-road Elering biofuel integration analysis.'
    },
    {
      year: 'February 2018 - June 2020',
      title: 'Lead IT System Analyst',
      company: 'Finestmedia AS',
      location: 'Estonia',
      description: 'Participated in software development projects as lead analyst, advising development teams in e-commerce field. Responsible for requirements mapping of software solutions including mock-up prototype plans, customer consulting and change management, and analysis process mapping and development planning. Led projects including InRiver, Akeneo, nopCommerce, EpiServer, ERP (NAV, Directo, Axapta) system e-commerce analysis for Java, .NET, and PHP based projects.'
    },
    {
      year: 'October 2016 - February 2018',
      title: 'IT System Analyst',
      company: 'Finestmedia AS',
      location: 'Estonia',
      description: 'System analysis and requirements documentation for e-commerce solutions and enterprise integrations.'
    },
    {
      year: 'March 2015 - October 2016',
      title: 'Supply Process & IT Support Agent (MES Team Lead)',
      company: 'Ericsson',
      location: 'Estonia',
      description: 'Global support for 18 MES applications in development, issue investigation, tracking, and implementation. Data analyzing and report preparation for production sites. Business intelligence (BI) production and end user support, trainings and development. Setting up and implementing Jaipur factory production management system and support workflow. MES application support team lead and team builder.'
    },
    {
      year: 'May 2013 - February 2015',
      title: 'MES Engineer',
      company: 'Ericsson',
      location: 'Estonia',
      description: 'MES system local support including development, data analyzing, report preparations, and trainings.'
    }
  ];

  const education = [
    {
      degree: 'Doctor of Philosophy - PhD, Information Technology',
      institution: 'Tallinn University of Technology (TalTech)',
      year: 'January 2025 (Expected)',
      description: 'Advanced research in information technology and intelligent systems.'
    },
    {
      degree: 'Master\'s Degree, Business IT (Data Analysis & Intelligent Systems)',
      institution: 'Tallinn University of Technology (TalTech)',
      year: 'September 2020 - July 2026',
      description: 'Specialized in data analysis, business intelligence, and intelligent systems for business applications.'
    },
    {
      degree: 'Master\'s Degree, Product Development and Production Technologies',
      institution: 'Tallinn University of Technology (TalTech)',
      year: '2014 - 2016',
      description: 'Focus on manufacturing systems, production optimization, and technology management.'
    },
    {
      degree: 'Bachelor of Applied Science (BASc), Engineering Materials and Marketing',
      institution: 'Tallinn University of Applied Sciences',
      year: '2010 - 2014',
      description: 'Interdisciplinary program combining engineering principles with business and marketing fundamentals.'
    }
  ];

  const certifications = [
    'InRiver Business Consultant Certificate',
    'English Language B2 Level Certificate'
  ];

  const skills = [
    { 
      category: 'Business Analysis', 
      items: ['Requirements Analysis', 'Process Modeling', 'System Specifications', 'Stakeholder Management', 'Agile Methodologies'] 
    },
    { 
      category: 'Data Analysis & BI', 
      items: ['Power BI', 'DAX', 'SQL', 'Data Transformation', 'Reporting', 'Business Intelligence'] 
    },
    { 
      category: 'Technical Skills', 
      items: ['PHP', '.NET', 'Java', 'System Architecture', 'Integration Analysis', 'E-commerce Solutions'] 
    },
    { 
      category: 'Leadership & Management', 
      items: ['Team Leadership', 'Project Management', 'Change Management', 'Customer Consulting', 'Development Facilitation'] 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#111827]">
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
            System & Business Analyst | AI Enthusiast
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            100% AI enthusiast/NERD, bridging business and technology. Expert in E-Government, E-Commerce, and Banking with 9 years of experience 
            transforming complex business requirements into effective technical solutions across multiple industries.
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
              href="https://www.linkedin.com/in/mtamm"
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
              As a system and business analyst with 9 years of experience, I've had the opportunity to work on a wide range of projects across 
              industries such as e-commerce, banking, smart manufacturing, smart public transportation, and public sector. My expertise spans 
              across multiple programming languages including PHP, .NET, and Java.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              I have a knack for identifying the root cause of system issues and delivering effective solutions that meet business requirements. 
              In addition to my technical skills, I'm well-versed in agile methodologies and have experience facilitating development standups 
              and grooming sessions.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              I hold a master's degree in mechanical engineering, and I'm currently pursuing a second master's degree in business information systems 
              and a PhD in Information Technology. My passion for both the technical and business aspects of systems analysis drives me to continuously 
              learn and develop my skillset.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I take pride in my ability to collaborate with cross-functional teams to deliver projects on time and within budget. If you're looking 
              for a results-driven system and business analyst, let's connect.
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
                    {job.location && <p className="text-gray-500 text-sm">{job.location}</p>}
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
            
            {/* Languages Section */}
            <div className="mt-6 bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Languages</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Estonian (Native or Bilingual)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>English (Professional Working Proficiency)</span>
                </li>
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
    </div>
  );
}


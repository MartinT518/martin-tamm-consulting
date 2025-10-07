import { motion } from 'framer-motion'

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last updated: October 7, 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Martin Tamm ("I", "me", or "my") operates the website martintamm.com (the "Service"). This page informs you of my policies regarding the collection, use, and disclosure of personal data when you use my Service and the choices you have associated with that data.
              </p>
              <p className="leading-relaxed mt-4">
                I use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. This Privacy Policy complies with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information Collection and Use</h2>
              <p className="leading-relaxed mb-4">
                I collect several different types of information for various purposes to provide and improve my Service to you.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">Types of Data Collected:</h3>
              
              <h4 className="text-lg font-semibold text-[#6366F1] mb-2">Personal Data</h4>
              <p className="leading-relaxed mb-4">
                While using my Service, I may ask you to provide me with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Company name and job title (if provided)</li>
                <li>Cookies and Usage Data</li>
              </ul>

              <h4 className="text-lg font-semibold text-[#6366F1] mb-2 mt-6">Usage Data</h4>
              <p className="leading-relaxed">
                I may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (IP address), browser type, browser version, the pages of my Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
              </p>

              <h4 className="text-lg font-semibold text-[#6366F1] mb-2 mt-6">Tracking & Cookies Data</h4>
              <p className="leading-relaxed">
                I use cookies and similar tracking technologies to track activity on my Service and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of my Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Use of Data</h2>
              <p className="leading-relaxed mb-4">
                I use the collected data for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide and maintain my Service</li>
                <li>To notify you about changes to my Service</li>
                <li>To allow you to participate in interactive features of my Service when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that I can improve my Service</li>
                <li>To monitor the usage of my Service</li>
                <li>To detect, prevent and address technical issues</li>
                <li>To provide you with news, special offers and general information about other services which I offer that are similar to those that you have already purchased or enquired about, unless you have opted not to receive such information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Legal Basis for Processing Personal Data (GDPR)</h2>
              <p className="leading-relaxed mb-4">
                If you are from the European Economic Area (EEA), my legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Data I collect and the specific context in which I collect it.
              </p>
              <p className="leading-relaxed mb-4">
                I may process your Personal Data because:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>I need to perform a contract with you</li>
                <li>You have given me permission to do so</li>
                <li>The processing is in my legitimate interests and it's not overridden by your rights</li>
                <li>To comply with the law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention</h2>
              <p className="leading-relaxed">
                I will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. I will retain and use your Personal Data to the extent necessary to comply with my legal obligations (for example, if I am required to retain your data to comply with applicable laws), resolve disputes, and enforce my legal agreements and policies.
              </p>
              <p className="leading-relaxed mt-4">
                I will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of my Service, or I am legally obligated to retain this data for longer time periods.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Transfer of Data</h2>
              <p className="leading-relaxed">
                Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
              </p>
              <p className="leading-relaxed mt-4">
                Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer. I will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Disclosure of Data</h2>
              <p className="leading-relaxed mb-4">
                I may disclose your Personal Data in the good faith belief that such action is necessary to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To comply with a legal obligation</li>
                <li>To protect and defend my rights or property</li>
                <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>To protect the personal safety of users of the Service or the public</li>
                <li>To protect against legal liability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Security of Data</h2>
              <p className="leading-relaxed">
                The security of your data is important to me, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While I strive to use commercially acceptable means to protect your Personal Data, I cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Your Data Protection Rights (GDPR)</h2>
              <p className="leading-relaxed mb-4">
                If you are a resident of the European Economic Area (EEA), you have certain data protection rights. I aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
              </p>
              <p className="leading-relaxed mb-4">
                You have the following data protection rights:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
                <li><strong>The right to rectification:</strong> You have the right to request that I correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                <li><strong>The right to erasure:</strong> You have the right to request that I erase your personal data, under certain conditions.</li>
                <li><strong>The right to restrict processing:</strong> You have the right to request that I restrict the processing of your personal data, under certain conditions.</li>
                <li><strong>The right to object to processing:</strong> You have the right to object to my processing of your personal data, under certain conditions.</li>
                <li><strong>The right to data portability:</strong> You have the right to request that I transfer the data that I have collected to another organization, or directly to you, under certain conditions.</li>
              </ul>
              <p className="leading-relaxed mt-4">
                If you make a request, I have one month to respond to you. If you would like to exercise any of these rights, please contact me at the email address provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Service Providers</h2>
              <p className="leading-relaxed">
                I may employ third party companies and individuals to facilitate my Service ("Service Providers"), to provide the Service on my behalf, to perform Service-related services or to assist me in analyzing how my Service is used. These third parties have access to your Personal Data only to perform these tasks on my behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Links to Other Sites</h2>
              <p className="leading-relaxed">
                My Service may contain links to other sites that are not operated by me. If you click on a third party link, you will be directed to that third party's site. I strongly advise you to review the Privacy Policy of every site you visit. I have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Children's Privacy</h2>
              <p className="leading-relaxed">
                My Service does not address anyone under the age of 18 ("Children"). I do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided me with Personal Data, please contact me. If I become aware that I have collected Personal Data from children without verification of parental consent, I take steps to remove that information from my servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                I may update my Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Contact Me</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact me:
              </p>
              <div className="bg-[#111827] border border-gray-800 rounded-lg p-6">
                <p className="mb-2">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:martin.t-amm@live.com" className="text-[#6366F1] hover:text-[#34D399]">
                    martin.t-amm@live.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+37256808182" className="text-[#6366F1] hover:text-[#34D399]">
                    +372 56808182
                  </a>
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

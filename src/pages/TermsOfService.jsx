import { motion } from 'framer-motion'

function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-400 mb-8">Last updated: October 7, 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p className="leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of the website martintamm.com (the "Service") operated by Martin Tamm ("I", "me", or "my"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              <p className="leading-relaxed">
                The Service provides information about AI and data analysis consulting services, including but not limited to business process automation, data-driven decision making, and AI implementation strategies. The Service also includes a blog section with insights and articles related to these topics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Use of Service</h2>
              
              <h3 className="text-xl font-semibold text-[#6366F1] mb-3">Eligibility</h3>
              <p className="leading-relaxed mb-4">
                You must be at least 18 years old to use this Service. By using the Service, you represent and warrant that you are at least 18 years of age.
              </p>

              <h3 className="text-xl font-semibold text-[#6366F1] mb-3">Acceptable Use</h3>
              <p className="leading-relaxed mb-4">
                You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the Service in any way that violates any applicable national or international law or regulation</li>
                <li>Transmit, or procure the sending of, any advertising or promotional material without my prior written consent</li>
                <li>Impersonate or attempt to impersonate me, another user, or any other person or entity</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
                <li>Use any robot, spider, or other automatic device to access the Service for any purpose without my express written permission</li>
                <li>Introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-[#6366F1] mb-3">Ownership</h3>
              <p className="leading-relaxed mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive property of Martin Tamm. The Service is protected by copyright, trademark, and other laws of both Estonia and foreign countries. My trademarks and trade dress may not be used in connection with any product or service without my prior written consent.
              </p>

              <h3 className="text-xl font-semibold text-[#6366F1] mb-3">Limited License</h3>
              <p className="leading-relaxed">
                Subject to your compliance with these Terms, I grant you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Service for your personal, non-commercial use only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. User Content</h2>
              <p className="leading-relaxed mb-4">
                The Service may allow you to submit, post, or transmit content, including but not limited to text, messages, and other materials ("User Content"). By submitting User Content to the Service, you grant me a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such User Content in connection with operating and providing the Service.
              </p>
              <p className="leading-relaxed">
                You represent and warrant that: (i) you own or control all rights to the User Content; (ii) the User Content is accurate; and (iii) use of the User Content does not violate these Terms and will not cause injury to any person or entity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Consulting Services</h2>
              
              <h3 className="text-xl font-semibold text-[#6366F1] mb-3">No Professional Relationship</h3>
              <p className="leading-relaxed mb-4">
                The information provided through the Service is for general informational purposes only. Viewing the Service or contacting me through the Service does not create a professional consulting relationship between you and me.
              </p>

              <h3 className="text-xl font-semibold text-[#6366F1] mb-3">Engagement Terms</h3>
              <p className="leading-relaxed">
                Any consulting services provided by me will be subject to a separate written agreement between you and me. The terms of any such agreement will supersede these Terms with respect to the consulting services provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Links</h2>
              <p className="leading-relaxed">
                The Service may contain links to third-party websites or services that are not owned or controlled by me. I have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that I shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Disclaimer of Warranties</h2>
              <p className="leading-relaxed mb-4">
                THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER I NOR ANY PERSON ASSOCIATED WITH ME MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICE.
              </p>
              <p className="leading-relaxed">
                WITHOUT LIMITING THE FOREGOING, NEITHER I NOR ANYONE ASSOCIATED WITH ME REPRESENTS OR WARRANTS THAT THE SERVICE WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE SERVICE WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
              <p className="leading-relaxed">
                IN NO EVENT WILL I, MY AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICE, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to defend, indemnify, and hold harmless me and my affiliates, licensors, and service providers, and my and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law and Jurisdiction</h2>
              <p className="leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of Estonia, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in Estonia, and you hereby irrevocably consent to personal jurisdiction and venue therein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
              <p className="leading-relaxed">
                I reserve the right, at my sole discretion, to modify or replace these Terms at any time. If a revision is material, I will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at my sole discretion. By continuing to access or use the Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Termination</h2>
              <p className="leading-relaxed">
                I may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Severability</h2>
              <p className="leading-relaxed">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">15. Waiver</h2>
              <p className="leading-relaxed">
                No waiver by me of any term or condition set forth in these Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">16. Entire Agreement</h2>
              <p className="leading-relaxed">
                These Terms constitute the entire agreement between you and me regarding the use of the Service and supersede all prior and contemporaneous written or oral agreements between you and me.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">17. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions about these Terms, please contact me:
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

export default TermsOfService

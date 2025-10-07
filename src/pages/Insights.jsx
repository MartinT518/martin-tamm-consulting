import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import SEO from '../components/SEO'

function Insights() {

  return (
    <>
      <SEO 
        title="Insights & Articles"
        description="Practical insights on AI implementation, data analysis, and business automation from real-world projects. Learn how to transform data into competitive advantages."
        keywords="AI insights, data analysis articles, business automation, machine learning tutorials, predictive analytics guide"
      />
      <div className="min-h-screen bg-[#0A192F] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#34D399]">Articles</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Practical insights on AI implementation, data analysis, and business automation from real-world projects.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        {blogPosts.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-6xl mb-6">📝</div>
            <h2 className="text-3xl font-bold mb-4">No Insights Posted Yet</h2>
            <p className="text-xl text-gray-400 mb-8">Check back soon for practical insights on AI and data analysis!</p>
            <Link 
              to="/#contact"
              className="inline-block bg-[#6366F1] hover:bg-[#5558E3] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/insights/${post.slug}`}
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#111827] border border-gray-800 rounded-lg overflow-hidden hover:border-[#6366F1] transition-all duration-300 group cursor-pointer h-full"
              >
                {/* Featured Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#6366F1]/20 to-[#34D399]/20 flex items-center justify-center">
                  <div className="text-6xl opacity-20">📊</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold mb-3 group-hover:text-[#6366F1] transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center text-[#6366F1] font-semibold group-hover:text-[#34D399] transition-colors">
                    Read Article
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
        )}

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-[#111827] border border-gray-800 rounded-lg px-8 py-6">
            <p className="text-gray-400">
              📝 Full articles coming soon! Subscribe to my newsletter to get notified when new insights are published.
            </p>
            <Link 
              to="/#contact"
              className="inline-block mt-4 text-[#6366F1] hover:text-[#34D399] font-semibold transition-colors"
            >
              Get in Touch →
            </Link>
          </div>
        </motion.div>
       </div>
      </div>
    </>
  )
}
export default Insights

import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User, Share2, Linkedin, Twitter } from 'lucide-react';
import { getPostBySlug, getRelatedPosts } from '../data/blogPosts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const relatedPosts = post ? getRelatedPosts(slug) : [];

  // If post not found, redirect to insights page
  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  // Parse markdown-style content to JSX
  const renderContent = (content) => {
    const lines = content.trim().split('\n');
    const elements = [];
    let currentParagraph = [];

    lines.forEach((line, index) => {
      if (line.startsWith('# ')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-6 leading-relaxed">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(<h1 key={index} className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">{line.substring(2)}</h1>);
      } else if (line.startsWith('## ')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-6 leading-relaxed">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(<h2 key={index} className="text-3xl font-bold mt-12 mb-4 text-white">{line.substring(3)}</h2>);
      } else if (line.startsWith('### ')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-6 leading-relaxed">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(<h3 key={index} className="text-2xl font-semibold mt-8 mb-3 text-blue-300">{line.substring(4)}</h3>);
      } else if (line.startsWith('- ')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-6 leading-relaxed">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        // Collect list items
        const listItems = [line.substring(2)];
        let nextIndex = index + 1;
        while (nextIndex < lines.length && lines[nextIndex].startsWith('- ')) {
          listItems.push(lines[nextIndex].substring(2));
          nextIndex++;
        }
        elements.push(
          <ul key={`list-${index}`} className="mb-6 space-y-2 list-disc list-inside text-gray-300">
            {listItems.map((item, i) => (
              <li key={i} className="leading-relaxed">{item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>
            ))}
          </ul>
        );
      } else if (line.startsWith('---')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-6 leading-relaxed">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(<hr key={index} className="my-8 border-gray-700" />);
      } else if (line.trim() === '') {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-6 leading-relaxed text-gray-300">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
      } else if (line.startsWith('*') && line.endsWith('*')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-6 leading-relaxed">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(<p key={index} className="text-sm italic text-gray-400 mt-8">{line.substring(1, line.length - 1)}</p>);
      } else {
        currentParagraph.push(line);
      }
    });

    if (currentParagraph.length > 0) {
      elements.push(<p key="final-p" className="mb-6 leading-relaxed text-gray-300">{currentParagraph.join(' ')}</p>);
    }

    return elements;
  };

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category}, AI, data analysis, ${post.title}`}
        ogType="article"
      />
      <div className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#111827]">
        <Header />
      
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-8">
        <Link 
          to="/insights"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Insights
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-green-400 bg-clip-text text-transparent leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8 pb-8 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-gray-400 text-sm">Share:</span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-blue-400 rounded-lg transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {renderContent(post.content)}
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-gray-800/50 rounded-2xl border border-gray-700">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                MT
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">About {post.author}</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  AI & Data Analysis consultant specializing in revenue optimization and business automation. 
                  Helping C-level executives transform data into actionable insights and competitive advantages.
                </p>
                <Link 
                  to="/#contact"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Get in touch →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/insights/${relatedPost.slug}`}
                  className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all"
                >
                  <div className="mb-3">
                    <span className="text-xs text-blue-400 font-medium">{relatedPost.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{relatedPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{relatedPost.date}</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center p-12 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl border border-blue-500/20"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a complimentary 45-minute AI Opportunity Audit and discover how data-driven insights 
            can drive revenue and efficiency in your organization.
          </p>
          <Link
            to="/#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Schedule Your Free Audit →
          </Link>
        </motion.div>
      </article>

        <Footer />
      </div>
    </>
  );
}

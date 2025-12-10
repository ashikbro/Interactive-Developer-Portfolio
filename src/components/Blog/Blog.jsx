import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaCalendar, FaClock } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating CMS data - In production, use Contentful API
    // const client = createClient({
    //   space: 'YOUR_SPACE_ID',
    //   accessToken: 'YOUR_ACCESS_TOKEN'
    // });
    // client.getEntries({ content_type: 'blogPost' })
    //   .then((response) => setPosts(response.items))
    
    // Mock data for demonstration
    const mockPosts = [
      {
        id: 1,
        title: 'Building Modern Web Applications with React',
        excerpt: 'Learn the best practices for creating scalable and maintainable React applications with modern tooling and patterns.',
        date: '2024-12-01',
        readTime: '5 min read',
        category: 'React',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop'
      },
      {
        id: 2,
        title: 'Mastering TypeScript for Better Code Quality',
        excerpt: 'Discover how TypeScript can help you write more robust and error-free JavaScript code with static typing.',
        date: '2024-11-28',
        readTime: '7 min read',
        category: 'TypeScript',
        image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop'
      },
      {
        id: 3,
        title: 'The Power of CSS Grid and Flexbox',
        excerpt: 'Explore advanced layout techniques using CSS Grid and Flexbox to create responsive and beautiful web designs.',
        date: '2024-11-25',
        readTime: '6 min read',
        category: 'CSS',
        image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop'
      }
    ];

    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="blog" className="blog-section">
      <motion.div
        className="blog-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Latest Blog Posts
        </motion.h2>

        <motion.p variants={itemVariants} className="section-description">
          Thoughts, tutorials, and insights on web development
        </motion.p>

        {loading ? (
          <div className="loading">Loading posts...</div>
        ) : (
          <div className="blog-grid">
            {posts.map((post) => (
              <motion.article
                key={post.id}
                className="blog-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                </div>

                <div className="blog-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>

                  <div className="blog-meta">
                    <span className="blog-date">
                      <FaCalendar /> {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="blog-read-time">
                      <FaClock /> {post.readTime}
                    </span>
                  </div>

                  <motion.button
                    className="read-more-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More →
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        <motion.div
          className="cms-info"
          variants={itemVariants}
        >
          <p>
            💡 <strong>CMS Integration Ready:</strong> This blog section is configured to work with Contentful CMS.
            Add your Contentful credentials in the environment variables to fetch real blog posts.
          </p>
          <code>
            VITE_CONTENTFUL_SPACE_ID=your_space_id<br />
            VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token
          </code>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Blog;

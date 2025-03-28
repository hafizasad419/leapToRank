import { Link } from 'react-router-dom';
import { blogPosts } from './blogPosts';

const InsightsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-c-orange mb-12">
          Insights.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="flex flex-col h-full pt-4 rounded-lg shadow-md transition-all duration-500 transform hover:scale-[0.98] hover:shadow-lg"
            >
              <Link to={post.link} className="group">
                <div className="mb-4 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
                <div className="flex-grow px-4">
                  <div className="text-sm font-medium text-leap-gray mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-2xl font-bold text-c-blue mb-2 transition-colors group-hover:text-leap-red">
                    {post.title}
                  </h3>
                  <p className="text-lg text-leap-gray mb-4">
                    {post.description}
                  </p>
                </div>
                <div className="mt-auto px-4 pb-4">
                  <span className="text-xs text-leap-gray">{post.date}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;

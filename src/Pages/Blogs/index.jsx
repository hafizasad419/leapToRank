import FeaturedBlogCard from "../../Components/Blog/FeaturedBlogCard"
import StandardBlogCard from "../../Components/Blog/StandardBlogCard"
import { blogPosts1, blogPosts2, blogPosts3, blogPosts4 } from "./blogPosts"
import { featuredPost1, featuredPost2, featuredPost3, featuredPost4 } from "./featuredPosts"

const BlogList = () => {

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
            <h1 className="text-4xl lg:text-6xl font-bold text-c-orange mb-12">Our insights.</h1>

            {/* Featured Post */}
            <FeaturedBlogCard
                {...featuredPost1}
            />

            {/* Blog Grid */}
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts1?.map((post) => (
                    <StandardBlogCard key={post.id} {...post} />
                ))}
            </div>


            <FeaturedBlogCard
                {...featuredPost2}
            />



            <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts2?.map((post) => (
                    <StandardBlogCard key={post.id} {...post} />
                ))}
            </div>


            <FeaturedBlogCard
                {...featuredPost3}
            />


            <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts3?.map((post) => (
                    <StandardBlogCard key={post.id} {...post} />
                ))}
            </div>


            <FeaturedBlogCard
                {...featuredPost4}
            />



            <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts4?.map((post) => (
                    <StandardBlogCard key={post.id} {...post} />
                ))}
            </div>


        </div>
    )
}

export default BlogList


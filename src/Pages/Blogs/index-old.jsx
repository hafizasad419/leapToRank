import BlogPage from "../../Components/Blog/BlogPage"
import Heading from "../../Components/Blog/Heading"
import Subheading from "../../Components/Blog/Subheading"
import BlogText from "../../Components/Blog/BlogText"
import BlogImage from "../../Components/Blog/BlogImage"
import CalloutBox from "../../Components/Blog/CalloutBox"
import List from "../../Components/Blog/List"

const Blogs = () => {
  return (
    <BlogPage
      category="Email Marketing"
      title="How to master email deliverability"
      authorImage="/author-image.jpg"
    >
      <BlogText
      opening={true}
      content="Email deliverability is crucial for successful email marketing campaigns. Here's how to ensure your emails reach your audience's inbox." />

      <Heading text="Use a domain you own" />
      <BlogText content="Using your own domain for sending emails establishes credibility and improves deliverability rates." />

      <BlogImage
        src="/email-domain.jpg"
        alt="Email domain illustration"
        caption="A custom domain improves brand recognition and trust"
      />

      <Subheading text="Choose a premium email provider" />
      <BlogText content="Premium email service providers offer better deliverability rates and more features to optimize your email campaigns." />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        <img src="/amazon-ses.jpg" alt="Amazon SES" className="w-full" />
        <img src="/mailchimp.jpg" alt="Mailchimp" className="w-full" />
        <img src="/office-365.jpg" alt="Office 365" className="w-full" />
        <img src="/g-suite.jpg" alt="G Suite" className="w-full" />
      </div>

      <Subheading text="Use sub-domains to prevent email deliverability problems" />
      <BlogText content="Separating your marketing emails from transactional emails using sub-domains can help maintain good deliverability rates." />


      <List
      list={[
        "Use a domain you own",
        "Choose a premium email provider",
        "Separate your marketing emails from transactional emails using sub-domains",
        "Use a domain you own",
        "Choose a premium email provider",
        "Separate your marketing emails from transactional emails using sub-domains",
      ]}
      />

      <CalloutBox>
        <div className="text-center py-4">
          <h4 className="text-xl font-bold mb-2">WE LIKE YOU. TOO :)</h4>
          <p>Subscribe to our newsletter for more tips!</p>
        </div>
      </CalloutBox>

      <Heading text="Focus on engagement" />
      <BlogText content="High engagement rates signal to email providers that your content is valuable, improving your sender reputation." />

      <Subheading text="Clean up your list" />
      <BlogText content="Regularly remove inactive subscribers to maintain a healthy list and improve engagement metrics." />

      <Subheading text="Make unsubscribing easy" />
      <BlogText content="A clear unsubscribe option is not only legally required but also helps maintain a list of engaged subscribers." />

      <Subheading text="Give people a choice" />
      <BlogText content="Allow subscribers to choose the type and frequency of emails they receive to improve engagement and reduce unsubscribes." />
    </BlogPage>
  )
}

export default Blogs


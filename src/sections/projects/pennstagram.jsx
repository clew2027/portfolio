import NavBar from "../../components/NavBar";
import Footer from "../Footer";
import ImageSliderPenn from "../../components/ImageSliderPenn";

function Pennstagram() {
  return (
    <>
      <NavBar />
      <div className="pt-40 px-4 md:px-10 max-w-5xl mx-auto space-y-10">

        {/* Header */}
        <div> 
          <h1 className="text-3xl textgreen mb-2 font-epilogue">PENNSTAGRAM</h1>
          <h2 className="text-3xl textblack font-hedvig">A social media app built with real-time pipelines and intelligent ranking</h2>
        </div>

        <a 
            href="https://photos.app.goo.gl/NNYesb9nABjHvPHq5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center textblue hover:underline mt-2"
          >
            Demo Link
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-4 h-4 ml-1"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M17.25 6.75L6.75 17.25M17.25 6.75H9.75M17.25 6.75V14.25" 
              />
            </svg>
          </a>

        {/* Optional image slider */}
        {<ImageSliderPenn /> }

        {/* Summary Metadata */}
        <div className="border-t border-b border-gray-200 py-6 grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-y-0 text-left">
          <div>
            <p className="uppercase text-sm tracking-wide text-gray-500">Timeline</p>
            <p className="text-lg font-epilogue textblack">Apr 2025 — May 2025</p>
          </div>
          <div>
            <p className="uppercase text-sm tracking-wide text-gray-500">Platform</p>
            <p className="text-lg font-epilogue textblack">Full Stack Web App</p>
          </div>
          <div>
            <p className="uppercase text-sm tracking-wide text-gray-500">My Role</p>
            <p className="text-lg font-epilogue textblack">Backend Engineer</p>
          </div>
          <div>
            <p className="uppercase text-sm tracking-wide text-gray-500">Other Team Members</p>
            <p className="text-lg font-epilogue textblack">Olee Banerjee, Abigail Harris, Ceylin Erkan</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="textblack font-epilogue space-y-4 max-w-3xl mx-auto py-8">
          <p className="font-light">
            Pennstagram is a full-stack social media web application built by me and 3 other Penn students taking the class NETS2120. The app supports user profiles, content posting, chatting with friends, and personalized friend and post recommendations.
          </p>
          <p className="font-light">
            I focused on architecting and implementing the backend infrastructure for real-time and large-scale data processing, enabling the recommendation engine, post ingestion pipeline through kafka, and social ranking system through Apache Spark.
          </p>
        </div>


    

        {/* Feed Ranking Logic */}
<div className="max-w-10xl bg-[#f1f5f9] rounded-2xl shadow-md px-8 md:px-20 py-8 textblack">
  <h2 className="text-xl font-semibold textblack mb-6">Feed Ranking & Personalized Distribution</h2>
  <p className="font-light mb-4">
    Beyond showing a user’s own posts and those from friends, the Pennstagram feed intelligently surfaces public posts from users outside a friend’s circle, based on:
  </p>
  <ul className="list-disc ml-6 textblack font-light mb-4">
    <li>Shared hashtags with the viewer’s selected interests</li>
    <li>Posts from high SocialRank users (graph centrality)</li>
    <li>Federated posts streamed from the <code>Bluesky</code> Kafka topic</li>
  </ul>
  <p className="font-light mb-4">
    Every hour, our server triggers a full <strong>feed refresh</strong>, consuming the latest activity from Kafka and user interactions, and then runs a <strong>Spark-based ranking job</strong> to update post weights. This ensures the user can fetch a fully ranked feed at login with minimal latency.
  </p>
  <p className="font-light mb-4">
    We used a <strong> weighted random selection</strong> mechanism over the top-ranked new posts, balancing relevance and freshness.
  </p>

  <h3 className="text-lg font-semibold mt-8 mb-2">Graph Construction & Adsorption</h3>
  <p className="font-light mb-4">
    Our Spark job builds a social graph of users, hashtags, posts, and friendships with directional edges:
  </p>
  <ul className="list-disc ml-6 textblack font-light mb-4">
    <li><strong>Users ↔ Hashtags</strong> (selected interests)</li>
    <li><strong>Posts ↔ Hashtags</strong> (tag associations)</li>
    <li><strong>Users ↔ Posts</strong> (likes)</li>
    <li><strong>Users ↔ Users</strong> (friendship)</li>
  </ul>
  <p className="font-light mb-4">
    Each set of outgoing edges is weighted to sum to 1 (or to a portion of 1 for user edges: hashtags 0.3, posts 0.4, friends 0.3). The graph is passed into an <strong>adsorption algorithm</strong>, which runs up to 15 iterations or until convergence. This spreads influence from users to other graph entities and determines personalized content relevance.
  </p>
  <p className="font-light mb-4">
    The resulting weights are stored in our SQL database and used to generate user-specific feeds instantly after login.
  </p>

  <h3 className="text-lg font-semibold mt-8 mb-2">Federated Content via Kafka</h3>
  <p className="font-light mb-4">
    Through the <code>FederatedPosts</code> Kafka topic, we exchanged posts with other class projects. Our messages used a standardized JSON format:
  </p>
  <pre className="bg-gray-100 text-sm rounded-lg p-4 overflow-x-auto mb-4">
    {`{
  username: 'bob_bob',
  source_site: 'g07',
  post_uuid_within_site: 'abc123',
  post_text: 'Check out this movie!',
  content_type: 'text/plain',
  attach: 'https://s3.amazonaws.com/mybucket/photo.jpg'
}`}
  </pre>
  <p className="font-light">
    This integration allowed our site to both publish and consume content across the broader ecosystem of social platforms built by other students in NETS2120, enhancing reach and relevance.
  </p>
</div>
{/* AWS Infrastructure */}
<div className="max-w-10xl bg-[#ede5e1] rounded-2xl shadow-md px-8 md:px-20 py-8 textblack">
  <h2 className="text-xl font-semibold textblack mb-6">Scalable AWS Backend</h2>
  <p className="font-light mb-4">
    The backend stack was deployed on AWS and supported persistent data, media storage, and scheduled compute. Services included:
  </p>
  <ul className="list-disc ml-6 text-black font-light">
    <li><strong>EC2</strong> for hosting the Node.js + Express server</li>
    <li><strong>RDS</strong> for PostgreSQL-based storage of users, posts, hashtags, and graph weights</li>
    <li><strong>S3</strong> for media uploads, including images attached to Kafka federated posts</li>
  </ul>
  <p className="font-light mt-4">
    When a user uploads a photo with a post, it is stored in a public S3 bucket. The photo’s URL is then included in the Kafka message as an <code>attach</code> field. This allows other federated sites to access and render the image.
  </p>
  <p className="font-light mt-4">
    I also set up <strong>scheduled compute</strong> using <code>node-cron</code>, which triggers our Spark graph ranking job hourly. This orchestrated task ensures our recommendation weights stay fresh without overloading the system during peak usage.
  </p>
  <p className="font-light mt-4">
    I managed deployment, server orchestration, and load balancing across services to ensure a stable backend infrastructure that scaled with usage.
  </p>
</div>



        {/* Summary */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-medium textblack">Key Learnings</h2>
          <ul className="list-disc ml-6 textblack font-light">
            <li>Gained hands-on experience with Kafka and real-time data processing</li>
            <li>Used Spark to implement graph-based algorithms for ranking content</li>
            <li>Designed fault-tolerant AWS-backed infrastructure for production-level features</li>
            <li>Learned to coordinate backend architecture across multiple services and data layers</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pennstagram;

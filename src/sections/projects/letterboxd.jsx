import NavBar from "../../components/NavBar";
import Footer from "../Footer";
import ImageSliderL from "../../components/ImageSliderLetterboxd";

function LetterBoxd() {
    return (
      <>
        <NavBar />
        <div className="pt-40 px-4 md:px-10 max-w-5xl mx-auto space-y-10">
        <div>
          <h1 className="text-3xl textgreen mb-2 font-epilogue">LETTERBOXD REDESIGN</h1>
          <h2 className="text-3xl textblack font-hedvig">Refining user flow and boosting engagement through fun, friend-based features</h2>
          <a 
            href="https://www.figma.com/design/lGwveN5JpSP4N2Emb6DSnH/LetterBoxd?node-id=0-1&t=L5Ev7JAXtD4aNL25-1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center textblue hover:underline mt-2"
          >
            Prototype Link
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
        </div>

        <ImageSliderL/>

        <div className="border-t border-b border-gray-200 py-6 grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-0 text-left">
        {/* TIMELINE */}
        <div>
            <p className="uppercase text-sm tracking-wide text-gray-500">Timeline</p>
            <p className="text-lg font-epilogue textblack">Jan 2025 — Feb 2025</p>
        </div>

        {/* PLATFORM */}
        <div>
            <p className="uppercase text-sm tracking-wide text-gray-500">Platform</p>
            <p className="text-lg font-epilogue textblack">iOS, Android App</p>
        </div>

        {/* ROLE */}
        <div>
            <p className="uppercase text-sm tracking-wide text-gray-500">My Role</p>
            <p className="text-lg font-epilogue textblack">Designer</p>
        </div>
        </div>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto px-4 py-10 textblack font-epilogue">
        
        <p className="font-light">
        Letterboxd is a social platform for film lovers, allowing users to track, review, and discuss movies they've watched. Users can create personalized movie lists, write reviews, rate films, and follow other members to see their movie activity and recommendations. </p>
        </div>
        <div className="max-w-3xl mx-auto px-4 py-10 textblack font-epilogue">

        <h2 className="text-2xl font-semibold textgreen mb-8">Mapping it out</h2>
        <p className="font-light">
        I occasionally use Letterboxd, but for this redesign, I took a deeper dive by mapping out the app’s user flow in detail. <strong> Here's what I discovered:</strong></p>
        </div>

        {/* issues */}
        <div className="max-w-5xl mx-auto bg-[#e1e7eb] rounded-2xl shadow-md px-20 py-8 textblack">
        <div className="mb-12">
  <h3 className="font-medium mb-6">Problem: Confusing User Flow</h3>

  {/* HStack of two VStacks */}
  <div className="flex flex-col md:flex-row gap-8">
    {/* VStack 1 */}
    <div className="flex flex-col md:w-2/3 space-y-4">
      <p className="font-light">
        Add and search buttons (green and blue buttons respectively) both led to a search page. What’s the difference between the two functions?
      </p>
      <img
        src="/images/letter1.png"
        alt="Search button confusion"
        className="w-full rounded-2xl shadow-xl"
      />
    </div>

    {/* VStack 2 */}
    <div className="flex flex-col md:w-1/3 space-y-4">
      <p className="font-light">
        Page links at the bottom of the page are <strong>redundant</strong> because of the page tabs at the top.
      </p>
      <img
        src="/images/letter2.png"
        alt="Redundant navigation"
        className="w-full rounded-2xl shadow-xl"
      />
    </div>
  </div>




            <h3 className="font-medium mb-2">Problem: Unclear Features</h3>
            <p className="font-light mb-4">
                Out of the 10 users I interviewed, </p>
                <p className="font-light mb-4">
                <strong> 7 users</strong> were unable to explain the difference between the <strong> Watchlist and List</strong> features</p>
            
                <p className="font-light mb-4">
                <strong> 8 users</strong> were unable to explain the difference between documenting a watched film through <strong> Watch and Review</strong> functions</p>
            
                <p className="font-light mb-4">
                <strong> 5 users</strong> were unaware that the <strong> Diary </strong> section logged their past movies</p>
            
                <p className="font-light mb-4">
                <strong> 8 users</strong> didn’t realize the <strong>Journal section</strong> contains curated article recommendations</p>
            

        </div>

        {/* content overload*/}
        <div className="mb-12">
  <div className="flex flex-col md:flex-row gap-6 items-start">
    
    {/* Text on the far left */}
    <div className="md:w-1/3">
      <h3 className="font-medium mb-2">Content Overload!</h3>
      <p className="font-light">
        The actors section in movie descriptions and the recommended movies lists go <strong>on forever</strong>.
      </p>
    </div>

    {/* Image 1 */}
    <div className="md:w-1/3">
      <img
        src="/images/overload1.avif"
        alt="Overload Example 1"
        className="w-full h-auto rounded-2xl shadow-xl"
      />
    </div>

    {/* Image 2 */}
    <div className="md:w-1/3">
      <img
        src="/images/overload2.avif"
        alt="Overload Example 2"
        className="w-full h-auto rounded-2xl shadow-xl"
      />
    </div>
    
  </div>
</div>

    
        </div>
    </div>

            {/* My Redesign */}
            <div className="max-w-5xl mx-auto px-20 py-8 textblack">
        <h2 className="text-xl font-semibold textgreen mb-8">My Redesign </h2>

        {/* Problem 1 */}
<div className="mb-12">
  <div className="flex flex-col md:flex-row gap-6 items-start">
    
    {/* Text Section */}
    <div className="md:w-1/3 space-y-4">
      <h3 className="font-medium">Simplification</h3>
      <p className="font-light">
        Reduced authentication process from a <strong>4 page</strong> to a <strong>2 page</strong> process.
      </p>
      <p className="font-light">
        Placed all recommendations in an Explore page + all navigations stem from tabs at the top of the app.
      </p>
    </div>

    {/* Image 1 */}
    <div className="md:w-1/3">
      <img
        src="/images/simplification1.avif"
        alt="Simplified login"
        className="w-full h-auto rounded-2xl shadow-xl"
      />
    </div>

    {/* Image 2 */}
    <div className="md:w-1/3">
      <img
        src="/images/simplification2.avif"
        alt="Explore page navigation"
        className="w-full h-auto rounded-2xl shadow-xl"
      />
    </div>

  </div>
</div>


        {/* Clearing Things Up */}
<div className="mb-12">
  <div className="flex flex-col md:flex-row gap-6 items-start">
    
    {/* Text Section */}
    <div className="md:w-1/3 space-y-4">
      <h3 className="font-medium">Clearing Things Up</h3>
      <p className="font-light">
        Resolved confusion around watchlist vs list by creating <strong>2 default lists: To Watch and Watched</strong>. Users can create any other personalized lists.
      </p>
      <p className="font-light">
        Changed name of Diary to My Reviews, and dedicated a whole page to the Friends section.
      </p>
    </div>

    {/* Image 1 */}
    <div className="md:w-1/3">
      <img
        src="/images/clearing1.avif"
        alt="Default lists UI"
        className="w-full h-auto rounded-2xl shadow-xl"
      />
    </div>

    {/* Image 2 */}
    <div className="md:w-1/3">
      <img
        src="/images/clearing2.avif"
        alt="Friends section UI"
        className="w-full h-auto rounded-2xl shadow-xl"
      />
    </div>

  </div>
</div>


        {/* Problem 2 */}
        <div className="mb-12">
            <h3 className="font-medium mb-2"> Friends Features! </h3>
            <p className="font-light mb-2">
            <ul className="list-disc list-inside space-y-2">
  <li><strong>Friends icon</strong> includes profile photos of all friends</li>
  <li><strong>Prominent</strong> add friend button</li>
  <li><strong>Recommendations</strong> for movies based on friend activity</li>
  <li><strong>Comments</strong> from friends under movie</li>
  <li><strong>Collaborative lists</strong> feature allows shared movie lists between friends</li>
</ul>

</p>

<div className="flex flex-wrap justify-center gap-4">
  <img
    src="/images/friend1.avif"
    alt="Photo 1"
    className="w-[90%] sm:w-1/4 object-cover rounded-xl shadow-md"
  />
  <img
    src="/images/friend2.avif"
    alt="Photo 2"
    className="w-[90%] sm:w-1/4 object-cover rounded-xl shadow-md"
  />
  <img
    src="/images/friend3.avif"
    alt="Photo 3"
    className="w-[90%] sm:w-1/4 object-cover rounded-xl shadow-md"
  />
</div>

        </div>

        
        </div>



        {/* WhatI learneed */}
        <div className="max-w-5xl mx-auto bg-[#ede5e1] rounded-2xl shadow-md px-20 py-8 textblack">
        <h2 className="text-xl font-semibold textgreen mb-8">What I Learned</h2>

        {/* Problem 1 */}
        <div className="mb-12">
            <h3 className="font-medium mb-2">Complexity can be valuable:</h3>
            <p className="font-light mb-4">
            Letterboxd is a straightforward app with simple features tailored to users with straightforward goals. While they may never integrate social features like the ones I've designed in this project, designing them has taught me how such features can breathe life into a platform, fostering a sense of community and connection within a product like Letterboxd.
</p>
            
        </div>

        
      </div>
        <Footer />
      </>
    );
  }
  
  export default LetterBoxd;
  
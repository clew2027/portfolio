import NavBar from "../../components/NavBar";
import Footer from "../Footer";
import ImageSliderPatP from "../../components/ImageSliderPatP";

function PatP() {
    return (
      <>
        <NavBar />
        <div className="pt-40 px-4 md:px-10 max-w-5xl mx-auto space-y-10">
        <div>
          <h1 className="text-3xl textgreen mb-2 font-epilogue">PATH@PENN REDESIGN</h1>
          <h2 className="text-3xl textblack font-hedvig">An intuitive redesign that simplifies the course search and registration for Penn students</h2>
          <a 
            href="https://www.figma.com/design/kCxpvcizW06p79mFNCpKSH/Charlotte-Lew---Design?node-id=1052-14&t=ec9oVfzhSNn0Jhvs-1" 
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

        <ImageSliderPatP/>

        <div className="border-t border-b border-gray-200 py-6 grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-0 text-left">
        {/* TIMELINE */}
        <div>
            <p className="uppercase text-sm tracking-wide text-gray-500">Timeline</p>
            <p className="text-lg font-epilogue textblack">Feb 2025 — Apr 2025</p>
        </div>

        {/* PLATFORM */}
        <div>
            <p className="uppercase text-sm tracking-wide text-gray-500">Platform</p>
            <p className="text-lg font-epilogue textblack">Web Application</p>
        </div>

        {/* ROLE */}
        <div>
            <p className="uppercase text-sm tracking-wide text-gray-500">My Role</p>
            <p className="text-lg font-epilogue textblack">Designer</p>
        </div>
        </div>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto px-4 py-10 textblack font-epilogue">
        
        <p className="font-light mb-4">
        Path@Penn is the University of Pennsylvania's main student platform, offering services from course search to financial aid. Despite its range of resources, students primarily use it to search for and enroll in courses. This project focuses on enhancing this function of Path@Penn.
                </p>

        <p className="font-light">
        I created this iOS app's call functionality with SwiftUI and Agora and a Node.js + MongoDB backend. Whisper was used for live translation, and WebSockets for streaming audio.
        </p>
        </div>
        <div className="max-w-3xl mx-auto px-4 py-10 textblack font-epilogue">

        <h2 className="text-2xl font-semibold textgreen mb-8">So what's the issue?</h2>

        <p className="font-light">
        Path@Penn’s course search system is notoriously complex and difficult to navigate. As an incoming freshman in Fall 2023, I remember struggling immensely to register for my first classes at Penn.        </p>

        <p className="font-light">
        After conducting semi-structured interviews with Penn students, <strong> this is what I found:</strong></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="border border-gray-300 rounded-lg p-6">
    <p className="text-xl textblack font-semibold">33% <span className="block font-bold">reported</span></p>
    <p className="mt-4 text-gray-700">Unawareness of valuable features</p>
  </div>

  <div className="border border-gray-300 rounded-lg p-6">
    <p className="text-xl textblack font-semibold">66% <span className="block font-bold">reported</span></p>
    <p className="mt-4 text-gray-700">Spending too much time navigating Path@Penn</p>
  </div>

  <div className="border border-gray-300 rounded-lg p-6">
    <p className="text-xl textblack font-semibold">100% <span className="block font-bold">reported</span></p>
    <p className="mt-4 text-gray-700">Feeling overwhelmed by the platform’s amount of information</p>
  </div>
</div>



        <div className="my-12">
        <h2 className="text-2xl font-semibold textgreen mb-4 font-epilogue">Organizing My Thoughts</h2>
        <img
            src="/images/patpThoughts.avif"
            alt="Organizing my Thoughts"
            className="w-full rounded-2xl shadow-xl"
        />
        </div>

        <div className="max-w-3xl mx-auto px-4 py-10 textblack font-epilogue">
        
        <p className="font-light">
        After analyzing and categorizing all feedback on Path@Penn, I identified three goals for this redesign: 
        </p>

        <p className="font-semibold">
        Improving navigation. Reducing cognitive load. A new future course plan feature

</p>
        </div>

        {/* improving nav */}
        <div className="max-w-10xl bg-[#e1e7eb] rounded-2xl shadow-md px-20 py-8 textblack">
        <h2 className="text-xl font-semibold textgreen mb-8">Improving Navigation</h2>

        {/* Problem 1 */}
        <div className="mb-12">
            <h3 className="font-medium mb-2">Problem: Tabs opening endlessly</h3>
            <p className="font-light mb-4">
            The platform's layout is not fully optimized, causing tabs to continuously shift left during the search and course addition process. This results in a frustrating user experience, as the unexpected movements disrupt the flow and create instability when new content loads.
            </p>
            <img
            src="/images/yellow1.avif"
            alt="Tabs shifting issue"
            className="w-full rounded-2xl shadow-xl"
            />
        </div>

        {/* Solution 1 */}
        <div className="mb-12">
            <h3 className="font-medium mb-2">Solution:</h3>
            <p className="font-light mb-4">
            Fixing the search tab <span>→</span> class information process in one spot.
            </p>
            <img
            src="/images/yellow2.avif"
            alt="Fixed tab layout"
            className="w-full rounded-2xl shadow-xl"
            />
        </div>

        {/* Problem 2 */}
        <div className="mb-12">
            <h3 className="font-medium mb-2">Problem: Excessive navigation for managing class selections</h3>
            <p className="font-light mb-2">
            When students want to quickly remove and re-add classes to visualize potential schedule changes, having to click through many pages creates a painfully inefficient and cumbersome user experience.
            </p>
            <p className="font-light mb-4">
            Must click on class → remove from cart → confirm (3 steps)
            </p>
            <img
            src="/images/yellow3.avif"
            alt="Navigation inefficiency"
            className="w-full rounded-2xl shadow-xl"
            />
        </div>

        {/* Solution 2 */}
        <div className="mb-12">
            <h3 className="font-medium mb-2">Solution:</h3>
            <p className="font-light mb-2">
            Fixing the search tab <span>→</span> class information process in one spot.
            </p>
            <p className="font-light mb-2">
            Adding toggle buttons for easy visualization of selected courses.
            </p>
            <p className="font-light mb-4">
            Just toggle checkbox on/off (1 step), or click "x" to completely remove from cart (1 step).
            </p>
            <img
            src="/images/yellow4.avif"
            alt="Improved navigation"
            className="w-full rounded-2xl shadow-xl"
            />
        </div>

        {/* Other Improvements */}
        <div className="mb-4">
            <h3 className="font-medium mb-4">Other changes I made:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-gray-800">
            {/* Row 1 */}
            <div>
                <p>
                Placed primary cart and schedule so that users can view them while choosing classes.
                </p>
            </div>
            <div className="flex justify-center text-3xl text-gray-600">
                <span>→</span>
            </div>
            <div>
                <p>
                Allows for better decision-making without switching views
                </p>
            </div>

            {/* Row 2 */}
            <div>
                <p>
                Reduced class description, increase visibility of each class section and available seats
                </p>
            </div>
            <div className="flex justify-center text-3xl text-gray-600">
                <span>→</span>
            </div>
            <div>
                <p>
                Prioritizes essential information to quicker decision-making
                </p>
            </div>
            </div>
        </div>
    </div>

            {/* Reducing Cognitive Load */}
            <div className="max-w-10xl bg-[#e8dcd5] rounded-2xl shadow-md px-20 py-8 textblack">
        <h2 className="text-xl font-semibold textgreen mb-8">Reducing Cognitive Load </h2>

        {/* Problem 1 */}
        <div className="mb-12">
            <h3 className="font-medium mb-2">Problem: Unclear course prioritization system</h3>
            <p className="font-light mb-4">
            Path@Penn allows users to rank courses by priority when adding them to their cart. However, there isn’t a centralized view to display the rankings, and the process for ranking courses is unclear. Users have reported confusion and that they are unsure how to use this feature.
</p>
        </div>

        {/* Solution 1 */}
        <div className="mb-12">
            <h3 className="font-medium mb-2">Solution:</h3>
            <p className="font-light mb-4">
            Allow users to rank their classes before submission through a pop-up, where they can view all their rankings at once and easily rearrange them by dragging or clicking arrows.</p>
            <img
            src="/images/white1.avif"
            alt="order class"
            className="w-full rounded-2xl shadow-xl"
            />
        </div>

        {/* Problem 2 */}
        <div className="mb-12">
            <h3 className="font-medium mb-2">Problem: Users are unsure when/how to request class permission</h3>
            <p className="font-light mb-2">
            Path@Penn does not explicitly tell students that they do not meet class prerequisites, leaving students to figure it out themselves. Additionally, the request permission is small and tucked away in the bottom left corner.

</p>
        </div>

        {/* Solution 2 */}
        <div className="mb-12">
            <h3 className="font-medium mb-2">Solution:</h3>
            <p className="font-light mb-2">
            Symbols to demonstrate unmet and met prerequisites,

Automated permission request when a prerequisite is not met.
            </p>
            <img
            src="/images/white2.avif"
            alt="Improved navigation"
            className="w-full rounded-2xl shadow-xl"
            />
            <img
            src="/images/white3.avif"
            alt="Improved navigation"
            className="w-full rounded-2xl shadow-xl"
            />
        </div>

        {/* Other Improvements */}
        <div className="mb-4">
            <h3 className="font-medium mb-4">Other changes I made:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-gray-800">
            {/* Row 1 */}
            <div>
                <p>
Adding a course reviews tab next to the course information tab
                </p>
            </div>
            <div className="flex justify-center text-3xl text-gray-600">
                <span>→</span>
            </div>
            <div>
                <p>
                Offers relevant information at a glance

</p>
            </div>

            {/* Row 2 */}
            <div>
                <p>
                Increase visibility of filter function, with a time filter with drag functionality

</p>
            </div>
            <div className="flex justify-center text-3xl text-gray-600">
                <span>→</span>
            </div>
            <div>
                <p>
                Helps user visualize preferences and filter classes efficiently

</p>
            </div>
            </div>
        </div>
        </div>


         {/* future */}
         <div className="max-w-10xl bg-[#e6e4c8] rounded-2xl shadow-md px-20 py-8 textblack">
        <h2 className="text-xl font-semibold textgreen mb-8">Future Course Plan, A New Feature! </h2>

       < div className="mb-12">
            <p className="font-light mb-4">
            To spice things up, I added a feature I wish Path@Penn had: a tool for students to map out their course plan across semesters, alongside a visual representation of their projected degree progress.
            </p>
        </div>
        {/* Problem 1 */}
        <div className="mb-12">
            <h3 className="font-medium mb-2">What I did:</h3>
            <p className="font-light mb-4">
            I kept the main structure of the current degree progress bar, which currently exists on Path@Penn. 

</p>

<p className="font-light mb-4">
I introduced an "Edit Plan" page where users can map out courses for future semesters. A striped progress bar visually represents the user’s projected degree progress, showing how much of their degree they would complete by following their planned course schedule. On this page, users can easily add or remove semesters and courses, providing full flexibility in planning their academic journey.


</p>
<div className="space-y-6">
  <img
    src="/images/future1.avif"
    alt="Improved navigation"
    className="w-full md:w-1/2 rounded-2xl shadow-xl"
  />
  <img
    src="/images/future2.avif"
    alt="Improved navigation"
    className="w-full md:w-1/2 rounded-2xl shadow-xl"
  />
</div>



        </div> 
        </div>


<div className="space-y-6">
  {/* Section Headings */}
  <div>
    <p className="text-xl font-semibold textgreen mb-8">Problems I encountered:</p>
    <h2 className=" textblack">My design did not communicate my intended vision</h2>
  </div>

  {/* Two Side-by-Side Boxes */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Box */}
    <div className="bg-white rounded-2xl shadow-md p-6">
      <img
        src="/images/problem1.avif"
        alt="Initial semester plan design"
        className="w-full rounded-xl mb-4"
      />
      <p className="textblack font-light">
        The design relied solely on color to indicate which semesters were completed,
        in progress, or upcoming, but this visual cue wasn't clear enough.
      </p>
    </div>

    {/* Right Box */}
    <div className="bg-white rounded-2xl shadow-md p-6">
      <img
        src="/images/problem2.avif"
        alt="Improved semester plan design"
        className="w-full rounded-xl mb-4"
      />
      <p className="text-gray-700 font-light">
        Better, but looks like Semester 4 was being selected, rather than indicating it as "in progress."
      </p>
    </div>
  </div>
</div>

<div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center gap-8 my-10">
  {/* Left Text */}
  <div className="md:w-1/2">
    <p className="textblack font-light text-lg">
      By seeking iterative feedback on this new feature, I ended up with this:
    </p>
  </div>

  {/* Right Image */}
  <div className="md:w-1/2">
    <img
      src="/images/problem3.avif"
      alt="Final version of semester UI"
      className="w-full rounded-xl"
    />
  </div>
</div>

<div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
  <h2 className="text-xl font-medium textblack">
    I also found it challenging to find a balance between familiar user experiences and new enhancements.
  </h2>
  <p className="font-light textblack">
    I focused on reorganizing the interface rather than completely revamping the design, aiming to preserve what worked while refining what didn’t.
  </p>
  <p className="font-light textblack">
    The biggest change was the introduction of the <strong>Future Course Plan</strong> feature, which was developed through user interviews to ensure it effectively addressed student needs.
  </p>
</div>






        {/* WhatI learneed */}
        <div className="max-w-10xl bg-[#ede5e1] rounded-2xl shadow-md px-20 py-8 textblack">
        <h2 className="text-xl font-semibold textgreen mb-8">What I Learned</h2>

        {/* Problem 1 */}
        <div className="mb-12">
            <h3 className="font-medium mb-2">Navigating Bias in the Redesign Process</h3>
            <p className="font-light mb-4">
            One of the biggest challenges was being too familiar with the Path@Penn platform. Thinking through redesign possibilities was particularly tough because of my existing biases. To overcome this, I had to consciously refer back to my user interviews and even seek feedback from students at other schools, ensuring that I kept a broad perspective throughout the project.

</p>
            
        </div>

        {/* Solution 1 */}
        <div className="mb-12">
            <h3 className="font-medium mb-2">Iteration is Key</h3>
            <p className="font-light mb-4">
            No design is ever perfect, and as I continue to grow as a designer, I’m sure I’ll look back on this project and wish I had approached some things differently. However, the process of constant iteration—interviewing and re-interviewing, designing and redesigning—was invaluable. It played a significant role in refining the aesthetics and functionality of my redesign, pushing it closer to meeting user needs and expectations.

</p>
           
        </div>
    </div>
      </div>
        <Footer />
      </>
    );
  }
  
  // Reusable Components
  const SectionTitle = ({ children, icon }) => (
    <h3 className="section-title">
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </h3>
  );
  
  const FeatureList = ({ items }) => (
    <ul className="feature-list">
      {items.map((item, i) => (
        <li key={i} className="feature-item">
          <span className="feature-bullet">•</span>
          {item}
        </li>
      ))}
    </ul>
  );
  
  const TechPill = ({ label, tech }) => (
    <div className="tech-pill">
      <span className="tech-label">{label}:</span>
      <span className="tech-name">{tech}</span>
    </div>
  );
  
  const Challenge = ({ title, problem, solutions }) => (
    <div className="challenge-card">
      <h4 className="challenge-title">⚠️ {title}</h4>
      <p className="challenge-problem"><strong>Problem:</strong> {problem}</p>
      <ul className="solution-list">
        {solutions.map((sol, i) => (
          <li key={i} className="solution-item">
            <span className="solution-bullet">→</span>
            {sol}
          </li>
        ))}
      </ul>
    </div>
  );
  
  const Learning = ({ title, points }) => (
    <div className="learning-card">
      <h4 className="learning-title">🔷 {title}</h4>
      <ul className="learning-points">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
  
  export default PatP;
  
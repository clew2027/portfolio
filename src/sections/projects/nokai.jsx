import NavBar from "../../components/NavBar";
import Footer from "../Footer";
import ImageSliderNokAI from "../../components/ImageSliderNokAI";

function NokAI() {
    return (
      <>
        <NavBar />
        <div className="pt-40 px-4 md:px-10 max-w-5xl mx-auto space-y-10">
        <div>
          <h1 className="text-3xl textgreen mb-2 font-epilogue">NokAI</h1>
          <h2 className="text-3xl textblack font-hedvig">Real-time calls, Real-time translations</h2>
          <a 
            href="https://github.com/clew2027/NokAI2025" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center textblue hover:underline mt-2"
          >
            GitHub Link
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

        <ImageSliderNokAI/>

        <div className="border-t border-b border-gray-200 py-6 grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-0 text-left">
        {/* TIMELINE */}
        <div>
            <p className="uppercase text-sm tracking-wide text-gray-500">Timeline</p>
            <p className="text-lg font-epilogue textblack">May 2025—July 2025</p>
        </div>

        {/* PLATFORM */}
        <div>
            <p className="uppercase text-sm tracking-wide text-gray-500">Platform</p>
            <p className="text-lg font-epilogue textblack">iOS App</p>
        </div>

        {/* ROLE */}
        <div>
            <p className="uppercase text-sm tracking-wide text-gray-500">My Role</p>
            <p className="text-lg font-epilogue textblack">Designer and Developer</p>
        </div>
        </div>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto px-4 py-10 textblack font-epilogue">
        <h2 className="text-2xl font-semibold mb-6">Introduction</h2>
        
        <p className="font-light mb-4">
        Growing up as the child of immigrant parents, I often wished there was an easier to communicate with others across language barriers (especially during phone calls). With the rise of real-time translation technologies and my own growth as a developer, I decided to build the tool I always wished we had: a multilingual, real-time audio calling app that translates speech as it happens.
        </p>

        <p className="font-light">
        I created this iOS app's call functionality with SwiftUI and Agora and a Node.js + MongoDB backend. Whisper was used for live translation, and WebSockets for streaming audio.
        </p>
        </div>


        {/* Core Features */}
        <section className="max-w-3xl mx-auto px-6 py-12 textblack font-epilogue">
        <h2 className="text-2xl font-semibold mb-8">Core Features</h2>

        <div className="space-y-8">
            {/* Live Voice Calling */}
            <div>
            <h3 className="text-xl font-medium mb-2">🔊 Live Voice Calling</h3>
            <p className="font-light">
                Integrated <strong>Agora SDK</strong> into SwiftUI to handle audio channels. Users can join a room, and mic/speaker toggles are bound to SwiftUI states.
            </p>
            </div>

            {/* Whisper Transcription */}
            <div>
            <h3 className="text-xl font-medium mb-2">✍️ Whisper Transcription</h3>
            <p className="font-light">
                PCM audio is captured from the mic, streamed to the backend via <strong>WebSocket</strong>, and transcribed it using <strong>Whisper AI</strong> in real time.
            </p>
            </div>

            {/* Real-Time Translation */}
            <div>
            <h3 className="text-xl font-medium mb-2">🌐 Real-Time Translation</h3>
            <p className="font-light">
                After audio is transcribed, a <strong>translation API</strong> translates the text on the backend. Translations then are sent back over WebSocket and displayed in the interface.
            </p>
            </div>

            {/* Friend System */}
            <div>
            <h3 className="text-xl font-medium mb-2">👥 Friend System</h3>
            <p className="font-light">
                The friend system stores users, relationships, and requests. Built with <strong>MongoDB</strong> with REST endpoints.
            </p>
            </div>

            {/* SwiftUI Interface */}
            <div>
            <h3 className="text-xl font-medium mb-2">📱 SwiftUI Interface</h3>
            <p className="font-light">
                UI was built with <strong>SwiftUI</strong> using <code>@State</code>, <code>@Binding</code>, <code>NavigationStack</code>, and Agora video integrated using <code>UIViewRepresentable</code>.
            </p>
            </div>
        </div>
        </section>



        <div className="my-12">
        <h2 className="text-2xl font-semibold textblack mb-4 font-epilogue">App Architecture</h2>
        <img
            src="/images/apparchh.png"
            alt="App Architecture"
            className="w-full rounded-2xl shadow-xl"
        />
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12 textblack font-epilogue space-y-8">

        {/* Frontend */}
        <div>
            <h3 className="text-xl font-semibold mb-2">Frontend (iOS - SwiftUI + Agora SDK)</h3>
            <p className="font-light">
            All real-time audio and video functionality is handled through the Agora SDK, which captures the user's microphone input and manages the audio streams.
            </p>
            <p className="font-light">
            SwiftUI is used for the app’s design, navigation, and all screens.
            </p>
        </div>

        {/* Backend */}
        <div>
            <h3 className="text-xl font-semibold mb-2">Backend (Node.js with Express.js & WebSocket + Whisper)</h3>
            <p className="font-light">
            <strong>WebSocket + Whisper:</strong> The WebSocket server receives raw audio data from clients, buffers it, and passes it to the Whisper speech-to-text model. Whisper transcribes and translates the spoken content, which is then sent back over WebSocket to the peer’s device.
            </p>
            <p className="font-light">
            <strong>Express.js ↔ MongoDB:</strong> The RESTful API interacts with MongoDB to create and retrieve persistent data such as:
            </p>
            <ul className="list-disc list-inside font-light ml-4">
            <li>User profiles (including profile photos)</li>
            <li>Friend requests (incoming and outgoing)</li>
            <li>Call history logs (who called whom, when, and how long)</li>
            </ul>
        </div>

        {/* Interaction Flow */}
        <div>
            <h3 className="text-xl font-semibold mb-2">Interaction Flow Summary</h3>
            <ol className="list-decimal list-inside space-y-2 font-light ml-4">
            <li><span className="font-medium">When two users start a call,</span> Agora handles real-time audio transmission, while SwiftUI manages the UI.</li>
            <li><span className="font-medium">Users’ spoken audio is sent</span> to the backend via WebSocket, which processes it through Whisper for transcription and translation.</li>
            <li><span className="font-medium">The translated message</span> is sent back and displayed to the peer in their chosen language.</li>
            <li><span className="font-medium">After the call ends,</span> the backend logs metadata about the call (duration, timestamp) into MongoDB.</li>
            <li><span className="font-medium">Throughout the session,</span> the frontend can fetch and display data (e.g. friend list, call history) via Express.js endpoints.</li>
            </ol>
        </div>
        
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12 font-epilogue space-y-12">

  {/* Challenges & Fixes */}
  <div className="bg-[#edd7ca] rounded-2xl shadow-md p-6 textblack">
    <h2 className="text-xl font-semibold mb-4">🛠️ Challenges & Fixes</h2>

    {/* WebSocket Latency */}
    <div className="mb-6">
      <h3 className="font-medium mb-1">WebSocket Latency</h3>
      <ul className="list-disc list-inside font-light">
        <li><strong>Problem:</strong> Audio packets were being sent too quickly, overloading the backend.</li>
        <li><strong>Fix:</strong> Batched and throttled audio data, and added server-side buffering.</li>
      </ul>
    </div>

    {/* Whisper Delay */}
    <div className="mb-6">
      <h3 className="font-medium mb-1">Whisper Delay</h3>
      <ul className="list-disc list-inside font-light">
        <li><strong>Problem:</strong> Transcriptions lagged 5–10 seconds behind.</li>
        <li><strong>Fix:</strong> Reduced audio chunk sizes and used timestamps to stream only new segments.</li>
      </ul>
    </div>

    {/* SwiftUI + Agora Bridging */}
    <div>
      <h3 className="font-medium mb-1">SwiftUI + Agora Bridging</h3>
      <ul className="list-disc list-inside font-light">
        <li><strong>Problem:</strong> Agora uses UIKit, SwiftUI needed compatibility layer.</li>
        <li><strong>Fix:</strong> Wrapped AgoraVideoCanvas in a <code>UIViewRepresentable</code>.</li>
      </ul>
    </div>
  </div>

  {/* What I Learned */}
  <div className="bg-[#DADFDB] rounded-2xl shadow-md p-6 textblack">
    <h2 className="text-xl font-semibold mb-4">What I Learned</h2>

    {/* SwiftUI & iOS Development */}
    <div className="mb-6">
      <h3 className="font-medium mb-1">SwiftUI & iOS Development</h3>
      <ul className="list-disc list-inside font-light">
        <li>Gained deep familiarity with SwiftUI state management using <code>@State</code>, <code>@Binding</code>, <code>@ObservedObject</code>, and <code>@EnvironmentObject</code>.</li>
        <li>Learned to structure the app using the MVVM (Model-View-ViewModel) architecture.</li>
      </ul>
    </div>

    {/* Backend Development */}
    <div className="mb-6">
      <h3 className="font-medium mb-1">Backend Development</h3>
      <ul className="list-disc list-inside font-light">
        <li>Learned to handle core features like authentication, friend management, and real-time audio processing in Node.js + Express.</li>
        <li>Gained experience working with MongoDB, designing schemas to persist user data, call logs, and relationships across sessions.</li>
      </ul>
    </div>

    {/* Asynchronous Systems */}
    <div>
      <h3 className="font-medium mb-1">Asynchronous Systems</h3>
      <ul className="list-disc list-inside font-light">
        <li>Worked with real-time streaming over WebSockets and buffered audio for stability.</li>
        <li>Handled background tasks and ensured responsiveness across the app.</li>
      </ul>
    </div>
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
  
  export default NokAI;
  
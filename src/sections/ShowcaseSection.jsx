import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Tag = ({ children }) => (
  <span className="inline-block bg-gray-200 textblack text-sm font-medium px-2 py-1 rounded-full mr-2">
    {children}
  </span>
);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const pennRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    const cards = [rydeRef.current, pennRef.current, libraryRef.current, ycDirectoryRef.current];
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase px-5 md:px-20 py-10 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* NokAI */}
        <Link to="/projects/nokai" ref={rydeRef}>
          <div className="space-y-4">
            <div className="h-[55vh] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105">
              <img src="/images/nokcover.png" alt="NokAI Interface" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-2 font-epilogue text-black">
              <h2 className="text-3xl md:text-4xl font-bold">NokAI: Real-time multilingual audio calls</h2>
              <p className="text-black md:text-xl font-hedvig">
                iOS app using SwiftUI, Agora, Node.js, MongoDB, Whisper, and WebSockets.
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag>SwiftUI</Tag>
                <Tag>Node.js</Tag>
                <Tag>Express</Tag>
                <Tag>MongoDB</Tag>
                <Tag>WebSockets</Tag>
                <Tag>Whisper AI</Tag>
              </div>
            </div>
          </div>
        </Link>

        {/* Pennstagram */}
        <Link to="/projects/pennstagram" ref={pennRef}>
          <div className="space-y-4">
            <div className="h-[55vh] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105">
              <img src="/images/pennstagramcover.png" alt="Pennstagram" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-2 font-epilogue text-black">
              <h2 className="text-3xl md:text-4xl font-bold">Pennstagram: Image sharing, post ranking, and Spark-powered recommendations</h2>
              <p className="text-black md:text-xl font-hedvig">
              Social media platform built with real-time Kafka streams, image support, and a robust AWS-powered backend.              </p>
              <div className="flex flex-wrap gap-2">
                <Tag>AWS EC2</Tag>
                <Tag>RDS</Tag>
                <Tag>S3</Tag>
                <Tag>Apache Kafka</Tag>
                <Tag>Node.js</Tag>
                <Tag>Team Project</Tag>
              </div>
            </div>
          </div>
        </Link>

        {/* Path@Penn */}
        <Link to="/projects/patp" ref={libraryRef}>
          <div className="space-y-4">
            <div className="h-[55vh] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105">
              <img src="/images/patpcover.png" alt="Path@Penn" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-2 font-epilogue text-black">
              <h2 className="text-2xl font-semibold">Path@Penn Redesign</h2>
              <p className="text-black font-hedvig">
                Redesigned student dashboard to improve planning visibility and UX.
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag>Figma</Tag>
                <Tag>UX Research</Tag>
                <Tag>UI Prototyping</Tag>
                <Tag>Interaction Design</Tag>
              </div>
            </div>
          </div>
        </Link>

        {/* Letterboxd */}
        <Link to="/projects/letterboxd" ref={ycDirectoryRef}>
          <div className="space-y-4">
            <div className="h-[55vh] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105">
              <img src="/images/lettercover.png" alt="Letterboxd" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-2 font-epilogue text-black">
              <h2 className="text-2xl font-semibold">LetterBoxd Redesign</h2>
              <p className="text-black font-hedvig">
                A cleaner, more social way to browse and share film reviews.
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag>Figma</Tag>
                <Tag>UX Research</Tag>
                <Tag>UI Prototyping</Tag>
                <Tag>Mobile Design</Tag>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AppShowcase;

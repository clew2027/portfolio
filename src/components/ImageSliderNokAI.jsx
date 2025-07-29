import { useState } from "react";
import { motion } from "framer-motion";
import NokAI1 from "../../public/images/NokAI1.png";
import NokAI2 from "../../public/images/NokAI2.png";
import NokAI3 from "../../public/images/NokAI3.png";
import NokAI4 from "../../public/images/NokAI4.png";
import NokAI5 from "../../public/images/NokAI5.png";

const ImageSliderNokAI = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prev) => prev.map((i) => (i + 1) % 5));
  };

  const handleBack = () => {
    setPositionIndexes((prev) => prev.map((i) => (i + 4) % 5));
  };

  const images = [NokAI1, NokAI2, NokAI5, NokAI4, NokAI3];
  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1.2, zIndex: 5 },
    left1: { x: "-45%", scale: 1.1, zIndex: 3 },
    left: { x: "-90%", scale: 1, zIndex: 2 },
    right: { x: "90%", scale: 1, zIndex: 2 },
    right1: { x: "45%", scale: 1.1, zIndex: 3 },
  };

  return (
    <div className="w-full flex flex-col items-center px-4 py-12">
      {/* 🖼 Carousel Container with height */}
      <div className="relative h-[500px] w-full max-w-5xl overflow-visible">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`NokAI ${index}`}
            className="w-[180px] md:w-[220px] absolute left-1/2 -translate-x-1/2 rounded-xl"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>

      {/* ✅ Buttons Below Carousel */}
      <div className="flex gap-4 mt-10 z-10">
        <button
          onClick={handleBack}
          className="bg-[#8f907e] text-white rounded-md px-4 py-2 hover:bg-[#3a2e29] transition"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-[#8f907e] text-white rounded-md px-4 py-2 hover:bg-[#3a2e29] transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSliderNokAI;

import { useState } from "react";
import { motion } from "framer-motion";
import mid from "../../public/images/patptopmid.avif";
import right from "../../public/images/patptopright.avif";
import left from "../../public/images/patpleft1.avif";

const ImageSliderPatP = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  const handleNext = () => {
    setPositionIndexes((prev) => prev.map((i) => (i + 1) % 3));
  };

  const handleBack = () => {
    setPositionIndexes((prev) => prev.map((i) => (i + 4) % 3));
  };

  const images = [mid, left, right];
  const positions = ["mid", "left", "right"];

  const imageVariants = {
    mid: { x: "0%", scale: 2, zIndex: 5 },
    left: { x: "-100%", scale: 1.9, zIndex: 3 },
    right: { x: "100%", scale: 1.9, zIndex: 2 },
  };

  return (
    <div className="w-full flex flex-col items-center px-4 py-12">
      {/* 🖼 Carousel Container with height */}
      <div className="relative w-full max-w-5xl min-h-[250px] flex items-center justify-center">
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
      <div className="flex gap-4 mt-12 z-10">
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

export default ImageSliderPatP;

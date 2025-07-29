import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Spline from '@splinetool/react-spline';
import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[90%] h-[90%]">
        <Spline scene="https://prod.spline.design/cb5x0-KvIz0dXT58/scene.splinecode" />
      </div>
    </div>
  );
};



export default ContactExperience;

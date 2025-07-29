import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer text-black">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Thanks for visiting</p>
        </div>
        <div className="socials">
          
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Charlotte Lew
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

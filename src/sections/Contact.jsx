import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            

          <div className="flex flex-col gap-4 justify-center card-border rounded-xl p-10 text-white-50 font-epilogue">
  <p>
    <span className="font-semibold">Email:</span>{" "}
    <a href="mailto:clew27@seas.upenn.edu" className="underline hover:text-white">
      clew27@seas.upenn.edu
    </a>
  </p>
  <p>
    <span className="font-semibold">LinkedIn:</span>{" "}
    <a
      href=" https://www.linkedin.com/in/charlotte-lew-86ab591bb/ "
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-white"
    >
 www.linkedin.com/in/charlotte-lew-86ab591bb/     </a>
  </p>


  <p>
  <a
    href="https://docs.google.com/document/d/1Lc5abDzNW-2OGgAV0nGMXX_qNIBR_iDATskLMX7yDmw/edit?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-white font-semibold"
  >
    Resume (CS)
  </a>
</p>


<p>
  <a
    href="https://docs.google.com/document/d/1vDQmNxtlDs3Rzp_zBgCGYXmKvKtlV7NEJs1WtelrHHQ/edit?usp=sharing/"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-white font-semibold"
  >
    Resume (Design)
  </a>
</p>

</div>




          </div>
          <div className="xl:col-span-7 min-h-96">
          <div className="w-full h-full rounded-3xl overflow-hidden">
  <ContactExperience />
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { CONTACT } from "../constants";
import { FaGithub, FaLinkedin, FaEnvelope,FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20 text-center">
      <h2 className="my-10 text-center text-5xl font-bold">Get in Touch</h2>
      <div className="tracking-tighter flex flex-col items-center gap-4">
        <p className=" text-lg flex items-center gap-2"><FaPhone className="text-2xl" /> {CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className="border-b text-lg flex items-center gap-2">
          <FaEnvelope className="text-2xl" /> {CONTACT.email}
        </a>
        <div className="flex gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/avhishek-nandi-462423261/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AvHai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl"
            aria-label="Github"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
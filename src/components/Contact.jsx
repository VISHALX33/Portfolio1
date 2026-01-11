import { useState } from 'react';
import { FaEnvelope, FaCopy, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import contactImage from '../assets/character/20.png';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'vishalprajapati2303@gmail.com';
  const phone = '8003310994';
  const whatsappMessage = 'Hello Vishal, i come from your portfolio website I would like to connect with you!';
  
  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/91${phone}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <section id="contact" className="bg-bg-subtle/40 dark:bg-neutral-800/40">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="grid gap-10 md:grid-cols-2 items-center max-w-4xl mx-auto">
          <div>
            <h3 className="font-semibold mb-2 text-xl">Get in touch</h3>
            <p className="text-sm mb-6 max-w-sm">Feel free to reach out for collaboration, opportunities or just a friendly chat.</p>
            
            {/* Email */}
            <div className="flex items-center gap-2 mb-4 p-3 bg-white dark:bg-neutral-800 rounded-lg">
              <FaEnvelope className="text-primary text-xl" />
              <span className="text-sm flex-1">{email}</span>
              <button onClick={handleCopy} className="btn-outline !py-1 !px-2 text-xs">{copied ? 'Copied!' : <><FaCopy /> Copy</>}</button>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 mb-4 p-3 bg-white dark:bg-neutral-800 rounded-lg">
              <FaPhone className="text-primary text-xl" />
              <span className="text-sm">{phone}</span>
            </div>

            {/* WhatsApp Button */}
            <button 
              onClick={handleWhatsApp}
              className="btn bg-green-500 hover:bg-green-600 text-white w-full !py-3 !text-base mb-4 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-2xl" />
              Connect on WhatsApp
            </button>

            <p className="text-xs text-primary-dark/60 dark:text-bg-subtle mt-4">📍 Location: Jaipur, India</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img src={contactImage} alt="Get in Touch" className="w-full max-w-sm object-contain drop-shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

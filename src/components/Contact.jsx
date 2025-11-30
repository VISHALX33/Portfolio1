import { useState } from 'react';
import { FaEnvelope, FaCopy } from 'react-icons/fa';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'vishalprajapati2303@gmail.com';
  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };
  return (
    <section id="contact" className="bg-bg-subtle/40 dark:bg-neutral-800/40">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-semibold mb-2">Get in touch</h3>
            <p className="text-sm mb-4 max-w-sm">Feel free to reach out for collaboration, opportunities or just a friendly chat.</p>
            <div className="flex items-center gap-2 mb-4">
              <FaEnvelope className="text-primary" />
              <span className="text-sm">{email}</span>
              <button onClick={handleCopy} className="btn-outline !py-1 !px-2 text-xs">{copied ? 'Copied!' : <><FaCopy /> Copy</>}</button>
            </div>
            <p className="text-xs text-primary-dark/60 dark:text-bg-subtle">Location: Jaipur, India</p>
          </div>
          <form className="contact-form space-y-3" onSubmit={e => e.preventDefault()}>
            <input name="name" placeholder="Name" required />
            <input name="email" type="email" placeholder="Email" required />
            <textarea name="message" rows={5} placeholder="Message" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

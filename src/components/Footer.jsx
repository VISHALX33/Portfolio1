import { FaHeart, FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className="container flex flex-col gap-4">
        <div className="flex justify-center gap-4 text-lg">
          <a href="https://github.com/VISHALX33" target="_blank" rel="noopener" className="hover:text-primary"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/vishal-prajapati-9b6b8a2b3/" target="_blank" rel="noopener" className="hover:text-primary"><FaLinkedin /></a>
          <a href="[Portfolio Link from Resume]" target="_blank" rel="noopener" className="hover:text-primary"><FaExternalLinkAlt /></a>
        </div>
        <p className="text-xs">Made with <FaHeart className="inline text-primary" /> by Vishal Prajapati</p>
        <p className="text-xs">© {new Date().getFullYear()} Vishal Prajapati. All rights reserved.</p>
        <p className="text-xs">Contact: vishalprajapati2303@gmail.com | 8003310994</p>
      </div>
    </footer>
  );
}
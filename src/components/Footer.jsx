import { FaHeart, FaGithub, FaLinkedin, FaShare, FaInstagram ,FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const portfolioUrl = 'https://vishalprajapatidev.netlify.app/';
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Vishal Prajapati - Full Stack Developer',
          text: 'Check out my portfolio!',
          url: portfolioUrl
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(portfolioUrl).then(() => {
      alert('Portfolio link copied to clipboard!');
    });
  };

  return (
    <footer>
      <div className="container flex flex-col gap-4">
        <div className="flex justify-center gap-4 text-lg">
          <a href="https://github.com/VISHALX33" target="_blank" rel="noopener" className="hover:text-primary"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/vishal-prajapati-445799289/" target="_blank" rel="noopener" className="hover:text-primary"><FaLinkedin /></a>
          <a href="https://www.instagram.com/vishal_20_03/" target="_blank" rel="noopener" className="hover:text-primary"><FaInstagram /></a>
          <a href="https://x.com/VishalPraja89" target="_blank" rel="noopener" className="hover:text-primary"><FaTwitter /></a>
          <a href="https://www.youtube.com/@Vishalprajapati-q7l" target="_blank" rel="noopener" className="hover:text-primary"><FaYoutube /></a>
          <button onClick={handleShare} className="hover:text-primary transition-colors cursor-pointer" aria-label="Share Portfolio"><FaShare /></button>
        </div>
        <p className="text-xs">Made with <FaHeart className="inline text-primary" /> by Vishal Prajapati</p>
        <p className="text-xs">© {new Date().getFullYear()} Vishal Prajapati. All rights reserved.</p>
        <p className="text-xs">Contact: vishalprajapati2303@gmail.com | 8003310994</p>
      </div>
    </footer>
  );
}
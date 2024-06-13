import './footer.css';
import Github from '@/public/icons/github';
import Youtube from '@/public/icons/youtube';
import Instagram from '@/public/icons/instagram';

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-copy-text">
          <p>Copyright 2024. flashrifle. All rights reserved.</p>
        </div>
        <div className="footer-content">
          <Github />
          <p>Blog</p>
          <Youtube />
          <Instagram />
        </div>
      </div>
    </>
  );
}

'use client';
import './footer.css';
import Github from '@/public/icons/github';
import Youtube from '@/public/icons/youtube';
import Instagram from '@/public/icons/instagram';
import { useRouter } from 'next/navigation';
import Blog from '@/public/icons/blog';

export default function Footer() {
  const router = useRouter();
  return (
    <>
      <div className="footer-container">
        <div className="footer-copy-text">
          <p>Copyright 2024. flashrifle. All rights reserved.</p>
        </div>
        <ul className="footer-content">
          <li onClick={() => router.push('https://github.com/flashrifle')}>
            <Github />
          </li>
          <li onClick={() => router.push('https://leejaem95.tistory.com')}>
            <Blog />
          </li>
          <li onClick={() => router.push('https://www.youtube.com/@JmGuitar')}>
            <Youtube />
          </li>
          {/*<li>*/}
          {/*  <Instagram />*/}
          {/*</li>*/}
        </ul>
      </div>
    </>
  );
}

import Link from 'next/link';
import SiteHeader from '../components/site-header';
import { assetPath, CONTACT } from '../lib/site';
import './globals.css';

export const metadata = {
  title: { default: 'little loops — crochet & little joys', template: '%s — little loops' },
  description: 'Little loops, lovely things. Discover crochet pouches, playful companions and flowers, and enquire about a little something of your own.',
  icons: { icon: assetPath('yarn.svg') },
};

export const viewport = { themeColor: '#faf8f3' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
          <noscript>
            <p className="container noscript-note">To ask about a piece, email <a href={`mailto:${CONTACT.orders}`}>{CONTACT.orders}</a>. For support, email <a href={`mailto:${CONTACT.support}`}>{CONTACT.support}</a>.</p>
          </noscript>
        </main>
        <footer className="site-footer container">
          <Link className="footer-brand" href="/">little loops.</Link>
          <p>A little yarn. A lot of heart.</p>
          <span>© {new Date().getFullYear()} little loops</span>
        </footer>
      </body>
    </html>
  );
}

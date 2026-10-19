'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { assetPath } from '../lib/site';

export default function SiteHeader() {
  const pathname = usePathname();
  const isContact = /\/contact\/?$/.test(pathname);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="little loops home">
          <Image src={assetPath('yarn.svg')} width={38} height={38} alt="" />
          <span>little loops<span className="brand-dot">.</span></span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/" aria-current={!isContact ? 'page' : undefined}>Home</Link>
          <Link href="/contact/" aria-current={isContact ? 'page' : undefined}>
            Contact & order <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

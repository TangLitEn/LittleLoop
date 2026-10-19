import { Suspense } from 'react';
import ContactForm from '../../components/contact-form';
import { CONTACT } from '../../lib/site';

export const metadata = { title: 'Contact & order' };

export default function ContactPage() {
  return (
    <section id="contact" className="contact-page container" aria-labelledby="contact-title">
        <div className="contact-copy">
          <p className="eyebrow"><span className="little-star" aria-hidden="true">✳</span> FROM ONE LITTLE HELLO</p>
          <h1 id="contact-title">Let’s make<br />something <em>lovely.</em></h1>
          <p className="intro">Have your eye on a piece? Tell us what you’re thinking. We’ll chat about the details, colours and availability by email.</p>
          <div className="contact-details">
            <div><span className="eyebrow">ORDERS & LITTLE IDEAS</span><a href={`mailto:${CONTACT.orders}`}>{CONTACT.orders} <span aria-hidden="true">↗</span></a></div>
            <div><span className="eyebrow">NEED A HAND?</span><a href={`mailto:${CONTACT.support}`}>{CONTACT.support} <span aria-hidden="true">↗</span></a></div>
          </div>
          <p className="small-note">Every lovely thing starts with a conversation.<br />An enquiry doesn’t commit you to an order.</p>
        </div>
        <Suspense fallback={<div className="enquiry-form"><h2>A little note to us</h2><p role="status">Loading enquiry form…</p></div>}>
          <ContactForm />
        </Suspense>
      </section>
  );
}

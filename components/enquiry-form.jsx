'use client';

import { useRef, useState } from 'react';
import { CONTACT, ENQUIRY_ITEMS } from '../lib/site';

export default function EnquiryForm({ initialItem }) {
  const [item, setItem] = useState(initialItem);
  const [status, setStatus] = useState('');
  const [draft, setDraft] = useState(null);
  const draftRef = useRef(null);

  function prepareEmail(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const name = values.get('name').trim();
    const email = values.get('email').trim();
    const message = values.get('message').trim();

    if (!name || !message) {
      setStatus('Please add your name and a note before preparing your email.');
      form.elements.namedItem(name ? 'message' : 'name').focus();
      return;
    }

    const recipient = item === 'Help with an order' ? CONTACT.support : CONTACT.orders;
    const subject = `Little loops enquiry — ${item}`;
    const body = `Hello little loops,\n\n${message}\n\nInterested in: ${item}\nName: ${name}\nReply to: ${email}\n\nThank you!`;
    setDraft({ recipient, text: `Subject: ${subject}\n\n${body}` });
    setStatus('Your email draft is ready. Send it from your email app to get in touch.');
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function copyEnquiry() {
    try {
      await navigator.clipboard.writeText(draft.text);
      setStatus('Enquiry copied. Paste it into an email and send it to the address below.');
    } catch {
      draftRef.current.focus();
      draftRef.current.select();
      setStatus('Your enquiry is selected. Copy it and paste it into your email app.');
    }
  }

  return (
    <form className="enquiry-form" onSubmit={prepareEmail}>
      <h2>A little note to us</h2>
      <p>Leave the details below and we’ll take it from there.</p>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Your name <span aria-hidden="true">*</span></label>
          <input id="name" name="name" autoComplete="name" placeholder="What should we call you?" required maxLength={100} />
        </div>
        <div className="field">
          <label htmlFor="email">Your email <span aria-hidden="true">*</span></label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="item">What caught your eye?</label>
        <select id="item" name="item" value={item} onChange={event => setItem(event.target.value)}>
          {ENQUIRY_ITEMS.map(option => <option key={option.value} value={option.value}>{option.label || option.value}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Your little note <span aria-hidden="true">*</span></label>
        <textarea id="message" name="message" rows={5} placeholder="Tell us about the piece, colours, quantity, or idea you have in mind…" required maxLength={3000} />
      </div>
      <p className="form-note">This opens a draft in your email app. Review it and press send there to share your enquiry.</p>
      <button className="button" type="submit">Prepare my email <span aria-hidden="true">↗</span></button>
      <p className="form-status" role="status">{status}</p>
      {draft && (
        <div id="email-fallback">
          <p className="form-note">No email app opened? Copy your note and send it to <a href={`mailto:${draft.recipient}`}>{draft.recipient}</a>.</p>
          <label className="sr-only" htmlFor="email-draft">Your prepared enquiry</label>
          <textarea id="email-draft" ref={draftRef} readOnly rows={7} value={draft.text} />
          <button className="text-link copy-button" type="button" onClick={copyEnquiry}>Copy enquiry <span aria-hidden="true">↗</span></button>
        </div>
      )}
    </form>
  );
}

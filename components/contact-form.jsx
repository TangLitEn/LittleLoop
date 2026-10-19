'use client';

import { useSearchParams } from 'next/navigation';
import EnquiryForm from './enquiry-form';
import { ENQUIRY_ITEMS } from '../lib/site';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const requestedItem = searchParams.get('item');
  const item = ENQUIRY_ITEMS.some(option => option.value === requestedItem)
    ? requestedItem
    : ENQUIRY_ITEMS[0].value;

  return <EnquiryForm key={item} initialItem={item} />;
}

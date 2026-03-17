'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/tr/iletisim/');
  }, [router]);
  return null;
}

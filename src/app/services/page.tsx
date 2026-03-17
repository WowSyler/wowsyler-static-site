'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ServicesRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/tr/hizmetler/');
  }, [router]);
  return null;
}

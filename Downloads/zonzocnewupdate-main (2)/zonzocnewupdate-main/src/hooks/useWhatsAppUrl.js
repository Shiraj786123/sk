'use client';

import { usePathname } from 'next/navigation';
import { getWhatsAppUrl } from '../utils/whatsapp';

export function useWhatsAppUrl(customMessage) {
  const pathname = usePathname();
  return getWhatsAppUrl(pathname, customMessage);
}

'use client';

import { useWhatsAppUrl } from '../hooks/useWhatsAppUrl';

const WhatsAppLink = ({ message, children, className, ...props }) => {
  const href = useWhatsAppUrl(message);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};

export default WhatsAppLink;

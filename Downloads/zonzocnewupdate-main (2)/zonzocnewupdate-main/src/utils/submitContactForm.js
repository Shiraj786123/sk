'use client';

export async function submitContactForm(payload) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let message = 'Could not send message. Please try again or email info@zonzoctech.com directly.';
    try {
      const data = await response.json();
      if (data.error) message = data.error;
    } catch {
      /* use default message */
    }
    throw new Error(message);
  }

  return { success: true };
}

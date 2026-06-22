import { NextResponse } from 'next/server';
import { sendContactEmail } from '../../../lib/contactMailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    await sendContactEmail(body);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('CONTACT API ERROR:', error);

    if (error.code === 'EMAIL_NOT_CONFIGURED') {
      return NextResponse.json(
        { error: 'Email service is not configured on the server.' },
        { status: 503 }
      );
    }

    if (error.code === 'INVALID_PAYLOAD') {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email info@zonzoctech.com directly.' },
      { status: 500 }
    );
  }
}

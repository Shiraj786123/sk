import { NextResponse } from 'next/server';
import { generateChatReply } from '../../../lib/chatAssistant';

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

    const message = body.message?.trim();
    if (!message) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    if (message.length > 1000) {
      return NextResponse.json({ error: 'Message too long.' }, { status: 400 });
    }

    const history = Array.isArray(body.history) ? body.history : [];
    const reply = await generateChatReply(message, history);

    return NextResponse.json({
      reply: reply.text,
      links: reply.links || [],
    });
  } catch (error) {
    console.error('CHAT API ERROR:', error);
    return NextResponse.json(
      { error: 'Could not generate a reply. Please try again.' },
      { status: 500 }
    );
  }
}

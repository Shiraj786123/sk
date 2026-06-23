import { getChatbotReply } from '../src/data/chatbotKnowledge.js';

const SYSTEM_PROMPT = `You are Zonzo, the friendly AI assistant for ZonzocTech (https://zonzoctech.com).

ABOUT ZONZOCTECH:
- AI-powered web development & digital growth agency based in Sri Lanka
- Serves clients across the UK, USA, and worldwide
- Contact: info@zonzoctech.com | Website: zonzoctech.com
- Free consultations available; projects typically start from $500 USD

SERVICES (mention relevant ones when helpful):
- AI Website Design & Development (/ai-website-design-development)
- AI Web Application Development (/ai-web-application-development)
- AI Software Development — chatbots, automation, GPT integrations (/ai-software-development)
- Full-Stack Web Development — React, Next.js, Node.js (/full-stack-web-development)
- Ecommerce — Shopify, WooCommerce (/ecommerce-development-optimization)
- SEO Services (/seo-services)
- AI SEO & Search Optimization — GEO, AEO, ChatGPT/Perplexity visibility (/seo-ai-search-optimization)
- Website Maintenance & Security (/website-maintenance-performance-security)
- Case Studies (/case-studies) | Contact (/contact) | About (/about)

RULES:
1. Answer ANY question the user asks — general knowledge, tech, business, or ZonzocTech-related.
2. Be helpful, concise, and warm. Use short paragraphs (2–4 sentences max unless detail is needed).
3. For ZonzocTech services, pricing, or projects — guide users toward a free consultation at /contact.
4. Never invent fake pricing beyond "starts from $500" — say exact quotes need a consultation.
5. Do not use markdown headers or bullet lists unless listing services; keep replies chat-friendly.
6. If asked something unrelated to business, still answer helpfully, then gently offer ZonzocTech help if relevant.`;

function buildHistoryContents(history = []) {
  return history
    .filter((m) => m.role === 'user' || m.role === 'bot')
    .slice(-12)
    .map((m) => ({
      role: m.role === 'bot' ? 'model' : 'user',
      parts: [{ text: m.text }],
    }));
}

async function callGemini(message, history) {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey) return null;

  const model = process.env.GEMINI_MODEL?.trim() || 'gemini-1.5-flash';
  const contents = [
    ...buildHistoryContents(history),
    { role: 'user', parts: [{ text: message }] },
  ];

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: {
          temperature: 0.75,
          maxOutputTokens: 600,
        },
      }),
    }
  );

  const data = await response.json();
  if (!response.ok) {
    const err = new Error(data?.error?.message || 'Gemini API error');
    err.code = 'AI_ERROR';
    throw err;
  }

  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
  if (!text) {
    const err = new Error('Empty AI response');
    err.code = 'AI_ERROR';
    throw err;
  }

  return text;
}

async function callOpenAI(message, history) {
  const apiKey = process.env.OPENAI_API_KEY?.trim();
  if (!apiKey) return null;

  const model = process.env.OPENAI_MODEL?.trim() || 'gpt-4o-mini';
  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...history
      .filter((m) => m.role === 'user' || m.role === 'bot')
      .slice(-12)
      .map((m) => ({
        role: m.role === 'bot' ? 'assistant' : 'user',
        content: m.text,
      })),
    { role: 'user', content: message },
  ];

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.75,
      max_tokens: 600,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    const err = new Error(data?.error?.message || 'OpenAI API error');
    err.code = 'AI_ERROR';
    throw err;
  }

  const text = data?.choices?.[0]?.message?.content?.trim();
  if (!text) {
    const err = new Error('Empty AI response');
    err.code = 'AI_ERROR';
    throw err;
  }

  return text;
}

export async function generateChatReply(message, history = []) {
  const trimmed = message?.trim();
  if (!trimmed) {
    return { text: 'Please type a message and I\'ll do my best to help!', links: [] };
  }

  const hasGemini = Boolean(process.env.GEMINI_API_KEY?.trim());
  const hasOpenAI = Boolean(process.env.OPENAI_API_KEY?.trim());

  if (!hasGemini && !hasOpenAI) {
    const fallback = getChatbotReply(trimmed);
    return {
      text: fallback.text,
      links: fallback.links || [],
      source: 'rules',
    };
  }

  try {
    let text = null;
    if (hasGemini) {
      text = await callGemini(trimmed, history);
    }
    if (!text && hasOpenAI) {
      text = await callOpenAI(trimmed, history);
    }

    const fallback = getChatbotReply(trimmed);
    return {
      text,
      links: fallback.links || [],
      source: 'ai',
    };
  } catch (error) {
    console.error('CHAT AI ERROR:', error);
    const fallback = getChatbotReply(trimmed);
    return {
      text: fallback.text,
      links: fallback.links || [],
      source: 'fallback',
    };
  }
}

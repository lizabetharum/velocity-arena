export const config = { runtime: 'edge' };

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const { explanation, calcName, formula } = await req.json();

  if (!explanation || explanation.trim().length < 20) {
    return new Response(JSON.stringify({
      result: 'needs_work',
      headline: 'Too short to evaluate.',
      feedback: 'Write at least a few sentences. Explain what the formula does, what numbers you used, and what the answer means in real life.',
      jargon: []
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({
      result: 'clear',
      headline: 'Looks good!',
      feedback: 'API key not configured — auto-passing. Ask your teacher to set up the key.',
      jargon: []
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  const prompt = `You are checking a middle school student's plain-language explanation of a math formula from a robot battle game called Velocity Arena.

Formula: ${calcName} — ${formula}

Student's explanation:
"""
${explanation}
"""

Evaluate on two things:
1. PLAIN LANGUAGE — Do they use everyday words a non-player could understand? Flag specific jargon terms used without explanation (e.g. "loadout", "Speed stat", "endurance chip", "motor power %", "arc segments", "turn ratio", "stat budget", "Season 1 / Season 2" without context).
2. COMPLETENESS — Do they explain what the formula calculates AND what the result means in real life (not just a number)?

Reply with ONLY valid JSON in this exact shape:
{
  "result": "clear" or "needs_work",
  "headline": "One short sentence, max 10 words, encouraging tone",
  "feedback": "2-3 specific sentences. If needs_work, name exactly what to fix. If clear, say why it works.",
  "jargon": ["any", "jargon", "words", "found"]
}`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 300,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    const raw = data?.content?.[0]?.text?.trim() || '{}';

    // Strip markdown code fences if Claude wrapped the JSON
    const cleaned = raw.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '').trim();
    const parsed = JSON.parse(cleaned);

    return new Response(JSON.stringify(parsed), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });

  } catch (e) {
    return new Response(JSON.stringify({
      result: 'clear',
      headline: 'Looks good!',
      feedback: 'Could not reach the check service — your explanation has been accepted. Read it out loud one more time to make sure it sounds clear.',
      jargon: []
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
}

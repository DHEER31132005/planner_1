import { validateItinerary } from '../utils/validation';

/**
 * AI Service – calls backend which keeps the API key secret.
 * Falls back to a mock generator if no backend is available (for demo).
 */

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// System prompt that forces structured JSON
const SYSTEM_PROMPT = `You are an expert travel planner. 
Respond ONLY with valid JSON matching this exact schema (no markdown, no extra text):

{
  "tripTitle": "string",
  "destination": "string",
  "durationDays": number,
  "totalEstimatedCost": "string",
  "summary": "string",
  "days": [
    {
      "dayNumber": 1,
      "title": "string",
      "date": "optional string",
      "stops": [
        {
          "id": "unique-string",
          "time": "09:00",
          "title": "string",
          "description": "string",
          "location": "string",
          "duration": "2 hours",
          "cost": "optional string",
          "tips": "optional string"
        }
      ]
    }
  ]
}

Create realistic, enjoyable day-by-day itineraries. Include 3-5 stops per day.
Always include unique "id" for every stop.`;

/**
 * Generate itinerary from user prompt.
 * Uses AbortController so caller can cancel.
 */
export async function generateItinerary(userPrompt, signal) {
  // Try real backend first
  try {
    const res = await fetch(`${API_BASE}/api/generate-itinerary`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: userPrompt, system: SYSTEM_PROMPT }),
      signal,
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(errText || `Server error ${res.status}`);
    }

    const json = await res.json();
    const validation = validateItinerary(json.data || json);

    if (!validation.success) {
      throw new Error(validation.error);
    }

    return validation.data;
  } catch (err) {
    if (err.name === 'AbortError') throw err;

    // Fallback: mock generator for local demo without backend
    console.warn('Backend unavailable, using mock itinerary:', err.message);
    return generateMockItinerary(userPrompt);
  }
}

/**
 * Simple mock generator so the UI works without an API key / backend.
 */
function generateMockItinerary(prompt) {
  const lower = prompt.toLowerCase();
  let destination = 'Bali';
  let days = 4;

  if (lower.includes('japan') || lower.includes('tokyo')) destination = 'Tokyo, Japan';
  else if (lower.includes('paris') || lower.includes('france')) destination = 'Paris, France';
  else if (lower.includes('goa')) destination = 'Goa, India';
  else if (lower.includes('santorini') || lower.includes('greece')) destination = 'Santorini, Greece';
  else if (lower.includes('dubai')) destination = 'Dubai, UAE';
  else if (lower.includes('maldives')) destination = 'Maldives';
  else if (lower.includes('new york') || lower.includes('nyc')) destination = 'New York, USA';

  const dayMatch = prompt.match(/(\d+)\s*day/i);
  if (dayMatch) days = Math.min(Math.max(parseInt(dayMatch[1], 10), 2), 10);

  const mockDays = [];
  for (let i = 1; i <= days; i++) {
    mockDays.push({
      dayNumber: i,
      title: `Day ${i} – Exploring ${destination.split(',')[0]}`,
      stops: [
        {
          id: `mock-${i}-1`,
          time: '09:00',
          title: `Morning highlight in ${destination.split(',')[0]}`,
          description: `Start your day with a popular attraction. Based on your request: "${prompt.slice(0, 80)}..."`,
          location: destination,
          duration: '2-3 hours',
          cost: '$20-40',
          tips: 'Arrive early to avoid crowds.',
        },
        {
          id: `mock-${i}-2`,
          time: '13:00',
          title: 'Local lunch experience',
          description: 'Enjoy authentic local cuisine at a highly-rated restaurant.',
          location: 'City center',
          duration: '1.5 hours',
          cost: '$15-30',
        },
        {
          id: `mock-${i}-3`,
          time: '16:00',
          title: 'Afternoon activity',
          description: 'Visit a cultural site, beach, or viewpoint depending on the destination.',
          location: destination,
          duration: '2 hours',
          tips: 'Wear comfortable shoes.',
        },
      ],
    });
  }

  return {
    tripTitle: `${days}-Day Adventure in ${destination}`,
    destination,
    durationDays: days,
    totalEstimatedCost: `$${(days * 120).toLocaleString()} – $${(days * 220).toLocaleString()}`,
    summary: `A carefully planned ${days}-day trip to ${destination} based on your preferences. This is a demo itinerary (connect a real AI backend for personalized results).`,
    days: mockDays,
  };
}

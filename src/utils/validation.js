import { z } from 'zod';

// Zod schema for validating AI itinerary response
export const StopSchema = z.object({
  id: z.string(),
  time: z.string().optional().default('09:00'),
  title: z.string().min(1),
  description: z.string().optional().default(''),
  location: z.string().optional().default(''),
  duration: z.string().optional().default('1-2 hours'),
  cost: z.string().optional(),
  tips: z.string().optional(),
});

export const DaySchema = z.object({
  dayNumber: z.number().int().positive(),
  title: z.string().min(1),
  date: z.string().optional(),
  stops: z.array(StopSchema).min(1),
});

export const ItinerarySchema = z.object({
  tripTitle: z.string().min(1),
  destination: z.string().min(1),
  durationDays: z.number().int().positive(),
  totalEstimatedCost: z.string().optional().default('Not specified'),
  summary: z.string().optional().default(''),
  days: z.array(DaySchema).min(1),
});

/**
 * Safely parse and validate AI JSON response.
 * Returns { success: true, data } or { success: false, error }
 */
export function validateItinerary(raw) {
  try {
    let parsed = raw;

    // If string, try to extract JSON
    if (typeof raw === 'string') {
      // Remove markdown code fences if present
      const cleaned = raw
        .replace(/```json\s*/gi, '')
        .replace(/```\s*/g, '')
        .trim();

      // Try to find JSON object
      const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        return { success: false, error: 'No valid JSON object found in response' };
      }
      parsed = JSON.parse(jsonMatch[0]);
    }

    const result = ItinerarySchema.safeParse(parsed);

    if (!result.success) {
      console.error('Zod validation errors:', result.error.errors);
      return {
        success: false,
        error: 'AI returned data in unexpected format. Please try again.',
        details: result.error.errors,
      };
    }

    // Ensure every stop has a unique id
    const data = result.data;
    data.days = data.days.map((day) => ({
      ...day,
      stops: day.stops.map((stop, idx) => ({
        ...stop,
        id: stop.id || `stop-${day.dayNumber}-${idx}-${Date.now()}`,
      })),
    }));

    return { success: true, data };
  } catch (err) {
    return {
      success: false,
      error: err.message || 'Failed to parse AI response',
    };
  }
}

export function generateId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

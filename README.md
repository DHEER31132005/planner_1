# TripCraft AI – Frontend Internship Assignment

A complete React Trip Planner with destination search, ratings, prices, package availability, country/region info, bus & transport details, AI itinerary generation, and interactive editing.

## New Features (Latest Update)

- **Destination Detail Page** – Click any card or "Plan Trip" → navigates to full detail page
- **Bus & Transport section** – Airport, bus options, local transport, average fares
- **Country + Region/State** shown on every destination
- Search works by destination name, country, or region
- Full stats: Rating, Reviews, Starting Price, Packages Available, Best Time

## Features Overview

| Feature | Status |
|---------|--------|
| Destination Search (name / country / region) | ✅ |
| Rating + Review count | ✅ |
| Starting Price | ✅ |
| Packages Available | ✅ |
| Country & Region/State | ✅ |
| Bus & Transport details | ✅ |
| Click Plan Trip → Detail Page | ✅ |
| AI free-form → structured itinerary | ✅ |
| Drag & drop reorder stops | ✅ |
| Expand / remove stops | ✅ |
| Login + Signup | ✅ |
| Bad AI output handling (Zod + retry) | ✅ |
| Loading / Error / Empty states | ✅ |
| Mobile responsive | ✅ |

## Setup

```bash
cd trip
npm install
npm run dev
```

Open http://localhost:5173

## Project Structure

```
src/
├── components/
│   ├── common/         Navbar, Loading, ErrorMessage, ProtectedRoute
│   ├── destination/    DestinationSearch, DestinationCard
│   └── trip/           TripPlanner, Itinerary, DayCard, StopItem
├── context/            AuthContext
├── data/               destinations.js (12 destinations with country, region, bus info)
├── pages/              HomePage, DestinationDetailPage, LoginPage, SignupPage
├── services/           aiService.js, authService.js
├── utils/              validation.js (Zod)
├── App.jsx
└── App.css
```

## How it works

1. Search or browse destinations on homepage
2. Click a card or **Plan Trip** → goes to `/destination/:id`
3. Detail page shows full info + Bus/Transport + AI Planner pre-filled
4. Generate itinerary → expand days, drag stops, remove activities

## AI Note
Uses structured JSON + Zod validation. Falls back to mock itinerary if no backend is running.
For real AI: set `VITE_API_URL` and run a small Express proxy that keeps your API key secret.

## Time Spent
~8 hours

## AI Tools Used
Cursor / Claude for scaffolding and polish. All code reviewed and understood.

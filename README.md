# Two-Ex Super Bowl Weekend Website 🏈

An interactive agenda website for Guppa and Shmeegan's epic SF Super Bowl LX weekend (February 6-10, 2026).

## Features

- **Countdown Timer**: Real-time countdown to Super Bowl LX kickoff
- **Interactive Agenda**: Day-by-day schedule with expandable cards
- **Packing List**: Categorized checklist for the trip
- **Seahawks Hype Zone**: Stats, charts, and embedded highlight videos
- **Photo Gallery**: Grid layout with custom lightbox
- **Easter Eggs**:
  - Ewok appears when you scroll past 50%
  - Konami code (↑↑↓↓←→←→BA) triggers Ewok dance party
  - Coors Light animation on page load

## Tech Stack

- **React** with Vite
- **Tailwind CSS** for styling
- **Recharts** for data visualization
- **Lucide React** for icons
- **Google Fonts**: Poppins, Inter, Bebas Neue

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation

```bash
# Navigate to project directory
cd ~/two-ex

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Server will run at http://localhost:5173
```

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

## Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI (first time only)
npm install -g vercel

# Deploy
vercel
```

## Color Palette

- **Navy Seahawks**: #002244
- **Action Green**: #69BE28
- **Wolf Grey**: #A5ACAF
- **Fog SF**: #D3D3D3
- **Golden Gate Orange**: #C0362C
- **Coors Silver**: #C0C0C0
- **Coors Blue**: #004B87

## Customization

### Update Itinerary

Edit `src/data/itinerary.js` to modify the schedule.

### Update Packing List

Edit `src/data/packingList.js` to add/remove items.

### Add Photos

After the trip, add photos to `public/assets/photos/` and update the photo array in `src/components/PhotoGallery.jsx`.

## Easter Eggs

1. **Ewok Appearance**: Scroll past 50% to see an Ewok with "Yub nub!" speech bubble
2. **Konami Code**: Type ↑↑↓↓←→←→BA to trigger the Ewok Dance Party
3. **Coors Light Clink**: Animated Coors Light cans clink on page load

## GO HAWKS! 🏈

Made with ❤️ for an epic Super Bowl weekend in San Francisco.

# NewsRoom – News App  
**A fast, beautiful, and fully responsive news aggregator **

Live Demo: https://newsroomapp.netlify.app  

## Features
- Real-time headlines  
- Top headlines, categories (Business, Sports, Entertainment, etc.)  
- Powerful search with instant results  
- Full in-app article detail pages (no leaving the app!)  
- Mobile-first, super smooth UI  
- Built with React 19 + Vite + Tailwind CSS + React Router v7  

## Tech Stack
| Technology           | Purpose                          |
|----------------------|----------------------------------|
| React 19 + TypeScript| Modern, type-safe UI             |
| Vite                 | Lightning-fast dev server & build|
| Tailwind CSS         | Beautiful, responsive design     |
| Lucide React         | Clean icons                      |
| React Router v7      | Client-side routing              |
| NewsAPI.org          | Source of news articles          |
| Netlify              | Free, instant global deployment |

## Project Structure
```
src/
├── components/      # Reusable UI components
├── context/         # NewsContext (global state)
├── hooks/           # useNews.ts (all API logic)
├── pages/           # Home, ArticleDetail, etc.
├── types/           # TypeScript interfaces
├── utils/           # generateId.ts (unique IDs)
├── public/
│   └── _redirects   # Netlify proxy for /v2 → newsapi.org
└── App.tsx          # Routes
```

## Local Development

### 1. Clone & Install
```bash
https://github.com/blur-r/news-today.git
cd newsroom
npm install
```

### 2. Get a Free API Key
1. Go to https://newsapi.org/register  
2. Copy your API key

### 3. Create `.env` file in project root
```env
VITE_NEWS_API_KEY=your_actual_api_key_here
```

### 4. Run locally
```bash
npm run dev
```
→ Open http://localhost:5173

## Deploy on Netlify (Free & Instant)

### Option A – Drag & Drop (Fastest)
1. Run `npm run build`
2. Drag the entire `dist` folder into https://app.netlify.com/drop

### Option B – Connect GitHub (Recommended)
1. Push your code to GitHub
2. Go to https://app.netlify.com → Add new site → Connect to GitHub
3. Build settings (Netlify auto-detects):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variable:
   - Key: `VITE_NEWS_API_KEY`
   - Value: your NewsAPI key

**Important**: The file `public/_redirects` is already included – it fixes the `/v2` proxy on production so you never get 404 errors again.

## API Proxy (Why It Works on Netlify)
```text
/v2/*  https://newsapi.org/v2/:splat  200
```
This line in `public/_redirects` forwards all `/v2` requests to NewsAPI.org in production (the Vite proxy only works in dev).

## License
MIT © 2025 – Feel free to use, modify, and launch your own version!


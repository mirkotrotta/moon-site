# Moon Site - Deployment Guide

This guide explains how to deploy your Moon Site portfolio to Vercel for free as a showcase.

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy Frontend Only (Recommended for Showcase)

1. **Fork or Clone the Repository**
   ```bash
   git clone [your-repo-url]
   cd moon-site
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub account
   - Import your `moon-site` repository
   - Set the **Root Directory** to `frontend`
   - Deploy!

3. **The site will automatically use demo data** when no backend API is available.

### Option 2: Deploy with Backend (Advanced)

If you want to deploy with your actual GitHub data:

1. **Set Environment Variables in Vercel:**
   - `GITHUB_TOKEN`: Your GitHub personal access token
   - `API_BASE_URL`: Your backend API URL (if using external hosting)

2. **Deploy Frontend + Backend:**
   - Frontend: Deploy the `frontend` folder to Vercel
   - Backend: Deploy to a service like Railway, Render, or Fly.io

## 📁 Project Structure for Deployment

```
moon-site/
├── frontend/          # Next.js app (deploy this to Vercel)
│   ├── package.json
│   ├── vercel.json   # Vercel configuration
│   └── lib/api.ts    # Smart API with fallbacks
└── backend/          # FastAPI (optional for showcase)
```

## 🎨 Customization for Your Showcase

### 1. Update Placeholder Data
Edit `frontend/lib/api.ts` to customize the demo projects and resume:

```typescript
const DEMO_PROJECTS: Project[] = [
  {
    name: 'Your Project Name',
    description: 'Your project description',
    url: 'https://github.com/mirkotrotta/your-project',
    // ... more fields
  }
];
```

### 2. Update Personal Information
- `frontend/components/SocialLinks.tsx` - Update social media links
- `frontend/app/about/page.tsx` - Update personal bio
- `frontend/lib/data.tsx` - Update skills and featured projects

### 3. Update Branding
- `frontend/components/Layout.tsx` - Update site name and navigation
- `frontend/app/layout.tsx` - Update metadata and SEO information

## 🔧 Local Development

1. **Frontend Only:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

2. **With Backend:**
   ```bash
   # Terminal 1 - Backend
   cd backend
   pip install -r requirements.txt
   uvicorn main:app --reload --port 8000
   
   # Terminal 2 - Frontend
   cd frontend
   npm install
   npm run dev
   ```

## 🌐 How the Smart API Works

The `frontend/lib/api.ts` file automatically:

1. **In Development**: Tries to connect to `localhost:8000` (your local backend)
2. **In Production**: Uses demo data if no `API_BASE_URL` is set
3. **With Backend**: Uses your actual API if configured

This means your site works perfectly as a showcase without any backend setup!

## 📱 What's Included in the Demo

### Demo Projects (6 examples):
- Moon-Site Portfolio
- AI-Powered Task Manager  
- Real-time Chat Application
- E-commerce Analytics Dashboard
- Mobile Food Delivery App
- Blockchain Voting System

### Demo Resume (4 positions):
- Senior Full-Stack Developer
- Software Engineer
- Frontend Developer
- Junior Web Developer

## 🎯 Perfect for Showcasing

This setup is ideal for:
- ✅ Job applications
- ✅ Portfolio showcases
- ✅ Client demonstrations
- ✅ Learning and experimentation
- ✅ Zero backend maintenance

## 🔄 Upgrading to Real Data

When you're ready to use real data:

1. Deploy your backend API
2. Set the `API_BASE_URL` environment variable in Vercel
3. Add your `GITHUB_TOKEN` for real GitHub integration

The site will automatically switch from demo data to real data!

## 🎨 Next.js Features Included

- ⚡ Static Site Generation (SSG)
- 🎨 Tailwind CSS styling
- 📱 Responsive design
- 🌙 Dark mode support
- 📄 MDX blog support
- 🔍 SEO optimized
- 📊 Analytics ready

## 🚀 Deploy Now

Ready to deploy? Click the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mirkotrotta/moon-site&project-name=moon-site&repository-name=moon-site&root-directory=frontend) 
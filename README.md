<div align="center">

# 🌙 Moon Site Template

**A Modern, Production-Ready Portfolio Template**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/mirkotrotta/moon-site)
[![GitHub stars](https://img.shields.io/github/stars/mirkotrotta/moon-site?style=social)](https://github.com/mirkotrotta/moon-site/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/mirkotrotta/moon-site?style=social)](https://github.com/mirkotrotta/moon-site/network)

[**🚀 Live Demo**](https://moon-site-iota.vercel.app/) • [**📖 Documentation**](https://moon-site-iota.vercel.app/design-system) • [**🎨 Design System**](https://moon-site-iota.vercel.app/design-system) • [**🐛 Report Bug**](https://github.com/mirkotrotta/moon-site/issues)

</div>

## ✨ Features

- **🎨 Modern Design System** - Comprehensive UI components with Tailwind CSS
- **📱 Fully Responsive** - Perfect on desktop, tablet, and mobile
- **🌙 Dark Mode** - Beautiful light/dark theme switching
- **📝 Blog System** - MDX-powered blog with syntax highlighting
- **🚀 Projects Showcase** - Dynamic project cards with GitHub integration
- **⚡ Performance Optimized** - Next.js 15, App Router, Server Components
- **🔧 Easy Customization** - Well-documented components and clear structure
- **📊 Analytics Ready** - Google Analytics 4 integration
- **🔍 SEO Optimized** - Meta tags, sitemap, and schema markup
- **🐳 Docker Support** - Containerized deployment ready
- **🔄 CI/CD Ready** - GitHub Actions and Vercel deployment
- **📧 Contact Forms** - Built-in contact functionality
- **🎯 TypeScript** - Fully typed for better developer experience

## 🚀 Quick Start

### Option 1: Use as Template (Recommended)
1. Click the **"Use this template"** button above
2. Clone your new repository
3. Install dependencies: `npm install`
4. Start development: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

### Option 2: Clone & Fork
```bash
git clone https://github.com/mirkotrotta/moon-site.git
cd moon-site
npm install
npm run dev
```

### Option 3: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/mirkotrotta/moon-site)

## 🛠️ Tech Stack

**Frontend:**
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Carbon Icons
- MDX (Blog)

**Backend:**
- FastAPI (Python)
- Pydantic
- Uvicorn

**Deployment:**
- Vercel (Frontend)
- Railway/Heroku (Backend)
- Docker support

## 📁 Project Structure

```
moon-site/
├── frontend/                 # Next.js application
│   ├── app/                 # App router pages
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Utilities and API
│   ├── content/             # MDX blog posts
│   └── public/              # Static assets
├── backend/                 # FastAPI backend
│   ├── api/                 # API routes
│   ├── models/              # Data models
│   └── main.py              # FastAPI app
└── docs/                    # Documentation
```

## 🎨 Design System

The template includes a comprehensive design system with:

- **Buttons** - Multiple variants and sizes
- **Cards** - Product, blog, and info cards
- **Forms** - Contact forms with validation
- **Navigation** - Header, footer, and sidebar components
- **Typography** - Consistent text styles
- **Colors** - Professional color palette
- **Spacing** - Consistent spacing system

[**View Design System →**](https://moon-site-iota.vercel.app/design-system)

## 📝 Customization

### 1. Personal Information
Edit `frontend/lib/data.tsx` to update:
- Personal details
- Skills and services
- Featured projects
- Social links

### 2. Styling
- Colors: `tailwind.config.js`
- Fonts: `app/layout.tsx`
- Components: `components/` directory

### 3. Content
- Blog posts: `content/blog/`
- Images: `public/images/`
- Metadata: `app/layout.tsx`

### 4. API Configuration
- GitHub API: Set `GITHUB_TOKEN` environment variable
- Analytics: Update `GA_MEASUREMENT_ID` in `AnalyticsProvider.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Set `frontend` as root directory
4. Deploy!

### Manual Deployment
```bash
# Build frontend
cd frontend
npm run build

# Build backend
cd ../backend
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
```

### Docker
```bash
# Build and run with Docker Compose
docker-compose up --build
```

## 📊 Performance

- **98/100** Performance score on Lighthouse
- **95/100** SEO score
- **100/100** Accessibility score
- **Fast load times** with Next.js optimization
- **Optimized images** with next/image
- **Minimal bundle size** with tree shaking

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🛡️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💝 Support

If this template helped you, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📢 Sharing with others

## 🌟 Showcase

Built something amazing with this template? [Let us know!](https://github.com/mirkotrotta/moon-site/discussions)

---

<div align="center">

**[🚀 Live Demo](https://moon-site-iota.vercel.app/)** • **[📖 Documentation](https://moon-site-iota.vercel.app/design-system)** • **[🎨 Design System](https://moon-site-iota.vercel.app/design-system)**

Made with ❤️ by [Mirko Trotta](https://github.com/mirkotrotta)

</div>

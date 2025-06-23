# Moon Site

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115.12-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com)

</div>

## 🚀 About This Project

**Moon Site** is a modern full-stack web application template featuring a clean blog system and design system components. Built with Next.js 15, TypeScript, and Tailwind CSS on the frontend, with a FastAPI backend for extensible API functionality.

This is a practical template for developers who want to start with a solid foundation that includes modern tooling, MDX-based blogging, and reusable UI components.

## 🧩 Design System Preview

The project includes a comprehensive design system page (`/design-system`) showcasing reusable UI components built with React and Tailwind CSS. It features token-based design patterns for colors, spacing, and typography that mirror real-world design system workflows.

**Components included:**
- **Button**: Multiple variants (primary, secondary, tertiary) and sizes
- **Card**: Flexible container with header, content, and footer sections  
- **Tag**: Color-coded labels with removable functionality

**Design tokens:**
- Color palettes with consistent shade scales
- Typography hierarchy with visual examples
- Spacing system based on Tailwind's design tokens

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + clsx
- **Content**: MDX for blog posts
- **Icons**: Carbon Design System icons

### Backend  
- **API**: FastAPI (Python)
- **Runtime**: Uvicorn ASGI server
- **Dependencies**: Minimal FastAPI setup

### Development
- **Package Manager**: npm/pnpm
- **Scripts**: Custom CLI for blog post creation
- **Linting**: ESLint with Next.js config

## 📁 Project Structure

```
moon-site/
├── frontend/
│   ├── app/                    # Next.js app directory
│   │   ├── design-system/      # Design system showcase
│   │   ├── blog/              # Blog pages
│   │   └── ...
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   └── blog/              # Blog-specific components
│   ├── content/blog/          # MDX blog posts
│   └── scripts/               # CLI utilities
├── backend/
│   ├── api/                   # API route handlers
│   ├── models/                # Data schemas
│   └── main.py               # FastAPI app
└── docs/                     # Documentation
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0.0 or higher
- **Python** 3.8 or higher  
- **npm** or **pnpm** (recommended)

### 1. Clone & Install

```bash
git clone https://github.com/mirkotrotta/moon-site.git
cd moon-site
```

### 2. Frontend Setup

```bash
cd frontend
npm install
# or
pnpm install

# Start development server
npm run dev
# or  
pnpm dev
```

The frontend will be available at `http://127.0.0.1:4000`

### 3. Backend Setup (Optional)

```bash
cd backend

# Create virtual environment
python -m venv .venv

# Activate virtual environment
# On Windows:
.venv\Scripts\activate
# On macOS/Linux:
source .venv/bin/activate  

# Install dependencies
pip install -r requirements.txt

# Start API server
uvicorn main:app --reload
```

The API will be available at `http://127.0.0.1:8000`

## ✍️ Creating Blog Posts

Generate new blog posts using the built-in CLI:

```bash
cd frontend
npm run new-post "Your Post Title"
```

This creates a new `.mdx` file in `content/blog/` with:
- Auto-generated slug and filename
- Frontmatter template (title, date, summary, tags)
- Basic content structure

Blog posts are automatically routed at `/blog/[slug]` using Next.js dynamic routing.

## 🎨 Using the Design System

Visit `/design-system` to explore all available components and design tokens. Each component is documented with:

- **Usage examples** for different variants and states
- **Interactive demos** to test functionality  
- **Design token references** showing colors, spacing, and typography
- **Code patterns** following TypeScript and Tailwind best practices

Import components in your pages:

```tsx
import Button from '@/components/ui/Button';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';

export default function MyPage() {
  return (
    <Card>
      <CardHeader>
        <h2>Welcome</h2>
      </CardHeader>
      <CardContent>
        <p>This is a card component.</p>
        <div className="flex gap-2 mt-4">
          <Tag variant="primary">React</Tag>
          <Tag variant="secondary">TypeScript</Tag>
        </div>
        <Button variant="primary" className="mt-4">
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}
```

## 🧪 Development Commands

```bash
# Frontend
cd frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run new-post     # Create new blog post

# Backend  
cd backend
uvicorn main:app --reload    # Start API with hot reload
```

## 📦 What's Included

### ✅ Ready to Use
- Modern Next.js 15 setup with App Router
- TypeScript configuration
- Tailwind CSS with custom design system
- MDX blog system with frontmatter
- Reusable UI components (Button, Card, Tag)
- Design system documentation page
- FastAPI backend foundation
- ESLint configuration

### ⏳ Not Included (Add as needed)
- Database integration
- User authentication  
- API data fetching
- Deployment configuration
- Testing setup
- Analytics integration

## 🤝 Contributing

This is a template project, but contributions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.

---

<div align="center">

**Built by [Mirko Trotta](https://github.com/mirkotrotta)**

⭐️ Star this repository if you find it useful!

</div>

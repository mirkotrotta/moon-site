# Moon Site

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat-square&logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.108.0-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com)

</div>

## 🚀 About the Project

**Moon Site** is a personal case study project: a modern website template built to demonstrate full-stack development skills using technologies like Next.js, FastAPI, and PostgreSQL.

It features a blog system powered by MDX and provides a starting point for custom full-stack applications. The goal is to build an open-source foundation others can learn from or fork.

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Markdown**: MDX support for blogs

### Backend
- **API Framework**: FastAPI (Python 3.8+)
- **Database**: PostgreSQL (via SQLAlchemy ORM)

### Tooling
- **Package Manager**: pnpm
- **Dev Scripts**: Custom CLI tool for generating blog posts
- **Content**: Blog posts live in `content/blog/*.mdx`

## ✍️ Blog System

Blog posts are written in `.mdx` and stored in `content/blog`. You can create posts using:

```bash
npm run new-post "My New Post Title"
```

Each post includes frontmatter for title, date, summary, and tags. Posts are automatically routed via Next.js dynamic routing.

## 📂 Project Structure

```
moon-site/
├── frontend/         # Next.js frontend
├── backend/          # FastAPI backend
├── content/blog/     # Blog post MDX files
├── scripts/          # CLI post generator
└── docs/             # Static documentation assets
```

## 🚧 Status

This project is a work-in-progress and not fully production-ready. Several features mentioned in earlier drafts are not implemented yet:

- No i18n or accessibility auditing
- No CI/CD setup or DevOps tooling
- No analytics or monitoring
- No authentication or security infrastructure
- Documentation folder is incomplete

## 🧪 Local Development

### Requirements

```bash
node -v     # >= 18.0.0
python -v   # >= 3.8.0
docker -v   # optional for container-based setup
pnpm -v     # >= 8.0.0
```

### Quick Start with Docker

```bash
git clone --recurse-submodules https://github.com/mirkotrotta/moon-site.git
cd moon-site
docker compose up -d
```

### Manual Setup

```bash
# Frontend
cd frontend
pnpm install
pnpm dev

# Backend
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.

## 🙋‍♂️ Contributing

Contributions are welcome. Feel free to fork and open a PR.

## 🙌 Acknowledgments

Moon Site is created and maintained by [Mirko Trotta](https://github.com/mirkotrotta).

Built with inspiration from open-source templates, including:
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [FastAPI](https://fastapi.tiangolo.com)

## 📣 Feedback

Found a bug? Have a suggestion? Just open a [GitHub Issue](https://github.com/mirkotrotta/moon-site/issues).

---

<div align="center">
  ⭐️ Star the project on GitHub if you find it useful!
</div>

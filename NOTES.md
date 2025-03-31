# Rajan's Portfolio - Technical Documentation

## 📚 Table of Contents
1. [Project Overview](#project-overview)
2. [Technical Stack](#technical-stack)
3. [Installation Guide](#installation-guide)
4. [Project Structure](#project-structure)
5. [Features & Components](#features--components)
6. [AI Integration](#ai-integration)
7. [Development Guide](#development-guide)
8. [Deployment Guide](#deployment-guide)
9. [Resources & Links](#resources--links)

## 🎯 Project Overview

This portfolio website is a modern, AI-powered showcase built with Next.js 14. It features:
- Interactive AI chat assistant
- Voice navigation
- Responsive design
- Dark/Light mode
- Modern UI components
- Performance optimization

### Key Technologies Used
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/ui
- Hugging Face AI
- Framer Motion
- React Hook Form
- Zod

## 🛠️ Technical Stack

### Core Technologies
- **Next.js 14**: Latest version with App Router
- **React 19**: Latest version with new features
- **TypeScript**: For type safety
- **Tailwind CSS**: For styling
- **Shadcn/ui**: For UI components

### AI Integration
- **Hugging Face API**: For AI chat and processing
- **Mistral-7B Model**: For natural language processing
- **Web Speech API**: For voice navigation

### Development Tools
- **pnpm**: Package manager
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Jest**: Testing
- **Husky**: Git hooks

## 📥 Installation Guide

### Prerequisites
1. Node.js 18.17 or later
2. pnpm (recommended) or npm
3. Git
4. Hugging Face API key

### Step-by-Step Installation

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API key
   ```

4. **Development Server**
   ```bash
   pnpm dev
   ```

## 📁 Project Structure

### Directory Layout
```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog section
│   ├── contact/           # Contact page
│   ├── education/         # Education timeline
│   ├── experience/        # Work experience
│   ├── projects/          # Projects showcase
│   ├── skills/           # Skills section
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── ai/              # AI-related components
│   ├── ui/              # UI components
│   └── layouts/         # Layout components
├── lib/                 # Utility functions
├── public/             # Static assets
├── styles/            # Additional styles
└── hooks/             # Custom React hooks
```

## ✨ Features & Components

### AI Features
1. **Chat Assistant**
   - Context-aware responses
   - Error handling
   - Rate limiting
   - Retry logic

2. **Voice Navigation**
   - Command recognition
   - Visual feedback
   - Browser compatibility

### UI Components
1. **Layout Components**
   - Responsive navbar
   - Footer
   - Theme switcher

2. **Interactive Elements**
   - Project cards
   - Skill categories
   - Timeline
   - Typewriter effects

## 🤖 AI Integration

### Hugging Face Setup
1. Create account at [Hugging Face](https://huggingface.co)
2. Generate API key
3. Configure environment variables

### Voice Navigation
- Uses Web Speech API
- Supported browsers:
  - Chrome (recommended)
  - Edge
  - Firefox (limited)
  - Safari (iOS 13+)

## 💻 Development Guide

### Available Scripts
```bash
# Development
pnpm dev

# Production
pnpm build
pnpm start

# Code Quality
pnpm lint
pnpm format
pnpm type-check

# Testing
pnpm test
```

### Best Practices
1. **Code Style**
   - Follow TypeScript best practices
   - Use proper component structure
   - Implement error handling

2. **Performance**
   - Optimize images
   - Implement code splitting
   - Use proper caching

3. **Security**
   - Protect API keys
   - Implement rate limiting
   - Validate user inputs

## 🚀 Deployment Guide

### GitHub Setup
1. Create new repository
2. Initialize git
3. Push code
4. Set up GitHub Actions

### Vercel Deployment
1. Connect GitHub repository
2. Configure environment variables
3. Deploy

## 📚 Resources & Links

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/ui Documentation](https://ui.shadcn.com)

### AI Resources
- [Hugging Face API](https://huggingface.co/docs/api-inference)
- [Mistral-7B Model](https://huggingface.co/mistralai/Mistral-7B-v0.1)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

### Development Tools
- [pnpm Documentation](https://pnpm.io)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [ESLint Documentation](https://eslint.org)
- [Jest Documentation](https://jestjs.io)

### Design Resources
- [Tailwind UI](https://tailwindui.com)
- [Framer Motion](https://www.framer.com/motion)
- [Radix UI](https://www.radix-ui.com)

## 📝 Additional Notes

### Performance Optimization
- Image optimization
- Code splitting
- Lazy loading
- Caching strategies

### SEO Best Practices
- Meta tags
- Open Graph
- Sitemap
- Robots.txt

### Accessibility
- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast

### Browser Support
- Modern browsers
- Progressive enhancement
- Fallback options

## 🔧 Troubleshooting

### Common Issues
1. **API Key Problems**
   - Check key validity
   - Verify environment setup
   - Monitor rate limits

2. **Voice Navigation**
   - Check permissions
   - Browser compatibility
   - HTTPS requirements

3. **Build Issues**
   - Clear cache
   - Update dependencies
   - Check TypeScript errors

## 📞 Support

For support:
1. Check documentation
2. Review common issues
3. Open GitHub issue
4. Contact maintainer

---

Last Updated: March 2024

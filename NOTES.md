# Technical Notes for Portfolio Project

## 🔍 Implementation Details

### AI Components

#### 1. Chat Assistant (`ai-chat-button.tsx`)

```typescript
// Key features
- Uses Hugging Face's Mistral-7B model
- Context-aware responses
- Dynamic message formatting
- Error handling with retries
- Responsive chat interface

// Usage example
const response = await generateAIResponse(prompt, context);
```

#### 2. Voice Navigation (`voice-nav-button.tsx`)

```typescript
// Supported commands
- "Go to home"
- "Navigate to about"
- "Show projects"
- "Open contact"
- "Switch theme"

// Browser compatibility
- Chrome (Recommended)
- Edge
- Firefox (Limited support)
- Safari (iOS 13+ required)
```

### 🛠️ Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Format code
pnpm format

# Type check
pnpm type-check
```

### 📱 Mobile Testing Commands

```bash
# Start server with host access
pnpm dev --host

# Build and test production
pnpm build && pnpm start
```

## 🔧 Configuration Details

### Environment Variables

```env
# Required
NEXT_PUBLIC_HUGGINGFACE_API_KEY=your_api_key_here

# Optional (for development)
NEXT_PUBLIC_API_URL=http://localhost:3000
NODE_ENV=development
```

### API Rate Limits

- Hugging Face Free Tier: 30,000 requests per month
- Maximum response time: 30 seconds
- Concurrent requests: 5 per second

## 🎨 Styling Guidelines

### Tailwind Classes Organization

```tsx
// Component structure
<div
  // Layout classes
  className="fixed bottom-4 right-4
  // Spacing
  p-3 gap-2
  // Visual styles
  bg-gradient-to-r from-purple-600 to-indigo-600
  // Interactive states
  hover:scale-105 active:scale-95
  // Transitions
  transition-all duration-300"
>
```

### Z-index Hierarchy

```css
/* Stacking order */
.floating-actions {
  z-index: 50;
}
.chat-window {
  z-index: 70;
}
.feedback-alert {
  z-index: 80;
}
```

## 🔒 Security Best Practices

1. **API Key Protection**

   - Never commit `.env.local`
   - Use environment variables
   - Implement rate limiting

2. **Client-Side Security**

   - Sanitize user inputs
   - Validate API responses
   - Handle errors gracefully

3. **Browser Features**
   - Request permissions properly
   - Check feature compatibility
   - Provide fallback options

## 🚀 Performance Optimization

### Image Optimization

```typescript
// Use Next.js Image component
import Image from 'next/image'

// Implement blur placeholder
<Image
  src="/profile.jpg"
  alt="Profile"
  width={300}
  height={300}
  placeholder="blur"
  blurDataURL="data:image..."
/>
```

### Code Splitting

```typescript
// Lazy load components
const AIChatButton = dynamic(() => import('./ai-chat-button'), {
  loading: () => <LoadingSpinner />,
  ssr: false
})
```

## 📝 Code Style Guide

### TypeScript Best Practices

```typescript
// Use proper types
interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

// Avoid any
function processMessage(message: Message): void {
  // Implementation
}
```

### Component Structure

```typescript
// Consistent component organization
import { useState, useEffect, useRef } from 'react';
import type { FC } from 'react';

interface Props {
  // Props definition
}

export const Component: FC<Props> = ({ prop }) => {
  // State management
  // Effects
  // Helper functions
  // Render
};
```

## 🐛 Debugging Tips

### Common Issues

1. **Chat Not Working**

```bash
# Check API key
echo $NEXT_PUBLIC_HUGGINGFACE_API_KEY

# Verify API response
curl -X POST "https://api-inference.huggingface.co/models/..."
```

2. **Voice Recognition Issues**

```javascript
// Check browser support
if (!('webkitSpeechRecognition' in window)) {
  console.error('Speech recognition not supported');
}
```

### Development Tools

- Chrome DevTools
- React Developer Tools
- Network Inspector
- Performance Monitor

## 📦 Dependencies Management

### Key Dependencies

```json
{
  "dependencies": {
    "next": "14.x",
    "react": "18.x",
    "tailwindcss": "3.x",
    "@radix-ui/react": "latest"
  }
}
```

### Update Commands

```bash
# Check outdated packages
pnpm outdated

# Update all packages
pnpm update

# Update specific package
pnpm update package-name
```

## 🌐 Browser Support

### Minimum Versions

- Chrome 91+
- Firefox 90+
- Safari 14+
- Edge 91+

### Feature Detection

```javascript
// Check for required features
const features = {
  speechRecognition: 'webkitSpeechRecognition' in window,
  webAnimations: 'animate' in document.createElement('div'),
  intersectionObserver: 'IntersectionObserver' in window,
};
```

## 🔄 Git Workflow

### Branch Naming

```bash
feature/feature-name
bugfix/issue-description
hotfix/urgent-fix
```

### Commit Messages

```bash
# Format
type(scope): description

# Examples
feat(chat): add message history
fix(voice): resolve recognition issues
style(ui): update button animations
```

---

## 📚 Additional Resources

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Hugging Face API](https://huggingface.co/docs/api-inference/index)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Tools

- [Vercel](https://vercel.com) - Deployment
- [pnpm](https://pnpm.io) - Package manager
- [TypeScript](https://www.typescriptlang.org) - Type checking

### Community

- GitHub Discussions
- Discord Server
- Stack Overflow Tags

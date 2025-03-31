# Rajan's Portfolio with AI Features

A modern portfolio website built with Next.js 14, featuring AI-powered chat assistance and voice navigation. This project showcases a responsive design, AI integration, and modern web development practices.

## 🌟 Features

### AI Integration

- **AI Chat Assistant**: Interactive chatbot that answers questions about skills, experience, and projects
- **Voice Navigation**: Hands-free navigation using voice commands
- **Natural Language Processing**: Powered by Hugging Face's Mistral-7B model
- **Context-Aware Responses**: AI understands portfolio context and provides relevant answers
- **Real-time Voice Feedback**: Visual indicators for voice command recognition

### Modern UI/UX

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Automatic theme detection with manual toggle option
- **Smooth Animations**: Enhanced user experience with subtle transitions
- **Floating Action Buttons**: Easy access to AI features
- **Typewriter Effects**: Dynamic text animations
- **Interactive Components**: Hover effects and micro-interactions

### Technical Features

- **Next.js 14**: Latest features including App Router and Server Components
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Modern utility-first CSS framework
- **Shadcn/ui**: High-quality UI components
- **Framer Motion**: Smooth animations and transitions
- **React Hook Form**: Form handling and validation
- **Zod**: Schema validation
- **Jest**: Unit testing setup

## 📁 Project Structure

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
│   │   ├── ai-chat-button.tsx
│   │   ├── floating-actions.tsx
│   │   └── voice-nav-button.tsx
│   ├── ui/              # UI components
│   ├── layouts/         # Layout components
│   └── [other components]
├── lib/                 # Utility functions
├── public/             # Static assets
├── styles/            # Additional styles
└── hooks/             # Custom React hooks
```

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18.17 or later
- pnpm (recommended) or npm
- A Hugging Face API key
- Git (for version control)

## 🚀 Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   # Using pnpm (recommended)
   pnpm install

   # Using npm
   npm install
   ```

3. **Set up environment variables**

   ```bash
   # Copy the example env file
   cp .env.example .env.local

   # Edit .env.local and add your Hugging Face API key
   NEXT_PUBLIC_HUGGINGFACE_API_KEY=your_api_key_here
   ```

4. **Run the development server**

   ```bash
   # Using pnpm
   pnpm dev

   # Using npm
   npm run dev
   ```

5. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 💻 Platform-Specific Instructions

### Windows

1. Install Node.js from [nodejs.org](https://nodejs.org/)
2. Install Git from [git-scm.com](https://git-scm.com/)
3. Open PowerShell or Command Prompt as Administrator
4. Install pnpm:
   ```powershell
   iwr https://get.pnpm.io/install.ps1 -useb | iex
   ```
5. Follow the installation steps above

### macOS

1. Install Homebrew from [brew.sh](https://brew.sh/)
2. Install Node.js and pnpm:
   ```bash
   brew install node
   brew install pnpm
   ```
3. Follow the installation steps above

### Linux

1. Install Node.js using your package manager:

   ```bash
   # Ubuntu/Debian
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs

   # Install pnpm
   curl -fsSL https://get.pnpm.io/install.sh | sh -
   ```

2. Follow the installation steps above

## 🔧 Configuration

### Environment Variables

Required environment variables:

```env
# Required
NEXT_PUBLIC_HUGGINGFACE_API_KEY=your_api_key_here

# Optional (for development)
NEXT_PUBLIC_API_URL=http://localhost:3000
NODE_ENV=development
```

### AI Features Configuration

The project uses two main AI components:

1. **AI Chat Button** (`components/ai/ai-chat-button.tsx`)
   - Provides interactive chat functionality
   - Answers questions about skills, experience, and projects
   - Uses Hugging Face's Mistral-7B model for responses
   - Includes error handling and retry logic

2. **Voice Navigation** (`components/ai/voice-nav-button.tsx`)
   - Enables voice command navigation
   - Supports common navigation commands
   - Provides visual feedback for voice input
   - Includes browser compatibility checks

## 🛠️ Development Commands

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

# Run tests
pnpm test
```

## 🚨 Common Issues and Solutions

1. **API Key Issues**
   - Ensure your Hugging Face API key is valid
   - Check if the key is properly set in `.env.local`
   - Verify API usage limits

2. **Voice Navigation Not Working**
   - Check browser permissions for microphone
   - Ensure using a supported browser (Chrome recommended)
   - Check if running on HTTPS or localhost

3. **Chat Not Responding**
   - Check network connection
   - Verify API key permissions
   - Check browser console for errors

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, please open an issue in the GitHub repository or contact through the provided contact information in the portfolio.

---

Made with ❤️ by Rajan Prajapati

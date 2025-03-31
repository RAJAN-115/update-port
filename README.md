# Rajan's Portfolio with AI Features

A modern portfolio website built with Next.js 14, featuring AI-powered chat assistance and voice navigation. This project showcases a responsive design, AI integration, and modern web development practices.

## 🌟 Features

### AI Integration

- **AI Chat Assistant**: Interactive chatbot that answers questions about skills, experience, and projects
- **Voice Navigation**: Hands-free navigation using voice commands
- **Natural Language Processing**: Powered by Hugging Face's Mistral-7B model

### Modern UI/UX

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Automatic theme detection with manual toggle option
- **Smooth Animations**: Enhanced user experience with subtle transitions
- **Floating Action Buttons**: Easy access to AI features

### Technical Features

- **Next.js 14**: Latest features including App Router and Server Components
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Modern utility-first CSS framework
- **Shadcn/ui**: High-quality UI components

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18.17 or later
- pnpm (recommended) or npm
- A Hugging Face API key

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

## 📱 Mobile Development

To test on mobile devices:

1. Ensure your computer and mobile device are on the same network
2. Find your computer's local IP address:

   ```bash
   # Windows
   ipconfig

   # macOS/Linux
   ifconfig
   ```

3. Run the development server with the host flag:
   ```bash
   pnpm dev --host
   ```
4. On your mobile device, visit `http://your-local-ip:3000`

## 🔧 Configuration

### AI Features

The project uses two main AI components:

1. **AI Chat Button** (`components/ai/ai-chat-button.tsx`)

   - Provides interactive chat functionality
   - Answers questions about skills, experience, and projects
   - Uses Hugging Face's Mistral-7B model for responses

2. **Voice Navigation** (`components/ai/voice-nav-button.tsx`)
   - Enables voice command navigation
   - Supports common navigation commands
   - Provides visual feedback for voice input

### Environment Variables

Required environment variables:

- `NEXT_PUBLIC_HUGGINGFACE_API_KEY`: Your Hugging Face API key

## 🛠️ Development Notes

### Project Structure

```
├── app/                  # Next.js app directory
├── components/
│   ├── ai/              # AI-related components
│   ├── ui/              # UI components
│   └── layouts/         # Layout components
├── lib/                 # Utility functions
├── public/              # Static assets
└── styles/              # Global styles
```

### Key Components

- `FloatingActions`: Container for AI buttons
- `AIChatButton`: Main chat interface
- `VoiceNavButton`: Voice navigation interface

### Styling

- Uses Tailwind CSS for styling
- Custom animations and transitions
- Responsive design breakpoints

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

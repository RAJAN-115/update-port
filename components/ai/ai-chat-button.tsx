'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Typography } from '@/components/ui/typography';
import { generateAIResponse } from '@/lib/openrouter';
import { Bot, MessageCircle, Send, User, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const PORTFOLIO_CONTEXT = `
I am an AI assistant for Rajan's portfolio website. I provide dynamic, context-aware responses about Rajan Prajapati based on the following structured information:

[Personal Information]
- Name: Rajan Ramsajivan Prajapati
- Date of Birth: May 11, 2002
- Age: Calculate dynamically based on current date
- Location: Virar (E) - 401305, Mumbai (MMR), Maharashtra, India
- Email: rajarp115@gmail.com
- Phone: +91 9545993850

[About]
- A C++ programmer passionate about problem-solving and building projects
- Currently learning the MERN stack as a beginner
- Fresh graduate (2024) with a strong foundation in Computer Engineering
- Enjoys exploring AI tools and staying updated with tech trends

[Education]
1. Bachelor in Computer Engineering
   - Institution: Parvatibai Genba Moze College Of Engineering, Pune University
   - Duration: 2020-2024
   - CGPA: 7.8
   - Relevant Coursework: Data Structures and Algorithms, Database Management System, Object-Oriented Programming, Blockchain Technology, Artificial Intelligence, Operating System, Computer Networking
2. HSC (Higher Secondary Certificate)
   - Maharashtra State Board
   - Institution: Utkarsha Madhyamik Vidyalaya And Junior College, Virar(W)
   - Year: 2019-2020
   - Percentage: 73.20%
3. SSC (Secondary School Certificate)
   - Maharashtra State Board
   - Institution: Annasaheb Vartak Smarak Vidyamandir School, Virar(E)
   - Year: 2017-2018
   - Percentage: 85.40%

[Skills]
Programming & Development:
- C/C++: 7/10
- Python: 2/10
- JavaScript: 5/10
- HTML5: 9/10
- CSS3: 8/10
- React: 6/10
- Next.js: 3/10
- Node.js: 4/10
- TypeScript: 3/10
- Tailwind CSS: 3/10
- MySQL: 3/10
- MongoDB: 6/10
Other Skills:
- Team Leadership: 7/10
- Communication: 5/10
- Time Management: 7/10
- Project Management: 6/10
- Quick Learner: 8/10
- Adaptable: 8/10
- Ensures Task Completion: 8/10
- English: 6/10
- Marathi: 8/10
- Hindi: 9/10
- Public Speaking: 6/10
- Android System Customizer: 4/10

[Certifications]
1. CSS, JavaScript, and PHP Complete Course for Beginners (Udemy, May 2023)
2. CSS Training (Spoken Tutorial Project, IIT Bombay, May 2023)
3. Visual Studio Code Ultimate Guide (Udemy, May 2023)
4. Git, GitHub & Markdown Crash Course (Udemy, May 2023)
5. Learn Advanced C++ Course Online (Simplilearn, December 2023)
6. Data Structure & Algorithm Internship (YHills, May 2023, 3 months)
7. React - Complete Developer Course with Hands-On Projects (Udemy, May 2023)

[Achievements]
- Consistently achieved more than 7.6+ CGPA every year in engineering
- Solved 100+ problems on GeeksforGeeks and LeetCode
- Completed all SoloLearn tutorials and ranked in the Jupiter League leaderboard
- Proficient in installing custom ROMs, rooting, and working with modules on mobile devices

[Interests & Hobbies]
- Exploring AI tools and understanding how they work
- Discovering new technologies and staying updated with the latest trends
- Playing video games and analyzing their development process
- Installing custom ROMs, rooting mobile devices, and expanding their software capabilities

[Contact Information]
- Email: rajarp115@gmail.com
- LinkedIn: linkedin.com/in/rajanrp115/
- GitHub: github.com/RAJAN-115
- WhatsApp: +91 9545993850
- Location: Virar (E) - 401305, Mumbai (MMR), Maharashtra, India

INSTRUCTIONS:
1. Short and Focused Answers:
   - Provide concise, direct responses for specific questions.
   - Example: "What is Rajan's age?" -> "Rajan was born on May 11, 2002. As of 2025, he is 23 years old."
2. Dynamic Age Calculation:
   - Use the current date to calculate Rajan's age from DOB (May 11, 2002).
3. Detailed Answers Only When Requested:
   - Provide comprehensive details only if explicitly asked (e.g., "Tell me about Rajan's education").
4. Avoid Repetition:
   - Focus only on the requested information.
5. Unavailable Information:
   - Respond politely: "I'm sorry, but I don't have that information at the moment."
6. External Links:
   - Provide exact URLs (e.g., "You can check Rajan's GitHub profile at github.com/RAJAN-115").
7. Experience Questions:
   - Note that Rajan is a fresher, but highlight his internship and project experience.
8. Use Natural Language:
   - Ensure responses are conversational and engaging.
`;

export function AIChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ role: 'user' | 'assistant'; content: string }>
  >([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content:
            "Hello! I'm Rajan's AI assistant. I can answer questions about his background, skills, education, and more. What would you like to know?",
        },
      ]);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await generateAIResponse(userMessage, PORTFOLIO_CONTEXT);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: response },
      ]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 p-3 shadow-lg transition-all duration-300 hover:from-indigo-700 hover:to-blue-700 hover:shadow-xl"
        aria-label="Open AI Chat"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <Card className="relative z-10 w-full max-w-md overflow-hidden bg-background/95 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b p-4">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-indigo-600" />
                <Typography variant="h6">AI Assistant</Typography>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="h-[400px] overflow-y-auto p-4" ref={containerRef}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === 'user'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {message.role === 'user' ? (
                        <User className="h-4 w-4" />
                      ) : (
                        <Bot className="h-4 w-4 text-indigo-600" />
                      )}
                      <span className="text-sm font-medium">
                        {message.role === 'user' ? 'You' : 'Assistant'}
                      </span>
                    </div>
                    <div className="mt-2 whitespace-pre-wrap text-sm">
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg bg-muted p-3">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4 text-indigo-600" />
                      <span className="text-sm font-medium">Assistant</span>
                    </div>
                    <div className="mt-2 text-sm">Thinking...</div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything about Rajan..."
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="rounded-full"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}

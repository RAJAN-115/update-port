'use client';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Mic, MicOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

type CommandProcessor = (command: string) => void;

export function VoiceNavButton() {
  const router = useRouter();
  const [isListening, setIsListening] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  const processCommand: CommandProcessor = (command: string) => {
    const lowerCommand = command.toLowerCase();
    
    // Navigation commands
    const routes: { [key: string]: string } = {
      'go to home': '/',
      'home page': '/',
      about: '/about',
      'about me': '/about',
      education: '/education',
      study: '/education',
      skills: '/skills',
      abilities: '/skills',
      projects: '/projects',
      portfolio: '/projects',
      experience: '/experience',
      work: '/experience',
      contact: '/contact',
      'get in touch': '/contact',
    };

    const route = Object.keys(routes).find((key) => lowerCommand.includes(key));
    if (route) {
      setFeedback(`Navigating to ${route}...`);
      router.push(routes[route]);
    } else {
      setFeedback(`I heard: "${command}" but I don't understand that command.`);
    }

    showFeedbackMessage();
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onresult = (event: any) => {
          const command = Array.from(event.results)
            .map((result: any) => result[0])
            .map(result => result.transcript)
            .join('');
          
          processCommand(command);
        };

        if (isListening) {
          recognition.start();
        }

        return () => {
          recognition.stop();
        };
      }
    }
  }, [isListening]);

  const showFeedbackMessage = () => {
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 3000);
  };

  return (
    <>
      {/* Voice Navigation Button */}
      <div className="transition-transform duration-200 hover:scale-105 active:scale-95">
        <Button
          variant="outline"
          size="icon"
          className="w-9 h-9"
          onClick={() => setIsListening(!isListening)}
        >
          {isListening ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
        </Button>
      </div>

      {/* Feedback Alert */}
      {showFeedback && (
        <Alert className="fixed right-4 top-20 z-[80] w-auto max-w-xs border-purple-600/20 bg-background/95 backdrop-blur-sm">
          <AlertDescription>{feedback}</AlertDescription>
        </Alert>
      )}
    </>
  );
}

'use client';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Mic, MicOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Define the SpeechRecognition interface
interface SpeechRecognition {
  new (): SpeechRecognition;
  start(): void;
  stop(): void;
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: (event: SpeechRecognitionEvent) => void;
  onend: () => void;
}

// Define types for SpeechRecognitionEvent
interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

export function VoiceNavButton() {
  const router = useRouter();
  const [isListening, setIsListening] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  // Check if SpeechRecognition is available
  const SpeechRecognition =
    typeof window !== 'undefined'
      ? window.SpeechRecognition || (window as any).webkitSpeechRecognition
      : null;
  const recognition = SpeechRecognition
    ? new (SpeechRecognition as any)()
    : null;

  useEffect(() => {
    if (!recognition) return;

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const current = event.resultIndex;
      const command = event.results[current][0].transcript.toLowerCase();
      processCommand(command);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [recognition]);

  const toggleListening = () => {
    if (!recognition) {
      setFeedback('Speech recognition is not supported in your browser.');
      showFeedbackMessage();
      return;
    }

    if (isListening) {
      recognition.stop();
    } else {
      setFeedback('Listening for voice commands...');
      showFeedbackMessage();
      recognition.start();
      setIsListening(true);
    }
  };

  const processCommand = (command: string) => {
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

    const route = Object.keys(routes).find((key) => command.includes(key));
    if (route) {
      setFeedback(`Navigating to ${route}...`);
      router.push(routes[route]);
    } else {
      setFeedback(`I heard: "${command}" but I don't understand that command.`);
    }

    showFeedbackMessage();
  };

  const showFeedbackMessage = () => {
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 3000);
  };

  return (
    <>
      {/* Voice Navigation Button */}
      <div className="transition-transform duration-200 hover:scale-105 active:scale-95">
        <Button
          onClick={toggleListening}
          className="rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 p-3 shadow-lg transition-all duration-300 hover:from-indigo-700 hover:to-blue-700 hover:shadow-xl"
          aria-label={
            isListening ? 'Stop voice navigation' : 'Start voice navigation'
          }
        >
          {isListening ? (
            <MicOff className="h-6 w-6" />
          ) : (
            <Mic className="h-6 w-6" />
          )}
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

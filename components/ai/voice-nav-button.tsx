'use client';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Mic, MicOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

interface SpeechRecognitionEvent extends Event {
  results: {
    length: number;
    [index: number]: {
      isFinal: boolean;
      length: number;
      [index: number]: {
        transcript: string;
        confidence: number;
      };
    };
  };
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: Event) => void;
  onend: () => void;
  start: () => void;
  stop: () => void;
  abort: () => void;
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

export function VoiceNavButton() {
  const router = useRouter();
  const [isListening, setIsListening] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processCommand = useCallback((command: string) => {
    const lowerCommand = command.toLowerCase();
    
    // Navigation commands
    const routes: Record<string, string> = {
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
  }, [router]);

  const startListening = useCallback(() => {
    setError(null);
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event: SpeechRecognitionEvent) => {
          const lastResult = event.results[event.results.length - 1];
          const command = lastResult[0].transcript;
          processCommand(command);
        };

        recognition.onerror = (_event: Event) => {
          setError('Error occurred during speech recognition');
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        try {
          recognition.start();
          return recognition;
        } catch (err) {
          setError('Failed to start speech recognition');
          setIsListening(false);
          return null;
        }
      } else {
        setError('Speech recognition not supported in this browser');
        return null;
      }
    }
    return null;
  }, [processCommand]);

  const stopListening = useCallback((recognition: SpeechRecognition | null) => {
    if (recognition) {
      try {
        recognition.stop();
      } catch (err) {
        console.error('Error stopping recognition:', err);
      }
    }
  }, []);

  useEffect(() => {
    let recognition: SpeechRecognition | null = null;

    if (isListening) {
      recognition = startListening();
    }

    return () => {
      stopListening(recognition);
    };
  }, [isListening, startListening, stopListening]);

  const showFeedbackMessage = () => {
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 3000);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="icon"
        className={`relative ${isListening ? 'bg-red-100 hover:bg-red-200' : ''}`}
        onClick={() => setIsListening(!isListening)}
      >
        {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
      </Button>
      
      {showFeedback && (
        <Alert className="absolute bottom-full mb-2 w-64">
          <AlertDescription>{feedback}</AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert className="absolute bottom-full mb-2 w-64 bg-red-100">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}

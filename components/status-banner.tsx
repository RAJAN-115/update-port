'use client';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { X } from 'lucide-react';
import { useState } from 'react';

export function StatusBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in-up">
      <div className="flex items-center gap-2 rounded-lg border bg-background/95 px-4 py-2 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Typography variant="smallText" className="text-muted-foreground">
          🚧 Some features may not work as expected. This site is under active development.
        </Typography>
        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsVisible(false)}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

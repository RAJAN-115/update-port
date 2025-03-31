'use client';

import { ResponsiveContainer } from '@/components/responsive-container';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { motion } from 'framer-motion';
import { BookOpen, Wrench } from 'lucide-react';

export default function BlogPage() {
  return (
    <main className="py-12 pb-24 md:pb-12">
      <ResponsiveContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <Typography variant="h2" className="text-center">
            <span className="text-primary">Blog</span>
          </Typography>

          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <BookOpen className="h-16 w-16 text-primary" />
                  <Wrench className="h-8 w-8 text-primary absolute -bottom-2 -right-2" />
                </div>

                <div className="space-y-4">
                  <Typography variant="h3" className="font-bold">
                    Coming Soon!
                  </Typography>
                  <Typography variant="p" className="text-muted-foreground">
                    I&apos;m currently working on creating valuable content about technology,
                    programming, and development. Stay tuned for insightful articles and tutorials!
                  </Typography>
                </div>

                <div className="flex flex-col gap-2">
                  <Typography variant="smallText" className="text-muted-foreground">
                    Expected Launch: Q2 2024
                  </Typography>
                  <Button variant="outline" className="gap-2">
                    <BookOpen className="h-4 w-4" />
                    Subscribe for Updates
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </ResponsiveContainer>
    </main>
  );
}

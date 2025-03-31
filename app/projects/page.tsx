'use client';

import { ResponsiveContainer } from '@/components/responsive-container';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Typography } from '@/components/ui/typography';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Github, Globe, Lightbulb, Rocket } from 'lucide-react';
import { useState } from 'react';

// Sample project data
const projects = {
  selected: [
    {
      id: 1,
      title: 'AI-Powered Portfolio Website',
      description:
        'A modern portfolio website featuring AI integration, voice navigation, and dynamic content generation. Built with Next.js, Tailwind CSS, and various AI APIs.',
      image: '/projects/portfolio.png',
      techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'AI APIs'],
      github: 'https://github.com/yourusername/ai-portfolio',
      demo: 'https://your-portfolio-url.com',
    },
  ],
  mini: [
    {
      id: 1,
      title: 'Color Picker Extension',
      description:
        'Built a Chrome extension with HTML, CSS, and JavaScript, enhancing color selection efficiency for over 1,000+ users. Designed UI, added color history, and published to Chrome Web Store.',
      image: '/placeholder.svg?height=200&width=400',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'To-Do List App',
      description: 'A React app with task management and local storage.',
      image: '/placeholder.svg?height=200&width=400',
      techStack: ['React', 'Material UI'],
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Fetches real-time weather data using OpenWeather API.',
      image: '/placeholder.svg?height=200&width=400',
      techStack: ['JavaScript', 'API'],
      github: '#',
      demo: '#',
    },
    {
      id: 4,
      title: 'Library Management System',
      description: 'A system to manage library operations.',
      image: '/placeholder.svg?height=200&width=400',
      techStack: ['C++', 'MySQL'],
      github: '#',
      demo: null,
    },
  ],
  academic: [
    {
      id: 1,
      title: 'Library Management System',
      description:
        'A comprehensive library management system with book tracking, member management, and automated notifications.',
      image: '/projects/library.png',
      techStack: ['C++', 'MySQL', 'File Handling'],
      github: 'https://github.com/yourusername/library-system',
      demo: null,
    },
    {
      id: 2,
      title: 'Student Attendance System',
      description:
        'Digital attendance tracking system with QR code scanning, attendance reports, and parent notifications.',
      image: '/projects/attendance.png',
      techStack: ['Python', 'SQLite', 'QR Code Generation'],
      github: 'https://github.com/yourusername/attendance-system',
      demo: null,
    },
    {
      id: 3,
      title: 'Bank Management System',
      description:
        'Console-based banking system with account management, transactions, and interest calculations.',
      image: '/projects/bank.png',
      techStack: ['Java', 'File I/O', 'OOP'],
      github: 'https://github.com/yourusername/bank-system',
      demo: null,
    },
    {
      id: 4,
      title: 'Hospital Management System',
      description:
        'Patient records management system with appointment scheduling, billing, and medical history tracking.',
      image: '/projects/hospital.png',
      techStack: ['C#', 'SQL Server', 'Windows Forms'],
      github: 'https://github.com/yourusername/hospital-system',
      demo: null,
    },
  ],
};

export default function ProjectsPage() {
  const [aiInsight, setAiInsight] = useState<string | null>(null);

  const getAiInsight = () => {
    // Simulate AI-generated insights
    const insights = [
      'Consider adding a palette export feature to your Color Picker Extension to enhance functionality.',
      'Your To-Do List App could benefit from cloud synchronization for cross-device access.',
      'Adding weather forecasting to your Weather App would make it more comprehensive.',
      'The Library Management System could be enhanced with a barcode scanning feature.',
      'Consider implementing a recommendation system in your E-Commerce Website.',
    ];

    setAiInsight(insights[Math.floor(Math.random() * insights.length)]);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const getProjectsByCategory = (category: 'selected' | 'mini' | 'academic') => {
    return projects[category];
  };

  return (
    <main className="py-12 pb-24 md:pb-12">
      <ResponsiveContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <Typography variant="h2" className="text-center">
            <span className="text-primary">Projects</span>
          </Typography>

          {aiInsight && (
            <Card className="mb-6 border-purple-600/50">
              <CardContent className="p-4 flex items-start gap-2">
                <Lightbulb className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
                <Typography variant="p">{aiInsight}</Typography>
              </CardContent>
            </Card>
          )}

          <Tabs defaultValue="selected" className="w-full">
            {/* Desktop Tabs */}
            <div className="hidden md:block mb-8">
              <TabsList className="grid grid-cols-3 gap-4">
                <TabsTrigger value="selected" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Selected
                </TabsTrigger>
                <TabsTrigger value="mini" className="flex items-center gap-2">
                  <Rocket className="h-4 w-4" />
                  Mini Projects
                </TabsTrigger>
                <TabsTrigger value="academic" className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Academic
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Mobile Bottom Tabs */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t z-50">
              <TabsList className="grid grid-cols-3 h-16">
                <TabsTrigger value="selected" className="flex flex-col items-center gap-1">
                  <Globe className="h-5 w-5" />
                  <span className="text-xs">Selected</span>
                </TabsTrigger>
                <TabsTrigger value="mini" className="flex flex-col items-center gap-1">
                  <Rocket className="h-5 w-5" />
                  <span className="text-xs">Mini Projects</span>
                </TabsTrigger>
                <TabsTrigger value="academic" className="flex flex-col items-center gap-1">
                  <Lightbulb className="h-5 w-5" />
                  <span className="text-xs">Academic</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="selected" className="space-y-6">
              <motion.div variants={container} initial="hidden" animate="show">
                <motion.div variants={item}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-6">
                        <Globe className="h-6 w-6 text-primary" />
                        <Typography variant="h3">Selected Projects</Typography>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {getProjectsByCategory('selected').map(project => (
                          <motion.div
                            key={project.id}
                            whileHover={{ scale: 1.02 }}
                            className="group relative overflow-hidden rounded-lg border bg-card"
                          >
                            <div className="aspect-video relative overflow-hidden">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="object-cover w-full h-full transition-transform group-hover:scale-105"
                              />
                            </div>
                            <div className="p-4 space-y-2">
                              <div className="flex items-center justify-between">
                                <Typography variant="h4" className="font-medium">
                                  {project.title}
                                </Typography>
                                <div className="flex gap-2">
                                  <Button variant="ghost" size="icon" asChild>
                                    <a
                                      href={project.demo}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <ExternalLink className="h-4 w-4" />
                                    </a>
                                  </Button>
                                  {project.github && (
                                    <Button variant="ghost" size="icon" asChild>
                                      <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <Code2 className="h-4 w-4" />
                                      </a>
                                    </Button>
                                  )}
                                </div>
                              </div>
                              <Typography variant="p" className="text-sm text-muted-foreground">
                                {project.description}
                              </Typography>
                              <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                  <span
                                    key={tech}
                                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="mini" className="space-y-6">
              <motion.div variants={container} initial="hidden" animate="show">
                <motion.div variants={item}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-6">
                        <Rocket className="h-6 w-6 text-primary" />
                        <Typography variant="h3">Mini Projects</Typography>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {getProjectsByCategory('mini').map(project => (
                          <motion.div
                            key={project.id}
                            whileHover={{ scale: 1.02 }}
                            className="group relative overflow-hidden rounded-lg border bg-card"
                          >
                            <div className="aspect-video relative overflow-hidden">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="object-cover w-full h-full transition-transform group-hover:scale-105"
                              />
                            </div>
                            <div className="p-4 space-y-2">
                              <div className="flex items-center justify-between">
                                <Typography variant="h4" className="font-medium">
                                  {project.title}
                                </Typography>
                                <div className="flex gap-2">
                                  <Button variant="ghost" size="icon" asChild>
                                    <a
                                      href={project.demo}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <ExternalLink className="h-4 w-4" />
                                    </a>
                                  </Button>
                                  {project.github && (
                                    <Button variant="ghost" size="icon" asChild>
                                      <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <Code2 className="h-4 w-4" />
                                      </a>
                                    </Button>
                                  )}
                                </div>
                              </div>
                              <Typography variant="p" className="text-sm text-muted-foreground">
                                {project.description}
                              </Typography>
                              <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                  <span
                                    key={tech}
                                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="academic" className="space-y-6">
              <motion.div variants={container} initial="hidden" animate="show">
                <motion.div variants={item}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-6">
                        <Lightbulb className="h-6 w-6 text-primary" />
                        <Typography variant="h3">Academic Projects</Typography>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {getProjectsByCategory('academic').map(project => (
                          <motion.div
                            key={project.id}
                            whileHover={{ scale: 1.02 }}
                            className="group relative overflow-hidden rounded-lg border bg-card"
                          >
                            <div className="aspect-video relative overflow-hidden">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="object-cover w-full h-full transition-transform group-hover:scale-105"
                              />
                            </div>
                            <div className="p-4 space-y-2">
                              <div className="flex items-center justify-between">
                                <Typography variant="h4" className="font-medium">
                                  {project.title}
                                </Typography>
                                <div className="flex gap-2">
                                  {project.demo && (
                                    <Button variant="ghost" size="icon" asChild>
                                      <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <ExternalLink className="h-4 w-4" />
                                      </a>
                                    </Button>
                                  )}
                                  {project.github && (
                                    <Button variant="ghost" size="icon" asChild>
                                      <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <Code2 className="h-4 w-4" />
                                      </a>
                                    </Button>
                                  )}
                                </div>
                              </div>
                              <Typography variant="p" className="text-sm text-muted-foreground">
                                {project.description}
                              </Typography>
                              <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                  <span
                                    key={tech}
                                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button className="gap-2 bg-purple-600 hover:bg-purple-700" onClick={getAiInsight}>
              <Lightbulb className="h-4 w-4" />
              Get AI Project Insights
            </Button>

            <Button variant="outline" className="gap-2">
              <Github className="h-4 w-4" />
              View All on GitHub
            </Button>
          </div>
        </motion.div>
      </ResponsiveContainer>
    </main>
  );
}

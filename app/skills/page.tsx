'use client';

import { ResponsiveContainer } from '@/components/responsive-container';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Typography } from '@/components/ui/typography';
import { motion } from 'framer-motion';
import { Brain, Code2, ExternalLink, GitBranch, Lightbulb, Terminal, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  rating: number;
  category: string;
}

interface AITool {
  name: string;
  description: string;
  icon: React.ReactNode;
  url: string;
}

const skills: Skill[] = [
  // Programming & Development
  { name: 'C/C++', rating: 7, category: 'programming' },
  { name: 'Python', rating: 2, category: 'programming' },
  { name: 'JavaScript', rating: 5, category: 'programming' },
  { name: 'HTML5', rating: 9, category: 'programming' },
  { name: 'CSS3', rating: 8, category: 'programming' },
  { name: 'React', rating: 6, category: 'programming' },
  { name: 'Next.js', rating: 3, category: 'programming' },
  { name: 'Node.js', rating: 4, category: 'programming' },
  { name: 'TypeScript', rating: 3, category: 'programming' },
  { name: 'Tailwind CSS', rating: 3, category: 'programming' },
  { name: 'MySQL', rating: 3, category: 'programming' },
  { name: 'MongoDB', rating: 6, category: 'programming' },

  // Other Skills
  { name: 'Team Leadership', rating: 7, category: 'other' },
  { name: 'Communication', rating: 5, category: 'other' },
  { name: 'Time Management', rating: 7, category: 'other' },
  { name: 'Project Management', rating: 6, category: 'other' },
  { name: 'Quick Learner', rating: 8, category: 'other' },
  { name: 'Adaptable', rating: 8, category: 'other' },
  { name: 'Ensures Task Completion', rating: 8, category: 'other' },
  { name: 'English', rating: 6, category: 'other' },
  { name: 'Marathi', rating: 8, category: 'other' },
  { name: 'Hindi', rating: 9, category: 'other' },
  { name: 'Public Speaking', rating: 6, category: 'other' },

  { name: 'Android System Customizer', rating: 4, category: 'other' },
];

const aiTools: AITool[] = [
  {
    name: 'ChatGPT',
    description: 'Advanced language model for conversation and content generation',
    icon: <img src="/icons/chatgpt.svg" alt="ChatGPT" className="h-6 w-6" />,
    url: 'https://chat.openai.com',
  },
  {
    name: 'Claude',
    description: 'Advanced AI assistant for research and analysis',
    icon: <img src="/icons/claude.svg" alt="Claude" className="h-6 w-6" />,
    url: 'https://www.anthropic.com/claude',
  },
  {
    name: 'DeepSeek',
    description: 'AI model specializing in deep learning and research',
    icon: <img src="/icons/deepseek.svg" alt="DeepSeek" className="h-6 w-6" />,
    url: 'https://deepseek.ai',
  },
  {
    name: 'Qwen',
    description: 'Advanced language model by Alibaba Cloud',
    icon: <img src="/icons/qwen.svg" alt="Qwen" className="h-6 w-6" />,
    url: 'https://qwenlm.github.io',
  },
  {
    name: 'Perplexity',
    description: 'AI-powered search and research assistant',
    icon: <img src="/icons/perplexity.svg" alt="Perplexity" className="h-6 w-6" />,
    url: 'https://www.perplexity.ai',
  },
  {
    name: 'Google AI Studio',
    description: "Google's AI development and experimentation platform",
    icon: <img src="/icons/google-ai-studio.svg" alt="Google AI Studio" className="h-6 w-6" />,
    url: 'https://makersuite.google.com',
  },
  {
    name: 'Grok',
    description: "xAI's advanced language model",
    icon: <img src="/icons/grok.svg" alt="Grok" className="h-6 w-6" />,
    url: 'https://grok.x.ai',
  },
  {
    name: 'Manus AI',
    description: 'AI-powered development and coding assistant',
    icon: <img src="/icons/manus.svg" alt="Manus AI" className="h-6 w-6" />,
    url: 'https://manus.ai',
  },
];

const certifications = [
  {
    name: 'CSS, JavaScript And PHP Complete Course For Beginners',
    issuer: 'Udemy',
    date: 'May 2023',
    description: 'Beginner-friendly course covering CSS, JavaScript, and PHP for web development.',
    url: 'https://ude.my/UC-d74b9de7-81b7-4782-8c06-09d63fb9911c',
    icon: <Code2 className="h-6 w-6" />,
  },
  {
    name: 'CSS Training',
    issuer: 'Spoken Tutorial Project, IIT Bombay',
    date: 'May 2023',
    description: 'Training on CSS with a focus on practical applications.',
    url: '#',
    icon: <Code2 className="h-6 w-6" />,
  },
  {
    name: 'Visual Studio Code Ultimate Guide',
    issuer: 'Udemy',
    date: 'May 2023',
    description: 'In-depth course on mastering Visual Studio Code for development.',
    url: 'https://ude.my/UC-43db8320-1961-4ae5-ac88-fb33bb59f45c',
    icon: <Terminal className="h-6 w-6" />,
  },
  {
    name: 'Git, Github & Markdown Crash Course',
    issuer: 'Udemy',
    date: 'May 2023',
    description: 'Crash course on Git, Github, and Markdown for version control and documentation.',
    url: 'https://ude.my/UC-3ff30b1c-4284-4b44-a072-cc7ead635f9f',
    icon: <GitBranch className="h-6 w-6" />,
  },
  {
    name: 'Learn Advanced C++ Course Online',
    issuer: 'Simplilearn',
    date: 'December 2023',
    description: 'Advanced course on C++ programming language.',
    url: '#',
    icon: <Code2 className="h-6 w-6" />,
  },
  {
    name: 'Data Structure & Algorithm Internship',
    issuer: 'YHills',
    date: 'May 2023',
    description: 'Successfully completed 3 months internship in Data Structure & Algorithm.',
    url: '#',
    icon: <Brain className="h-6 w-6" />,
  },
  {
    name: 'React-Complete Developer Course with Hands-On Projects',
    issuer: 'Udemy',
    date: 'May 2023',
    description: 'Comprehensive course covering React development with hands-on projects.',
    url: 'https://ude.my/UC-924f06d0-7e85-48d5-bb90-c73518efa78d',
    icon: <Code2 className="h-6 w-6" />,
  },
];

export default function SkillsPage() {
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

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
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
            <span className="text-primary">Skills</span>
          </Typography>

          <Tabs defaultValue="programming" className="w-full">
            {/* Desktop Tabs */}
            <div className="hidden md:block mb-8">
              <TabsList className="grid grid-cols-4 gap-4">
                <TabsTrigger value="programming" className="flex items-center gap-2">
                  <Code2 className="h-4 w-4" />
                  Programming
                </TabsTrigger>
                <TabsTrigger value="ai" className="flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  AI Tools
                </TabsTrigger>
                <TabsTrigger value="other" className="flex items-center gap-2">
                  <Wrench className="h-4 w-4" />
                  Other Skills
                </TabsTrigger>
                <TabsTrigger value="certifications" className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Certifications
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Mobile Bottom Tabs */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t z-50">
              <TabsList className="grid grid-cols-4 h-16">
                <TabsTrigger value="programming" className="flex flex-col items-center gap-1">
                  <Code2 className="h-5 w-5" />
                  <span className="text-xs">Code</span>
                </TabsTrigger>
                <TabsTrigger value="ai" className="flex flex-col items-center gap-1">
                  <Brain className="h-5 w-5" />
                  <span className="text-xs">AI</span>
                </TabsTrigger>
                <TabsTrigger value="other" className="flex flex-col items-center gap-1">
                  <Wrench className="h-5 w-5" />
                  <span className="text-xs">Skills</span>
                </TabsTrigger>
                <TabsTrigger value="certifications" className="flex flex-col items-center gap-1">
                  <Lightbulb className="h-5 w-5" />
                  <span className="text-xs">Certs</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="programming" className="space-y-6">
              <motion.div variants={container} initial="hidden" animate="show">
                <motion.div variants={item}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-6">
                        <Code2 className="h-6 w-6 text-primary" />
                        <Typography variant="h3">Programming & Development</Typography>
                      </div>

                      <div className="space-y-4">
                        {getSkillsByCategory('programming').map(skill => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Typography variant="p" className="font-medium">
                                {skill.name}
                              </Typography>
                              <Typography variant="p" className="text-muted-foreground">
                                {skill.rating}/10
                              </Typography>
                            </div>
                            <Progress value={skill.rating * 10} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="ai" className="space-y-6">
              <motion.div variants={container} initial="hidden" animate="show">
                <motion.div variants={item}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-6">
                        <Brain className="h-6 w-6 text-primary" />
                        <Typography variant="h3">AI Tools & Technologies</Typography>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {aiTools.map(tool => (
                          <motion.div
                            key={tool.name}
                            whileHover={{ scale: 1.02 }}
                            className="group relative overflow-hidden rounded-lg border bg-card p-4 transition-colors hover:bg-accent/50"
                          >
                            <div className="flex items-start gap-4">
                              <div className="rounded-lg bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary/20">
                                {tool.icon}
                              </div>
                              <div className="flex-1 space-y-1">
                                <Typography variant="h4" className="font-medium">
                                  {tool.name}
                                </Typography>
                                <Typography variant="p" className="text-sm text-muted-foreground">
                                  {tool.description}
                                </Typography>
                              </div>
                              <Button variant="ghost" size="icon" asChild>
                                <a href={tool.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              </Button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="other" className="space-y-6">
              <motion.div variants={container} initial="hidden" animate="show">
                <motion.div variants={item}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-6">
                        <Wrench className="h-6 w-6 text-primary" />
                        <Typography variant="h3">Other Skills</Typography>
                      </div>

                      <div className="space-y-4">
                        {getSkillsByCategory('other').map(skill => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Typography variant="p" className="font-medium">
                                {skill.name}
                              </Typography>
                              <Typography variant="p" className="text-muted-foreground">
                                {skill.rating}/10
                              </Typography>
                            </div>
                            <Progress value={skill.rating * 10} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="certifications" className="space-y-6">
              <motion.div variants={container} initial="hidden" animate="show">
                <motion.div variants={item}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-6">
                        <Lightbulb className="h-6 w-6 text-primary" />
                        <Typography variant="h3">Certifications</Typography>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {certifications.map(cert => (
                          <motion.div
                            key={cert.name}
                            whileHover={{ scale: 1.02 }}
                            className="group relative overflow-hidden rounded-lg border bg-card p-4 transition-colors hover:bg-accent/50"
                          >
                            <div className="flex items-start gap-4">
                              <div className="rounded-lg bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary/20">
                                {cert.icon}
                              </div>
                              <div className="flex-1 space-y-1">
                                <div className="flex items-center justify-between">
                                  <Typography variant="h4" className="font-medium">
                                    {cert.name}
                                  </Typography>
                                  <Button variant="ghost" size="icon" asChild>
                                    <a href={cert.url} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="h-4 w-4" />
                                    </a>
                                  </Button>
                                </div>
                                <Typography variant="p" className="text-sm text-muted-foreground">
                                  {cert.issuer} • {cert.date}
                                </Typography>
                                <Typography variant="p" className="text-sm">
                                  {cert.description}
                                </Typography>
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

          <div className="flex justify-center">
            <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
              <Lightbulb className="h-4 w-4" />
              Get AI Skill Recommendations
            </Button>
          </div>
        </motion.div>
      </ResponsiveContainer>
    </main>
  );
}

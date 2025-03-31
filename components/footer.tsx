import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        {/* Left Section: Copyright and Roles */}
        <div className="flex flex-col items-center gap-2 md:items-start">
          {/* Copyright Line */}
          <Typography variant="p" className="text-center text-sm text-muted-foreground md:text-left">
            © {currentYear} Rajan Prajapati | Built with Next.js and Tailwind CSS
          </Typography>

          {/* MERN Stack Developer | C++ Programmer */}
          <Typography variant="smallText" className="text-center text-xs text-muted-foreground md:text-left font-medium">
            MERN Stack Developer | C++ Programmer
          </Typography>
        </div>

        {/* Right Section: Contact Information */}
        <div className="flex flex-col items-center gap-2 md:flex-row">
          {/* Phone Number */}
          <Typography variant="smallText" className="text-center text-xs text-muted-foreground">
            +91-9545993850
          </Typography>

          {/* Email */}
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:rajanrp115@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>

          {/* LinkedIn */}
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/rajanrp115"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>

          {/* GitHub */}
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/RAJAN-115"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Download, Lightbulb } from "lucide-react";

export default function EducationPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Title Section */}
        <Typography variant="h2" className="mb-6 text-center">
          <span className="text-primary">Education</span>
        </Typography>

        {/* Education Cards */}
        <div className="space-y-6">
          {/* Bachelor in Computer Engineering */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row justify-between mb-2">
                <Typography variant="h3">Bachelor in Computer Engineering - Pune University</Typography>
                <Typography variant="p" className="text-sm text-gray-500">
                  2020-2024
                </Typography>
              </div>
              <Typography variant="p" className="mb-2">
                Parvatibai Genba Moze College Of Engineering Wagholi, Pune
              </Typography>
              <Typography variant="p" className="font-semibold">
                CGPA: 7.8
              </Typography>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <a
                href="/path-to-your-files/btech-transcript.pdf" // Replace with actual file path
                download="btech-transcript.pdf"
              >
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Preview Transcript
                </Button>
              </a>
            </CardFooter>
          </Card>

          {/* 12th High School */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row justify-between mb-2">
                <Typography variant="h3">HSC, Maharashtra State Board</Typography>
                <Typography variant="p" className="text-sm text-gray-500">
                  2019-2020
                </Typography>
              </div>
              <Typography variant="p" className="mb-2">
                Utkarsha Madhyamik Vidyalaya And Junior College, Virar(W)
              </Typography>
              <Typography variant="p" className="font-semibold">
                Percentage: 73.20%
              </Typography>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <a
                href="/path-to-your-files/12th-transcript.pdf" // Replace with actual file path
                download="12th-transcript.pdf"
              >
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Preview Transcript
                </Button>
              </a>
            </CardFooter>
          </Card>

          {/* 10th */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row justify-between mb-2">
                <Typography variant="h3">SSC, Maharashtra State Board</Typography>
                <Typography variant="p" className="text-sm text-gray-500">
                  2017-2018
                </Typography>
              </div>
              <Typography variant="p" className="mb-2">
                Annasaheb Vartak Smarak Vidyamandir School, Virar(E)
              </Typography>
              <Typography variant="p" className="font-semibold">
                Percentage: 85.40%
              </Typography>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <a
                href="/path-to-your-files/10th-transcript.pdf" // Replace with actual file path
                download="10th-transcript.pdf"
              >
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Preview Transcript
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>

        {/* AI Study Insights Button */}
        <div className="mt-8 flex justify-center">
          <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
            <Lightbulb className="h-4 w-4" />
            Get AI Study Insights
          </Button>
        </div>
      </div>
    </main>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: 1,
    title: "Job Portal",
    description:
      "Job Portal built on Next.js, Utilized NextJS's SSR for SEO optimization and wrote efficient and scalable code for API requests using Redux. The platform offers various featues like posting jobs, shortlisting and schduling interview of candidate. Email and whatsapp is triggered on every event. like getting shortlisted of clearing interview round.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/vikas-negi-3e0ef.appspot.com/o/jobs.jpg?alt=media&token=0b9e93a9-0ad4-4ad6-96a3-d2c202e766af",
    tags: ["ReactJS", "NextJS", "Redux", "APIs", "ES6"],
    liveUrl: "https://jobs.mentorkart.com/recruit",
    repoUrl: "",
    category: "frontend",
  },
  {
    id: 2,
    title: "Learning Management System",
    description:
      "Learning Management System (LMS) built on Next.js, Wrote efficent and scalable code with the help of NextJS and organized all the API calls with the help of Redux. The platform Offers a wide range of functionalities like, sessions, resources, assessments and and features like video watch time tracking, session analytics, and attendance report etc.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/vikas-negi-3e0ef.appspot.com/o/lms.jpg?alt=media&token=726e7e81-aa46-4cbd-8d8b-ff9094d2293b",
    tags: ["ReactJS", "NextJS", "Redux", "APIs", "ES6"],
    liveUrl: "#",
    repoUrl: "",
    category: "frontend",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills and
            expertise in web development.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="frontend" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === "frontend")
                .map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="backend" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === "backend")
                .map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="fullstack" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => project.category === "fullstack")
                .map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    repoUrl: string;
    category: string;
  };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-base">
            {project.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex gap-3">
          <Button asChild variant="default" size="sm" className="gap-2">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} /> Live Demo
            </a>
          </Button>
          {!!project.repoUrl && (
            <Button asChild variant="outline" size="sm" className="gap-2">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} /> Code
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

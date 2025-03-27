"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Palette,
  Database,
  Globe,
  Layers,
  GitBranch,
  Server,
} from "lucide-react";
import { useEffect, useState } from "react";

// const skills = [
//   { name: "JavaScript", percentage: 95 },
//   { name: "React", percentage: 95 },
//   { name: "Node.js", percentage: 95 },
//   { name: "TypeScript", percentage: 90 },
//   { name: "Golang", percentage: 70 },
//   { name: "Next.js", percentage: 85 },
//   { name: "AWS", percentage: 75 },
//   { name: "Django", percentage: 50 },
// ];

const categories = [
  {
    title: "Frontend Development",
    icon: <Code className="h-10 w-10 text-primary" />,
    skills: [
      "ReactJS",
      "JQuery",
      "Edge",
      "EJS",
      "HTML",
      "CSS",
      "MUI",
      "TailwindCSS",
      "Bootstrap",
      "Redux",
      "Shadcn",
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-10 w-10 text-primary" />,
    skills: [
      "NodeJS",
      "ExpressJS",
      "AdonisJS",
      "SailsJS",
      "PrismaORM",
      "NestJS",
      "Django",
      "Sequelize",
      "FASTAPI",
      "NextJS",
      "Bun",
    ],
  },
  {
    title: "Databases",
    icon: <Database className="h-10 w-10 text-primary" />,
    skills: [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "DynamoDB",
      "AWS RDS",
      "Redis",
      "MSSQL Server",
      "AWS S3",
      "SQLite",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: <GitBranch className="h-10 w-10 text-primary" />,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Kubernetes",
      "BitBucket",
      "AWS",
      "Netlify",
      "Vercel",
      "Render",
      "Railway",
    ],
  },
  {
    title: "Web Technologies",
    icon: <Globe className="h-10 w-10 text-primary" />,
    skills: ["REST API", "GraphQL", "WebSockets", "PWA", "SEO", "gRPC"],
  },
  {
    title: "Architecture",
    icon: <Layers className="h-10 w-10 text-primary" />,
    skills: [
      "Microservices",
      "Serverless",
      "MVC",
      "Domain-Driven Design",
      "Monolithic",
      "Event-Driven",
    ],
  },
];

export default function SkillsSection() {
  const [skills, setSkills] = useState<Record<string, string>[]>();
  useEffect(() => {
    fetch("/api/skills")
      .then((res) => res.json())
      .then(setSkills);
  }, []);
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my career. Here's
            a breakdown of my technical expertise and proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {(skills || []).map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-2 flex justify-between items-center">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <Progress value={parseInt(skill.level)} className="h-2" />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    {category.icon}
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <ul className="grid grid-cols-2 gap-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-muted-foreground text-sm">
                        • {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

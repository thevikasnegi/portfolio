"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import SafeHTML from "@/hooks/useSafeHtml";

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Creative Buffer",
    location: "Mohali, In",
    period: "May 2024 - Present",
    description: [
      "Developed and deployed AWS resources like Cloud-front Distribution, S3 bucket, Log groups, ECR repository, API gateway, ECS service, load balancer  etc. using serverless framework and terraform.",
      "Enabled AWS multi-part uploads and ensured smooth API integration with the front-end.",
      "Contributed to 5+ live projects with diverse back-end architectures, including serverless, microservices, and monolithic designs, ensuring robust and scalable solutions featuring various frameworks and languages.",
      "Connected microservices through gRPC, crafting both client and server component using JavaScript and Python.",
      "Implemented a full-fledged subscription module with Stripe, supporting both upgrades and downgrades, and synchronized the backend with Stripe using various webhook events.",
      "Built a real-time chat module with Socket.IO, used caching to keep track active chat per user at server level.",
      "Set up and managed a CI/CD pipeline with automated deployments via GitHub Actions and configured DNS routing for seamless delivery.",
      "Engineered an Excel web add-in to fetch Arrow IPC buffers from various APIs, transform them into JSON, and rendered data in Excel. Wrapped the add-in’s Webpack server with a Node.js server for smooth data processing and API communication.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Redux",
      "NodeJS",
      "ExpressJS",
      "NestJS",
      "Microservices",
      "Websockets",
      "AWS",
      "gRPC",
      "Django",
    ],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Menorkart",
    location: "Noida, IN",
    period: "Mar 2023 - Apr 2024",
    description: [
      "Integrated APIs into front-end systems to enhance and expand functionalities.",
      "Achieved an 84% reduction in API response times by implementing efficient pagination techniques.",
      "Boosted SEO rankings by 80% through the successful migration of three major projects to Next.js.",
      "Designed and executed complex modules, including video watch time tracking, progress bar integration, progress reports, user permissions, and seamless payment gateway integration.",
      "Conducted over four major database and AWS SDK migrations across high-impact projects.",
      "Managed source code for more than seven codebases, utilizing version control tools like Git.",
      "Resolved Next.js hydration and minification errors across 2 major projects without disrupting application flow, while eliminating redundant API calls to enhance performance.",
    ],
    skills: [
      "Node.js",
      "React",
      "MySQL",
      "Express",
      "AWS",
      "NextJS",
      "Redux",
      "Jira",
      "Agile",
      "Git",
      "GitHub",
    ],
  },
  {
    id: 3,
    role: "Technical Writer Intern",
    company: "DiyanshIT",
    location: "Remote",
    period: "Feb 2023",
    description: [
      "Worked with Trello to have a seamless task delegation and team coordination.",
      "Developed technical documents such as user guides, cheatsheet, and product specifications.",
      "Produced an impressive portfolio of 5+ articles in just one month.",
    ],
    skills: [
      "Trello",
      "Technical Documentation",
      "Content Writing",
      "Wordpress",
    ],
  },
  {
    id: 4,
    role: "Full Stack Developer Intern",
    company: "Ranjana Enterprises",
    location: "Remote",
    period: "Jan 2023",
    description: [
      "Designed database schemas to support efficient storage and retrieval operations.",
      "Implemented RESTful API endpoints with Node.js and Express.",
      "Learned About NextJS and SSR.",
    ],
    skills: ["NextJS", "JavaScript", "TypeScript", "Mongoose", "MongoDB"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to
            work with.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl">
                        {experience.role}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium mt-1">
                        {experience.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <ul className="list-disc ml-8">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  {/* {SafeHTML({
                    htmlContent: experience.description,
                    element: <p className="text-muted-foreground" />,
                  })} */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

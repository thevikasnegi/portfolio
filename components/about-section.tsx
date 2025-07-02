"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/vikas-negi-3e0ef.appspot.com/o/profile.299525863367b2dfe1b8.jpg?alt=media&token=683387ac-5b28-45e1-8666-7ee81fa9af34"
                  alt="Profile Pic"
                  className="w-full h-auto object-cover aspect-square"
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Full Stack Developer & DevOps Enthusiast
            </h3>
            <p className="text-muted-foreground mb-6">
              I’m a passionate Full-Stack Developer with extensive experience in
              building scalable, high-performance web applications. I specialize
              in designing and optimizing back-end architectures, crafting
              dynamic front-end interfaces, and integrating real-time features
              using modern frameworks like Next.js, NestJS, and React. My work
              spans API development, database optimization, cloud
              infrastructure, and microservices, ensuring seamless and efficient
              systems. I thrive in fast-paced, collaborative environments and am
              dedicated to continuous learning and delivering impactful digital
              experiences.
            </p>
            <p className="text-muted-foreground mb-6">
              My approach combines technical expertise with creative
              problem-solving to deliver solutions that not only meet but exceed
              client expectations. I'm constantly learning and exploring new
              technologies.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-muted-foreground">Vikas Negi</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-muted-foreground">negivikas201@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">Location:</p>
                <p className="text-muted-foreground">Mohali, In</p>
              </div>
              <div>
                <p className="font-medium">Availability:</p>
                <p className="text-muted-foreground">Freelance & Full-time</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={
                  "https://drive.google.com/file/d/1C4LRBUzL7dLsvTAOyaM5p0f8azxXMLH5/view"
                }
                target="_blank"
              >
                <Button className="gap-2">
                  <Download size={16} /> Download CV
                </Button>
              </Link>
              <Button variant="outline" size="icon">
                <Link href="mailto:negivikas201@gmail.com">
                  <Mail size={18} />
                </Link>
              </Button>
              <Button variant="outline" size="icon">
                <Link
                  href={"https://github.com/thevikasnegi"}
                  target="_blank"
                >
                  <Github size={18} />
                </Link>
              </Button>
              <Button variant="outline" size="icon">
                <Link
                  href={"https://www.linkedin.com/in/vikas-n-770116252/"}
                  target="_blank"
                >
                  <Linkedin size={18} />
                </Link>
              </Button>
              {/* <Button variant="outline" size="icon">
                <Twitter size={18} />
              </Button> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

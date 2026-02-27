"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  Folder,
  ChevronLeft,
  ChevronRight,
  Lock,
  Unlock,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  isOpenSource: boolean;
}

const PROJECTS_PER_PAGE = 6;

const projects: Project[] = [
  {
    title: "eFood Backend Microservice",
    description:
      "A scalable backend microservice for an online food delivery platform serving users across Indonesia. Built with event-driven architecture.",
    tags: ["NestJS", "Sequelize", "PostgreSQL", "NATS", "Docker"],
    liveUrl: "https://akarinti.tech/id/portfolio/e-food-by-nabati",
    featured: true,
    isOpenSource: false,
  },
  {
    title: "Agentpoint CMS",
    description:
      "Large-scale real estate CMS system serving clients in UK and Australia with GraphQL API integration.",
    tags: ["Laravel", "MongoDB", "GraphQL", "MySQL"],
    liveUrl: "https://www.agentpoint.com.au/",
    featured: true,
    isOpenSource: false,
  },
  {
    title: "Mini OAuth Server",
    description:
      "Lightweight OAuth 2.0-style authorization server implementing the Authorization Code flow with JWT access tokens, client validation, and protected APIs. Built to demonstrate authentication architecture and OAuth flows.",
    tags: ["NestJS", "PostgreSQL", "Sequelize", "JWT", "OAuth 2.0"],
    githubUrl: "https://github.com/pandusudo/mini-oauth-server",
    featured: true,
    isOpenSource: true,
  },
  {
    title: "Funraisin Fundraising Platform",
    description:
      "Online fundraising and event management platform for nonprofits, supporting peer-to-peer campaigns, donations, ticketing, and branded fundraising experiences.",
    tags: ["PHP", "MySQL", "JQuery", "Bootstrap"],
    liveUrl: "https://www.funraisin.co/",
    featured: true,
    isOpenSource: false,
  },
  {
    title: "Quran Reading API",
    description:
      "Backend service for a Quran reading app featuring user authentication, verse bookmarks, notes, reading history tracking, achievements, and structured reading plans.",
    tags: ["Node.js", "Express.js", "TypeScript", "Prisma"],
    githubUrl: "https://github.com/pandusudo/quran-api",
    isOpenSource: true,
  },
  {
    title: "Quran Habit",
    description:
      "Habit-building Quran reading platform featuring progress analytics, streak tracking, verse notes, bookmarks, and structured reading plans with a modern responsive interface.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    githubUrl: "https://github.com/pandusudo/quran-habit",
    isOpenSource: true,
  },
  {
    title: "ListSMRT",
    description:
      "AI-powered copywriting tool for real estate marketing with real-time collaboration features using WebSocket.",
    tags: ["NestJS", "Sequelize", "PostgreSQL", "OpenAI", "WebSocket"],
    liveUrl: "https://www.listsmrt.com/",
    featured: false,
    isOpenSource: false,
  },
  {
    title: "Pepy Time Tracker",
    description:
      "Time-tracking software and productivity tool helping teams manage their work hours efficiently.",
    tags: ["Express.js", "Golang", "MySQL", "Sequelize"],
    liveUrl: "https://pepy.app/",
    isOpenSource: false,
  },
];

function ProjectCard({ project }: { project: Project }) {
  const primaryLink = project.liveUrl || project.githubUrl || "#";

  return (
    <Link
      href={primaryLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col h-full p-6 rounded-xl border-2 border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute -top-2 -right-2 px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
          Featured
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors duration-300">
          <Folder className="size-6 text-primary" />
        </div>
        <div className="flex items-center gap-2">
          {/* Open/Closed Source Badge */}
          <div
            className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
              project.isOpenSource
                ? "bg-green-500/10 text-green-600 dark:text-green-400"
                : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
            }`}
          >
            {project.isOpenSource ? (
              <>
                <Unlock className="size-3" />
                <span>Open Source</span>
              </>
            ) : (
              <>
                <Lock className="size-3" />
                <span>Closed Source</span>
              </>
            )}
          </div>
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-lg hover:bg-secondary transition-colors duration-200"
              aria-label="View GitHub Repository"
            >
              <Github className="size-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-lg hover:bg-secondary transition-colors duration-200"
              aria-label="View Live Project"
            >
              <ExternalLink className="size-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

export function ProjectList() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const showPagination = projects.length > PROJECTS_PER_PAGE;

  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="w-full py-20 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I&apos;ve worked on, showcasing my
            experience in building scalable applications and systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Pagination */}
        {showPagination && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border-2 border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Previous page"
            >
              <ChevronLeft className="size-5" />
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-10 h-10 rounded-lg font-medium transition-all duration-200 ${
                      currentPage === page
                        ? "bg-primary text-primary-foreground"
                        : "border-2 border-border hover:bg-secondary"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
            </div>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border-2 border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Next page"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        )}

        {/* View More Button */}
        <div className="flex justify-center mt-10">
          <Link
            href="https://github.com/pandusudo?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border rounded-lg font-semibold hover:bg-secondary hover:border-primary/50 transition-all duration-300"
          >
            <Github className="size-5" />
            View More on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}

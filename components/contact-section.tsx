"use client";

import React from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  const socialLinks = [
    {
      name: "Email",
      href: "mailto:pandusudo@gmail.com",
      icon: Mail,
      description: "pandusudo@gmail.com",
      color: "hover:bg-blue-500/10 hover:border-blue-500/50",
    },
    {
      name: "GitHub",
      href: "https://github.com/pandusudo",
      icon: Github,
      description: "@pandusudo",
      color: "hover:bg-purple-500/10 hover:border-purple-500/50",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/pandu-cahyo/",
      icon: Linkedin,
      description: "pandu-cahyo",
      color: "hover:bg-blue-600/10 hover:border-blue-600/50",
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/pandusudo",
      icon: Twitter,
      description: "@pandusudo",
      color: "hover:bg-sky-500/10 hover:border-sky-500/50",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 w-full max-w-5xl px-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex flex-col items-center justify-center p-6 rounded-xl border-2 border-border bg-card transition-all duration-300 ${link.color} hover:shadow-lg hover:scale-105`}
          >
            <div className="mb-3 p-3 rounded-full bg-secondary group-hover:scale-110 transition-transform duration-300">
              <Icon className="size-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{link.name}</h3>
            <p className="text-xs text-muted-foreground">{link.description}</p>
          </Link>
        );
      })}
    </div>
  );
}

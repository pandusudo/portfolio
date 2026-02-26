"use client";

import { Twitter, Linkedin, Link2, Check } from "lucide-react";
import { useState } from "react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground font-medium">Share:</span>

      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4" />
      </a>

      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </a>

      <button
        onClick={copyToClipboard}
        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-colors"
        aria-label="Copy link"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Link2 className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}

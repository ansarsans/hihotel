"use client";

import { useEffect, useRef, useState } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "zoom";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  once?: boolean;
  threshold?: number;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  threshold = 0.14,
}: RevealProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          setVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
          return;
        }

        if (!once) {
          setVisible(false);
        }
      },
      { threshold },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal reveal-${direction} ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";

type RevealProps<T extends ElementType> = {
  children: ReactNode;
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "children" | "as">;

export default function Reveal<T extends ElementType = "div">({
  children,
  as,
  className,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.9) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " reveal--visible" : ""}${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

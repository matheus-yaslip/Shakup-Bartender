"use client";

import { useEffect, useRef, useState } from "react";

type StatItem = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

const stats: StatItem[] = [
  {
    value: 18,
    prefix: "+",
    label: "anos de experiência",
  },
  {
    value: 10,
    prefix: "+",
    suffix: " mil",
    label: "eventos realizados",
  },
  {
    value: 100,
    prefix: "+",
    suffix: " mil",
    label: "pessoas satisfeitas",
  },
];

export default function AnimatedStats() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [started, setStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setTimeout(() => {
            setStarted(true);
          }, 350);

          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="stats-strip"
      aria-label="Números da ShakeUp Bartenders"
    >
      {stats.map((stat, index) => (
        <AnimatedNumber
          key={stat.label}
          stat={stat}
          started={started}
          delay={index * 160}
        />
      ))}
    </section>
  );
}

function AnimatedNumber({
  stat,
  started,
  delay,
}: {
  stat: StatItem;
  started: boolean;
  delay: number;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!started) return;

    const timeout = setTimeout(() => {
      const duration = 1600;

      const startTime = performance.now();

      const animate = (time: number) => {
        const elapsed = time - startTime;

        const progress = Math.min(
          elapsed / duration,
          1
        );

        const ease =
          1 - Math.pow(1 - progress, 4);

        setCurrent(
          Math.floor(stat.value * ease)
        );

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [started, delay, stat.value]);

  return (
    <div className="stat-item">
      <strong>
        {stat.prefix}
        {current}
        {stat.suffix}
      </strong>

      <span>
        {stat.label}
      </span>
    </div>
  );
}
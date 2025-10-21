"use client";
import { ScrollView } from "@/components/scroll-view";
import { motion } from "motion/react";

export function TeamScrollView({
  children,
  delay,
  stagger,
}: {
  children: React.ReactNode;
  delay?: number;
  stagger?: boolean;
}) {
  return (
    <ScrollView delay={delay} stagger={stagger}>
      {children}
    </ScrollView>
  );
}

export function TeamMotionDiv({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
        visible: {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        },
      }}
    >
      {children}
    </motion.div>
  );
}

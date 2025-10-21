"use client";
import { ScrollView } from "@/components/scroll-view";

export function WhyChooseUsScrollView({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return <ScrollView delay={delay}>{children}</ScrollView>;
}

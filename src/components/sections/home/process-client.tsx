"use client";
import { ScrollView } from "@/components/scroll-view";

export function ProcessScrollView({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return <ScrollView delay={delay}>{children}</ScrollView>;
}

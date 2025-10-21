"use client";
import { ScrollView } from "./scroll-view";

export function ContactScrollView({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return <ScrollView delay={delay}>{children}</ScrollView>;
}

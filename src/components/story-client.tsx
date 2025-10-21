"use client";
import { ScrollView } from "./scroll-view";

interface StorySectionClientProps {
  children: React.ReactNode;
}

export function StorySectionClient({ children }: StorySectionClientProps) {
  return <ScrollView>{children}</ScrollView>;
}

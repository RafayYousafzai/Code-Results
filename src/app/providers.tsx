"use client";

import { CustomChatWidget } from "@/components/custom-chat-widget";

interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: any;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <>
      {children}
      <CustomChatWidget />
    </>
  );
}

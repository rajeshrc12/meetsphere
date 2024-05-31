import StreamVideoProvider from "@/providers/stream-client-provider";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "MeetSphere",
  description: "Video calling application",
  icons: {
    icon: "/icons/logo.svg",
  },
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;

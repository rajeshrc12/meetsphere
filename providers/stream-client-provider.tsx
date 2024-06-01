"use client";

import { tokenProvider } from "@/actions/stream.actions";
import Loader from "@/components/loader";
import { useUser } from "@clerk/nextjs";
import {
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();
  useEffect(() => {
    if (!isLoaded || !user) return;
    if (!apiKey) throw new Error("Stream api key missing");
    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user?.id,
        name: user?.fullName || user?.id,
        image: user?.imageUrl,
      },
      tokenProvider,
    });
    setVideoClient(client);
  }, [user, isLoaded]);

  if (!videoClient) return <Loader />;
  return (
    <StreamVideo client={videoClient}>
      <StreamTheme as="main" className="my-custom-root-class">
        {children}
      </StreamTheme>
    </StreamVideo>
  );
};
export default StreamVideoProvider;

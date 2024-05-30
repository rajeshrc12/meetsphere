import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative h-screen flex flex-col">
      <Navbar />
      <div className="flex grow">
        <Sidebar />
        <section className="flex flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;

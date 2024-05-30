import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignedUpPage = () => {
  return (
    <main className="flex-center h-screen">
      <SignUp />
    </main>
  );
};

export default SignedUpPage;

// pages/auth/signin.js
"use client"
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <button className="border " onClick={() => signIn("google")}>
        Sign in with Google
      </button>
    </div>
  );
}

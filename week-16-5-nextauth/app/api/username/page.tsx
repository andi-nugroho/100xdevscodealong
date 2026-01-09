// pages/auth/username.js
"use client"
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Username() {
  const { data: session } = useSession();
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    // Make API call to check if username is unique and save it
    // const res = await fetch("/api/username", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ username, email: session.user.email }),
    // });
    console.log(username);

    if (username === "prince") {
      // If username is valid, redirect to dashboard or authenticated page
      router.push("/dashboard");
    } else {
      alert("Username already taken, try another");
    }
  };

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Choose a unique username</h1>
      <form onSubmit={handleSubmit}>
        <input className="text-black"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter unique username"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}

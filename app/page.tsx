"use client";

import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function HomePage() {
  const [videoURL, setVideoURL] = useState("");
  const [prompt, setPrompt] = useState("");
  const [user, setUser] = useState<any>(null);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-4">
      <nav className="flex justify-between items-center p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">Pulse AI</h1>
        <div>
          {user ? (
            <span>Welcome, {user.displayName}</span>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-blue-600 px-4 py-2 rounded"
            >
              Login with Google
            </button>
          )}
        </div>
      </nav>

      {user && (
        <section className="mt-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Create Your AI Video</h2>

          <div className="border border-gray-700 p-4 rounded mb-4">
            <textarea
              placeholder="Describe the video you want to generate..."
              onChange={(e) => setPrompt(e.target.value)}
              className="block w-full mb-4 p-2 text-black"
            ></textarea>
            <button
              onClick={async () => {
                if (!prompt) {
                  alert("Please enter a description");
                  return;
                }
                try {
                  const response = await fetch("/api/generate-video", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ prompt }),
                  });
                  const data = await response.json();
                  setVideoURL(data.url);
                } catch (err) {
                  console.error(err);
                  alert("Failed to generate video");
                }
              }}
              className="bg-green-600 px-4 py-2 rounded"
            >
              Generate Video
            </button>
          </div>

          {videoURL && (
            <div className="border border-gray-700 p-4 rounded">
              <h3 className="text-xl mb-2">Preview</h3>
              <video src={videoURL} controls className="w-full rounded" />
            </div>
          )}
        </section>
      )}
    </main>
  );
}

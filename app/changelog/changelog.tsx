import Link from "next/link";
import React from "react";
import Image from "next/image";

type ChangelogEntry = {
  date: string;
  title: string;
  description: React.ReactNode;
  version: string;
  screenshot?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

const updates: ChangelogEntry[] = [
  // =================================================================
  {
    date: "18 September 2024",
    title: "File Creation + WSL Support",
    version: "v1.1.0 + v1.2.0",
    description: (
      <>
        {/* <div className="relative w-20"> */}
        <h2 className="mt-6 text-xl font-semibold">Features 🎉</h2>

        {/* </div> */}
        <ul className="mt-2 list-disc space-y-3 ps-6 text-lg">
          <li className="">
            <Link
              href="/blog/gpt-o1"
              className="text-primary-600 hover:underline"
            >
              Introduced GPT-o1 support &nbsp;
            </Link>
            for annual subscription members
          </li>
          <li className="">File Creation ✏️</li>
          <li className="">
            WSL - Read blog post on &nbsp;
            <span className="mb-4">
              <Link
                href="/blog/wsl-setup"
                className="text-primary-600 hover:underline"
              >
                how to setup WSL (Windows Subsystem for Linux)
              </Link>
            </span>
          </li>
          <li className="">
            <span className="mr-1 rounded-lg bg-green-200 px-1 py-0.5 font-mono text-black">
              /v0
            </span>{" "}
            create a <span className="font-mono">v0</span> component link
            directly from pearai
          </li>
          <li className="">Auto Updating for Mac 📦</li>
          <li className="">PearAI Theme</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">Improvements</h2>
        <ul className="mt-2 list-disc space-y-3 ps-6 text-lg">
          <li className="">
            <span className="mr-1 rounded-lg bg-green-200 px-2 py-0.5 text-black">
              /sensei
            </span>{" "}
            slash command which will help you learn by guiding rather than
            providing direct answers
          </li>
          <li className="">
            <span className="mr-1 rounded-lg bg-green-200 px-2 py-0.5 text-black">
              /leetcode
            </span>{" "}
            slash command, it will help you learn by guiding like a interviewer
          </li>
          <li className="">Preserve extension state on import from vscode</li>
          <li className="">Default PearAI Themes</li>
        </ul>
      </>
    ),
  },
  // =================================================================
  {
    date: "15 July 2024",
    title: "🚀 Initial Launch",
    version: "v0.0.1",
    description: (
      <div className="flex flex-col gap-y-4">
        <ul className="list-disc space-y-3 ps-6 text-lg">
          <li>VSCode Fork - Feel right at home</li>
          <li>Chat with AI models who have full code context</li>
          <li>
            Tag your files{" "}
            <span className="ml-1 rounded-lg bg-green-200 px-2 py-1 text-black">
              @filename
            </span>
          </li>
        </ul>
        <Image
          src="/images/changelogs/includeFile - v0.0.1.png"
          alt="PearAI v1.0.0 Dashboard"
          width={800}
          height={0}
          sizes="100vw"
          className="h-auto w-full max-w-[300px] rounded-2xl" // Added green hue border
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "650px",
          }}
        />
      </div>
    ),
  },
  // =================================================================
];

export default updates;

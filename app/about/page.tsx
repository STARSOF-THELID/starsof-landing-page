import AboutComponent from "@/components/about";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "About",
  description: "About STARSOF AR",
  canonical: "/about",
});

export default function About() {
  return (
    <>
      <AboutComponent />
    </>
  );
}

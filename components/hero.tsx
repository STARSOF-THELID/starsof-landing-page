"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
// import StarsHeroLogo from "@/components/ui/PearHeroLogo.svg";
// import StarsDarkHeroLogo from "@/components/ui/PearDarkHeroLogo.svg";
import { Button } from "@/components/ui/button";
import { YCombinatorLogo } from "@/components/ui/icons";

const HeroTitle = ({ theme }: { theme: string }) => (
  <>
    <div className="hidden items-start sm:inline-block">
      {/* {theme === "dark" ? (
        <StarsDarkHeroLogo
          width="26"
          alt="StarsOf AR Logo"
          className="mb-4 mr-2 inline-flex"
        />
      ) : (
        <StarsHeroLogo
          width="26"
          alt="StarsOf AR Logo"
          className="mb-4 mr-2 inline-flex"
        />
      )} */}
      <span className="text-primary-700">STARSOF THELID</span>
      <br></br>A map-based XXXXXX app
      <br></br>
      for XXX
    </div>
    <div
      className={
        "m-4 mt-0 flex flex-col items-center text-center lg:m-0 lg:justify-center"
      }
    >
      <h1 className="text-4xl font-bold">
        XXXXXXXX future to{" "}
        <span className="relative">
          <span className="relative z-10 text-primary-600">end </span>
          <span
            className="absolute bottom-0 left-0 w-full"
            style={{
              height: "1.4375rem",
              background: "rgba(200, 0, 0, 0.50)",
            }}
          ></span>
        </span>
        XXX.
      </h1>
      {/*         <p className="mt-4 max-w-2xl text-center text-gray-500">
          Lorem Ipsum.
        </p> */}
    </div>

    <div className="block items-start sm:hidden">
      <div>
        {/* {theme === "dark" ? (
          <StarsDarkHeroLogo
            width="20"
            alt="StarsOf AR Logo"
            className="mb-3 mr-2 inline-flex"
          />
        ) : (
          <StarsHeroLogo
            width="20"
            alt="StarsOf AR Logo"
            className="mb-3 mr-2 inline-flex"
          />
        )} */}
        <span className="text-primary-700">StarsOf AR </span>
      </div>
      <span className="flex flex-col text-3xl">
        <span>The Open Source</span> <span>AI&#8209;Powered Code Editor</span>
      </span>
    </div>
  </>
);

const HeroDescription = () => (
  <div className="mt-6 max-w-lg">
    <p
      className="mb-2 text-sm text-gray-500 sm:text-lg"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Speed up your development by integrating AI the correct way 🚀
    </p>
    <p
      className="mb-4 text-sm text-gray-500 sm:text-lg"
      data-aos="fade-up"
      data-aos-delay="200"
    ></p>
  </div>
);
const HeroButtons = () => {
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center justify-center sm:max-w-none">
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="flex flex-col items-center"
      >
        <Button asChild size="lg">
          <Link href="/pricing">Download For Free</Link>
        </Button>
        {/*         <div
          className="mt-10 flex items-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <span className="mr-[-0.1rem] mt-[0.12rem] text-sm text-gray-500">
            Backed by
          </span>
          <Link
            href="https://www.ycombinator.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YCombinatorLogo className="h-14 w-auto" />
          </Link>
        </div> */}
      </div>
    </div>
  );
};
export default function Hero() {
  const { theme } = useTheme();

  return (
    <section>
      <div className="relative mx-auto mt-24 max-w-6xl px-4 sm:px-6">
        <div className="relative pb-10 pt-24">
          <div className="mx-auto flex max-w-3xl flex-col items-center pb-12 text-center md:pb-16">
            <div className="text-4xl font-semibold text-gray-900 sm:text-5xl">
              <HeroTitle theme={theme!} />
            </div>
            <HeroDescription />
            <HeroButtons />
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Tweet } from "@/components/tweet";
import { components } from "./ui/my-tweet";
import { Badge } from "./ui/badge";

type VideoData = {
  src: string;
  title: string;
  description: string;
};

type VideoCardProps = VideoData;

const videoData: VideoData[] = [
  {
    src: "https://www.youtube.com/embed/Rzk3GmXUySs?si=2Y25oMlhbQWZpu1K",
    title: "My Latest YouTube video",
    description: "Here is a link!",
  },
];

const AboutComponent: React.FC = () => {
  return (
    <section className={"mt-36"}>
      {/*       <div className="mt-10 flex flex-col items-center justify-center">
        <p className="text-xs text-gray-700">Current features include</p>

        <div className="m-4 mt-2 flex max-w-4xl flex-wrap items-center justify-center gap-4">
          <Badge className="border-primary-900/30 bg-primary-300/10 font-medium text-primary-800 dark:text-primary-700">
            Lorem Ipsum
          </Badge>
          <Badge className="border-primary-900/30 bg-primary-300/10 font-medium text-primary-800 dark:text-primary-700">
          Lorem Ipsum
          </Badge>
          <Badge className="border-primary-900/30 bg-primary-300/10 font-medium text-primary-800 dark:text-primary-700">
          Lorem Ipsum
          </Badge>
          <Badge className="border-primary-900/30 bg-primary-300/10 font-medium text-primary-800 dark:text-primary-700">
          Lorem Ipsum          </Badge>
          <Badge className="border-primary-900/30 bg-primary-300/10 font-medium text-primary-800 dark:text-primary-700">
          Lorem Ipsum          </Badge>
        </div>
      </div> */}

      <div className="m-auto mb-8 flex max-w-4xl items-center justify-center px-4">
        <Tweet id="1825456010862956844" components={components} />
      </div>

      <div className="m-auto mb-10 flex flex-col items-center justify-center gap-4 p-4 pt-0 lg:flex-row lg:p-0">
        {videoData.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>

      <div className="mt-0 flex flex-col items-center justify-center p-4 pb-0">
        <h2 className="text-4xl font-bold">
          <span className="relative">
            <span className="relative z-10">Founders</span>
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "1.4375rem",
                background: "rgba(20, 189, 149, 0.20)",
              }}
            ></span>
          </span>
        </h2>

        <div className="max-w-2xl text-gray-500">
          <p className="mt-6 text-center">Lorem Ipsum</p>
          <p className="mt-3 text-center">Lorem Ipsum</p>
        </div>
      </div>
    </section>
  );
};

const VideoCard: React.FC<VideoCardProps> = ({ src, title, description }) => (
  <Card>
    <CardContent
      className="flex flex-col-reverse p-4 sm:flex-col"
      style={{
        width: "100%",
        maxWidth: "30rem",
        minHeight: "24rem",
      }}
    >
      <div
        className="relative mt-4 sm:mb-4 sm:mt-0"
        style={{
          paddingBottom: "16rem",
        }}
      >
        <iframe
          className="absolute left-0 top-0 h-full w-full rounded"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <CardDescription className="text-gray-500">{description}</CardDescription>
    </CardContent>
  </Card>
);

export default AboutComponent;

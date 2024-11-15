import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import YoutubeEmbed from "./ui/YoutubeEmbed";

type FeatureInfo = {
  header: string;
  description: React.ReactNode;
  videoSource?: string;
  embedId?: string;
};
type SingleFeatureProps = {
  info: FeatureInfo;
};

export default function Features() {
  const featureInfo = [
    {
      header: "Find people near you.",
      description: <></>,
      videoSource: "",
    },

    {
      header: "No more tedious changes.",
      description: <></>,
      videoSource: "",
    },

    {
      header: "Common use case example",
      description: (
        <>
          <p className="pb-6"></p>
        </>
      ),
      embedId: "",
    },
  ];

  return (
    <section className="flex flex-col justify-evenly">
      {featureInfo.map((info, index) => (
        <SingleFeature key={index} info={info} />
      ))}
    </section>
  );
}

function SingleFeature(props: SingleFeatureProps) {
  return (
    <div className="m-4 flex flex-col items-center gap-6 min-[425px]:m-8 min-[425px]:items-start sm:m-12 lg:m-24 lg:max-w-full lg:flex-row lg:justify-center lg:gap-28">
      <div className="mb-6 flex w-full flex-col text-center lg:mb-0 lg:ml-1.5 lg:w-[450px] lg:text-left">
        <h4
          className="whitespace-pre-line pb-8 text-2xl font-medium text-primary-700 lg:text-4xl"
          data-aos="fade-up"
        >
          {props.info.header}
        </h4>
        <div
          className="whitespace-pre-line text-base text-gray-600 lg:text-lg"
          data-aos="fade-up"
        >
          {props.info.description}
        </div>
      </div>
      <div className="w-full lg:w-[800px]">
        {props.info.videoSource ? (
          <AspectRatio ratio={3 / 2}>
            <video
              autoPlay
              loop
              muted
              controls
              playsInline
              className="h-full w-full rounded-lg object-cover"
              data-aos="fade-up"
            >
              <source src={props.info.videoSource} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </AspectRatio>
        ) : (
          <div className="w-full">
            <YoutubeEmbed embedId={props.info.embedId!} />
          </div>
        )}
      </div>
    </div>
  );
}

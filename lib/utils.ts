import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type MetadataProps = {
  title?: string;
  description?: string;
  canonical: string;
  ogImage?: string;
};

const defaultMetadata = {
  title: "STARSOF",
  description:
    "STARSOF THELID offers map-based social networking for kink-lifestyle.",
};

export const normalizeDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const constructMetadata = ({
  title,
  description = defaultMetadata.description,
  canonical = "/",
  ogImage = "/images/og-image.png",
}: MetadataProps) => {
  return {
    metadataBase: new URL("https://starsof-landing-page.vercel.app/"),
    title: title ? `${title} - STARSOF` : defaultMetadata.title,
    description,
    keywords: ["map-based social networking", "starsof"],
    alternates: {
      canonical,
    },
    authors: [
      {
        name: "xerk-dot",
        url: "https://github.com/xerk-dot",
      },
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "OG Image",
        },
      ],
    },

    // --- will add this once we get the logo ---
    // icons: {
    //   icon: "/icon.png",
    //   shortcut: "/icon.png",
    //   apple: "/icon.png",
    // },

    // --- need a twitter handle for this ---
    // twitter: {
    //   title,
    //   description,
    //   creator: "@zzz",
    //   site: "zzz",
    //   card: "summary_large_image",
    // },
  };
};

export const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ??
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    "http://localhost:3000";

  // Include `https://` when not localhost.
  url = url.startsWith("http") ? url : `https://${url}`;
  // Remove trailing slash if present
  url = url.endsWith("/") ? url.slice(0, -1) : url;
  return url;
};

export function capitalizeInital(input: unknown): string | undefined {
  if (typeof input !== "string") {
    return "";
  }
  if (input.length === 0) {
    return "";
  } else if (input.length === 1) {
    return input.toUpperCase();
  }
  return input.charAt(0).toUpperCase() + input.slice(1);
}

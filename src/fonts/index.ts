import localFont from "next/font/local";

const fonts = localFont({
  src: [
    {
      path: "./MonaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./MonaSans-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "./MonaSans-SemiBold.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./MonaSans-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "./MonaSans-ExtraBold.woff2",
      weight: "800",
      style: "extra-bold",
    },
  ],
});

export default fonts;

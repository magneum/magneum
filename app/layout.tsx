import "./globals.css";
import { Caladea } from "next/font/google";
const caladea = Caladea({
  style: ["normal", "italic"],
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Magneum Ui",
  description: "made with love using Nextjs + Tailwindcss + FramerMotion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={caladea.className}>{children}</body>
    </html>
  );
}

{
  /* <HeadBar /> */
}

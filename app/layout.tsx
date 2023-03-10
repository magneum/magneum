import "../db/globals.css";
import Foot from "./Foot";
import Navg from "./navg";

export const metadata = {
  title: "Magneum Hub",
  description: "Crafted with Love by Magneum <3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navg />
        {children}
        <Foot />
      </body>
    </html>
  );
}

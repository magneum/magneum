import "./globals.css";
import Foot from "./Foot";
import NavLink from "./NavLink";

export const metadata = {
title: "MAGNEUM 🤖",
description: "Generated by Magneum Api",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body className="antialiased">
<NavLink />
{children}
<hr className="h-1 bg-neutral-600/60 border-0" />
<Foot />
</body>
</html>
);
}

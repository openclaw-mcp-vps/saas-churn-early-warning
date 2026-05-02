import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChurnGuard – Predict Customer Churn 30-60 Days Early",
  description: "Connect your SaaS analytics and identify usage pattern changes that predict churn before it happens. Built for SaaS founders and customer success managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4a868ff3-0858-447b-aca9-5d75918a33b4"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

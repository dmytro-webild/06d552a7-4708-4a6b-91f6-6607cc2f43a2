import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'ACE Roofing RGV | Luxury Roofing Experts in Rio Grande Valley',
  description: 'RGV\'s most trusted luxury roofing company. Elite craftsmanship, professional service, and long-lasting protection for high-value homes in Brownsville, Harlingen, McAllen & surrounding areas.',
  keywords: ["Roofing Company Brownsville TX, Roof Repair RGV, Roofing Contractor Rio Grande Valley, Metal Roofing Brownsville, Emergency Roof Repair RGV, Residential Roofing Brownsville, luxury roofing, storm damage, roof inspection, financing, commercial roofing, TPO systems"],
  openGraph: {
    "title": "ACE Roofing RGV | Luxury Roofing Experts in Rio Grande Valley",
    "description": "RGV's most trusted luxury roofing company. Elite craftsmanship, professional service, and long-lasting protection for high-value homes in Brownsville, Harlingen, McAllen & surrounding areas.",
    "url": "https://www.aceroofingrgv.com",
    "siteName": "ACE Roofing RGV",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/top-view-prague_1398-2722.jpg",
        "alt": "Luxury home with new roof"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "ACE Roofing RGV | Luxury Roofing Experts in Rio Grande Valley",
    "description": "RGV's most trusted luxury roofing company. Elite craftsmanship, professional service, and long-lasting protection for high-value homes.",
    "images": [
      "http://img.b2bpic.net/free-photo/top-view-prague_1398-2722.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}

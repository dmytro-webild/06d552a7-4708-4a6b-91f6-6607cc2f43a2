"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmallSizeLargeTitles"
        background="circleGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "About Us",
          id: "/about",
        },
        {
          name: "Services",
          id: "/services",
        },
        {
          name: "Financing",
          id: "/financing",
        },
        {
          name: "Reviews",
          id: "/reviews",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="ACE Roofing RGV"
    />
  </div>

  <div id="financing-options" data-section="financing-options">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "finance-plan-1",
          title: "Easy Payment Plans",
          price: "Starting at 0%",
          period: "APR",
          features: [
            "Quick approval process",
            "Low monthly payments",
            "No hidden fees",
            "Invest in your home's future",
            "Partnerships with leading lenders",
          ],
          button: {
            text: "CHECK FINANCING OPTIONS",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/realistic-water-drop-with-ecosystem_23-2151196444.jpg",
          imageAlt: "Financial security with a new roof",
        },
      ]}
      title="Protect Your Home Now — Pay Over Time"
      description="Flexible financing options available to make your dream roof a reality today. Don't compromise on quality or safety."
    />
  </div>

  <div id="financing-social-proof" data-section="financing-social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "GreenSky",
        "EnerBank USA",
        "Mosaic",
        "Service Finance Company",
        "Ally Lending",
        "Synchrony Bank",
        "Hearth",
      ]}
      title="Our Trusted Financing Partners"
      description="We've partnered with industry-leading financial institutions to provide you with secure and flexible payment solutions."
      showCard={true}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Quick Links",
          items: [
            {
              label: "Home",
              href: "/",
            },
            {
              label: "About Us",
              href: "/about",
            },
            {
              label: "Services",
              href: "/services",
            },
            {
              label: "Financing",
              href: "/financing",
            },
            {
              label: "Reviews",
              href: "/reviews",
            },
            {
              label: "Contact",
              href: "/contact",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Residential Roofing",
              href: "/services#residential",
            },
            {
              label: "Commercial Roofing",
              href: "/services#commercial",
            },
            {
              label: "Storm Damage",
              href: "/services#storm-damage",
            },
            {
              label: "Roof Inspections",
              href: "/services#inspections",
            },
          ],
        },
        {
          title: "Contact Us",
          items: [
            {
              label: "+1 (956) 123-4567",
              href: "tel:+19561234567",
            },
            {
              label: "info@aceroofingrgv.com",
              href: "mailto:info@aceroofingrgv.com",
            },
            {
              label: "Service Areas",
              href: "/contact#areas",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 ACE Roofing RGV. All rights reserved."
      bottomRightText="Built On Quality. Backed By Integrity."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

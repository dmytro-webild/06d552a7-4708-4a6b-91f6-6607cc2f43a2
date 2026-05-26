"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

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

  <div id="contact-form" data-section="contact-form">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "downward-rays-animated",
      }}
      tag="Get Your Free Estimate"
      title="Your Roof Protects Everything Beneath It."
      description="Trust ACE Roofing RGV to deliver craftsmanship, professionalism, and peace of mind. Schedule your free, no-obligation inspection today."
      imageSrc="http://img.b2bpic.net/free-photo/lightning-hit-house_1204-242.jpg"
      imageAlt="Luxury home with newly installed roof at dusk"
      mediaAnimation="opacity"
      mediaPosition="right"
      inputPlaceholder="Your Name"
      buttonText="Request Free Estimate"
      termsText="By submitting, you agree to our privacy policy and terms of service."
    />
  </div>

  <div id="contact-metrics" data-section="contact-metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "contact-metric-1",
          value: "RGV",
          title: "Service Areas",
          items: [
            "Brownsville",
            "Harlingen",
            "McAllen",
          ],
        },
        {
          id: "contact-metric-2",
          value: "24/7",
          title: "Emergency Support",
          items: [
            "Storm Damage",
            "Leak Repair",
          ],
        },
        {
          id: "contact-metric-3",
          value: "5-Star",
          title: "Google Rating",
          items: [
            "Consistent Customer Satisfaction",
            "Trusted Local Experts",
          ],
        },
        {
          id: "contact-metric-4",
          value: "Free",
          title: "Estimates",
          items: [
            "No Obligation",
            "Transparent Pricing",
          ],
        },
      ]}
      title="Quick Facts & Reach"
      description="Providing elite roofing services across the Rio Grande Valley with dedication and unparalleled quality."
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

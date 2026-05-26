"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TeamCardOne from '@/components/sections/team/TeamCardOne';

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

  <div id="about-us" data-section="about-us">
      <TeamCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="one-large-left-three-stacked-right"
      useInvertedBackground={false}
      members={[
        {
          id: "owner-1",
          name: "John Doe",
          role: "Owner & Lead Contractor",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-business-laptop-studying_1303-1266.jpg",
          imageAlt: "Owner John Doe",
        },
      ]}
      title="Roofing Done Right The First Time"
      description="ACE Roofing RGV is a family-owned roofing company serving homeowners and businesses throughout the Rio Grande Valley with integrity, precision, and unmatched customer care. We emphasize fast response times, clean job sites, honest estimates, premium craftsmanship, and a customer-first approach."
    />
  </div>

  <div id="about-faq" data-section="about-faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",
          title: "What areas do you serve?",
          content: "ACE Roofing RGV proudly serves Brownsville, Harlingen, McAllen, Edinburg, Mission, and surrounding communities throughout the Rio Grande Valley.",
        },
        {
          id: "faq-2",
          title: "Are you licensed and insured?",
          content: "Yes, ACE Roofing RGV is fully licensed and insured, providing you with complete peace of mind and protection on every project.",
        },
        {
          id: "faq-3",
          title: "Do you offer free estimates?",
          content: "Absolutely! We offer complimentary, no-obligation roof inspections and detailed estimates to get your project started right.",
        },
        {
          id: "faq-4",
          title: "What types of roofing do you specialize in?",
          content: "We specialize in both residential and commercial roofing, including shingle, metal, flat, and TPO systems, as well as comprehensive storm damage restoration.",
        },
        {
          id: "faq-5",
          title: "How long does a roof replacement take?",
          content: "Project timelines vary based on scope, but our efficient crews work diligently to complete most residential roof replacements within 1-3 days, weather permitting.",
        },
      ]}
      sideTitle="Common Questions"
      sideDescription="Find answers to frequently asked questions about ACE Roofing RGV, our services, and what makes us RGV's most trusted choice."
      faqsAnimation="slide-up"
      textPosition="left"
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

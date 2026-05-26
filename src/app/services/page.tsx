"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';

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

  <div id="services-overview" data-section="services-overview">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Residential Roofing",
          description: "Roof replacement, shingle roofing, metal roofing, leak repair, and preventative maintenance for homeowners.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-working-with-earphones_23-2149343656.jpg",
          imageAlt: "Residential roof",
        },
        {
          title: "Commercial Roofing",
          description: "Flat roofing, TPO systems, preventative maintenance, and large-scale roof replacements for businesses.",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-building-with-tree-city_23-2148798648.jpg",
          imageAlt: "Commercial flat roof",
        },
        {
          title: "Storm Damage Restoration",
          description: "Expert insurance claim assistance, emergency tarping, and comprehensive hail/wind damage repair.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-deserted-decaying-house-nature_23-2150166639.jpg",
          imageAlt: "Storm damaged roof",
        },
        {
          title: "Roof Inspections",
          description: "Free, thorough inspections including advanced drone inspections and preventive evaluations to ensure your roof's integrity.",
          imageSrc: "http://img.b2bpic.net/free-photo/stock-aerial-video-creator-photographer-prepares-drone-flight_346278-260.jpg",
          imageAlt: "Drone roof inspection",
        },
      ]}
      title="Comprehensive Roofing Solutions"
      description="From residential homes to large commercial projects, ACE Roofing RGV delivers superior craftsmanship and lasting protection for every property."
      tag="Our Expertise"
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "proj-1",
          name: "Luxury Metal Roof",
          price: "Brownsville, TX",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-wearing-protection-helmets_23-2149343642.jpg",
          imageAlt: "Luxury metal roof on modern home",
        },
        {
          id: "proj-2",
          name: "Commercial TPO System",
          price: "Harlingen, TX",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-skyscrapers-japan-business-district_23-2148836784.jpg",
          imageAlt: "Commercial TPO roofing system",
        },
        {
          id: "proj-3",
          name: "Premium Shingle Roof",
          price: "McAllen, TX",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-metal-texture-pattern_58702-13596.jpg",
          imageAlt: "Premium shingle roof detail",
        },
        {
          id: "proj-4",
          name: "Modern Residential Roof",
          price: "Edinburg, TX",
          imageSrc: "http://img.b2bpic.net/free-photo/man-working-roof-with-drill_23-2148748774.jpg",
          imageAlt: "Modern residential roof",
        },
        {
          id: "proj-5",
          name: "Ongoing Installation",
          price: "Mission, TX",
          imageSrc: "http://img.b2bpic.net/free-photo/bangkok-thailand-november-12-2024-street-food-vendor-preparing-thai-cuisine_482257-126002.jpg",
          imageAlt: "Roof installation in progress",
        },
        {
          id: "proj-6",
          name: "Drone Inspection View",
          price: "Rio Grande Valley",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-buildings-swimming-pool_116348-23.jpg",
          imageAlt: "Drone inspecting roof",
        },
      ]}
      title="Our Craftsmanship in Action"
      description="Explore recent projects showcasing our precision, quality, and commitment to excellence across the Rio Grande Valley."
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

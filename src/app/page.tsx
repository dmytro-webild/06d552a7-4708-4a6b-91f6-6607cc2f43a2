"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Sparkles } from "lucide-react";

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

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="RGV’S MOST TRUSTED ROOFING EXPERTS"
      description="Luxury roofing solutions built with precision, professionalism, and long-lasting protection. ⭐ 5-Star Rated | Licensed & Insured | Free Roof Inspections | Financing Available"
      testimonials={[
        {
          name: "Sarah J.",
          handle: "Homeowner, Brownsville",
          testimonial: "ACE Roofing RGV provided exceptional service from start to finish. Our new roof looks stunning and the team was incredibly professional.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-entrepreneur-posing-camera_1262-3636.jpg?_wi=1",
          imageAlt: "Sarah J.",
        },
        {
          name: "Michael D.",
          handle: "Business Owner, Harlingen",
          testimonial: "Outstanding quality and responsive communication. Our commercial property's TPO roof was completed ahead of schedule with zero issues.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/successful-businesswoman-posing-outdoors_1262-16431.jpg",
          imageAlt: "Michael D.",
        },
        {
          name: "Emily R.",
          handle: "Homeowner, McAllen",
          testimonial: "After storm damage, ACE Roofing made the process seamless. They handled everything with the insurance and delivered a beautiful new roof.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-with-face-cream_23-2149137958.jpg",
          imageAlt: "Emily R.",
        },
        {
          name: "David K.",
          handle: "Property Manager, Edinburg",
          testimonial: "The most professional roofing company we've worked with in RGV. Their crew was punctual, clean, and the craftsmanship is truly elite.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/couple-posing-together-their-new-home-while-holding-paintbrush_23-2149086844.jpg",
          imageAlt: "David K.",
        },
        {
          name: "Jessica L.",
          handle: "Homeowner, Mission",
          testimonial: "Exceptional value for a luxury roof. The team was fantastic, and we feel so much more confident about our home's protection.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-mature-businessman-looking-confident-smiling_176420-31691.jpg",
          imageAlt: "Jessica L.",
        },
      ]}
      testimonialRotationInterval={7000}
      buttons={[
        {
          text: "GET FREE INSPECTION",
          href: "/contact",
        },
        {
          text: "CALL NOW",
          href: "tel:+19561234567",
        },
      ]}
      videoSrc="http://img.b2bpic.net/free-photo/top-view-prague_1398-2722.jpg"
      videoAriaLabel="Cinematic drone footage of a luxury home with a new roof"
      showDimOverlay={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-man-black-suit_23-2148401442.jpg",
          alt: "Satisfied client",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-bearded-smiling-black-man-wool-suit_613910-16049.jpg",
          alt: "Happy customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-handsome-smiling-stylish-hipster-lambersexual-modelsexy-modern-man-dressed-elegant-suit-fashion-male-posing-studio-near-blue-wall_158538-21048.jpg",
          alt: "Professional homeowner",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148135.jpg",
          alt: "Smiling client",
        },
        {
          src: "http://img.b2bpic.net/free-photo/blond-business-woman-blue-shirt_23-2148095792.jpg",
          alt: "Trusted customer",
        },
      ]}
      avatarText="Join 100s of satisfied RGV homeowners"
      imageSrc="http://img.b2bpic.net/free-photo/smiling-entrepreneur-posing-camera_1262-3636.jpg?_wi=2"
      imageAlt="professional male portrait smiling"
    />
  </div>

  <div id="trust-bar" data-section="trust-bar">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Responsive Communication",
        "On-Time Project Completion",
        "Premium Materials",
        "Professional Crews",
        "Exceptional Value",
        "Licensed & Insured",
        "5-Star Rated",
      ]}
      title="Trusted Across The Rio Grande Valley"
      showCard={false}
      description="Our commitment to excellence shines through in every project, building lasting trust with every client."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "metric-1",
          value: "5-Star",
          title: "Customer Satisfaction",
          items: [
            "Rated consistently excellent",
            "Reviews speak for themselves",
          ],
        },
        {
          id: "metric-2",
          value: "23+",
          title: "Years Experience",
          items: [
            "Decades of local expertise",
            "Mastering every roofing challenge",
          ],
        },
        {
          id: "metric-3",
          value: "Fast",
          title: "Response Times",
          items: [
            "Immediate support for emergencies",
            "Prompt communication always",
          ],
        },
        {
          id: "metric-4",
          value: "Premium",
          title: "Roofing Systems",
          items: [
            "Only the highest-grade materials",
            "Built for RGV's climate",
          ],
        },
      ]}
      title="Why Homeowners Choose ACE Roofing"
      description="We don’t just install roofs — we protect homes, families, and investments."
    />
  </div>

  <div id="process" data-section="process">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "1. Free Inspection",
          description: "Thorough assessment of your roof's condition, identifying any damage or areas of concern.",
          imageSrc: "http://img.b2bpic.net/free-photo/asian-man-with-cancer-side-view_23-2149870330.jpg",
          imageAlt: "Roof inspection with drone",
        },
        {
          title: "2. Detailed Estimate",
          description: "Transparent, no-obligation estimate outlining all costs, materials, and project timelines.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-men-working-roof-together_23-2149343670.jpg",
          imageAlt: "Detailed roofing estimate",
        },
        {
          title: "3. Material Selection",
          description: "Guidance on choosing the perfect premium materials to match your home's style and protection needs.",
          imageSrc: "http://img.b2bpic.net/free-photo/exterior-home_1203-2241.jpg",
          imageAlt: "Roofing material samples",
        },
        {
          title: "4. Professional Installation",
          description: "Our certified crews execute with elite craftsmanship, ensuring a clean job site and minimal disruption.",
          imageSrc: "http://img.b2bpic.net/free-photo/back-view-worker-with-hard-hat-carrying-wood_23-2148773431.jpg",
          imageAlt: "Roofing crew installing new roof",
        },
        {
          title: "5. Final Walkthrough & Warranty",
          description: "A comprehensive review of the finished project and activation of your robust warranty for peace of mind.",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-view-couple-standing-balcony_23-2147923064.jpg",
          imageAlt: "Completed luxury roof",
        },
      ]}
      title="Seamless Roofing Experience"
      description="We've streamlined our process to ensure every project is completed efficiently, professionally, and to your complete satisfaction."
      tag="Our Process"
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "extra-rev-1",
          name: "Carlos M.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1628.jpg",
          imageAlt: "Carlos M. avatar",
        },
        {
          id: "extra-rev-2",
          name: "Maria G.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg",
          imageAlt: "Maria G. avatar",
        },
        {
          id: "extra-rev-3",
          name: "Robert S.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-correcting-grammar-mistakes_23-2150171372.jpg",
          imageAlt: "Robert S. avatar",
        },
        {
          id: "extra-rev-4",
          name: "Laura P.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-with-bright-smile_23-2148563438.jpg",
          imageAlt: "Laura P. avatar",
        },
        {
          id: "extra-rev-5",
          name: "Javier R.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-smiling-with-arms-crossed_1187-3243.jpg",
          imageAlt: "Javier R. avatar",
        },
      ]}
      cardTitle="Voices of Our Satisfied Clients"
      cardTag="Hear From Homeowners"
      cardTagIcon={Sparkles}
      buttons={[
        {
          text: "VIEW ALL REVIEWS",
          href: "/reviews",
        },
      ]}
      cardAnimation="slide-up"
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

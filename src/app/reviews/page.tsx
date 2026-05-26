"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

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

  <div id="customer-reviews" data-section="customer-reviews">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "rev-1",
          name: "Sarah J.",
          role: "Homeowner",
          company: "Brownsville, TX",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-young-handsome-man-sitting-cafe-table_1262-975.jpg",
          imageAlt: "Sarah J.",
        },
        {
          id: "rev-2",
          name: "Michael D.",
          role: "Business Owner",
          company: "Harlingen, TX",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-business-woman-standing-bu-office-building_1303-31732.jpg",
          imageAlt: "Michael D.",
        },
        {
          id: "rev-3",
          name: "Emily R.",
          role: "Homeowner",
          company: "McAllen, TX",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/no-thank-you-smiling-happy-old-guy-with-tattoos-shaking-hands-refuse-rejecting-offer-politely-decline-something-standing-grey-tshirt-against-white-background_176420-54875.jpg",
          imageAlt: "Emily R.",
        },
        {
          id: "rev-4",
          name: "David K.",
          role: "Property Manager",
          company: "Edinburg, TX",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/father-son-playing-basketball-together-backyard_23-2150067865.jpg",
          imageAlt: "David K.",
        },
        {
          id: "rev-5",
          name: "Jessica L.",
          role: "Homeowner",
          company: "Mission, TX",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-man-using-tablet-street-cafe_1262-19056.jpg",
          imageAlt: "Jessica L.",
        },
        {
          id: "rev-6",
          name: "Robert B.",
          role: "Investor",
          company: "Brownsville, TX",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-with-headphones_23-2148602706.jpg",
          imageAlt: "Robert B.",
        },
      ]}
      title="5-Star Service From Start To Finish"
      description="Hear directly from our satisfied customers about their experience with ACE Roofing RGV – where quality meets integrity."
    />
  </div>

  <div id="reviews-faq" data-section="reviews-faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "rev-faq-1",
          title: "How can I leave a review?",
          content: "We encourage all our valued customers to share their experiences. You can leave a review on Google, Yelp, or directly through our website contact form.",
        },
        {
          id: "rev-faq-2",
          title: "Do you offer video testimonials?",
          content: "Yes, we proudly feature video testimonials from satisfied clients. Please contact us if you're interested in sharing your story on video.",
        },
        {
          id: "rev-faq-3",
          title: "How do you maintain a 5-star rating?",
          content: "Our commitment to professionalism, quality craftsmanship, and customer-first service ensures we consistently meet and exceed expectations, reflected in our top ratings.",
        },
        {
          id: "rev-faq-4",
          title: "What if I have an issue with my service?",
          content: "Your satisfaction is our priority. Please contact us immediately, and our team will work swiftly to resolve any concerns to your complete satisfaction.",
        },
      ]}
      sideTitle="Your Questions, Answered"
      sideDescription="We value your feedback and are committed to transparency. Here are some common questions about our customer service and review process."
      faqsAnimation="slide-up"
      textPosition="right"
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

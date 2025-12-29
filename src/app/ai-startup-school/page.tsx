"use client";

import {
  Header,
  Hero,
  CourseComparison,
  Contents,
  FAQ,
  FinalCTA,
  Footer,
} from "@/components/landing";
import { aiStartupSchoolConfig } from "@/config/ai-startup-school";
import { api } from "@/utils/api";

export default function AIStartupSchoolPage() {
  const config = aiStartupSchoolConfig;

  const createCheckout = api.checkout.createCheckoutSession.useMutation({
    onSuccess: (data) => {
      if (data.url) {
        window.location.href = data.url;
      }
    },
    onError: (error) => {
      console.error("Checkout error:", error);
      alert("Failed to create checkout. Please try again.");
    },
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 100,
        behavior: "smooth",
      });
    }
  };

  const handleCTA = () => {
    createCheckout.mutate({
      successUrl: `${window.location.origin}/ai-startup-school/success`,
      cancelUrl: window.location.href,
    });
  };

  return (
    <main>
      <Header
        siteName={config.siteName}
        ctaText={config.pricing.ctaText}
        onCtaClick={handleCTA}
      />
      <Hero
        title={config.hero.title}
        highlight={config.hero.highlight}
        subtitle={config.hero.subtitle}
        ctaText={config.pricing.ctaText}
        onCtaClick={handleCTA}
        video={{
          libraryId: "519643",
          streamId: "b0650a63-370f-47a5-9079-e956cb5489d5",
        }}
      />

      <CourseComparison
        left={config.comparison.left}
        right={config.comparison.right}
        ctaText={config.pricing.ctaText}
        onCtaClick={handleCTA}
      />

      <Contents
        heading={config.contents.heading}
        subheading={config.contents.subheading}
        modules={config.contents.modules}
      />

      <FAQ
        title={config.faq.title}
        subtitle={config.faq.subtitle}
        items={config.faq.items}
        contactEmail={config.faq.contactEmail}
        contactMessage={config.faq.contactMessage}
      />

      <FinalCTA
        heading={config.finalCta.heading}
        productName={config.productName}
        price={config.pricing.price}
        ctaText={config.pricing.ctaText}
        onCtaClick={handleCTA}
      />

      <Footer
        siteName={config.siteName}
        contactEmail={config.faq.contactEmail}
      />
    </main>
  );
}

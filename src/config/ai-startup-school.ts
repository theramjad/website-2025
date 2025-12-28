/**
 * AI Startup School Product Configuration
 */

export interface ProductConfig {
  productName: string;
  siteName: string;
  siteDescription: string;
  hero: {
    title: string;
    highlight: string;
    subtitle: string;
  };
  finalCta: {
    heading: string;
  };
  guarantee: {
    title: string;
    mainText: string;
    benefits: string[];
    bottomTitle: string;
    bottomText: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      question: string;
      answer: string;
    }>;
    contactEmail: string;
    contactMessage: string;
  };
  comparison: {
    left: {
      title: string;
      problems: string[];
    };
    right: {
      title: string;
      benefits: string[];
    };
  };
  contents: {
    heading: string;
    subheading: string;
    modules: Array<{
      title: string;
      description: string;
      emoji: string;
      duration: string;
      topics: string[];
      groupWithNext?: boolean;
    }>;
  };
  pricing: {
    price: number;
    ctaText: string;
  };
}

export const aiStartupSchoolConfig: ProductConfig = {
  productName: "AI Startup School",
  siteName: "AI Startup School",
  siteDescription: "Learn to build AI-powered startups from idea to launch",

  hero: {
    title: "AI Startup School",
    highlight: "AI",
    subtitle: "Learn to build and launch AI-powered products. From idea validation to your first paying customers.",
  },

  finalCta: {
    heading: "Start Building Today",
  },

  guarantee: {
    title: "100% Risk-Free Guarantee",
    mainText: "We're confident this program will transform how you build AI products. Try it for 7 days, and if you don't see the value, get a full refund—no questions asked.",
    benefits: [
      "Transparent, hassle-free refund process",
      "Contact our helpful support team anytime"
    ],
    bottomTitle: "Your Success Is Our Priority",
    bottomText: "If this program doesn't deliver extraordinary value, we don't want your money."
  },

  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about AI Startup School",
    items: [
      {
        id: "what-is-this",
        question: "What is AI Startup School?",
        answer: "AI Startup School is a comprehensive program that teaches you how to build, launch, and grow AI-powered products. From finding ideas to getting your first customers."
      },
      {
        id: "for-beginners",
        question: "I'm new to AI. Is this for me?",
        answer: "Yes! We start from the fundamentals and build up. Whether you're a complete beginner or an experienced developer, you'll learn practical skills to build AI products."
      },
      {
        id: "coding-required",
        question: "Do I need to know how to code?",
        answer: "Basic coding knowledge helps, but with modern AI tools like Claude Code, you can build sophisticated products with minimal coding experience. We'll show you how."
      },
      {
        id: "access-duration",
        question: "How long do I have access?",
        answer: "You get lifetime access to all content and future updates. As AI evolves, your curriculum evolves with it."
      },
      {
        id: "refund-policy",
        question: "What's your refund policy?",
        answer: "We offer a 7-day money-back guarantee. If you're not satisfied for any reason, email us for a full refund."
      }
    ],
    contactEmail: "r@rayamjad.com",
    contactMessage: "Still have questions? Email us at"
  },

  comparison: {
    left: {
      title: "Learning on Your Own",
      problems: [
        "Scattered tutorials with no clear path",
        "Outdated content as AI evolves rapidly",
        "No guidance on what actually works",
        "Months of trial and error",
        "No feedback or community support"
      ]
    },
    right: {
      title: "AI Startup School",
      benefits: [
        "Structured curriculum from idea to launch",
        "Always updated with latest AI tools",
        "Battle-tested strategies that work",
        "Fast-track your learning",
        "Community of builders"
      ]
    }
  },

  contents: {
    heading: "Your Path to Building AI Products",
    subheading: "A complete curriculum for aspiring AI entrepreneurs",
    modules: [
      {
        title: "Foundation",
        description: "Understanding the AI landscape",
        emoji: "🎯",
        duration: "2h",
        topics: [
          "The AI Product Opportunity",
          "Finding Profitable Ideas",
          "Validating Before Building",
          "Understanding AI Capabilities",
          "Choosing Your Tech Stack"
        ],
        groupWithNext: true
      },
      {
        title: "Building",
        description: "From prototype to product",
        emoji: "🔨",
        duration: "4h",
        topics: [
          "Rapid Prototyping with AI",
          "Building with Claude Code",
          "Creating Great UX",
          "Integrating AI APIs",
          "Testing & Iteration"
        ]
      },
      {
        title: "Launching",
        description: "Getting your first users",
        emoji: "🚀",
        duration: "3h",
        topics: [
          "Pre-Launch Strategy",
          "Landing Page That Converts",
          "Launch Day Playbook",
          "Getting First Customers",
          "Pricing Strategies",
          "Growth Tactics"
        ]
      }
    ]
  },

  pricing: {
    price: 99,
    ctaText: "Join AI Startup School"
  }
};

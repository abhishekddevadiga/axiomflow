import type { Metadata, Viewport } from 'next';
import './globals.css';

const SITE = 'https://axiomflow.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "AxiomFlow \u2014 Business outcomes, built intelligently.",
  description: "Websites, applications, and search visibility strategically designed to produce real revenue and growth. Not just more digital stuff.",
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'AxiomFlow',
    url: '/',
    title: "AxiomFlow \u2014 Business outcomes, built intelligently.",
    description: "Websites, applications, and search visibility strategically designed to produce real revenue and growth. Not just more digital stuff.",
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AxiomFlow \u2014 Business outcomes, built intelligently.",
    description: "Websites, applications, and search visibility designed to produce revenue, not just traffic.",
    images: ['/og.jpg'],
  },
  icons: { icon: "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2064%2064%27%3E%3Crect%20width%3D%2764%27%20height%3D%2764%27%20rx%3D%2714%27%20fill%3D%27%2317130F%27%2F%3E%3Ctext%20x%3D%2732%27%20y%3D%2744%27%20font-family%3D%27Helvetica%2CArial%2Csans-serif%27%20font-size%3D%2736%27%20font-weight%3D%27700%27%20fill%3D%27%23EE6234%27%20text-anchor%3D%27middle%27%3EA%3C%2Ftext%3E%3C%2Fsvg%3E" },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#17130F',
  colorScheme: 'light',
};

/* Emitted server-side so crawlers and AI engines see it in the initial HTML. */
const jsonLd = {"@context":"https://schema.org","@graph":[
 {"@type":"Organization","@id":"https://axiomflow.com/#org","name":"AxiomFlow",
  "legalName":"AxiomFlow","url":"https://axiomflow.com/",
  "description":"Strategy, technology and growth agency building websites, applications and search visibility that produce revenue.",
  "address":{"@type":"PostalAddress","addressLocality":"Mangalore","addressRegion":"Karnataka","addressCountry":"IN"},
  "areaServed":"Worldwide",
  "knowsAbout":["Search engine optimisation","Generative engine optimisation","Answer engine optimisation","Conversion rate optimisation","Web development","Application development"]},
 {"@type":"WebSite","@id":"https://axiomflow.com/#site","url":"https://axiomflow.com/","name":"AxiomFlow","publisher":{"@id":"https://axiomflow.com/#org"}},
 {"@type":"FAQPage","@id":"https://axiomflow.com/#faq","mainEntity":[
  {"@type":"Question","name":"Who will be working on my account?","acceptedAnswer":{"@type":"Answer","text":"You'll have a dedicated team led by a senior growth strategist. This is your core crew from kickoff onward."}},
  {"@type":"Question","name":"We already have a website. Can you work with that?","acceptedAnswer":{"@type":"Answer","text":"Yes. Our first step is always to audit your current site and tech stack to identify quick wins before proposing any rebuild."}},
  {"@type":"Question","name":"Do you work with clients outside of India?","acceptedAnswer":{"@type":"Answer","text":"Yes. We're set up for remote collaboration, with tools and processes that keep communication clear across time zones."}},
  {"@type":"Question","name":"How do you measure success?","acceptedAnswer":{"@type":"Answer","text":"The same way you do: revenue and growth. We tie every metric we track back to business outcomes rather than vanity numbers."}}
 ]}
]};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="js">
      <head>
        {/* Matches the source exactly. Swap to next/font/google when building
            with network access if you want the fonts self-hosted. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

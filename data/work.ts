/** Add, remove or reorder a project by editing this list. The card component
 *  renders whatever is here, so no JSX changes are needed.
 *
 *  `image` names a still declared in globals.css as `.px-<image>`.
 *  `outcomeVerified: false` renders the outcome as a dashed placeholder, so an
 *  unmeasured result can never read as a claim. */
export interface WorkRow {
  label: string;
  value: string;
}

export interface Project {
  name: string;
  sector: string;
  line: string;
  image: string;
  alt: string;
  /** Grid width on desktop. Omit for the default six columns. */
  span?: 'w5' | 'w7';
  /** Reveal delay utility, e.g. 'rv-d1'. */
  delay?: string;
  rows: WorkRow[];
  tags: string[];
  outcome: string;
  outcomeVerified: boolean;
  /** Internal note surfaced as an HTML comment in the markup. */
  note?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "SiteSync",
    sector: "Our own SaaS",
    line: "A map-based construction project management platform we design, build, sell and run ourselves.",
    image: "t2",
    alt: "Content work, thumbnail",
    span: "w7",
    delay: undefined,
    rows: [
      { label: "Challenge", value: "Site progress lives in WhatsApp and paper, invisible to the people funding the work." },
      { label: "We did", value: "Map-first product, marketing site, sales deck and onboarding — the full acquisition system." },
    ],
    tags: ["Product design", "Web app", "Marketing site", "GTM"],
    outcome: "First paying client onboarded within weeks of launch.",
    outcomeVerified: true,
    note: "stand-in from the studio library. Swap for a still from the actual SiteSync work.",
  },
  {
    name: "Blush With Me",
    sector: "Creator education",
    line: "Technical SEO, AI-search visibility and learning-platform architecture for a global face-yoga brand.",
    image: "f3",
    alt: "Content work, feed post",
    span: "w5",
    delay: "rv-d1",
    rows: [
      { label: "Challenge", value: "A Wix site capping growth, with course content split away from the brand domain." },
      { label: "We did", value: "Migration to a custom stack, LMS at a subdirectory, and an entity-led GEO strategy." },
    ],
    tags: ["Technical SEO", "GEO", "LMS architecture", "Migration"],
    outcome: "Add verified outcome once measured",
    outcomeVerified: false,
    note: "stand-in from the studio library. Swap for a still from the actual Blush With Me work.",
  },
  {
    name: "Alleviate",
    sector: "Healthcare",
    line: "Search strategy and conversion pages for a five-branch pain management clinic in Bangalore.",
    image: "f1",
    alt: "Content work, feed post",
    span: "w5",
    delay: undefined,
    rows: [
      { label: "Challenge", value: "Five locations competing for the same local searches, with no clear path from click to booking." },
      { label: "We did", value: "Local citation setup, developer-ready technical punch list, and landing pages per branch." },
    ],
    tags: ["Local SEO", "Landing pages", "GA4 + RankMath"],
    outcome: "Add verified outcome once measured",
    outcomeVerified: false,
    note: "stand-in from the studio library. Swap for a still from the actual Alleviate work.",
  },
  {
    name: "Content production dashboard",
    sector: "Agency partner",
    line: "A single-file pipeline tool taking a fashion content team from signals through to a published calendar.",
    image: "f2",
    alt: "Content work, campaign",
    span: "w7",
    delay: "rv-d1",
    rows: [
      { label: "Challenge", value: "A large content operation with no shared view of what was in flight or who decided what." },
      { label: "We did", value: "Signals to calendar pipeline, three-tier roles, and strict human-decides governance throughout." },
    ],
    tags: ["Product design", "Internal tooling", "Workflow design"],
    outcome: "Add verified outcome once measured",
    outcomeVerified: false,
    note: "stand-in from the studio library. Swap for a still from the actual Content production dashboard work.",
  },
  {
    name: "Abhishek Devadiga",
    sector: "Personal brand",
    line: "A personal brand site and secure client portal with an encrypted credential vault.",
    image: "t1",
    alt: "Content work, thumbnail",
    span: undefined,
    delay: undefined,
    rows: [
      { label: "Challenge", value: "Client credentials scattered across chats and inboxes, with no single professional front door." },
      { label: "We did", value: "Next.js site, Apple-inspired dark UI, and an AES-256-GCM vault behind a private portal." },
    ],
    tags: ["Web development", "Portal", "Security"],
    outcome: "Add verified outcome once measured",
    outcomeVerified: false,
    note: "stand-in from the studio library. Swap for a still from the actual Abhishek Devadiga work.",
  },
  {
    name: "Quantum Greentech",
    sector: "Cleantech",
    line: "An investor pitch deck for a battery storage and solar manufacturing raise.",
    image: "t3",
    alt: "Content work, thumbnail",
    span: undefined,
    delay: "rv-d1",
    rows: [
      { label: "Challenge", value: "A complex industrial story that had to hold attention in an investor room." },
      { label: "We did", value: "Three aesthetic directions explored, then a single industrial system built out end to end." },
    ],
    tags: ["Investor deck", "Narrative", "Design system"],
    outcome: "Add verified outcome once measured",
    outcomeVerified: false,
    note: "stand-in from the studio library. Swap for a still from the actual Quantum Greentech work.",
  },
];

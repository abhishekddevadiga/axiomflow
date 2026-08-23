/** The wall renders each column twice; the duplicate is the loop's tail.
 *  Because the halves are identical, translateY(-50%) lands exactly on one set
 *  and the loop is seamless. Columns 3 and 4 mirror 1 and 2, so a repeated
 *  image is never in an adjacent column. */
export interface WallItem {
  /** Native aspect ratio, e.g. '460/575'. Keeps stills uncropped. */
  ratio: string;
  /** Still declared in globals.css as `.px-<img>`. */
  img: string;
  alt: string;
  caption: string;
}

export interface WallColumn {
  /** Scroll duration; alternate columns run in opposite directions. */
  duration: string;
  items: WallItem[];
}

export const WALL: WallColumn[] = [
  {
    duration: "58s",
    items: [
      { ratio: "460/575", img: "f1", alt: "Feed post, clinic growth campaign", caption: "Feed post" },
      { ratio: "560/315", img: "t2", alt: "YouTube thumbnail, sales channel", caption: "Thumbnail" },
      { ratio: "400/711", img: "r2", alt: "Reel cover, dental explainer", caption: "Explainer" },
      { ratio: "460/575", img: "f4", alt: "Carousel cover, business explainer", caption: "Carousel" },
      { ratio: "560/354", img: "t1", alt: "YouTube thumbnail, founder explainer", caption: "Thumbnail" },
    ],
  },
  {
    duration: "72s",
    items: [
      { ratio: "400/711", img: "r1", alt: "Reel cover series", caption: "Reel cover" },
      { ratio: "460/575", img: "f2", alt: "Feed post, agency campaign", caption: "Campaign" },
      { ratio: "560/315", img: "t3", alt: "YouTube thumbnail, videography series", caption: "Thumbnail" },
      { ratio: "400/800", img: "r4", alt: "Course cover, membership area", caption: "Course" },
      { ratio: "460/575", img: "f3", alt: "Feed post, student result", caption: "Feed post" },
    ],
  },
  {
    duration: "64s",
    items: [
      { ratio: "400/711", img: "r3", alt: "Reel cover, tutorial series", caption: "Tutorial" },
      { ratio: "560/354", img: "t1", alt: "YouTube thumbnail, founder explainer", caption: "Thumbnail" },
      { ratio: "460/575", img: "f4", alt: "Carousel cover, business explainer", caption: "Carousel" },
      { ratio: "400/711", img: "r2", alt: "Reel cover, dental explainer", caption: "Explainer" },
      { ratio: "560/315", img: "t2", alt: "YouTube thumbnail, sales channel", caption: "Thumbnail" },
    ],
  },
  {
    duration: "80s",
    items: [
      { ratio: "460/575", img: "f3", alt: "Feed post, student result", caption: "Feed post" },
      { ratio: "400/800", img: "r4", alt: "Course cover, membership area", caption: "Course" },
      { ratio: "560/315", img: "t3", alt: "YouTube thumbnail, videography series", caption: "Thumbnail" },
      { ratio: "460/575", img: "f2", alt: "Feed post, agency campaign", caption: "Campaign" },
      { ratio: "400/711", img: "r1", alt: "Reel cover series", caption: "Reel cover" },
    ],
  },
];

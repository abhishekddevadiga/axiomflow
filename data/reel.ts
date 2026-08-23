/** Add a video by appending one entry. `src` enables silent hover preview and
 *  lightbox playback; `cls` points at a still declared in globals.css. */
export interface ReelItem {
  title: string;
  tag: string;
  /** CSS class suffix for the still, e.g. 'r1' -> .px-r1 */
  cls?: string;
  /** Optional poster image URL, used when no `cls` is given. */
  poster?: string;
  /** Optional mp4 for hover preview and lightbox playback. */
  src?: string;
}

export const REEL: ReelItem[] = [
  { title: 'Reel cover series', tag: 'Reel cover', cls: 'r1' },
  { title: 'Dental explainer, patient Q', tag: 'Explainer', cls: 'r2' },
  { title: 'Tutorial series cover', tag: 'Tutorial', cls: 'r3' },
  { title: 'Course launch, membership', tag: 'Course', cls: 'r4' },
];

import brandJson from '@/brand.json';

export interface DesignSpec {
  hero_style?:      string;
  services_style?:  string;
  gallery_style?:   string | null;
  cta_style?:       string;
  nav_style?:       string;
  mood?:            string;
  colour_scheme?:   string;
  heading_style?:   string;
  visual_weight?:   string;
  uses_animation?:  boolean;
  uses_gradient?:   boolean;
  home_sections?:   { component: string; purpose?: string }[];
}

export interface BrandConfig {
  primary?:     string;
  secondary?:   string;
  accent?:      string;
  accentHover?: string;
  background?:  string;
  surface?:     string;
  border?:      string;
  muted?:       string;
  text?:        string;
  textMuted?:   string;
  tagline?:     string;
  design?:      DesignSpec;
  [key: string]: unknown;
}

export const brand = brandJson as unknown as BrandConfig;

export function getBrand(): BrandConfig { return brand; }
export function getCSSVariables(): string {
  const d = brand;
  return `:root {
  --color-primary:     ${d.primary     || '#0A0A0A'};
  --color-secondary:   ${d.secondary   || '#111111'};
  --color-accent:      ${d.accent      || '#6366F1'};
  --color-accent-hover:${d.accentHover || d.accent || '#4F46E5'};
  --color-background:  ${d.background  || '#0A0A0A'};
  --color-surface:     ${d.surface     || '#111111'};
  --color-border:      ${d.border      || 'rgba(255,255,255,0.08)'};
  --color-muted:       ${d.muted       || '#6B7280'};
  --color-text:        ${d.text        || '#F9FAFB'};
  --color-text-muted:  ${d.textMuted   || 'rgba(249,250,251,0.55)'};
}`;
}

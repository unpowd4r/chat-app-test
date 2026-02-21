const BREAKPOINTS = {
  TABLET: 785
} as const;

export const MEDIA_QUERIES = {
  TABLET: `(max-width: ${BREAKPOINTS.TABLET}px)`
} as const;

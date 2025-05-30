import { TypographyVariants } from '@mui/material';
import { Figtree } from 'next/font/google';

//Font family
const figtree = Figtree({ subsets: ['latin-ext'] });

const typography: Partial<TypographyVariants> = {
  body1: undefined,
  body2: undefined,
  bodyMdRegular: {
    fontFamily: figtree.style.fontFamily,
    fontSize: '1rem',
    fontWeight: 300,
    letterSpacing: '0.01rem',
    lineHeight: '1.5rem',
  },
  bodyMdSemiBold: {
    fontFamily: figtree.style.fontFamily,
    fontSize: '1rem',
    fontWeight: 500,
    letterSpacing: '0.01rem',
    lineHeight: '1.5rem',
  },
  bodySmRegular: {
    fontFamily: figtree.style.fontFamily,
    fontSize: '0.875rem',
    fontWeight: 300,
    letterSpacing: '0.01rem',
    lineHeight: '1.313rem',
  },
  bodySmSemiBold: {
    fontFamily: figtree.style.fontFamily,
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.01rem',
    lineHeight: '1.313rem',
  },
  button: {
    fontWeight: 600,
    textTransform: 'none',
  },
  caption: undefined,
  fontFamily: figtree.style.fontFamily,
  fontSize: 16,
  h1: undefined,
  h2: undefined,
  h3: undefined,
  h4: undefined,
  h5: undefined,
  h6: undefined,
  headingLg: {
    fontFamily: figtree.style.fontFamily,
    fontSize: '1.375rem',
    fontWeight: 400,
    letterSpacing: '-0.005rem',
    lineHeight: '1.788rem',
  },
  headingMd: {
    fontFamily: figtree.style.fontFamily,
    fontSize: '1.125rem',
    fontWeight: 400,
    letterSpacing: '-0.005rem',
    lineHeight: '1.463rem',
  },
  headingSm: {
    fontFamily: figtree.style.fontFamily,
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '-0.005rem',
    lineHeight: '1.3rem',
  },
  labelLgMedium: {
    fontFamily: figtree.style.fontFamily,
    fontSize: '0.938rem',
    fontWeight: 400,
    letterSpacing: '0.03rem',
    lineHeight: '1.406rem',
  },
  labelLgSemiBold: {
    fontFamily: figtree.style.fontFamily,
    fontSize: '0.938rem',
    fontWeight: 500,
    letterSpacing: '0.03rem',
    lineHeight: '1.406rem',
  },
  labelMdMedium: {
    fontFamily: figtree.style.fontFamily,
    fontSize: '0.875rem',
    fontWeight: 400,
    letterSpacing: '0.03rem',
    lineHeight: '1.313rem',
  },
  labelMdRegular: {
    fontFamily: figtree.style.fontFamily,
    fontSize: '0.875rem',
    fontWeight: 300,
    letterSpacing: '0.03rem',
    lineHeight: '1.313rem',
  },
  labelMdSemiBold: {
    fontFamily: figtree.style.fontFamily,
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.03rem',
    lineHeight: '1.313rem',
  },
  labelSmMedium: {
    fontFamily: figtree.style.fontFamily,
    fontSize: '0.813rem',
    fontWeight: 400,
    letterSpacing: '0.03rem',
    lineHeight: '1.219rem',
  },
  labelSmSemiBold: {
    fontFamily: figtree.style.fontFamily,
    fontSize: '0.813rem',
    fontWeight: 500,
    letterSpacing: '0.03rem',
    lineHeight: '1.219rem',
  },
  labelXlMedium: {
    fontFamily: figtree.style.fontFamily,
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '0.03rem',
    lineHeight: '1.5rem',
  },
  linkMd: {
    fontFamily: figtree.style.fontFamily,
    fontSize: '1rem',
    fontWeight: 300,
    lineHeight: '1.5rem',
  },
  linkSm: {
    fontFamily: figtree.style.fontFamily,
    fontSize: '0.875rem',
    fontWeight: 300,
    lineHeight: '1.313rem',
  },
  overline: undefined,
  subtitle1: undefined,
  subtitle2: undefined,
};

export default typography;

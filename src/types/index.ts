import { Url } from 'url';

export interface IRandomQuote {
  text?: string;
  author?: string;
}

export interface ILinkItemProps {
  href: Url | string;
  path?: any;
  target?: any;
  children?: React.ReactNode;
  display?: any;
  alignItems?: any;
  style?: any;
  pl?: any;
}

export interface IGridItemProps {
  children?: React.ReactNode;
  href?: any;
  title?: any;
  thumbnail?: any;
  id?: any;
}

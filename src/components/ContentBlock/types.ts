import { ImgHTMLAttributes } from "react";
import { TFunction } from "react-i18next";

interface ImageItem {
  src: string;
}

export interface ContentBlockProps {
  icon: string;
  title?: string;
  subtitle?: string;
  link?: string;
  content: string;
  image?: ImageItem[];
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}

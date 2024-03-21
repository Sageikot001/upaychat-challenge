export interface ImageItem {
  src: string;
}

export interface UseBlockProps {
  title: string;
  content: {
    title: string;
    content: string;
    image?: string; // Make image optional if it's not always provided
  }[];
  image?: string; // Make image optional at the component level
}

  
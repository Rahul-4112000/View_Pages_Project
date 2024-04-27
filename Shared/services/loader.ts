import { ImageLoaderProps } from 'next/image';

export const staticImageLoader = ({ src }: ImageLoaderProps): string => {
  return src;
};

export const dynamicImageLoader = ({ src }: ImageLoaderProps): string => {
  return src;
};

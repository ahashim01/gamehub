import noImage from "../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp";

const optimizedImage = (url: string) => {
  if (!url) return noImage;
  const newUrl = url.replace("/media/", "/media/crop/600/400/");
  return newUrl;
};

export default optimizedImage;

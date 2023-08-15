const optimizedImage = (url: string) => {
  const newUrl = url.replace("/media/", "/media/crop/600/400/");
  return newUrl;
};

export default optimizedImage;

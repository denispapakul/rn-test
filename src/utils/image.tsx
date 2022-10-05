export const getImage = (size: number, lock?: string) => {
  let image = `https://loremflickr.com/${size}/${size}/food`;

  if (lock) {
    image += `?lock=${lock}`;
  }

  return image;
};

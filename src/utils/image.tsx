export const getImage = (lock?: string, size: number = 60) => {
  const intSize = size.toFixed(0);
  const image = `https://loremflickr.com/${intSize}/${intSize}/food${
    lock ? `?lock=${lock}` : ''
  }`;

  return image;
};

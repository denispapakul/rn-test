export const getImage = (lock?: string, size: number = 400) => {
  const image = `https://loremflickr.com/${size}/${size}/food${
    lock ? `?lock=${lock}` : ''
  }`;

  return image;
};

export const getImage = (lock?: string, size: number = 400) => {
  let image = `https://loremflickr.com/${size}/${size}/food${
    lock ? '?lock=${lock}' : ''
  }`;

  return image;
};

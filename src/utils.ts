import { WEB_FONTS } from './strings';

export const getRotationDegrees = (
  prizeNumber: number,
  numberOfPrizes: number,
): number => {
  const degreesPerPrize = 360 / numberOfPrizes;

  const initialRotation = 43 + degreesPerPrize / 2;

  const perfectRotation =
    degreesPerPrize * (numberOfPrizes - prizeNumber) - initialRotation;

  const prizeRotation = perfectRotation;

  return numberOfPrizes - prizeNumber > numberOfPrizes / 2
    ? -360 + prizeRotation
    : prizeRotation;
};

export const clamp = (min: number, max: number, val: number): number =>
  Math.min(Math.max(min, +val), max);

export const isCustomFont = (font: string): boolean =>
  !!font && !WEB_FONTS.includes(font.toLowerCase());

export const getQuantity = (prizeMap: number[][]): number =>
  prizeMap.slice(-1)[0].slice(-1)[0] + 1;

const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const makeClassKey = (length: number): string => {
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

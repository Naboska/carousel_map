import { MAP_SIZE } from 'constants';

export const fromYToLat = (y: number) => {
  return (y * 256) / MAP_SIZE;
};

export const fromXToLng = (x: number) => {
  return (x / MAP_SIZE) * 256 - 256;
};

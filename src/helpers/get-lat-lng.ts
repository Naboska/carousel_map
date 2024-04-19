import { LatLngExpression } from 'leaflet';

export const getLatLng = (coords: number[]): LatLngExpression => {
  return {
    lat: coords[0],
    lng: coords[1],
    alt: coords[2],
  };
};

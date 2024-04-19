import { MAP_SIZE } from 'constants';

import { useMap } from 'react-leaflet';
import { useEffect } from 'react';
import { LeafletMouseEvent } from 'leaflet';

export const Position = () => {
  const map = useMap();

  useEffect(() => {
    const event = (event: LeafletMouseEvent) => {
      const lng = event.latlng.lng;
      const lat = event.latlng.lat;
      const i = Math.floor((lng / 2.56 / 100) * (MAP_SIZE / 100)) / 100;
      const s = Math.floor((-lat / 2.56 / 100) * (MAP_SIZE / 100)) / 100;
      const x = (lng * MAP_SIZE) / 256;
      const y = ((256 + lat) * MAP_SIZE) / 256;
      console.log({ i, s, x, y });
    };

    map.addEventListener('mousemove', event);

    return () => {
      map.removeEventListener('mousemove', event);
    };
  }, [map]);

  return <></>;
};

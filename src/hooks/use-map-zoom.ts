import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';

export const useMapZoom = () => {
  const map = useMap();
  const [zoom, setZoom] = useState(map.getZoom());

  useEffect(() => {
    const zoomFn = () => setZoom(map.getZoom());

    map.addEventListener('zoom', zoomFn);

    return () => {
      map.removeEventListener('zoom', zoomFn);
    };
  }, [map]);

  return zoom;
};

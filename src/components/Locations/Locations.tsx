import { Marker, Polygon } from 'react-leaflet';
import * as L from 'leaflet';
import { useMemo } from 'react';

import { useMapZoom } from 'hooks/use-map-zoom';

import { getLatLng } from '../../helpers';

import { locations } from './constants';

export const Locations = () => {
  const zoom = useMapZoom();

  const visibleLocations = useMemo(() => {
    return locations.filter(location => {
      if (zoom <= 2) return ['capital', 'city'].includes(location.type);
      if (zoom <= 3) return ['capital', 'city', 'village'].includes(location.type);

      return ['capital', 'city', 'village', 'local'].includes(location.type);
    });
  }, [zoom]);

  return (
    <>
      {visibleLocations.map((location, index) => {
        return (
          <Polygon key={index} positions={[getLatLng(location.latLng)]}>
            <Marker
              position={L.polygon([getLatLng(location.latLng)])
                .getBounds()
                .getCenter()}
              icon={L.divIcon({
                className: 'dayz-location',
                html: `<p data-type="${location.type}">${location.title}</p>`,
              })}
            />
          </Polygon>
        );
      })}
    </>
  );
};

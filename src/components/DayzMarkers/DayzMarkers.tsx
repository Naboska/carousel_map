import { Marker, Polygon } from 'react-leaflet';
import * as L from 'leaflet';

import { fromXToLng, fromYToLat, getLatLng } from '../../helpers';

import { markers } from './constants';

export const DayzMarkers = () => {
  return (
    <>
      {[...markers.M_MARKER_CACHE_ARRAY, ...markers.customServerMarkers[0]!.serverMarkers].map(
        ({ M_POSITION, M_MARKER_NAME, M_COLOR }, index) => {
          const lng = fromYToLat(M_POSITION[0]);
          const lat = fromXToLng(M_POSITION[2]);

          return (
            <Polygon key={index} positions={[getLatLng([lat, lng])]}>
              <Marker
                position={L.polygon([getLatLng([lat, lng])])
                  .getBounds()
                  .getCenter()}
                icon={L.divIcon({
                  className: 'dayz-marker',
                  html: `<p  style="color: rgb(${M_COLOR.join(',')})">${M_MARKER_NAME}</p>`,
                })}
              />
            </Polygon>
          );
        }
      )}
    </>
  );
};

import { Polygon, useMap } from 'react-leaflet';
// import { useEffect } from 'react';
import '@bopen/leaflet-area-selection/dist/index.css';
// import { DrawAreaSelection } from '@bopen/leaflet-area-selection';
// import { geoJSON } from 'leaflet';

import { BLUE_ZONE, RED_ZONE } from './constants';

export const DayzZones = () => {
  useMap();

  // useEffect(() => {
  //   const areaSelection = new DrawAreaSelection({
  //     onPolygonReady: polygon => {
  //       console.log(JSON.stringify(polygon.toGeoJSON(3), undefined, 2));
  //     },
  //     onPolygonDblClick: (polygon, control, ev) => {
  //       const geojson = geoJSON(polygon.toGeoJSON(), {
  //         style: {
  //           opacity: 0.5,
  //           fillOpacity: 0.2,
  //           color: 'red',
  //         },
  //       });
  //       geojson.addTo(map);
  //       control.deactivate();
  //     },
  //     onButtonActivate: () => {},
  //     onButtonDeactivate: polygon => {
  //       console.log(JSON.stringify(polygon.toGeoJSON(3)));
  //     },
  //     position: 'topleft',
  //   });
  //   map.addControl(areaSelection);
  //
  //   const brect = map.getContainer().getBoundingClientRect();
  //
  //   for (const zone of BLUE_ZONE) {
  //     const point = map.latLngToContainerPoint(zone);
  //     map.fire(
  //       'as:point-add',
  //       new MouseEvent('click', {
  //         clientX: point.x + brect.left,
  //         clientY: point.y + +brect.top,
  //       })
  //     );
  //   }
  //
  //   return () => {
  //     map.removeControl(areaSelection);
  //   };
  // }, []);

  return (
    <>
      <Polygon className="dayz-carousel-zone dayz-carousel-zone__red" positions={RED_ZONE} />
      <Polygon className="dayz-carousel-zone dayz-carousel-zone__blue" positions={BLUE_ZONE} />
    </>
  );
};

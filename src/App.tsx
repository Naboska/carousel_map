import { MapContainer, TileLayer } from 'react-leaflet';
import * as L from 'leaflet';

import { DayzMarkers, DayzZones, Locations, Position } from './components';

export const App = () => {
  return (
    <MapContainer center={[-120, 125]} zoom={3} maxZoom={7} crs={L.CRS.Simple}>
      <TileLayer
        url="https://static.xam.nu/dayz/maps/chernarusplus/1.23/satellite/{z}/{x}/{y}.webp"
        attribution={`
            <a class="leaflet-control-attribution__carousel" href="https://dayz.geeklog.in" target="_blank">
                <img src="icon.ico" width="16" height="16" alt="Карусель" />
                <span>Карусель</span>
            </a>
            <a class="leaflet-control-attribution__xam-nu" href="https://xam.nu" target="_blank">xam.nu</span>
        `}
        noWrap
      />
      <DayzZones />
      <Locations />
      <Position />
      <DayzMarkers />
    </MapContainer>
  );
};

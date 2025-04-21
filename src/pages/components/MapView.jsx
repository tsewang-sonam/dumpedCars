import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default function MapView({ lat, lng }) {
  return (
    <MapContainer center={[lat, lng]} zoom={19}  style={{ height: '100%', width: '100%' }}>
      <LayersControl position="topright">
        
        <LayersControl.BaseLayer name="Carto Light (Minimal)">
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>
      </LayersControl>

      <Marker position={[lat, lng]}>
        <Popup>
          You Are Here: {lat}, {lng}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './Map.css';
import 'leaflet/dist/leaflet.css';
import Pin from './pin/Pin';

function Map({ items }) {
  // Ensure items is an array before using map function
  if (!Array.isArray(items)) {
    return <div>No items to display</div>;
  }

  return (
    <MapContainer center={[52.4797, -1.90269]} zoom={13} scrollWheelZoom={false} className="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/#map=4/21.82/71.81">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Map over items array to render Pin components */}
      {items.map((item) => (
        <Pin key={item.id} item={item} />
      ))}
    </MapContainer>
  );
}

export default Map;

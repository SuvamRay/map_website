import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const Map = () => {
  return (
    <div className='map-main'>
        <div className="map-container">
        <MapContainer center={[0, 0]} zoom={2}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
        </div>
    </div>
  );
};

export default Map;

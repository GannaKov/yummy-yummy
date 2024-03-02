/* eslint-disable react/prop-types */
import "leaflet/dist/leaflet.css";

import { MapContainer, Popup, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet/Marker";
import styles from "./Map.module.css";

const Map = () => {
  return (
    <div className={styles.container}>
      <MapContainer
        center={[41.902782, 12.496366]}
        zoom={9}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "400px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[41.902782, 12.496366]}>
          <Popup>
            Hello <br /> We are hier
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

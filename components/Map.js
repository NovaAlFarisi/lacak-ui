import { MapContainer, TileLayer,Marker,Popup, ZoomControl} from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {
  return (
    <MapContainer center={[40.8054,-74.0241]} zoom={14} scrollWheelZoom={true} zoomControl={false} className="w-screen z-0 h-screen">
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <ZoomControl position="bottomright"/>
        <Marker 
        position={[40.8054,-74.0241]}
        draggable={true}
        animate={true}
        >
        <Popup>
            Hey ! you found me
        </Popup>
        </Marker>
    </MapContainer>
  )
}

export default Map
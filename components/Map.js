import { MapContainer, TileLayer,Marker,Popup, ZoomControl} from 'react-leaflet';
import ReactDOMServer from 'react-dom/server';
import Leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import {PositionContext} from '../store/positionStore'
import { useContext } from 'react';
const Map = () => {
  const icon = ReactDOMServer.renderToString(
    <svg className="h-10 w-10 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path fill="#000" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  )

  const customMarkerIcon = new Leaflet.DivIcon({
    html:icon,
  });

  const position = useContext(PositionContext);

  return (
    <MapContainer center={[-6.1768033,106.822383]} zoom={15} scrollWheelZoom={true} zoomControl={false} className="w-screen z-0 h-screen">
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <ZoomControl position="bottomright"/>
        {position ? (
          position.data.map((val,i)=>(
            <Marker
            icon={customMarkerIcon} 
            position={[val.location.lat,val.location.lng]}
            draggable={false}
            animate={true}
            >
              <Popup>
                  <div key={i} className="text-center">
                    <p>{val.name}</p>
                    <small>{val.serial}</small>
                  </div>
              </Popup>
            </Marker>
          ))
        ) : ''}
    </MapContainer>
  )
}

export default Map
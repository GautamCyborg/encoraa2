import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Create custom icons for verified and unverified trees
const verifiedIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/609/609845.png", // URL to your verified icon
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const unverifiedIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/609/609844.png", // URL to your unverified icon
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const TreeMap = () => {
  const data = {
    trees: [
      {
        lat: 21.9287902,
        lng: 85.6404122,
        name: "Guava tree 6",
        verified: true,
        _id: "64a13d68a57b640e1bd6fc60",
      },
      {
        lat: 21.929,
        lng: 85.6405,
        name: "Mango tree 1",
        verified: false,
        _id: "64a13d68a57b640e1bd6fc61",
      },
      {
        lat: 21.93,
        lng: 85.641,
        name: "Banyan tree 2",
        verified: true,
        _id: "64a13d68a57b640e1bd6fc62",
      },
      {
        lat: 21.931,
        lng: 85.6415,
        name: "Neem tree 3",
        verified: false,
        _id: "64a13d68a57b640e1bd6fc63",
      },
      {
        lat: 21.932,
        lng: 85.642,
        name: "Peepal tree 4",
        verified: true,
        _id: "64a13d68a57b640e1bd6fc64",
      },
      {
        lat: 21.932,
        lng: 85.642,
        name: "Peepal tree 4",
        verified: true,
        _id: "64a13d68a57b640e1bd6fc64",
      },
      {
        _id: "649aa83fe71dceed0c38eeb0",
        name: "Arecanut ",
        lng: 75.484901,
        lat: 13.1903572,
        verified: true,
      },
      {
        _id: "64afadefce3cdbb03b6c6306",
        name: "Mohagani ",
        verified: true,
        lng: 80.1866347,
        lat: 23.4877957,
      },
      {
        _id: "k2UxUhGhhDR0ktyDgoVw",
        lat: 14.3714744,
        lng: 77.6928002,
        name: "Starfruit ",
        verified: true,
      },
      {
        _id: "64afcb7f570a53cd4f14bde0",
        name: "Pine Tree ",
        verified: true,
        lng: 88.5167435,
        lat: 27.0748348,
      },
      {
        _id: "649aafe1e71dceed0c38eed0",
        name: "Arecanut ",
        lng: 75.479955,
        lat: 13.19611,
        verified: true,
      },
      {
        _id: "64b09e3cae7249d52cbca83e",
        name: "नीम ",
        verified: true,
        lng: 79.8939055,
        lat: 22.8237583,
      },
      {
        _id: "BvcBdCMEibHGAzyMqveJ",
        lat: 15.35135135135135,
        lng: 78.96144631782272,
        name: "Bilvam ",
        verified: true,
      },
    ],
  };

  const position = [21.9287902, 85.6404122]; // Center position for the map

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerClusterGroup>
        {data.trees.map((tree) => (
          <Marker
            key={tree._id}
            position={[tree.lat, tree.lng]}
            icon={tree.verified ? verifiedIcon : unverifiedIcon}
          >
            <Popup>
              <b>{tree.name}</b>
              <br />
              Verified: {tree.verified ? "Yes" : "No"}
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default TreeMap;

import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Create custom icons for verified and unverified trees
const verifiedIcon = new L.Icon({
  iconUrl: "/images/icon/leaf.png", // URL to your verified icon
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const unverifiedIcon = new L.Icon({
  iconUrl: "/images/icon/leaf.png", // URL to your unverified icon
  iconSize: [40, 40],
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
        image: "/images/Tree-images/peepal.jpg",
        uploadedBy: "User1",
        uploadedOn: "2024-06-01T10:00:00Z",
        location: "Address 1"
      },
      {
        lat: 21.929,
        lng: 85.6405,
        name: "Mango tree 1",
        verified: false,
        _id: "64a13d68a57b640e1bd6fc61",
        image: "/images/Tree-images/Neem.jpeg",
        uploadedBy: "User2",
        uploadedOn: "2024-06-02T11:00:00Z",
        location: "Address 2"
      },
      {
        lat: 21.93,
        lng: 85.641,
        name: "Banyan tree 2",
        verified: true,
        _id: "64a13d68a57b640e1bd6fc62",
        image: "/images/Tree-images/peepal.jpg",
        uploadedBy: "User3",
        uploadedOn: "2024-06-03T12:00:00Z",
        location: "Address 3"
      },
      {
        lat: 21.931,
        lng: 85.6415,
        name: "Neem tree 3",
        verified: false,
        _id: "64a13d68a57b640e1bd6fc63",
        image: "/images/Tree-images/mango.jpeg",
        uploadedBy: "User4",
        uploadedOn: "2024-06-04T13:00:00Z",
        location: "Address 4"
      },
      {
        lat: 21.932,
        lng: 85.642,
        name: "Peepal tree 4",
        verified: true,
        _id: "64a13d68a57b640e1bd6fc64",
        image: "/images/Tree-images/Neem.jpeg",
        uploadedBy: "User5",
        uploadedOn: "2024-06-05T14:00:00Z",
        location: "Address 5"
      },
      {
        lat: 21.932,
        lng: 85.642,
        name: "Peepal tree 4",
        verified: true,
        _id: "64a13d68a57b640e1bd6fc64",
        image: "/images/Tree-images/mango.jpeg",
        uploadedBy: "User6",
        uploadedOn: "2024-06-06T15:00:00Z",
        location: "Address 6"
      },
      {
        _id: "649aa83fe71dceed0c38eeb0",
        name: "Arecanut",
        lng: 75.484901,
        lat: 13.1903572,
        verified: true,
        image: "/images/Tree-images/Neem.jpeg",
        uploadedBy: "User7",
        uploadedOn: "2024-06-07T16:00:00Z",
        location: "Address 7"
      },
      {
        _id: "64afadefce3cdbb03b6c6306",
        name: "Mohagani",
        verified: true,
        lng: 80.1866347,
        lat: 23.4877957,
        image: "/images/Tree-images/peepal.jpg",
        uploadedBy: "User8",
        uploadedOn: "2024-06-08T17:00:00Z",
        location: "Address 8"
      },
      {
        _id: "k2UxUhGhhDR0ktyDgoVw",
        lat: 14.3714744,
        lng: 77.6928002,
        name: "Starfruit",
        verified: true,
        image: "/images/Tree-images/Neem.jpeg",
        uploadedBy: "User9",
        uploadedOn: "2024-06-09T18:00:00Z",
        location: "Address 9"
      },
      {
        _id: "64afcb7f570a53cd4f14bde0",
        name: "Pine Tree",
        verified: true,
        lng: 88.5167435,
        lat: 27.0748348,
        image: "/images/Tree-images/mango.jpeg",
        uploadedBy: "User10",
        uploadedOn: "2024-06-10T19:00:00Z",
        location: "Address 10"
      },
      {
        _id: "649aafe1e71dceed0c38eed0",
        name: "Arecanut",
        lng: 75.479955,
        lat: 13.19611,
        verified: true,
        image: "/images/Tree-images/peepal.jpg",
        uploadedBy: "User11",
        uploadedOn: "2024-06-11T20:00:00Z",
        location: "Address 11"
      },
      {
        _id: "64b09e3cae7249d52cbca83e",
        name: "नीम",
        verified: true,
        lng: 79.8939055,
        lat: 22.8237583,
        image: "/images/Tree-images/Neem.jpeg",
        uploadedBy: "User12",
        uploadedOn: "2024-06-12T21:00:00Z",
        location: "Address 12"
      },
      {
        _id: "BvcBdCMEibHGAzyMqveJ",
        lat: 15.35135135135135,
        lng: 78.96144631782272,
        name: "Bilvam",
        verified: true,
        image: "/images/Tree-images/mango.jpeg",
        uploadedBy: "User13",
        uploadedOn: "2024-06-13T22:00:00Z",
        location: "Address 13"
      },
    ],
  };
  
  
  const position = [20.5937, 78.9629]; // Center position for the map

  return (
    <MapContainer
      center={position}
      zoom={4}
      style={{ height: "100vh", width: "100%"}}
    >
      <TileLayer
        url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        {data.trees.map((tree) => (
          <Marker
            key={tree._id}
            position={[tree.lat, tree.lng]}
            icon={tree.verified ? verifiedIcon : unverifiedIcon}
          >
            <Popup>
            <img src={tree.image} alt={tree.name}/><br/>
              Location:{tree.location}<br/>
              <b>{tree.name}</b><br />
              Verified: {tree.verified ? "Yes" : "No"}<br/>
              Uploaded On:{tree.uploadedOn}<br/>
              Uploaded By:{tree.uploadedOn}
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default TreeMap;

// src/components/GlobeComponent.js
import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import * as d3 from 'd3-geo';

const GlobeComponent = () => {
  const globeEl = useRef();
  const [geoJson, setGeoJson] = useState(null);

  useEffect(() => {
    // Load GeoJSON data
    fetch('/data.geojson')
      .then(response => response.json())
      .then(data => setGeoJson(data));
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {geoJson && (
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          polygonsData={geoJson.features}
          polygonCapColor={() => 'rgba(200, 0, 0, 0.6)'}
          polygonSideColor={() => 'rgba(200, 0, 0, 0.15)'}
          polygonStrokeColor={() => '#111'}
          polygonLabel={({ properties: d }) => `
            <b>${d.name}</b>
            <br />
            Population: ${d.population.toLocaleString()}
          `}
          onPolygonClick={(polygon) => {
            const latLng = d3.geoCentroid(polygon);
            globeEl.current.pointOfView({ lat: latLng[1], lng: latLng[0], altitude: 0.01 }, 2000);
          }}
          enableZoom={true}
          enableRotate={true}
          cameraOptions={{
            minDistance: 100,
            maxDistance: 1000
          }}
          controls={{
            autoRotate: false,
            autoRotateSpeed: 0,
            enableDamping: true,
            dampingFactor: 0.25,
            rotateSpeed: 0.1,
            zoomSpeed: 0.5
          }}
        />
      )}
    </div>
  );
};

export default GlobeComponent;

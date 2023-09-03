// components/MapDashboard.tsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';


const MapDashboard: React.FC = () => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    // Fetch country-specific data of cases
    axios
      .get('https://disease.sh/v3/covid-19/countries')
      .then((response) => {
        setCountryData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>COVID-19 Map Dashboard</h2>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {countryData.map((country: any) => (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <h3>{country.country}</h3>
                <p>Total Cases: {country.cases}</p>
                <p>Recovered: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapDashboard;

import React, { useState, useEffect } from "react";
// import Data from "./2023_jiritsushien_nationwide_addressmatched.json";

const GetLocation: React.FC = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState<any>(null);

  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            setError(error.message);
          }
        );
        const fetchData = async () => {
          try {
            if (latitude !== null && longitude !== null) {
              const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=`
              );
              const data = await response.json();

              if (data.status === "OK") {
                const result = data.results;
                setLocation(result);
                console.log(result);
              } else {
                // エラーハンドリング
              }
            }
          } catch (error) {
            // エラーハンドリング
          }
        };

        fetchData();
      } else {
        setError("Geolocation is not supported by your browser");
      }
    };

    fetchLocation();
  }, []);

  return (
    <div>
      {latitude && longitude ? (
        <div>
          <div>
            <p>Latitude: {latitude}</p>
            <p>Longitude: {longitude}</p>
            <p>現在は：{location}にいます</p>
          </div>
          <div className="jiritsushien">
            <h2>お近くの行政による生活困窮窓口です</h2>
            <p>2023年4月現在</p>
          </div>
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default GetLocation;

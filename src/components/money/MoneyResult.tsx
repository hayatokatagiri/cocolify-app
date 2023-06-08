// 現在地を取得 or 検索バーに市町村を入力して、最寄りの自立支援機関を表示
import React, { useState, useEffect } from "react";
import SupportData from "../../2023_jiritsushien_nationwide_addressmatched.json";

// 自立支援データの型定義
interface SupportData {
  prefname: string;
  cityname: string;
  organization: string;
  counter: string;
  address: string;
  telephone: string;
  mailadress: string;
  memo: string;
  locname: string;
  x: string;
  y: string;
}

const MoneyResult: React.FC = () => {
  //現在地の取得
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

  //自立支援機関の検索
  const [filteredData, setFilteredData] = useState<SupportData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    filterData();
  }, [searchQuery]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filterData = () => {
    if (searchQuery.trim() === "") {
      setFilteredData([]);
    } else {
      const filtered = SupportData.filter((item) =>
        item.cityname.toLowerCase().includes(searchQuery.toLowerCase())
      ) as SupportData[];
      setFilteredData(filtered);
    }
  };

  return (
    <div>
      {latitude && longitude ? (
        <div>
          <div>
            {/* <p>Latitude: {latitude}</p>
            <p>Longitude: {longitude}</p>
            <p>現在は：{location}にいます</p>
          </div>
          <div className="jiritsushien"> */}
            <h2>行政による生活困窮窓口</h2>

            <p>お住まいの市の名前を入力してください</p>
            <input type="text" value={searchQuery} onChange={handleSearch} />
            {/* フィルタリングされたデータの表示 */}
            {filteredData.map((item, index) => (
              <div key={index}>
                <p>{item.cityname}</p>
                <p>{item.organization}</p>
                <p>{item.counter}</p>
                <p>{item.telephone}</p>
                <p>{item.address}</p>
                <p>{item.mailadress}</p>
                <p>2023年4月現在</p>
                {/* 他のデータフィールドも表示 */}
              </div>
            ))}
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

export default MoneyResult;

// 現在地を取得 or 検索バーに市町村を入力して、最寄りの自立支援機関を表示
import React, { useState, useEffect } from "react";
import SupportData from "../../2023_jiritsushien_nationwide_addressmatched.json";
import "../../cocolify.css";
import { Box, Button, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

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
      <p>お住まいの市区町村の名前を入力してください</p>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        style={{ width: "250px" }}
      />
      {/* フィルタリングされたデータの表示 */}
      {filteredData.map((item, index) => (
        <div key={index} className="resultBox">
          <h3>{item.organization}</h3>
          <h4>{item.counter}</h4>

          <p>
            <a href={`tel:${item.telephone}`}>
              <Button variant="contained" color="secondary" size="large">
                <PhoneIcon />{" "}
              </Button>
            </a>
          </p>
          <div className="resultBox-details">
            <p>担当地域：{item.cityname}</p>
            <p>住所：{item.address}</p>
            <p>{item.telephone}</p>
            <p>{item.mailadress}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoneyResult;

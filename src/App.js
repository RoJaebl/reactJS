import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [conis, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [select, setSelect] = useState(0);
  const onChange = (e) => {
    setMoney(e.target.value);
  };
  const onChangeS = (e) => {
    setSelect(e.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${conis.length})`} </h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChangeS}>
          {conis.map((coin) => (
            <option key={coin.id} value={parseFloat(coin.quotes.USD.price)}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      {loading ? null : (
        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "nowrap" }}
        >
          <h3 style={{ marginRight: "15px" }}>Your money(USD) </h3>
          <input
            value={money}
            type="number"
            onChange={onChange}
            placeholder="your have money input"
            style={{ marginRight: "15px" }}
          />
          <h3 style={{ marginRight: "15px" }}>Convert coins</h3>
          <input
            value={(money / select).toString()}
            type="text"
            disabled={true}
          />
        </div>
      )}
    </div>
  );
}

export default App;

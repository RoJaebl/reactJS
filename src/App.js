import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [conis, setCoins] = useState([]);
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
      <h1>The Coins! ({conis.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {conis.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

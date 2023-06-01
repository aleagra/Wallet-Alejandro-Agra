import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const CoinContext = createContext();

function CoinContextProvider({ children }) {
  const [coins, setCoins] = useState(null);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  useEffect(() => {
    async function productosDB() {
      const coins = await axios.get(url);
      setCoins(coins.data);
    }
    productosDB();
  }, []);

  return (
    <CoinContext.Provider value={{ coins, setCoins }}>
      {children}
    </CoinContext.Provider>
  );
}

export default CoinContextProvider;

import React, { useEffect, useState } from "react";
import { Getdata } from "../../server/api";

//comps
import Cryptos from "../modules/Cryptos";
import Loader from "../modules/Loader";

//styles
import styles from "./Home.module.css";
import SearchBox from "../modules/SearchBox";
import Headers from "../elements/Headers";

const Home = () => {
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await Getdata();
      setCryptos(data);
    };

    fetchAPI();
  }, []);

  const searchedCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(search)
  );

  return (
    <div className={styles.container}>
      <SearchBox search={search} setSearch={setSearch} />
      {cryptos.length > 0 ? (
        <div className={styles.coinContainer}>
          <Headers />
          {searchedCryptos.map((crypto) => (
            <Cryptos
              key={crypto.id}
              change={crypto.price_change_percentage_24h}
              data={crypto}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
      {searchedCryptos.length === 0 ? <p>Nothing Found !..</p> : null}
    </div>
  );
};

export default Home;

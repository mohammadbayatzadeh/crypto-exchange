import React, { useEffect, useState } from 'react';
import { Getdata } from '../server/api';

//comps
import Cryptos from './Cryptos';
import Loader from './Loader';

//styles
import styles from "./Home.module.css"
const Home = () => {
    const [cryptos, setCryptos] = useState([]);
    const [search, setSearch] = useState([]);
    useEffect(() => {

        const fetchAPI = async () => {
            const data = await Getdata();
            console.log(data);
            setCryptos(data);
        }

        fetchAPI();
    }, [])
    const searchHandler = event => {
        setSearch(event.target.value.toLowerCase())
    }
    const searchedCryptos = cryptos.filter(crypto => crypto.name.toLowerCase().includes(search))
    return (
        <div className={styles.container}>
            <input className={styles.input} type="text" placeholder="Search..." value={search} onChange={searchHandler} />
            {cryptos.length ?
                <div className={styles.coinContainer} >
                    {
                        searchedCryptos.map(crypto =>
                            <Cryptos
                                key={crypto.id}
                                name={crypto.name}
                                symbol={crypto.symbol}
                                image={crypto.image}
                                price={crypto.current_price}
                                marketCap={crypto.market_cap}
                                change={crypto.price_change_percentage_24h}
                            />)
                    }
                </div> :
                <Loader />
            }
            {
                searchedCryptos.length > 0  ?  " ": <p className={styles.feiled}>Nothing Found !..</p> 
            }
        </div>
    );
};

export default Home;
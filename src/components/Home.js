import React, { useEffect, useState } from 'react';
import { Getdata } from '../server/api';
import Loader from './Loader';

const Home = () => {
    const [cryptos , setCryptos] = useState([]);
    useEffect(()=>{

        const fetchAPI = async ()=>{
            const data = await Getdata();
            console.log(data);
            setCryptos(data)
        }

        fetchAPI();
    } , [])
    return (
        <>
        <input type="text" placeholder="Search..." />
        {cryptos.length ?
        <div>
            {
                cryptos.map(crypto => <p>{crypto.name}</p>)
            }
        </div> :
        <Loader />
         }
        </>
    );
};

export default Home;
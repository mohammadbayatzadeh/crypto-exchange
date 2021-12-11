import React, { useEffect } from 'react';
import { Getdata } from '../server/api';

const Home = () => {

    useEffect(()=>{

        const fetchAPI = async ()=>{
            const data = await Getdata();
            console.log(data);
        }

        fetchAPI();
    } , [])
    return (
        <div>
            
        </div>
    );
};

export default Home;
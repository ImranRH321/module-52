import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countires = () => {
    const [countries, setCountries] = useState([])

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    return (
        <div>
               <h2>the world countries Countries {countries.length}</h2>
               {
                   countries.map(country => <li><Link>{country.name.common}</Link></li>)
               }
        </div>
    );
};

export default Countires; 
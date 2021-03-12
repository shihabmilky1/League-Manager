import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Leagues from '../Leagues/Leagues';
import stadium from '../../Leauge Logo/Rectangle 21.png'
import './Home.css'

const Home = () => {
    const [leaguesData,setLeagues] = useState([]); 
    useEffect(()=> {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    },[])
    const stadiumGalary = {
        background:`linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('${stadium}')`,
        backgroundSize:'cover',
        padding:'100px 0px'
    }
    return (
    <>
        <section style={stadiumGalary}>
            <h1 className="text-center text-white">League Manager</h1>
        </section>
        <section style={{backgroundColor:'#0E0A2A'}}>
        <div className="container">
            <div className="row">
                {
                    leaguesData.map(leagues => <Leagues leagues={leagues} key={leagues.idLeague}></Leagues>)
                }
            </div>
        </div>
        </section>
        </>
    );
};

export default Home;
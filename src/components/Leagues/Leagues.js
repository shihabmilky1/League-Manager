import React from 'react';
import './League.css';
import { Link } from 'react-router-dom';
import EnglishPremierLeague from '../../Leauge Logo/image 1.png'
import EFLCUP from '../../Leauge Logo/image 2.png'
import EFLCHAPMIONSHIP from '../../Leauge Logo/image 3.png'
import UEFACHAPMIONS from '../../Leauge Logo/image 4.png'
import UEFAEUROPE from '../../Leauge Logo/image 5.png'
import LALIGA from '../../Leauge Logo/image 6.png'
import FACUP from '../../Leauge Logo/image 7.png'
import MAJORLEAGUE from '../../Leauge Logo/image 8.png'
import SCOTTISH from '../../Leauge Logo/image 9.png'
const Leagues = (props) => {
    const {strLeague,idLeague} = props.leagues;
    const images = {width:'65%',height:'250px',marginLeft:'17.5%'};
    let leagueName;
    let leagueInformation;
    if(strLeague.toLowerCase() === 'English Premier League'.toLowerCase()){
        leagueName = 'English Premier League';

        leagueInformation = 
        <div className="col-lg-4 py-3">
    <div className="card h-100 text-center custom-card shadow p-3">
      <img src={EnglishPremierLeague} className="card-img-top " style={images} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{leagueName}</h5>
      </div>
      <div className="card-footer custom-card">
        <Link to={`/league/${idLeague}`} className='btn btn-info'>See More</Link>
      </div>
    </div>
  </div>
        ;
    }
    else if(strLeague.toLowerCase() === 'EFL Cup'.toLowerCase()){
        leagueName = 'EFL Cup';

        leagueInformation = 
        <div className="col-lg-4 py-3">
    <div className="card h-100 text-center custom-card shadow p-3">
      <img src={EFLCUP} className="card-img-top"  style={images} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{leagueName}</h5>
      </div>
      <div className="card-footer custom-card">
      <Link to={`/league/${idLeague}`} className='btn btn-info'>See More</Link>      
      </div>
    </div>
  </div>}
      else if(strLeague.toLowerCase() === 'EFL Trophy'.toLowerCase()){
        leagueName = 'EFL Trophy';

        leagueInformation = 
        <div className="col-lg-4 py-3">
    <div className="card h-100 text-center custom-card shadow p-3">
      <img src={EFLCHAPMIONSHIP} className="card-img-top"  style={images} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{leagueName}</h5>
      </div>
      <div className="card-footer custom-card">
      <Link to={`/league/${idLeague}`} className='btn btn-info'>See More</Link>      
      </div>
    </div>
  </div>
    }
    else if(strLeague.toLowerCase() === 'UEFA Champions League'.toLowerCase()){
        leagueName = 'UEFA Champions League';

        leagueInformation = 
        <div className="col-lg-4 py-3">
    <div className="card h-100 text-center custom-card shadow p-3">
      <img src={UEFACHAPMIONS} className="card-img-top"  style={images} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{leagueName}</h5>
      </div>
      <div className="card-footer custom-card">
      <Link to={`/league/${idLeague}`} className='btn btn-info'>See More</Link>      
      </div>
    </div>
  </div>
    }
    else if(strLeague.toLowerCase() === 'UEFA Europa League'.toLowerCase()){
        leagueName = 'UEFA Europa League';

        leagueInformation = 
        <div className="col-lg-4 py-3">
    <div className="card h-100 text-center custom-card shadow p-3">
      <img src={UEFAEUROPE} className="card-img-top"  style={images} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{leagueName}</h5>
      </div>
      <div className="card-footer custom-card">
      <Link to={`/league/${idLeague}`} className='btn btn-info'>See More</Link>      
      </div>
    </div>
  </div>
    }
    else if(strLeague.toLowerCase() === 'Spanish La Liga'.toLowerCase()){
        leagueName = 'Spanish La Liga';

        leagueInformation = 
        <div className="col-lg-4 py-3 ">
    <div className="card h-100 text-center custom-card shadow p-3">
      <img src={LALIGA} className="card-img-top"  style={images} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{leagueName}</h5>
      </div>
      <div className="card-footer custom-card">
      <Link to={`/league/${idLeague}`} className='btn btn-info'>See More</Link>      
      </div>
    </div>
  </div>
    }
    else if(strLeague.toLowerCase() === 'FA Cup'.toLowerCase()){
        leagueName = 'FA Cup';

        leagueInformation = 
        <div className="col-lg-4 py-3 ">
    <div className="card h-100 text-center custom-card shadow p-3">
      <img src={FACUP} className="card-img-top"  style={images} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{leagueName}</h5>
      </div>
      <div className="card-footer custom-card">
      <Link to={`/league/${idLeague}`} className='btn btn-info'>See More</Link>      
      </div>
    </div>
  </div>
    }
    else if(strLeague.toLowerCase() === 'American Major League Soccer'.toLowerCase()){
        leagueName = 'American Major League Soccer';

        leagueInformation = 
        <div className="col-lg-4 py-3 ">
    <div className="card h-100 text-center custom-card shadow p-3">
      <img src={MAJORLEAGUE} className="card-img-top"  style={images} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{leagueName}</h5>
      </div>
      <div className="card-footer custom-card">
      <Link to={`/league/${idLeague}`} className='btn btn-info'>See More</Link>      
      </div>
    </div>
  </div>
    }
    else if(strLeague.toLowerCase() === 'Scottish Championship'.toLowerCase()){
        leagueName = 'Scottish Championship';

        leagueInformation = 
        <div className="col-lg-4 py-3 ">
    <div className="card h-100 text-center custom-card shadow p-3">
      <img src={SCOTTISH} className="card-img-top"  style={images} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{leagueName}</h5>
      </div>
      <div className="card-footer custom-card">
      <Link to={`/league/${idLeague}`} className='btn btn-info'>See More</Link>      
      </div>
    </div>
  </div>
    }

    return (
        <>
        {leagueInformation}
        </>

    );
};

export default Leagues;
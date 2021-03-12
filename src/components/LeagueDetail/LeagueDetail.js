import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import stadium from '../../Leauge Logo/Rectangle 21.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFlag, faFutbol, faMars , faChevronLeft  } from '@fortawesome/free-solid-svg-icons'
import {faTwitter , faFacebookF , faYoutube} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import malePhoto from '../../Photo/male.png'
import femalePhoto from '../../Photo/female.png'



const LeagueDetail = () => {
    const { leagueId } = useParams();
    const [league, setLeague] = useState([]);
    const { strLeague, strLogo, dateFirstEvent, strGender, strCountry, strTwitter, strFacebook, strYoutube , strDescriptionEN} = league;
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [leagueId]);
    const stadiumGalary = {
        background: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('${stadium}')`,
        backgroundSize: 'cover',
        padding: '100px 0px',
        width: '100%'
    }
    const fontModify = {
        marginRight: '5px',
        fontSize: '14px'
    }
    let genderBaseImage;
    if( strGender === 'Male'){
        genderBaseImage = <img src={malePhoto} className="img-fluid w-100 rounded"/>
    }
    if( strGender === 'Female'){
        genderBaseImage = <img src={femalePhoto} className="img-fluid w-100 rounded"/>
    }
    return (
        <div>
            <section style={stadiumGalary}>
                <img src={strLogo} className="img-fluid w-25 mx-auto" alt="" />
            </section>
            <section style={{backgroundColor:'#efefef',padding:'20px 0px'}}>
                <div className="container">
                <Link to="/home">
                        <button className="btn btn-info mt-4 text-center"><FontAwesomeIcon style={fontModify} icon={faChevronLeft} /></button>
                    </Link>
                    <div className="row my-4 d-flex justify-content-between align-items-center text-dark p-3 shadow" >
                            <div className="col-lg-7">
                                        <h1 className="mb-3">{strLeague}</h1>
                                        <h6 ><FontAwesomeIcon style={fontModify} icon={faMapMarkerAlt} /> Founded : {dateFirstEvent}</h6>
                                        <h6 ><FontAwesomeIcon style={fontModify} icon={faFlag} /> Country : {strCountry}</h6>
                                        <h6 ><FontAwesomeIcon style={fontModify} icon={faFutbol} />Sport Type : Football</h6>
                                        <h6 ><FontAwesomeIcon style={fontModify} icon={faMars} /> Gander : {strGender}</h6>
                                        </div>

                                <div className="col-lg-5">
                                    {genderBaseImage}
                                </div>
                    </div>
                    <div className="row">
                    <div className="col mt-4">
                                    <p style={{fontSize:'15px'}}>
                                        {strDescriptionEN}
                                    </p>
                                    <div className="social-link text-center">
                                        <a href={`https://${strFacebook}`}>
                                        <FontAwesomeIcon style={{fontSize:'25px',margin:'10px'}} icon={faFacebookF} />
                                        </a>
                                        <a href={`https://${strYoutube}`}>
                                        <FontAwesomeIcon style={{fontSize:'25px',margin:'10px'}} icon={faYoutube} />
                                        </a>
                                        <a href={`https://${strTwitter}`} target="_blank">
                                        <FontAwesomeIcon style={{fontSize:'25px',margin:'10px'}} icon={faTwitter} />
                                        </a>
                                    </div>
                                </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LeagueDetail;
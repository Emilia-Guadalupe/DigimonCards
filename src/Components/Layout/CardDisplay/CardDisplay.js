import React, {useState, useEffect} from 'react';
import './cardStyles.css';

function CardDisplay(){

    const [digimons, setDigimon] = useState([]);

    const getDigimon = async () => {
        const data = await fetch('https://digimon-api.vercel.app/api/digimon')
        const digiInfo = await data.json();
        setDigimon(digiInfo);
    }

    useEffect(() => {

        getDigimon();

    }, [])

    return(
        <>
        {digimons.map((digimon, index) =>{
            return(
                <div key={index} className="digimonContent">
                <div className="digimonInfo">
                    <h3 className="textDigimon" id="digimonName">{digimon.name}</h3>
                </div>
                <div className="digimonInfo">
                    <img  className="digimonPhoto" src={digimon.img} alt="Digimons"></img>
                </div>
                <div className="digimonInfo">
                    <p className="textDigimon" id="digimonLevel">Digimon Level: </p>
                    <p className="textDigimon" id="digimonLevelTwo">{digimon.level}</p>
                </div>
                </div>
            )
        })}
        </>
    )
}

export default CardDisplay;
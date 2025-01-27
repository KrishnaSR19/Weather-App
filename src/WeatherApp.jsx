import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from "react";

export default function App() {
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Malvan",
        feelslike:24,
        temp:24,
        tempMax:24,
        tempMin:24,
        humidity:24,
        weather:"cloudy",
    });

    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

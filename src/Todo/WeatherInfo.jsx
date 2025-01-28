import { useContext } from "react";
import { WeatherContext } from "./WeatherContext";

const WeatherInfo = () => {
    // const [weatherInfo, setWeatherInfo] = useState(null);
    // const {themeMode, setThemeMode} = useContext(ThemeContext);
    const {weatherInfo}=useContext(WeatherContext);
   
    // const keyBeautify = (key) => {
    //   const capitalizedKey = key.split('_').map((value, index) => value.charAt(0).toUpperCase()+ value.slice(1)).join(' ')
    //   return capitalizedKey
    // }
  
    return (
      
        <div className="card">
  
          {/* {console.log("Theme Mode: ", JSON.stringify(themeMode))} */}
  
          <div className="card-head">Weather Today</div>
          <div className="card-body">
            {weatherInfo ? (
              <>
                {Object.entries(weatherInfo).map(([key,value], index) => {
                  return (
                    <div key={index}>
                      <span className="info-title"> {key} : {value}  </span>
                    </div>
                  );
                })}
              </>
            ) : (
              "Loading..."
            )}
          </div>
        </div>
      
    );
  };
  
  export default WeatherInfo;
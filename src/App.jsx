

import Todo from './Todo';
import './App.css';
import WeatherInfo from './Todo/WeatherInfo';
import { WeatherContext } from './Todo/WeatherContext'; 
import { WeatherContextProvider } from './Todo/WeatherContext';

function App() {
  return (
    <div>
      
      <WeatherContextProvider>
        <WeatherInfo/>
        {/* <Todo /> */}
      </WeatherContextProvider>
      

    </div>
  );
}

export default App;
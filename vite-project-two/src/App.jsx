import { useEffect, useState } from 'react'
import LocationCard from './components/LocationCard'

function App() {

  const [locationsArray, getData] = useState([]);
  const apiURL = 'http://localhost:3000';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`${apiURL}/api/data`)
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data)
        getData(data.locations);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <>
      {locationsArray.map((location, index) => {
        console.log("LOCATION NAME", location.name);
        return (
          <div key={index}>
            <p>{location.name}</p>
            <img src={`${apiURL}${location.image}`}/>
          </div>
        );
      })}
    </>
  );}

export default App

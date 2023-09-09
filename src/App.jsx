import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SearchBar, BeerDataList } from './components';
import axios from 'axios';
const BASE_URL = "https://api.punkapi.com/v2/beers";

function App() {
  const [beerData, setBeerData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {

      setIsLoading(() => {
        return true;
      })

      let url = (searchTerm.length > 0) ? `${BASE_URL}?beer_name=${searchTerm}` : BASE_URL;
      const { data } = await axios.get(url);


      setBeerData(() => {
        return data;
      });

      setIsLoading(() => {
        return false;
      });
    };

    getData();
  }, ["", searchTerm]);

  if (isLoading) {
    return (<div className='flex flex-col items-center justify-center relative'>
      <h1 className='text-3xl font-bold my-[2rem]'>Loading...</h1>
    </div>)
  }

  return (
    <>

      <div className='absolute kingpin'>
        Naineel
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className='text-3xl font-bold my-[2rem]'>Olives Beer Shop</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>



      <div className='w-[80%] border-2 my-[2rem] border-t-2 m-auto'>
        {searchTerm && (<div className='my-5 text-center text-3xl font-bold '> Your Search Results for "{searchTerm}"</div>)}
        <BeerDataList beerData={beerData} />
      </div>
    </>
  )
}

export default App

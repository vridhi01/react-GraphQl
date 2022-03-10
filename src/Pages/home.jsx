import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import {GET_WEATHER_QUERY} from '../graphql/Queries'


const Home = () => {
    const [state,setState] = useState();
    const[getWeather,{loading,data,error}] = useLazyQuery(GET_WEATHER_QUERY,{
        variables :{name:state},
    });
    if(error) return <h1>error found</h1>
    if(data) {console.log(data)}

    const getData = (e) => {
        setState(e.target.value);
    }
    console.log(data?.getCityByName,'df');
 return (
     <>
      <div className='home'>
          <h1>Search for Weather</h1>
          <input type="search" placeholder='city name' onChange={(e)=>{getData(e)}}/>
          <button onClick={()=>{getWeather()}}>Search</button>
      </div>
     </>
   )
}

export default Home;
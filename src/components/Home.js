import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Coin from './Product';
import Loader from './Loader';

const Home = () => {
  // const arr = [1,2,3,4,5];

  // const [temp, setTemp] = useState(0);

  const [coins,setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(()=>{
  //   console.log("mounting")

  //   return ()=>{
  //     console.log("unmount");
  //   };
  // },[temp]);

  useEffect(() => {
    const fetchAllCoins = async()=>{
      try{
      const {data}= await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=200");
      console.log(data);
      setCoins(data);
      setLoading(false);  
    }
    catch(error){
      // setLoading(true);
      alert("Not Working");
    }
  }
    
    fetchAllCoins();

  }, []);
  


  return (
    <div>
      {/* <button type="button" className="btn btn-primary" onClick={()=>setTemp(temp+1)}>Press</button>
      {
        arr.map((i)=>(
          <Coin name={"Bitcoin"}  symbol={"BTC"} key={i}/>
        ))
      }
      <h1>{temp}</h1> */}

      
      {/* <button type="button" className="btn btn-primary" onClick={()=>setTemp(temp+1)}>Press</button> */}
      <div className='home'>
        {
          loading ? <Loader/> :  coins.map((i)=>(
            <Coin name={i.name}  symbol={i.symbol} key={i.id} imgSrc={i.image} price={i.current_price}/>
          ))
        }
     
      
      </div>
      {/* <h1>{temp}</h1> */}
    </div>
  )
}

export default Home
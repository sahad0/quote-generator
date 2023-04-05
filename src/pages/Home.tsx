import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
import { QuoteType } from '../types';
import requestStatus, { initial_state } from '../helper/LoadingHandler';
import Card from '../components/Card/Card';
import { Button } from 'antd';



export default function Home():JSX.Element {

  const [quotes,setQuotes] = useState<QuoteType[]>([]);
  const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);


  const randomFn = async()=>{
    try{
      setEventReducer({type:'loading'});
      const {data} = await axios.get<QuoteType>(import.meta.env.VITE_API_URL+'/random');
      setQuotes((quotes)=>[...quotes,data]);
      setEventReducer({type:'success'});
    }
    catch(e){
      alert('Broken Link Contact the Developer');
      setEventReducer({type:'error'});

    }
    
  }

  useEffect(()=>{
    randomFn();
  },[]);



  return (
    <div className='flex flex-1 w-full h-fit' >
      <Card quotes={quotes} />
   
    </div>
  )
}

import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
import { QuoteType, Tag, TagType } from '../types';
import requestStatus, { initial_state } from '../helper/LoadingHandler';
import Card from '../components/Card/Card';
import { Button, Select } from 'antd';



export default function Home():JSX.Element {

  const [quotes,setQuotes] = useState<QuoteType[]>([]);
  const [tags,setTag] = useState<TagType>();

  const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);


  


  const randomFn = async()=>{
    try{
      setEventReducer({type:'loading'});
      const {data} = await axios.get<QuoteType>(import.meta.env.VITE_API_URL+'/random');
      const data1 = await axios.get<TagType>(import.meta.env.VITE_API_URL+'/tags');
      setQuotes((quotes)=>[...quotes,data]);
      setTag(data1.data);
      setEventReducer({type:'success'});
    }
    catch(e){
      alert('Broken Link Contact the Developer');
      setEventReducer({type:'error'});

    }
    
  }
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  useEffect(()=>{
    randomFn();
  },[]);



  return (
    <div className='flex flex-1 w-full h-fit flex-col' >
      <Card quotes={quotes} />
      <div className='text-slate-950 justify-center flex items-center w-full'>

      <Select
      size='large'
        loading={eventReducer?.loading ? true:false}
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
        options={tags!==undefined ? 
          tags.map((k)=>(
            {value:k.name,label:k.name}
          ))
          :
          [
            { value: 'jack', label: 'Jack' },
          ]}
      />


      <button className="h-10 m-20 px-10 font-semibold rounded-md bg-black text-white" type="submit">
          Generate More
        </button>
      </div>
    </div>
  )
}

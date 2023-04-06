import axios, { AxiosResponse } from 'axios';
import React, { MutableRefObject, useEffect, useReducer, useRef, useState } from 'react'
import { QuoteType, Tag, TagType } from '../types';
import requestStatus, { initial_state } from '../helper/LoadingHandler';
import Card from '../components/Card/Card';
import { Button, Select } from 'antd';
import { useAppSelector } from '../Hooks/Hooks';
import { ToastContainer } from 'react-toastify';



export default function Home():JSX.Element {

  const [quotes,setQuotes] = useState<QuoteType[]>([]);
  const [tags,setTag] = useState<TagType>();
  const [value,setValue] = useState<string>('');
  const [handleScroll,setHandleScroll] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const {quotes:quotefromREdux} = useAppSelector((state)=>state.cart.store.value);
  const [eventReducer,setEventReducer] = useReducer(requestStatus,initial_state);



  useEffect(()=>{
    const scroll = setTimeout(()=>{
      ScrollToEnd();
    },500);

    return ()=> clearInterval(scroll);

  },[handleScroll]);

  const randomFn = async():Promise<void>=>{
    try{
      setEventReducer({type:'loading'});
      if(value===''){
        const {data} = await axios.get<QuoteType>(import.meta.env.VITE_API_URL+`/random?tags=`);
        setQuotes((quotes)=>[...quotes,data]);
      }
      else{
        const {data} = await axios.get<QuoteType>(import.meta.env.VITE_API_URL+`/random?tags=${value}`);
        setQuotes((quotes)=>[...quotes,data]);
      }
      const data1 = await axios.get<TagType>(import.meta.env.VITE_API_URL+'/tags');
      setTag(data1.data);
      setEventReducer({type:'success'});
    }
    catch(e){
      alert('Broken Link Contact the Developer');
      setEventReducer({type:'error'});

    }
    
  }
  const handleChange = (value: string) => {
    setValue(value);
  };
  const ScrollToEnd = ()=>{
    if (buttonRef.current) {
      buttonRef.current.scrollIntoView({
        behavior: "smooth"
      });
    }
    
  }


  useEffect(()=>{
    randomFn();
  },[]);



  return (
    <div className='flex flex-1 w-full h-fit flex-col scroll-smooth' >
            <ToastContainer />


      <Card quotes={quotes} setQuotes={setQuotes} randomFn={randomFn}/>
      <div className='text-slate-950 justify-center flex items-center w-full'>

      <Select
      size='large'
        loading={eventReducer?.loading ? true:false}
        defaultValue="Random"
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


                
      <button disabled={eventReducer?.loading ? true :false} ref={buttonRef} onClick={()=>{setHandleScroll((k)=>!k),randomFn()}} className="h-10 m-20 px-10 font-semibold rounded-md bg-black text-white  bttn" type="submit">
          Generate More
        </button>
      </div>
    </div>
  )
}

import React, { Dispatch, FC, SetStateAction } from "react"
import { QuoteType } from "../../types";
import { Button, Spin } from "antd";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../Hooks/Hooks";
import { AddController, RemoveController } from "../../store/StoreSlice";
import { toast } from "react-toastify";


interface AppProps {
    quotes:QuoteType[];
    setQuotes?:Dispatch<SetStateAction<QuoteType[]>>,
    randomFn?:()=>Promise<void>
}


const Card:FC<AppProps> = ({quotes,setQuotes,randomFn}):JSX.Element=>{
    
    const {pathname} = useLocation();
    const dispatch = useAppDispatch();




    const handleEvent = (quote:QuoteType):void=>{

        if(pathname==='/bookmarks'){
            dispatch(RemoveController(quote));
            toast.error('Removed from Bookmarks',{position:'bottom-right'});

            
        }
        else{
            dispatch(AddController(quote));
            let updated = quotes.filter((k)=>k._id!==quote._id);
            setQuotes && setQuotes(updated);
            toast.success('Added to Bookmarks',{position:'bottom-right'});
            if(randomFn!==undefined){
                console.log("calling");
                randomFn();

            }

        }

    }


    return(
        <div  className="flex flex-col self-center items-center w-full ">
          {quotes.length>0 ? quotes.map((quotes,index)=>(
            ( 
                <figure key={index} onClick={()=>handleEvent(quotes)}  className="sm:flex hover:cursor-pointer  md:flex drop-shadow-sm hover:bg-pink-100 hover:rounded-md bg-slate-100  sm:w-full md:w-4/6 lg:w-4/6 xl:w-3/6 2xl:w-3/6 rounded-xl p-8 md:p-0 sm:m-8  md:m-5 lg:m-5 xl:m-5 2xl:m-5 flex justify-between">
                    <div >
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-lg font-medium">
                            {quotes.content}
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-sky-500 ">
                            {quotes.author}
                            </div>
                        
                        </figcaption>
                        </div>
                    </div>
                  
              </figure>
              )
          ))

                :
              pathname === '/bookmarks' ? 
              <>
                <div className="mt-28 flex justify-center items-center">
                    <div>No bookmarks available ! </div>
                </div>

                
              </>
              :
            <div className="mt-28 flex justify-center items-center">
                <Spin className="mr-24" size="large" spinning />
                <div>No Data Currently Available Trying to sync the meta.....</div>
            </div>
               
          }

           

        </div>
        
     
    )
}


export default Card;
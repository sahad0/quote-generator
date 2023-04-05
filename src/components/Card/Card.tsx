import React, { FC } from "react"
import { QuoteType } from "../../types";
import { Button } from "antd";


interface AppProps {
    quotes:QuoteType[];
}


const Card:FC<AppProps> = ({quotes}):JSX.Element=>{
    return(
        <div className="flex flex-col self-center items-center w-full">
          {quotes&& quotes.map((quotes,index)=>(
            ( 
                <figure key={index}  className="sm:flex hover:cursor-pointer  md:flex drop-shadow-sm hover:bg-pink-100 hover:rounded-md bg-slate-100  sm:w-full md:w-4/6 lg:w-4/6 xl:w-3/6 2xl:w-3/6 rounded-xl p-8 md:p-0 sm:mt-8  md:mt-5 lg:mt-5 xl:mt-5 2xl:mt5 flex justify-between">
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
          ))}

           

        </div>
        
     
    )
}


export default Card;
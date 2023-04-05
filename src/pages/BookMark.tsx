import React, { Suspense } from 'react'
import {  TagOutlined } from '@ant-design/icons';
import Card from '../components/Card/Card';
import { useAppSelector } from '../Hooks/Hooks';


export default function BookMark() {

    const {quotes} = useAppSelector((state)=>state.cart.store.value)

  return (
    <div className='flex flex-1 w-full h-fit flex-col' >
        <div className='flex flex-row items-center'>
            <div className='font-custom text-2xl m-14'>
                BookMarks
            </div>
            <TagOutlined style={{fontSize:'25px'}}/>

        </div>
        
        <Card quotes={quotes} />

    </div>
  )
}

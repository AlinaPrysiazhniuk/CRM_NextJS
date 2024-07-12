'use client';

import React  from 'react';
import Header from '@/app/components/headers';
import { notFound } from 'next/navigation';
import {useEffect} from 'react';

export interface PageProps{
  params: {id: string}
}


export default function Page({params}:PageProps){
 useEffect(()=>{
   const id=Number.parseInt(params.id);
   if(Number.isNaN(id)){
     notFound();
   }

 }, [params.id])

  return<>
    <Header>Companies ({params.id})</Header>
  </>
}
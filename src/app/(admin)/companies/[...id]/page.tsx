import React from 'react';
import Header from '@/app/components/headers';

export interface PageProps{
  params: {id: string[]}
}


export default function Page({params}:PageProps){
  return<>
    <Header>Companies ({String(params.id)})</Header>
  </>
}
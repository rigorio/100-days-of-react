"use client";
import { fetchString } from '@/api/basic-api'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {

  
  const[nonRandomString, setNonRandomString] = useState();

  useEffect(()=>{
   setData();
  })

  const setData = async () => {
    const res = await fetchString();
    setNonRandomString(res.data);
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {nonRandomString}
    </main>
  )
}

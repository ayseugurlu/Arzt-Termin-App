import React, { useState } from 'react'
import HastaListe from '../components/HastaListe'
import Data from "./data"

const Home = () => {


    const [liste,setListe]=useState(JSON.parse(localStorage.getItem("hastaListesi")) || Data )

    // 
  return (
    <div>
        <HastaListe liste={liste} setListe={setListe}/>
        
    </div>
  )
}

export default Home
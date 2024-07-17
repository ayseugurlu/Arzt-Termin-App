import React, { useState } from 'react'
import HastaListe from '../components/HastaListe'
import Data from "./data"
import logo from "../helper/logo.png"

const Home = () => {


    const [liste,setListe]=useState(JSON.parse(localStorage.getItem("hastaListesi")) || Data )

    // 
  return (
    <div>

        <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center" ,gap:"1rem"}}>

          <img style={{width:"100px", height:"100px"}} src={logo} alt="" />
          <h1 style={{fontFamily:"monospace"}}>MEDICAL CENTER</h1>

        </div>
        <HastaListe liste={liste} setListe={setListe}/>
        
    </div>
  )
}

export default Home
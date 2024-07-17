import React, { useState } from 'react'
import Data from "../helper/data"
import logo from "../helper/logo.png"
import HastaListe from "../components/HastaListe"

const Home = () => {


    const [liste,setListe]=useState(JSON.parse(localStorage.getItem("hastaListesi")) || Data )

    
  return (
    <div>

        <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center" ,gap:"2rem" , margin:"2rem 5rem" }}>

          <img style={{width:"100px", height:"100px"}} src={logo} alt="" className='logo'/>
          <h1 style={{fontFamily:"monospace"}}>MEDICAL CENTER</h1>

        </div>
        <HastaListe liste={liste} setListe={setListe}/>
        
    </div>
  )
}

export default Home
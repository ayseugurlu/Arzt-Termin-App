import React, { useState } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { BsCalendarDate } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";
import { doctorData } from '../helper/data';
import HastaEkle from './HastaEkle';

const HastaListe = ({liste,setListe}) => {
    const [doktor,setDoktor]=useState(false)
    const [selected,setSelected]=useState(doctorData)

    console.log(doktor)

    const deleteListeCard=(id)=>{
        localStorage.setItem("hastaListesi",JSON.stringify(liste.filter((i)=> i.id !== id)))

        setListe(JSON.parse(localStorage.getItem("hastaListesi")))
    }

    const handleClick=(id)=>{
        setDoktor(!doktor)
        if(doktor){setSelected( doctorData.filter((i)=> i.id === id))}else{
            setSelected( doctorData)
        }
        

    }
  return (
    <div className='liste-container'>

    <div  className='doktor-liste'>
    {selected.map(({id,doctorName,doctorImg})=>(
        
        <div onClick={()=>handleClick(id)}  key={id} className='doktor-card'
        >
        <img src={doctorImg} alt="" />
            <p>{doctorName}</p> 
        </div>

    ))}
        
      
       

    </div>
    {doktor? (liste.map((x)=>( 
        <div 
        onDoubleClick={()=>setListe(liste.map((a)=> a.id ===x.id ? {...a,bittiMi:!a.bittiMi} : a))}

         key={x.id} className={x.bittiMi? "liste-card2" : "liste-card1"}>

        <div>
            <h3><BsPerson  style={{color:"purple", fontSize:"1.2rem", marginRight:"1rem"}}/>{x.text}</h3>
            <h5><BsCalendarDate style={{color:"purple", fontSize:"1.2rem", marginRight:"1rem"}}/>{x.day}</h5>
            <h4><FaUserDoctor  style={{color:"purple", fontSize:"1.2rem", marginRight:"1rem"}}/> {x.doktor}</h4>
        </div>
        
        <div>
            <RiDeleteBinLine 
            onClick={()=>deleteListeCard(x.id)}
             style={{color:"red", fontSize:"1.2rem"}}/>

            </div>
        </div>


    ))
    ) : (<HastaEkle liste={liste} setListe={setListe} selected={selected} setSelected={setSelected} doktor={doktor} deleteListeCard={deleteListeCard}/>)
       
    }
    </div>
  )
}

export default HastaListe
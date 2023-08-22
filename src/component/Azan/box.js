import './azan.css'
import axios from 'axios'
import React, { useEffect,useState } from "react";


let fajrTime
let sunTime
let Dhuhr
let Asr
let Maghrib
let Isha
let params
let date ='--- -- ----'
let dayhijri ='--'
let weekday ='----'
let month ='--'
let year='----'
let day ='--'
function Box() {

let cities = [
    {name:"اختر المدينة" ,  value:1 },
    {name:"مكة المكرمه" ,  value:2 }
]


    useEffect(()=>{

        params = { 
            country: "AS",
            city: "Makkah al Mukarramah"
        } 
        
        axios.get('http://api.aladhan.com/v1/timingsByCity/:date', {params:params})
        .then(function (response) {
            
            console.log(response.data.data)
            date = response.data.data.date.gregorian.date
            console.log(date )
            dayhijri = response.data.data.date.hijri.day
            weekday = response.data.data.date.hijri.weekday.ar
            month = response.data.data.date.hijri.month.ar
            year = response.data.data.date.hijri.year
            day = response.data.data.date.gregorian.weekday.en
        
            let fajrT = response.data.data.timings.Fajr
            fajrTime = fajrT.replace(fajrT.slice(0,2),(fajrT.slice(0,2)% 12))
        
            let sunT = response.data.data.timings.Sunrise
            sunTime = sunT.replace(sunT.slice(0,2),(sunT.slice(0,2)% 12))
            
            let dhuhrT = response.data.data.timings.Dhuhr
            Dhuhr = dhuhrT.replace(dhuhrT.slice(0,2),(dhuhrT.slice(0,2)% 12))
            
            let AsrT = response.data.data.timings.Asr
            Asr = AsrT.replace(AsrT.slice(0,2),(AsrT.slice(0,2)% 12))
            
            let MaghribT = response.data.data.timings.Maghrib
            Maghrib = MaghribT.replace(MaghribT.slice(0,2),(MaghribT.slice(0,2)% 12))
            
            let IshaT = response.data.data.timings.Isha
            Isha = IshaT.replace(IshaT.slice(0,2),(IshaT.slice(0,2)% 12))
        })
            .catch(function (error) {
                // handle error
            Isha=Maghrib=Asr=Dhuhr=sunTime=fajrTime=weekday=date="Error in data"
            console.log(error);
        });
        
    },[])
    
    


    const [name,setName]= useState('اختر المدينة')

const handleChange= (event)=> {
    setName (event.target.value)
}
    return (

        <div className='all'>
        <div className="city">
        <h1 id='title'> {name}</h1> 
        </div>
        <select onChange={handleChange}>
        {cities.map(fbb=>
            <option  key={fbb.value} >{fbb.name}</option>
            )}
            </select>
    
        <div id="dateDay">
        <p>{date}  {day}</p>
        <p> {weekday} {dayhijri} {month} {year}</p>
        </div>
        <div className='boxs'>
    <div className='box'>
    <p>الفجر</p>
    <p id='fajr'>{fajrTime}</p>
    </div>
    <div className='box'>
    <p>الشروق</p>
    <p id='sun'>{sunTime}</p>
    </div>
    <div className='box'>
    <p>الظهر</p>
    <p id='dahr'>{Dhuhr}</p>
    </div>
    <div className='box'>
    <p>العصر</p>
    <p id='asr'>{Asr}</p>
    </div>
    <div className='box'>
    <p>المغرب</p>
    <p id='maghrb'>{Maghrib}</p>
    </div>
    <div className='box'>
    <p>العشاء</p>
    <p id='asha'>{Isha}</p>
    </div>
    </div>
    
        </div>

    )
}

export default Box

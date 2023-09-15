import './azan.css'
import axios from 'axios'
import React, { useEffect,useState } from "react";




function Box() {
    const [timings, setTimings] = useState ("")
    const [date, setDate] = useState ("")
    const [day, setDay] = useState ("")
    const [weekday, setWeekdayate] = useState ("")
    const [dayhijri, setDayhijri] = useState ("")
    const [month, setMonth] = useState ("")
    const [selectedcity,setSelectedcity]= useState(    {name:"مكة المكرمه" ,  value:1  , apiname : "Makkah al Mukarramah" , apicountry : "AS"},)
    let params = { 
        country:selectedcity.apicountry,
        city: selectedcity.apiname
    } 

const getTimings = async ()=> {
    const response = await axios.get('https://api.aladhan.com/v1/timingsByCity/:date?', {params:params});
    setTimings(response.data.data.timings)
    setDate(response.data.data.date.gregorian)
    setDay(response.data.data.date.gregorian.weekday)
    setWeekdayate(response.data.data.date.hijri.weekday)
    setDayhijri(response.data.data.date.hijri)
    setMonth(response.data.data.date.hijri.month)
};
const cities = [
    {name:"مكة المكرمه" ,  value:1  , apiname : "Makkah al Mukarramah" , apicountry : "AS"},
    {name:"المدينة المنوره" ,  value:2  , apiname : "Al Madīnah al Munawwarah" , apicountry : "AS"},
    {name:"الرياض" ,  value:3  , apiname : "Ar Riyāḑ" , apicountry : "AS"},
    {name:"تونس" ,  value:4  , apiname : "Tunis" , apicountry : "TN"},
    {name:"الاسكندريه" ,  value:5  , apiname : "Al Iskandarīyah" , apicountry : "ُEG"},
    {name:"القاهرة" ,  value:6  , apiname : "Al Qāhirah" , apicountry : "EG"},
    {name:"المنيا" ,  value:7  , apiname : "Al Minyā" , apicountry : "EG"},
    {name:"لندن",  value:8  , apiname : "London, City of" , apicountry : "GB"},
    {name:"باريس",  value:9  , apiname : "Paris" , apicountry : "FR"},
    {name:"برلين",  value:10  , apiname : "Berlin" , apicountry : "DE"},
]

useEffect(()=>{
    getTimings()
    
}, [selectedcity]);

const handleChange= (event)=> {
    const cityOpject = cities.find((city)=> {
            return city.name === event.target.value
        }
        )
    setSelectedcity (cityOpject)    
}
return (
    
    <div className='all'>
    <div className="city">
    <h1 id='title'> {selectedcity.name}</h1> 
    </div>
    <div id="dateDay">
    <p>{date.date}  {day.en}</p>
    <p> {weekday.ar} {dayhijri.day} {month.ar} {dayhijri.year}</p>
    
        </div>
        <div className='boxs'>

    <div className='box'>
    <p>الفجر</p>
    <p id='fajr'>{timings.Fajr}</p>
    </div>

    <div className='box'>
    <p>الشروق</p>
    <p id='sun'>{timings.Sunrise}</p>
    </div>
    <div className='box'>
    <p>الظهر</p>
    <p id='dahr'>{timings.Dhuhr}</p>
    </div>

    <div className='box'>
    <p>العصر</p>
    <p id='asr'>{timings.Asr}</p>
    </div>

    <div className='box'>
    <p>المغرب</p>
    <p id='maghrb'>{timings.Maghrib}</p>
    </div>

    <div className='box'>
    <p>العشاء</p>
    <p id='isha'>{timings.Isha}</p>
    </div>

    </div>

    <select onChange={handleChange}>
    {cities.map(city=>
        <option  key={city.value} >{city.name}</option>
        )}
        </select>

    
        </div>

    )
}

export default Box

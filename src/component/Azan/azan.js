import React, { Fragment } from 'react'
import './azan.css'
import Box from './box'
import SelectCity from './select_city'
import axios from "axios";
function Azan() {

    let params = {
        country: "AS",
        city: "Makkah al Mukarramah"
    }
    axios.get('http://api.aladhan.com/v1/timingsByCity/:', {
        params: params
    })
      .then(function (response) {
        console.log(response.data.data.timings.Fajr);
      })
      .catch(function (error) {
        console.log("error");
      })

    return (
        <Fragment>
            <div className='all'>
                <div className="city">
                    <h1> القاهره </h1> 
                </div>
                <div className='boxs'>
                <Box name='الفجر' time='5:33' apm='AM'/>
                <Box name='الشروق' time='7:05' apm='AM'/>
                <Box name='الظهر' time='12:32' apm='PM'/>
                <Box name='العصر' time='4:23' apm='PM'/>
                <Box name='المغرب' time='8:00' apm='PM'/>
                <Box name='العشاء' time='9:20' apm='PM'/>
                </div>
                <SelectCity/>
                </div>
        </Fragment>
    )
}

export default Azan

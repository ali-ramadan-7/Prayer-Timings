import React, { Fragment } from 'react'
// import './azan.css'
function SelectCity() {
    // this.Fragment.select.option.value.OnClick(console.log (this.value))
    return (
        <Fragment>
        <select>
            <option value="" key="0">مكه</option>
            <option value="" key="1">القاهرة</option>
            <option value="" key="2">اسكندريه</option>
            <option value="" key="3">المدينة المنوره</option>
            <option value="" key="4">دبى</option>
            <option value="" key="5">تونس</option>
        </select>
        </Fragment>
        
    )
}

// console.log(
//     // document.querySelectorAll('option')[2].textContent,
//     document.querySelectorAll('option')[2].getAttribute
//     )
export default SelectCity

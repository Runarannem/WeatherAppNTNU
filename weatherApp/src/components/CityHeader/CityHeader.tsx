import React from 'react'
import './CityHeader.css'

type CityHeaderProps = {
    cityName: string,
    cityTemp: number
}

function CityHeader({cityName, cityTemp}: CityHeaderProps) {
    return (
        <div className='cityHeader'>
        <div className='cityTitle'>{cityName}</div>
        <div className='cityIcon'>
        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="56px" height="56px" viewBox="0 0 24 24" aria-labelledby="rainIconTitle" stroke="#2329D6" stroke-width="0.42857142857142855" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="rainIconTitle">Rain</title> <path d="M16 18l1 3m-4-3l1 3m-4-3l1 3m8.051-3.043C20.5 17.97 22 16.245 22 14.5a3.5 3.5 0 0 0-3.079-3.475 6.002 6.002 0 0 0-11.21-1.86A4.504 4.504 0 0 0 2 13.5c0 2.311 1.5 4.47 3.986 4.47H7"/> </svg>
        </div>
        <div className='cityTemp' >
            <p>{cityTemp}℃</p>
        </div>
    </div>
  )
}

export default CityHeader
import React from 'react'
import '../css/Expierences.css'

export default function Experiences(props) {

  let badgeText
  if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
  }
  

  return (
    <div className="card">
      {badgeText && <div className='card--badge'>{badgeText}</div>}
        <img src={`./images/${props.coverImg}`} alt="" className="card-img" />
        
        <div className="rating-wrapper"> 
          <p className="rating">{props.stats.rating}</p>
          <p className="reviewCount">({props.stats.reviewCount})</p>
          <p className="country">{props.location}</p>
        </div>
        <p className="card--title">{props.title}</p>
        <p className="price"><span className='price-number'>From ${props.price}</span>/ person</p>
    </div>
  )
}
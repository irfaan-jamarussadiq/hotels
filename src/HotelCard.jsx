import './HotelCard.css'

function HotelCard({ hotel }) {
  return (
    <div className='hotel-card'>
      <div className='hotel-img-container'>
        <img className='hotel-img' src={hotel.img} alt={hotel.name} />
      </div>
      <div className='hotel-card-details'>
        <h3 className='hotel-card-title'>{hotel.name}</h3>
        <div className='hotel-card-subtitle'>{hotel.location}</div>
      </div>
      <div className='hotel-rating'>
        <span className='numeric-rating'>{hotel.rating}</span>
        <span className='label-rating'> Good </span>
        <span className='review-count'>({hotel.reviewCount} reviews)</span>
      </div>
    </div>
  )
}

export default HotelCard
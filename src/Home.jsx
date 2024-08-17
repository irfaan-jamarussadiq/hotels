import { useNavigate } from 'react-router-dom'
import './Home.css'

const recommendedHotels = [
  {
    "name": "Days Inn by Wyndham Newark Wilmington",
    "location": "Newark",
    "img": "wyndham.jpg",
    "rating": "7.0",
    "reviewCount": "1,000"
  },
  {
    "name": "Best Western Plus Newark/Christiana Inn",
    "location": "Bear",
    "img": "best-western.jpg",
    "rating": "6.0",
    "reviewCount": "1,007"
  },
]

function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <form className='location-search-form'>
        <input className='form-input search-input' placeholder='Where To?' type='search' />
        <input className='form-input search-input' type='date' />
        <input className='form-input search-input' placeholder='Travelers' type='number' />
        <button className='search-btn' onClick={() => navigate('/hotel')}>Search</button>
      </form>
      <h2>Recommended stays for you</h2>
      <div className='stays-carousel'>
        {recommendedHotels.map(hotel => <HotelCard key={hotel.name} hotel={hotel} />)}
      </div>
    </div>
  )
}

function HotelCard({ hotel }) {
  return (
    <div className='hotel-card'>
      <div className='hotel-img-container'>
        <img className='hotel-img' src={hotel.img} alt={hotel.name} />
      </div>
      <div className='hotel-details'>
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

export default Home
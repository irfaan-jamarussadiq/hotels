import { useNavigate } from 'react-router-dom'
import recommendedHotels from './data/recommendHotels.json'
import favoriteStays from './data/favoriteStays.json'
import HotelCard from './HotelCard'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <HotelSearch />
      <ValuePropositionBanner />
      <FavoriteStays />
      <RecommendedStays />
    </div>
  )
}

function HotelSearch() {
  const navigate = useNavigate()
  return (
    <form className='location-search-form'>
      <input className='form-input search-input' placeholder='Where To?' type='search' />
      <input className='form-input search-input' type='date' />
      <input className='form-input search-input' placeholder='Travelers' type='number' />
      <button className='search-btn' onClick={() => navigate('/hotel')}>Search</button>
    </form>
  )
}

function ValuePropositionBanner() {
  return (
    <section className='incentives'>
      <div className='incentive-card incentive-prompt'>
        <p>Find and book your perfect stay</p>
      </div>
      <div className='incentive-card'>
        <img className='incentive-icon' src="lock.png" alt="Lock Icon" />
        <p>Unlock travel rewards with One Key</p>
      </div>
      <div className='incentive-card'>
        <img className='incentive-icon' src="save.png" alt="Save Icon" />
        <p>Save more with Member Prices</p>
      </div>
      <div className='incentive-card'>
        <img className='incentive-icon' src="calendar.png" alt="Calendar Icon" />
        <p>Free cancellation options if plans change</p>
      </div>
    </section>
  )
}

function FavoriteStays() {
  return (
    <section className='favorite-stays'>
      <h2>Discover your new favorite stay</h2>
      <div className='favorite-stay-cards'>
        {favoriteStays.map(stay => <FavoriteStayCard key={stay.name} favoriteStay={stay} />)}
      </div>
    </section>
  )
}

function FavoriteStayCard({ favoriteStay }) {
  return (
    <div className='favorite-stay-card'>
      <div className='stay-img-container'>
        <img className='stay-img' src={favoriteStay.img} alt={favoriteStay.name} />
      </div>
      <div className='stay-card-title'>{favoriteStay.name}</div>
    </div>
  )
}

function RecommendedStays() {
  return (
    <section>
      <h2>Recommended stays for you</h2>
      <div className='stays-carousel'>
        {recommendedHotels.map(hotel => <HotelCard key={hotel.name} hotel={hotel} />)}
      </div>
      <div className='more-stays'>
        <a className='more-stays-link' href="/more-recommended-stays">
          See more recommended stays &gt;
        </a>
      </div>
    </section>
  )
}

export default Home
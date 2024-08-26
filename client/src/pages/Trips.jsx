import './Trips.css'

function Trips() {
  return (
    <div className='trips'>
      <h1>Trips</h1>
      <img className='trips-img' src='travel-bags.png' alt='Trips' />
      <p className='sign-in-prompt'>Your next adventure awaits when you sign in!</p>
      <ul className='trip-incentives'>
        <li>Save money with Member Prices on thousands of hotels</li>
        <li>Earn rewards with One Key just by booking your next eligible trip</li>
        <li>Plan and share details with your travel group</li>
      </ul>
      <button className='trip-sign-in-btn'>Sign in or create your account</button>
      <div className='create-account'>
        <div>
          <p className='account-question'>Don't have an account?</p>
          <p className='account-prompt'>Use your itinerary number and email to find a booking</p>
        </div>
        <div className='account-link-container'>
          <a className='account-link' href='account-search'>&gt;</a>
        </div>
      </div>
    </div>
  )
}

export default Trips
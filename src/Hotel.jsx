function Hotel() {
  return (
    <div className='hotel'>
      <div className='img-container'>
        <img className='hotel-img' src='sea_bay_hotel.jpg' alt='Sea Bay Hotel' />
      </div>
      <h1>Sea Bay Hotel</h1>
      <div role='doc-subtitle'>Hotel with restaurant, near Ocean City Beach</div>
      <div className='rating'>
        <span className='quantitative-rating'>8.0</span>
        <span className='qualitative-rating'> Very Good</span>
      </div>
      <a href='/reviews' className='reviews-link'>See all 341 reviews &gt;</a>
      <h2>Highlights</h2>
      <div className='highlights'>
        <img className='icon walking-person' src='walker.png' alt='Hotel Hightlights' />
        <span>Near Seacrets Distilling Company</span>
      </div>
      <ul className='amenities'>
        <li>Pool</li>
        <li>Free Parking</li>
        <li>Laundry Facilities</li>
        <li>Restaurant</li>
        <li>Bar</li>
        <li>24/7 Front Desk</li>
      </ul>
      <a href='/amenities' className='amenities-link'>See all property amenities &gt;</a>
    </div>
  )
}

export default Hotel
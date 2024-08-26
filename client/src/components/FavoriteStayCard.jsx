import './FavoriteStayCard.css'

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

export default FavoriteStayCard
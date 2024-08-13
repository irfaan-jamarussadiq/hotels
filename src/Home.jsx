import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <form>
        <input placeholder='Where To?' type='search' />
        <input placeholder='Date' type='date' />
        <button onClick={() => navigate('/hotel')}>Search</button>
      </form>
    </div>
  )
}

export default Home
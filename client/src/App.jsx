import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Hotel from './components/Hotel'
import Trips from './pages/Trips'
import SignIn from './pages/SignIn'
import HelpCenter from './pages/help/HelpCenter'
import RefundsLink from './pages/help/RefundsLink'
import ReceiptsLink from './pages/help/ReceiptsLink'
import RefundsReferences from './pages/help/RefundsReferences'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotel' element={<Hotel />} />
          <Route path='/trips' element={<Trips />} />
          <Route path='/help' element={<HelpCenter />}>
            <Route path='refunds' element={<RefundsLink />} />
            <Route path='refunds/refunds-references' element={<RefundsReferences />} />
            <Route path='receipts' element={<ReceiptsLink />} />
          </Route>
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

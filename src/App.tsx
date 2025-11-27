import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './component'
import Donation from './pages/Donation'
import CreateAd from './pages/CreateAd'
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/create-ad" element={<CreateAd />} />
      </Routes>
    </Router>
  )
}

export default App

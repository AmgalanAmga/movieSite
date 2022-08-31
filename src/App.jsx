import { Navbar } from './components'
import { Routes, Route } from 'react-router-dom'
import { Login, Movies, Order, Seats, Signup } from './pages'

const App = () => {
  return (
    <div className="w-full h-[200vh] bg-[#5C8C8C]">
      <div className="relative top-0 left-0 h-full max-w-screen-xl mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/seats" element={<Seats />} />
          <Route path="/seats" element={<Seats />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/detail/:id" element={<Order />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

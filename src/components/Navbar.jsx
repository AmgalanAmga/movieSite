import { Link } from 'react-router-dom'
import { images } from '../images/Images'
import { BsFillShareFill, BsBookmark } from 'react-icons/bs'
import { useAuth } from '../context/AuthContext'

export const Navbar = () => {
  const { currentUser, isLoggedIn, setIsLoggedIn } = useAuth()
  console.log(currentUser)
  if (window.localStorage.getItem('userLogged')) {
    setIsLoggedIn(true)
  }
  const DefaultLog = () => {
    return (
      <>
        <Link to={'/login'} className="text-lg">
          Login / Sign in
        </Link>
      </>
    )
  }
  const UserLoggedIn = () => {
    const logoutFunction = (e) => {}
    if (window.localStorage.getItem('userLogged')) {
    }
    return (
      <>
        <span>{currentUser}</span>
        <button onClick={logoutFunction} className="ml-5">
          Logout
        </button>
      </>
    )
  }

  return (
    <>
      <nav className="sticky z-20 flex items-center px-3 py-5 text-white">
        <Link to={'/'}>
          <img src={images.netflix} alt="" className="mr-5 w-36" />
        </Link>
        <ul className="flex flex-1 space-x-4 text-xl">
          <li className="cursor-pointer">TOP CAST</li>
          <li className="cursor-pointer">PHOTOS</li>
          <li className="cursor-pointer">VIDEOS</li>
          <li className="cursor-pointer">SIMILAR MOVIES</li>
        </ul>
        <div className="flex mr-5 space-x-3">
          <BsFillShareFill size={20} className="cursor-pointer" />
          <BsBookmark size={20} className="cursor-pointer" />
        </div>
        {isLoggedIn ? <UserLoggedIn /> : <DefaultLog />}
      </nav>
    </>
  )
}

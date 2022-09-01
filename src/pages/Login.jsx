import { useRef } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
export const Login = () => {
  const { login, setCurrentUser, setIsLoggedIn } = useAuth()
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = await login(
        emailRef.current.value,
        passwordRef.current.value,
      )
      setCurrentUser(user.user.email)
      setIsLoggedIn(true)
      navigate('/')

    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('Буруу код засдаа 💢')
      }
    }
  }
  return (
    <div className="w-[700px] mx-auto h-[500px] backdrop-blur-lg flex items-center justify-center flex-col mt-10 rounded-2xl border-4 z-100">
      <h1 className="mb-3 text-3xl">Нэвтрэх</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-2 space-y-2 border-4 rounded-lg w-[400px] h-[270px]"
      >
        <input
          type="email"
          ref={emailRef}
          placeholder="Имэйл хаягаа оруулна уу"
          className="px-3 py-4 text-xl bg-gray-200 outline-none"
          autoComplete="off"
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Нууц үгээ оруулна уу"
          className="px-3 py-4 text-xl bg-gray-200 outline-none"
          autoComplete="off"
        />
        <button className="p-3 font-semibold text-white bg-sky-500">
          Login
        </button>
        <Link
          to="/signup"
          className="p-3 font-semibold text-center text-white bg-sky-500"
        >
          Sign Up
        </Link>
      </form>
    </div>
  )
}

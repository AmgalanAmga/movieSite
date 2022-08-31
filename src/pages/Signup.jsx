
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
export const Signup = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (passwordRef.current.value !== confirmPasswordRef.current.value)
      return alert('Нууц үг таарахгүй байна')
    try {
      await signUp(emailRef.current.value, passwordRef.current.value)
      alert('Хэрэглэгч бүртгэгдлээ 😃')
      navigate('/login')
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Бүртгэлтэй хэрэглэгч байна за 😡')
      }
    }
  }
  return (
    <div className="w-[700px] mx-auto h-[550px] backdrop-blur-lg flex items-center justify-center flex-col mt-10 rounded-2xl border-4">
      <h1 className="mb-3 text-3xl">Бүртгүүлэх</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-2 space-y-2 border-4 rounded-lg w-[400px] h-[400px]"
      >
        <input
          type="text"
          ref={nameRef}
          placeholder="Нэрээ оруулна уу"
          className="px-3 py-4 text-xl bg-gray-200 outline-none"
          autoComplete="off"
        />
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
        <input
          type="password"
          ref={confirmPasswordRef}
          placeholder="Нууц үгээ баталгаажуулна уу"
          className="px-3 py-4 text-xl bg-gray-200 outline-none"
          autoComplete="off"
        />
        <button className="p-3 font-semibold text-white bg-sky-500">
          Sign Up
        </button>
        <Link
          to="/login"
          className="p-3 font-semibold text-center text-white bg-sky-500"
        >
          Login
        </Link>
      </form>
    </div>
  )
}

import { auth } from '../Firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()
export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const value = {
    login,
    signUp,
    currentUser,
    setCurrentUser,
    isLoggedIn,
    setIsLoggedIn
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

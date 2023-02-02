import {createContext} from 'react'

export const AuthContext = createContext({
    loading: true,
    sms:false,
    setSms: () =>{},
    setLoading: () =>{},
    loginUser:() => {},
    registerUser:() => {},
    logoutUser:() => {},
    verificationCode:() => {},
    setJobs:()=>{},
})
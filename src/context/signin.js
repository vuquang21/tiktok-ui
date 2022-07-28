import { createContext, useState } from "react";

const SigninContext = createContext()

const SigninContextProvider = ({children}) => {
    const [signalSignin, setSignalSignin] = useState(false)
    const handleSignalSignin = () => {
        setSignalSignin(!signalSignin)
    }
    const value = { 
        signalSignin,
        handleSignalSignin
    }
    return (
        <SigninContext.Provider value={value}>
            {children}
        </SigninContext.Provider>
    )
}
export { SigninContext, SigninContextProvider };

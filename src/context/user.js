import { createContext, useState } from "react";

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const handleSetUser = (data) => {
        setUser(data)
        
    }
    const isEmptyDataUser = () => {
        return Object.keys(user).length === 0
    }
    const value = {
        user,
        handleSetUser,
        isEmptyDataUser
    }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
export { UserContext, UserContextProvider };

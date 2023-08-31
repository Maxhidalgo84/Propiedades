import { createContext } from "react"



export const AuthContext = createContext('Auth')

export const AuthProvider = ({children}) => {

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )


}


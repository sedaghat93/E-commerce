import { useContext, useState, createContext, useEffect } from "react";

export const AuthProviderContext = createContext();
export const AuthProviderContextDispatcher = createContext();

const AuthProvider = ({children}) => {
    const [state, setState] = useState(localStorage.getItem("authState") ? JSON.parse(localStorage.getItem("authState")) : false );

    // useEffect(()=>{
    //     const userData = JSON.parse(localStorage.getItem("authState")) || false;
    //     setState(userData);
    // },[]);

    useEffect(()=>{
        const data = JSON.stringify(state);
        localStorage.setItem("authState",data);
    },[state]);

    return ( 
        <AuthProviderContext.Provider value={state}>
            <AuthProviderContextDispatcher.Provider value={setState}>
                {children}
            </AuthProviderContextDispatcher.Provider>
        </AuthProviderContext.Provider>
     );
}
 
export default AuthProvider;

export const useAuth = () => useContext(AuthProviderContext);
export const useAuthAction = () => useContext(AuthProviderContextDispatcher);
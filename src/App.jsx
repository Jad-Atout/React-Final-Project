
import './App.css'
import {RouterProvider} from "react-router-dom";
import router from "./components/router/Router.jsx";
import {createContext, useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
export const Context = createContext()

function App() {
    const [login,setLogin] = useState(!!localStorage.getItem("userToken"))
    const [user_data,set_user_data] = useState({})
    useEffect(() => {
        if (localStorage.getItem("userToken")) {
            const token = localStorage.getItem("userToken")
            console.log(token)
            set_user_data(jwtDecode(token))
        }
    }, []);
 return(

     <>
         <Context.Provider value={{login,setLogin,set_user_data,user_data}}>
         <RouterProvider router={router}></RouterProvider>
         </Context.Provider>

     </>

  )
}

export default App

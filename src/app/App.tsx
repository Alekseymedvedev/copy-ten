import React, {useEffect, useState} from 'react';
import {BrowserRouter, redirect, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {routes} from "./routes/routes";
import '../shared/assets/styles/reset.scss';
import '../shared/assets/styles/libs.scss';
import '../shared/assets/styles/globals.scss';
import {authSlice} from "../store/slice/authSlice";
import {useAppDispatch, useAppSelector} from "../hooks/useRedux";
import Auth from "../pages/auth";


function App() {

    const {auth} = authSlice.actions
    const dispatch = useAppDispatch()
    const [userToken ,setUserToken] = useState<any>(localStorage.getItem('token'))
    // const userToken = localStorage.getItem('token')
    const navigate = useNavigate()
// refresh


    console.log(1111)
    navigate(0)
   useEffect(()=>{
       setTimeout(()=>{
           // setUserToken(localStorage.getItem('token'))

       },3000)
       if (userToken ) {
           dispatch(auth(userToken))
       } else {
           dispatch(auth(userToken))
       }
   },[])

    return (
        <>
            <Routes>
                {
                    userToken ?
                        routes.map(route =>
                            <Route
                                path={route.path}
                                element={route.element}
                                key={route.path}
                            />
                        )
                        :

                        <Route path="*" element=<Auth/>/>
                }
            </Routes>
        </>
    );
}

export default App;

import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import {routes} from "./routes/routes";
import '../shared/assets/styles/reset.scss';
import '../shared/assets/styles/libs.scss';
import '../shared/assets/styles/globals.scss';
import {authSlice} from "../store/slice/authSlice";
import {useAppDispatch, useAppSelector} from "../hooks/useRedux";
import Auth from "../pages/auth";


function App() {
    const {isAuth} = useAppSelector(state => state.authReducer)
    const {auth} = authSlice.actions
    const dispatch = useAppDispatch()
    const userToken = localStorage.getItem('token')

    console.log(userToken)
   useEffect(()=>{
       if (userToken ) {
           dispatch(auth(true))
       } else {
           dispatch(auth(false))
       }
   },[userToken])
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

                        <Route path="/" element=<Auth/>/>
                }
            </Routes>
        </>
    );
}

export default App;

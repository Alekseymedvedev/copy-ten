import Paper from "@mui/material/Paper";
import logo from '../shared/assets/images/authLogo.svg'
import {Button, Stack} from "@mui/material";
import {Link, redirect, useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import React, {FC, useEffect} from "react";
import IconConnected from "../shared/assets/images/icons/iconConnected";
import IconTg from "../shared/assets/images/icons/iconTg";
import {useGetTokenMutation} from "../store/API/authApi";
interface IType{
    isFinish?:boolean
}


const Auth:FC<IType> = ({isFinish}) => {
    const [fetchToken,{data,isLoading,error}]=useGetTokenMutation()
    const location = useLocation()
    const locationHash = location?.search?.split('=').pop()
    const navigate = useNavigate()

    useEffect(()=>{
        fetchToken(locationHash)
    },[])
    useEffect(()=>{
        if(data){
            localStorage.setItem('token', `${data?.accessToken}`)
            setTimeout(()=>{
                navigate('/')
            },1000)

        }
    },[isLoading])

    return (
        <Paper sx={{
            maxWidth:620,
            padding:14,
            position:'fixed',
            top:`50%`,
            left:`50%`,
            transform:`translate(-50%,-50%)`
        }}>
            <Stack alignItems="center" sx={{textAlign:'center'}}>
                <Stack sx={{width:56,height:70,mb:28}}>
                    <img src={logo} alt="logo"/>
                </Stack>
                <Stack className="h2" alignItems="center" spacing={7} sx={{mb:14}}>
                    <span>Добро пожаловать на CopyTen!</span>
                    <span
                        className="white-90">Вход осуществляется с помощью Телеграмм, зарегистрированный в нашем боте:</span>
                    <Stack className="white-90" alignItems="center" direction="row" spacing={2}>
                        <span>Бот:</span>
                        <a className="link" href="https://t.me/+yyCB128FQ1JmYTIy"
                           target="_blank">https://t.me/+yyCB128FQ1JmYTIy</a>
                    </Stack>
                </Stack>
                    {
                        locationHash ?
                            <Button
                                component={Link}
                                to="/"
                                fullWidth
                                variant="contained"
                                color="info"
                                sx={{height:48}}
                            >
                                Завершить регистрацию
                            </Button>
                            :
                            <Button
                                component={Link}
                                to="https://t.me/copyten_auth_bot"
                                fullWidth
                                variant="contained"
                                color="info"
                                sx={{height:48}}
                                startIcon={<IconTg/>}
                            >
                                Войти в систему
                            </Button>
                    }


            </Stack>
        </Paper>
    );
};

export default Auth;
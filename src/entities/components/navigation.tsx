import cls from '../styles/menuList.module.scss'
import React from "react";
import IconAccount from "../../shared/assets/images/icons/iconAccount";
import {NavLink, useLocation} from "react-router-dom";
import IconCopyTrading from "../../shared/assets/images/icons/iconCopyTrading";
import IconPartner from "../../shared/assets/images/icons/iconPartner";
import IconSettings from "../../shared/assets/images/icons/iconSettings";
import IconSupport from "../../shared/assets/images/icons/iconSupport";
import IconProducts from "../../shared/assets/images/icons/iconProducts";
import {useMediaQuery} from "@mui/material";


export const menuData = [
    {path: "/", name: 'Мои счета', navigateClass: 'navigationGreen', icon: IconAccount},
    {path: "/copy-trading", name: 'Копитрейдинг', navigateClass: 'navigationPurple', icon: IconCopyTrading},
    {path: "/partner", name: 'Партнерская программа', navigateClass: 'navigationRed', icon: IconPartner},
    {path: "/settings", name: 'Настройки', navigateClass: 'navigationWhite', icon: IconSettings},
    {path: "/support", name: 'Тех. поддержка', navigateClass: 'supportMenuItem', icon: IconSupport},
]

const Navigation = () => {
    const location = useLocation()
    const mediaQuery = useMediaQuery('(max-width:900px)');
    return (
        <ul className={cls.list}>
            <li className={cls.item + ' navigationYellow'}>
                <NavLink
                    className={({isActive}) =>
                        isActive ? cls.active : undefined
                    }
                    to="/tariff">
                    Продукты
                    <IconProducts active={true}/>
                </NavLink>
            </li>
            <li className="h1">
                Библиотека
            </li>
            {
                menuData.length && menuData.map(item =>
                    <li key={item?.path} className={
                        location.pathname === item.path ?
                            cls.item + ' ' + item.navigateClass
                            : cls.item
                    }>
                        <NavLink
                            className={({isActive}) =>
                                isActive ? cls.active : undefined
                            }
                            to={item.path}>
                            {item.name}
                            <item.icon active={location.pathname === item.path}/>
                        </NavLink>
                    </li>
                )
            }
        </ul>
    );
};

export default Navigation;
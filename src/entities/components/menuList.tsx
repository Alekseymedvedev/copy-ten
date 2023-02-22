import cls from '../styles/menuList.module.scss'
import React from "react";
import IconAccount from "../../shared/assets/images/icons/iconAccount";
import MenuItem from "../../shared/components/menuItem";
import {NavLink, useLocation} from "react-router-dom";
import IconCopyTrading from "../../shared/assets/images/icons/iconCopyTrading";
import IconPartner from "../../shared/assets/images/icons/iconPartner";
import IconSettings from "../../shared/assets/images/icons/iconSettings";
import IconSupport from "../../shared/assets/images/icons/iconSupport";


export const menuData = [
    {path: "/", name: 'Мои счета', navigateClass: 'navigationGreen', icon: IconAccount},
    {path: "/copy-trading", name: 'Копитрейдинг', navigateClass: 'navigationPurple', icon: IconCopyTrading},
    {path: "/partner", name: 'Партнерская программа', navigateClass: 'navigationRed', icon: IconPartner},
    {path: "/settings", name: 'Настройки', navigateClass: 'navigationWhite', icon: IconSettings},
    {path: "/support", name: 'Тех. поддержка', navigateClass: '', icon: IconSupport},
]

const MenuList = () => {
    const location = useLocation()
    return (

        <ul className={cls.list}>
            {
                menuData.length && menuData.map(item =>

                    // <MenuItem key={item?.path} path={item?.path} name={item?.name} navigateClass={item.navigateClass}>
                    //     <item.icon/>
                    // </MenuItem>
                    <li key={item?.path} className={
                        location.pathname ===item.path ?
                        cls.item + ' ' + item.navigateClass
                            : cls.item
                    }>

                        <NavLink
                            className={({isActive}) =>
                                isActive ? cls.active : undefined
                            }
                            to={item.path}>
                            {item.name}
                            <item.icon active={location.pathname ===item.path}/>
                        </NavLink>
                    </li>
                )
            }

        </ul>
    );
};

export default MenuList;
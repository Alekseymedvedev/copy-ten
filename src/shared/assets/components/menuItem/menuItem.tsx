import React, {FC, useEffect} from 'react';
import cls from './menuItem.module.scss'
import {NavLink} from "react-router-dom";
import IconAccount from "../../images/icons/iconAccount";


interface T {
    path: string;
    name: string;
    icon?: any;
    navigateClass?: string;
    children?: any;
}

const MenuItem: FC<T> = ({path, name, icon, navigateClass,children}) => {
    const a =''
    useEffect(()=>{

    },[a])
    return (
        <li className={cls.item + ' ' + navigateClass}>
            <NavLink
                className={({isActive}) =>
                    isActive ? cls.active : undefined
                }
                to={path}>{name}
                {children}
            </NavLink>
        </li>
    );
};

export default MenuItem;
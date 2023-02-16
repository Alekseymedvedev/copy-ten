// @ts-ignore
import cls from './menuList.module.scss'
import {NavLink} from "react-router-dom";
import React, {useEffect} from "react";
import {routes} from "../../app/routes/routes";
import IconAccount from "../../shared/assets/images/icons/iconAccount";
import MenuItem from "../../shared/assets/components/menuItem/menuItem";



const MenuList = () => {
    useEffect(()=>{

    },[routes])
    return (
        <ul className={cls.list}>
            {
                routes.length && routes.map(item =>
                    // <li className={cls.item} key={item?.path}>
                    //     <NavLink
                    //         className={ ({ isActive }) =>
                    //             isActive ? cls.active : undefined
                    //         }
                    //         to={item?.path}>{item?.name}
                    //     <IconAccount/>
                    //     </NavLink>
                    // </li>
                        <MenuItem key={item?.name} path={item?.path} name={item?.name} navigateClass={item.navigateClass}>
                            <IconAccount icon={item?.icon}/>
                        </MenuItem>

                )
            }

        </ul>
    );
};

export default MenuList;